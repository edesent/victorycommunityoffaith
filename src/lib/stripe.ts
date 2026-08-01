import Stripe from "stripe";

/**
 * The Victory Store checkout only turns on once STRIPE_SECRET_KEY is set in
 * Vercel. Until then every "Add to cart" button shows a friendly
 * "coming soon" instead of erroring — see src/components/StoreGrid.tsx.
 */
export function stripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

let client: Stripe | null = null;

/** Lazily create the Stripe client. Throws if the key is missing. */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  if (!client) client = new Stripe(key);
  return client;
}
