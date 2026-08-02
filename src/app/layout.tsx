import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Lato } from "next/font/google";
import { SITE } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const SITE_URL = SITE.url;
const SITE_NAME = SITE.name;
const SITE_TAGLINE = SITE.tagline;
const SITE_DESCRIPTION = SITE.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Victory Community of Faith",
    "church in Wichita KS",
    "Wichita church",
    "Liberationist church",
    "Baptist church Wichita",
    "church near me Wichita",
    "Sunday worship Wichita",
    "Wednesday Bible study",
    "urban ministry Wichita",
    "L.E.A.D. Institute",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — People Empowered to Win`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "religion",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: SITE.backgroundColor },
    { media: "(prefers-color-scheme: dark)", color: SITE.themeColorDark },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}

        {/*
          Live chat bubble (WBC Chat). Messages land in the church's Slack —
          channel C0BMBV8NZAS. The avatar is Dr. Pennington's photo, so visitors
          see they're writing to a person. Any button on the site can open it
          with window.WBCChat.open().
        */}
        <Script
          src="https://slackwebsitechat.vercel.app/widget/wbc-chat.js"
          data-api="https://slackwebsitechat.vercel.app"
          data-key="wbc_714b0c9b3af11bf2fa520d1aa564c1a1593915aafbcc361a"
          data-agent-icon-url="/photos/pastor.jpg"
          data-accent-color="#661562"
          data-greeting="Hi there! Thanks for visiting Victory Community of Faith. Is there anything I can help you with?"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
