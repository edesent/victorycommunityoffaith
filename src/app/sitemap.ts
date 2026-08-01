import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

const SITE_URL = SITE.url;

// One entry per public page. /store/thank-you is intentionally absent — it's
// noindex and only reachable after checkout.
const PAGES: [
  path: string,
  changeFrequency: "weekly" | "monthly" | "yearly",
  priority: number,
][] = [
  ["", "weekly", 1.0],
  ["/about", "monthly", 0.9],
  ["/pastor", "monthly", 0.8],
  ["/messages", "weekly", 0.9],
  ["/ministries", "monthly", 0.8],
  ["/lead-institute", "monthly", 0.8],
  ["/store", "monthly", 0.8],
  ["/weddings-and-care", "monthly", 0.8],
  ["/give", "monthly", 0.7],
  ["/contact", "monthly", 0.7],
  ["/statement-of-faith", "yearly", 0.7],
  ["/plan-of-salvation", "yearly", 0.8],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
