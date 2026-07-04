// Central church configuration.
//
// The church's data lives in ./site.data.ts (the one file the site builder
// rewrites). This module re-exports it as SITE and adds derived helpers used by
// the components, layout metadata, sitemap, robots, and manifest.

import { SITE_DATA } from "./site.data";

export const SITE = SITE_DATA;

// ---- Derived helpers (computed once from SITE; don't edit by hand) ----

const words = SITE.name.trim().split(/\s+/);

/** Two-letter monogram, e.g. "Truth Baptist Church" -> "TB". */
export const brandInitials = words
  .map((w) => w[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

/** First word of the name, for the stacked brand lockup. */
export const brandTop = words[0];
/** Remaining words of the name, for the stacked brand lockup. */
export const brandBottom = words.slice(1).join(" ") || words[0];

/** Pastor's last name, e.g. "Smith". */
export const pastorLastName = SITE.pastorName.trim().split(/\s+/).slice(-1)[0];
/** Full address line "Pastor John Smith". */
export const pastorFullName = `${SITE.pastorTitle} ${SITE.pastorName}`.trim();
/** Shorter "Pastor Smith". */
export const pastorShortName = `${SITE.pastorTitle} ${pastorLastName}`.trim();

/** Phone in tel: form, e.g. "(555) 555-0100" -> "+15555550100". */
export const phoneTel = (() => {
  const digits = SITE.phone.replace(/\D/g, "");
  if (!digits) return "";
  return digits.length === 10 ? `+1${digits}` : `+${digits}`;
})();

/** Single-line address, e.g. "123 Church Street, Anytown, ST 00000". */
export const addressOneLine = [
  SITE.address.street,
  `${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`.trim(),
]
  .filter(Boolean)
  .join(", ");

/** Google Maps directions link for the church address. */
export const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(addressOneLine)}`;

export const logoUrl = `${SITE.url.replace(/\/$/, "")}/logo.png`;
export const ogImageUrl = "/og-image.jpg";
