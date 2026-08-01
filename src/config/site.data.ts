// Church data — the ONLY file the self-serve site builder rewrites.
//
// Every component, the layout metadata, sitemap, robots, and manifest read this
// (via site.ts, which adds derived helpers). Edit these values to customize the
// site; leave the helpers in site.ts alone.

export const SITE_DATA = {
  name: "Victory Community of Faith",
  // Short name for the PWA manifest / home-screen icon.
  shortName: "Victory",
  tagline: "People Empowered to Win",
  description:
    "Victory Community of Faith is a progressive, Liberationist church in Wichita, Kansas. Come worship with us — Sundays at 11 AM and Wednesday Bible study at 6 PM. Empowering and inspiring the people of our community to experience victory through the message and ministry of Jesus Christ.",
  shortDescription:
    "A Liberationist church in Wichita, Kansas — People Empowered to Win.",
  url: "https://www.victorychurchwichita.com",

  // Leadership — pastorName is just the name; the title is separate so we can
  // render both "Pastor John Smith" and "Pastor Smith".
  pastorName: "Jermaine E. Pennington",
  pastorTitle: "Dr.",

  // Contact
  phone: "(316) 305-0337",
  email: "jpenny316@gmail.com",
  address: {
    street: "1016 E Pawnee St",
    city: "Wichita",
    state: "KS",
    zip: "67211",
  },

  // Social (leave blank to hide the link)
  youtubeUrl: "https://www.youtube.com/@victorycommunityfaith3541",
  facebookUrl: "https://www.facebook.com/victoryinwichita",
  // YouTube channel ID (starts with "UC...") — powers the auto-updating sermons
  // library on /messages. Find it at youtube.com/account_advanced. Leave blank
  // to fall back to a "watch on YouTube" link.
  youtubeChannelId: "UC796E9ZC6URGVJzNpFHfRIQ",

  // Theme — see the site builder's theme presets. accentColor optionally overrides
  // the primary accent. themeColorDark/backgroundColor feed the browser chrome.
  themeKey: "victory-purple",
  accentColor: "#661562",
  themeColorDark: "#3b0c39",
  backgroundColor: "#fdfbf7",
} as const;
