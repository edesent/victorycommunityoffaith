"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/config/content";

// Catalog + cart for the Victory Store. Prices shown here are for display only
// — the checkout route re-reads every price from src/config/content.ts, so the
// browser can't change what anything costs.

interface CartLine {
  id: string;
  quantity: number;
  option?: string;
}

interface Props {
  products: Product[];
  /** False until STRIPE_SECRET_KEY is set in Vercel; buttons explain instead of failing. */
  checkoutEnabled: boolean;
}

const money = (cents: number) =>
  (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });

/** Books without cover art get a typographic cover rather than a stock photo. */
function TypeCover({ product }: { product: Product }) {
  return (
    <div className="w-full aspect-[2/3] bg-gradient-to-br from-brown via-brown-light to-brown-deep flex flex-col items-center justify-center text-center px-7 py-10">
      <div className="w-10 h-[2px] bg-gold mb-6 rounded" />
      <h3 className="font-serif text-2xl font-bold text-white leading-tight">
        {product.title}
      </h3>
      {product.author && (
        <p className="mt-6 text-[10px] font-bold tracking-[0.22em] uppercase text-gold-light/80">
          {product.author}
        </p>
      )}
      <div className="w-10 h-[2px] bg-gold mt-6 rounded" />
    </div>
  );
}

export default function StoreGrid({ products, checkoutEnabled }: Props) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [options, setOptions] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const books = products.filter((p) => p.kind === "book");
  const merch = products.filter((p) => p.kind === "merch");

  const total = useMemo(
    () =>
      cart.reduce((sum, line) => {
        const product = products.find((p) => p.id === line.id);
        return sum + (product ? product.priceCents * line.quantity : 0);
      }, 0),
    [cart, products]
  );

  const itemCount = cart.reduce((n, line) => n + line.quantity, 0);

  function addToCart(product: Product) {
    setError("");
    const option = product.options ? options[product.id] : undefined;

    // Size-bearing items need a size chosen first.
    if (product.options && !option) {
      setError(`Please choose a ${product.options.label.toLowerCase()} for ${product.title}.`);
      return;
    }

    setCart((current) => {
      const match = current.find((l) => l.id === product.id && l.option === option);
      if (match) {
        return current.map((l) =>
          l === match ? { ...l, quantity: Math.min(l.quantity + 1, 20) } : l
        );
      }
      return [...current, { id: product.id, quantity: 1, option }];
    });
  }

  function changeQuantity(index: number, delta: number) {
    setCart((current) =>
      current
        .map((line, i) =>
          i === index
            ? { ...line, quantity: Math.min(Math.max(line.quantity + delta, 0), 20) }
            : line
        )
        .filter((line) => line.quantity > 0)
    );
  }

  async function checkout() {
    setError("");
    setBusy(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.url) {
        setError(result.error || "Could not start checkout. Please try again.");
        setBusy(false);
        return;
      }
      window.location.href = result.url;
    } catch {
      setError("Could not start checkout. Please try again.");
      setBusy(false);
    }
  }

  const card = (product: Product) => (
    <article
      key={product.id}
      className={`h-full flex flex-col bg-cream rounded-2xl border border-cream-dark overflow-hidden hover:shadow-lg transition-shadow ${
        product.featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div className={product.featured ? "lg:w-2/5 flex-shrink-0 bg-brown-deep" : ""}>
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.title} by ${product.author ?? "Victory Community of Faith"}`}
            className={`w-full object-cover ${
              product.featured ? "h-full min-h-[340px]" : "aspect-[2/3]"
            }`}
          />
        ) : product.kind === "book" ? (
          <TypeCover product={product} />
        ) : (
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-cream-dark to-cream flex items-center justify-center">
            <img src="/logo.png" alt="" className="w-24 opacity-40" />
          </div>
        )}
      </div>

      <div className="p-7 flex flex-col flex-grow">
        {product.featured && (
          <span className="inline-block self-start text-[10px] font-bold tracking-[0.2em] uppercase text-brown-deep bg-gold px-3 py-1 rounded-full mb-4">
            New Release
          </span>
        )}
        <h3 className="font-serif text-xl font-bold text-text-dark leading-snug">
          {product.title}
        </h3>
        {product.subtitle && (
          <p className="font-serif italic text-text-light mt-2 leading-snug">
            {product.subtitle}
          </p>
        )}
        {product.author && (
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mt-3">
            {product.author}
          </p>
        )}
        <p className="text-text-body leading-relaxed mt-4 flex-grow">{product.body}</p>

        {product.options && (
          <label className="block mt-5">
            <span className="block text-xs font-bold tracking-[0.15em] uppercase text-text-light mb-2">
              {product.options.label}
            </span>
            <select
              value={options[product.id] ?? ""}
              onChange={(e) =>
                setOptions((current) => ({ ...current, [product.id]: e.target.value }))
              }
              className="w-full px-4 py-2.5 rounded-lg bg-warm-white border border-cream-dark text-text-dark focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
            >
              <option value="" disabled>
                Choose a {product.options.label.toLowerCase()}…
              </option>
              {product.options.values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        )}

        <div className="flex items-center justify-between gap-4 mt-6 pt-6 border-t border-cream-dark">
          <span className="font-serif text-2xl font-bold text-text-dark">
            {money(product.priceCents)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full hover:bg-brown hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <>
      {/* Books */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Books by <em className="text-brown-light italic">Dr. Pennington</em>
        </h2>
        <p className="text-text-body max-w-2xl mb-10">
          Four books written from this pulpit, for people who are ready to think,
          live, and lead differently.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{books.map(card)}</div>
      </div>

      {/* Merch */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Victory <em className="text-brown-light italic">Merchandise</em>
        </h2>
        <p className="text-text-body max-w-2xl mb-10">
          Wear the crest. Carry the word. Every purchase supports the ministry of
          Victory Community of Faith.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{merch.map(card)}</div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <p className="text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {error}
          </p>
        </div>
      )}

      {/* Cart */}
      {cart.length > 0 && (
        <div className="sticky bottom-0 z-40 mt-16">
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <div className="rounded-2xl bg-brown-deep shadow-2xl ring-1 ring-white/10 p-6 md:p-7">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="flex-grow">
                  <h3 className="font-serif text-lg font-semibold text-white mb-4">
                    Your Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
                  </h3>
                  <ul className="space-y-2.5 max-h-44 overflow-y-auto pr-2">
                    {cart.map((line, index) => {
                      const product = products.find((p) => p.id === line.id);
                      if (!product) return null;
                      return (
                        <li
                          key={`${line.id}-${line.option ?? ""}`}
                          className="flex items-center gap-4 text-sm text-white/80"
                        >
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => changeQuantity(index, -1)}
                              aria-label={`Remove one ${product.title}`}
                              className="w-7 h-7 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                              −
                            </button>
                            <span className="w-6 text-center font-semibold text-white">
                              {line.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => changeQuantity(index, 1)}
                              aria-label={`Add one ${product.title}`}
                              className="w-7 h-7 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <span className="flex-grow">
                            {product.title}
                            {line.option && (
                              <span className="text-white/50"> · {line.option}</span>
                            )}
                          </span>
                          <span className="font-semibold text-white whitespace-nowrap">
                            {money(product.priceCents * line.quantity)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="lg:text-right flex-shrink-0">
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-light/70 mb-1">
                    Subtotal
                  </p>
                  <p className="font-serif text-3xl font-bold text-white mb-4">
                    {money(total)}
                  </p>
                  {checkoutEnabled ? (
                    <button
                      type="button"
                      onClick={checkout}
                      disabled={busy}
                      className="w-full lg:w-auto bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-10 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-60 disabled:translate-y-0"
                    >
                      {busy ? "Starting checkout…" : "Checkout Securely"}
                    </button>
                  ) : (
                    <div className="lg:max-w-xs">
                      <p className="text-sm text-white/70 leading-relaxed mb-3">
                        Online checkout is being set up. To order today, call the
                        church or pick these up on Sunday.
                      </p>
                      <a
                        href="/contact"
                        className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-8 py-3 rounded-full hover:bg-gold-light transition-all"
                      >
                        Contact the Church
                      </a>
                    </div>
                  )}
                  <p className="text-[11px] text-white/40 mt-3">
                    Shipping calculated at checkout · Pickup available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
