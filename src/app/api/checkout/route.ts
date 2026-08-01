import { NextResponse } from "next/server";
import { getStripe, stripeConfigured } from "@/lib/stripe";
import { PRODUCTS, SHIPPING_FLAT_CENTS } from "@/config/content";
import { SITE } from "@/config/site";

export const runtime = "nodejs";

/**
 * Creates a Stripe Checkout Session for the Victory Store cart.
 *
 * Prices are always read from PRODUCTS on the server — the browser only sends
 * product ids, quantities, and the chosen option (e.g. shirt size), so a
 * tampered request can't change what anything costs.
 */
export async function POST(request: Request) {
  if (!stripeConfigured()) {
    return NextResponse.json(
      { ok: false, error: "The store isn't open for online orders yet." },
      { status: 503 }
    );
  }

  let body: { items?: { id?: string; quantity?: number; option?: string }[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const origin = request.headers.get("origin") || SITE.url;

  const lineItems = (body.items ?? [])
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return null;

      const quantity = Math.min(Math.max(Math.floor(Number(item.quantity) || 1), 1), 20);

      // Only accept an option the product actually offers.
      const option =
        product.options && item.option && product.options.values.includes(item.option)
          ? `${product.options.label}: ${item.option}`
          : undefined;

      const description = [product.subtitle, option].filter(Boolean).join(" · ");

      return {
        quantity,
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 20 },
        price_data: {
          currency: "usd",
          unit_amount: product.priceCents,
          product_data: {
            name: option ? `${product.title} (${item.option})` : product.title,
            ...(description ? { description } : {}),
            ...(product.image
              ? { images: [new URL(product.image, SITE.url).toString()] }
              : {}),
          },
        },
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (lineItems.length === 0) {
    return NextResponse.json({ ok: false, error: "Your cart is empty." }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["US"] },
      phone_number_collection: { enabled: true },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Standard shipping",
            fixed_amount: { amount: SHIPPING_FLAT_CENTS, currency: "usd" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 10 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Pick up at church (no shipping)",
            fixed_amount: { amount: 0, currency: "usd" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],
      success_url: `${origin}/store/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/store`,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    console.error("Checkout session error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
