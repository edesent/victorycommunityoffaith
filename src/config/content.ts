// Page content for the expanded site (About, Ministries, Store, L.E.A.D.,
// Weddings & Care, Contact, Give).
//
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  PASTOR REVIEW LIST — everything marked `review: true` below is DRAFTED
// copy, written to make the pages complete and presentable. It is plausible but
// NOT confirmed by the church. Dr. Pennington should confirm or correct each
// one before this is treated as final. Nothing here invents a person's name:
// where we don't know who leads something, the slot is simply left empty and
// the page hides it.
//
// Confirmed-real (do not change without asking): service times, the 2026 theme,
// the six core values, the Greater Glory Campaign, Cash App handle, the four
// book titles, "The Divine Mindshift" subtitle and cover, the L.E.A.D. acronym
// and its four focus areas, address/phone/email/socials.
// ─────────────────────────────────────────────────────────────────────────────

export const REVIEW_ITEMS = [
  "Office hours",
  "Book prices and whether the church ships them itself",
  "Merchandise line-up, sizes, and prices",
  "L.E.A.D. course names, lengths, tuition, and start dates",
  "Ministry descriptions and who leads each one",
  "Facility rental rates and what's included",
  "Counseling and officiant fees, and Dr. Pennington's availability",
  "Whether there is a podcast feed to link",
  "Text-to-give: Givebutter can issue a keyword (text it to 53-555) — claim one in the dashboard and we'll add it to /give",
];

// ── Office ───────────────────────────────────────────────────────────────────
/** review: true — drafted, needs confirming. */
export const OFFICE_HOURS = [
  { days: "Tuesday – Thursday", hours: "10:00 AM – 4:00 PM" },
  { days: "Friday", hours: "By appointment" },
  { days: "Sunday", hours: "9:30 AM – 1:30 PM" },
];

// ── Leadership ───────────────────────────────────────────────────────────────
// Only entries with a `name` render. Add teammates here as their names and
// photos come in; the "more of our team" card disappears once the list grows.
export const LEADERSHIP: {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}[] = [
  {
    name: "Dr. Jermaine E. Pennington",
    role: "Senior Pastor",
    photo: "/photos/pastor.jpg",
    bio: "Founding pastor of Victory Community of Faith, author of four books, and director of the L.E.A.D. Institute. He preaches a gospel that sets captives free — from sin, from shame, and from the chains of debt and poverty that hold families back.",
  },
  // Add as confirmed, e.g.:
  // { name: "", role: "First Lady", photo: "/photos/pastor-wife.jpg", bio: "" },
  // { name: "", role: "Minister of Music" },
  // { name: "", role: "Youth Director" },
  // { name: "", role: "Church Administrator" },
];

// ── Our story / mission (confirmed content) ──────────────────────────────────
export const MISSION =
  "Empowering and inspiring the people of our community to experience victory through the message and ministry of Jesus Christ.";

export const CORE_VALUES = [
  {
    name: "Ministry",
    body: "We exist to serve — meeting people at their point of need with the compassion of Christ.",
  },
  {
    name: "Stewardship",
    body: "Everything we have belongs to God. We manage our time, talent, and treasure as people accountable to Him.",
  },
  {
    name: "Evangelism",
    body: "The good news is too good to keep. We carry it into our neighborhoods, our workplaces, and our city.",
  },
  {
    name: "Fellowship",
    body: "No one should walk alone. We build a family where people are known, loved, and held up.",
  },
  {
    name: "Discipleship",
    body: "We don't just make converts — we grow followers who look more like Jesus every year.",
  },
  {
    name: "Worship",
    body: "We give God our whole heart in praise, in giving, and in the way we live Monday through Saturday.",
  },
];

export const YEAR_THEME = {
  year: "2026",
  title: "The Year of Shifting",
  arc: "Renew › Reposition › Revitalization",
  verse:
    "And be not conformed to this world: but be ye transformed by the renewing of your mind.",
  reference: "Romans 12:2",
};

// ── Calendar of events ───────────────────────────────────────────────────────
// Straight from the church's monthly "Calendar of Events" flyer. Replace the
// whole list (and MONTH_LABEL) each month when the new flyer comes out.
export const MONTH_LABEL = "August";

export const EVENTS = [
  {
    month: "Aug",
    day: "02",
    title: "Holy Communion",
    time: "Sunday • 11 AM",
    body: "We gather at the Lord's table together during Worship Celebration.",
  },
  {
    month: "Aug",
    day: "09",
    title: "Back to School Consecration",
    time: "Sunday • 11 AM",
    body: "We lay hands on our students, teachers, and school staff and send them into the new year covered in prayer.",
  },
  {
    month: "Aug",
    day: "16",
    title: "Youth Sunday",
    time: "Sunday • 11 AM",
    body: "Our young people lead the house — worship, word, and all. Come see what God is doing in the next generation.",
  },
  {
    month: "Aug",
    day: "23",
    title: "Greater Glory Give Sunday",
    time: "Sunday • 11 AM",
    body: "Bring your extra change. Every coin goes toward breaking the debt off God's house.",
  },
  {
    month: "Aug",
    day: "30",
    title: "Tribe Rally / Theater Sunday",
    time: "Sunday • 11 AM",
    body: "Our tribes rally together for a Sunday of celebration and drama ministry.",
  },
];

// ── Ministries / Get involved ────────────────────────────────────────────────
/** review: true — descriptions drafted; leader names intentionally omitted. */
export const MINISTRIES = [
  {
    slug: "kids",
    name: "Victory Kids",
    audience: "Nursery – 5th grade",
    photo: "/photos/church-family.jpg",
    body: "Sunday morning children's church where kids hear the same gospel their parents do, in language built for them. Safe, staffed by screened volunteers, and loud in all the right ways.",
    meets: "Sundays during 11 AM worship",
  },
  {
    slug: "youth",
    name: "Victory Youth",
    audience: "6th – 12th grade",
    photo: "/photos/youth-choir.jpg",
    body: "Teens are not the church of tomorrow — they're the church right now. Our youth gather for real conversation about identity, purpose, pressure, and faith that holds up at school on Monday.",
    meets: "Wednesdays at 6 PM during WOW",
  },
  {
    slug: "groups",
    name: "Life Groups",
    audience: "Adults",
    photo: "/photos/fellowship.jpg",
    body: "Small circles that meet through the week in homes across Wichita. This is where the sermon becomes a conversation and where you get the phone numbers you'll actually call when life gets hard.",
    meets: "Various days — ask for a group near you",
  },
  {
    slug: "worship",
    name: "Music & Worship",
    audience: "Singers and musicians",
    photo: "/photos/praise-team.jpg",
    body: "Our praise team and choir lead the house into the presence of God every Sunday. If you sing, play, run sound, or work a camera, there is a place for you here.",
    meets: "Rehearsals midweek",
  },
  {
    slug: "outreach",
    name: "Community Outreach",
    audience: "Everyone",
    photo: "/photos/celebration.jpg",
    body: "Feeding, clothing, and standing with our South Wichita neighbors. Liberation isn't only preached — it shows up with groceries, with job leads, and with people who keep showing up.",
    meets: "Monthly service days",
  },
  {
    slug: "intercessory",
    name: "Prayer & Intercession",
    audience: "Everyone",
    photo: "/photos/altar-prayer.jpg",
    body: "A team that carries the burdens of this church before God. Requests come in through this website and go straight to the altar.",
    meets: "Sundays before service",
  },
];

/** review: true — the volunteer roles offered on the sign-up form. */
export const VOLUNTEER_ROLES = [
  "Victory Kids (children's church)",
  "Victory Youth",
  "Greeter / Hospitality",
  "Praise team or choir",
  "Sound, livestream, or camera",
  "Community outreach",
  "Prayer team",
  "Wherever I'm needed",
];

// ── L.E.A.D. Institute ───────────────────────────────────────────────────────
/** review: true — course names, lengths, tuition, and formats are all drafted. */
export const COURSES = [
  {
    code: "LEAD 101",
    name: "Foundations of Leadership",
    length: "8 weeks",
    format: "In person & online",
    tuition: "$149",
    body: "The core course. Character before competence, vision before strategy — the groundwork every other course in the institute builds on.",
  },
  {
    code: "LEAD 210",
    name: "Liberation Theology & the Urban Church",
    length: "6 weeks",
    format: "In person",
    tuition: "$129",
    body: "Jesus came to preach deliverance to the captives. This course traces that thread through Scripture and asks what it demands of a church in a city like ours.",
  },
  {
    code: "LEAD 220",
    name: "Spiritual Formation for Leaders",
    length: "6 weeks",
    format: "Online academy",
    tuition: "$129",
    body: "You cannot lead others past where you have walked yourself. A course on prayer, rest, repentance, and the inner life that sustains public ministry.",
  },
  {
    code: "LEAD 240",
    name: "Discovering Your Purpose",
    length: "4 weeks",
    format: "In person & online",
    tuition: "$99",
    body: "Built on Dr. Pennington's Pathways to Purpose. For anyone who senses God has placed something in them and wants a path to walk it out.",
  },
  {
    code: "LEAD 300",
    name: "Ministry Preparation Track",
    length: "2 semesters",
    format: "In person",
    tuition: "By application",
    body: "For those pursuing licensing, ordination, or church planting. Preaching, pastoral care, administration, and supervised ministry practice.",
  },
];

// ── Victory Store ────────────────────────────────────────────────────────────
// Prices are in cents. `review: true` on every price and on all merch.
// Book titles and the Divine Mindshift subtitle/cover are confirmed real.
export interface Product {
  id: string;
  kind: "book" | "merch";
  title: string;
  subtitle?: string;
  author?: string;
  priceCents: number;
  image?: string;
  body: string;
  /** Shown as an options dropdown at checkout (e.g. shirt sizes). */
  options?: { label: string; values: string[] };
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "divine-mindshift",
    kind: "book",
    title: "The Divine Mindshift",
    subtitle:
      "Harnessing the Power of Faith-Filled Thoughts to Transform Your Mental Health",
    author: "Jermaine E. Pennington",
    priceCents: 1999,
    image: "/photos/book-divine-mindshift.jpg",
    body: "Dr. Pennington's newest release, and the book our Wednesday Bible study is walking through together. A pastor's honest look at anxiety, emotional regulation, and what it means to let God renew the way you think.",
    featured: true,
  },
  {
    id: "chain-breaker",
    kind: "book",
    title: "The Chain Breaker",
    author: "Jermaine E. Pennington",
    priceCents: 1699,
    body: "On the chains that hold people back — addiction, debt, generational patterns, shame — and the Christ who still breaks them.",
  },
  {
    id: "pathways-to-purpose",
    kind: "book",
    title: "Pathways to Purpose",
    author: "Jermaine E. Pennington",
    priceCents: 1699,
    body: "A practical guide for anyone who knows God put something in them but hasn't yet found the road to walk it out.",
  },
  {
    id: "priest-in-normal-clothes",
    kind: "book",
    title: "Priest in Normal Clothes",
    author: "Jermaine E. Pennington",
    priceCents: 1699,
    body: "Ministry outside the pulpit — on being the presence of God in an ordinary week, in ordinary clothes, among ordinary people.",
  },
  {
    id: "tee-empowered",
    kind: "merch",
    title: "“People Empowered to Win” Tee",
    priceCents: 2500,
    body: "Soft cotton tee in black with the Victory crest and our motto across the back.",
    options: { label: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
  },
  {
    id: "hoodie-victory",
    kind: "merch",
    title: "Victory Crest Hoodie",
    priceCents: 4500,
    body: "Heavyweight purple hoodie with the gold crown-and-cross crest on the chest.",
    options: { label: "Size", values: ["S", "M", "L", "XL", "2XL", "3XL"] },
  },
  {
    id: "mug-greater-glory",
    kind: "merch",
    title: "Greater Glory Mug",
    priceCents: 1500,
    body: "“The glory of this latter house shall be greater than of the former.” — Haggai 2:9. 15 oz ceramic.",
  },
  {
    id: "tote-victory",
    kind: "merch",
    title: "Victory Tote Bag",
    priceCents: 1800,
    body: "Canvas tote big enough for your Bible, your notebook, and a covered dish.",
  },
];

/** review: true — flat shipping estimate used at checkout. */
export const SHIPPING_FLAT_CENTS = 599;

// ── Weddings, facilities & care ──────────────────────────────────────────────
/** review: true — all rates and inclusions are drafted. */
export const VENUE_SPACES = [
  {
    name: "The Sanctuary",
    capacity: "Seats up to 200",
    rate: "$650 / event",
    body: "Our main worship space, with sound system, platform, piano, and livestream capability. Ideal for weddings and celebrations of life.",
  },
  {
    name: "Fellowship Hall",
    capacity: "Seats up to 80",
    rate: "$350 / event",
    body: "Open room with tables and chairs and kitchen access — receptions, repasts, showers, banquets, and community meetings.",
  },
  {
    name: "Sanctuary + Hall Package",
    capacity: "Ceremony and reception",
    rate: "$900 / event",
    body: "Both spaces for the same day, with setup and cleanup time included. Our most-requested wedding option.",
  },
];

/** review: true — fees and formats drafted; Dr. Pennington's availability unconfirmed. */
export const CARE_SERVICES = [
  {
    slug: "officiant",
    name: "Wedding Officiant",
    fee: "$250",
    body: "Dr. Pennington officiates weddings at Victory and at venues across the Wichita area. Includes the ceremony, the rehearsal, and two premarital sessions.",
    cta: "Request an officiant",
  },
  {
    slug: "premarital",
    name: "Premarital Counseling",
    fee: "$150 for four sessions",
    body: "Four honest conversations before the wedding — money, family, conflict, intimacy, and faith. Open to couples whether or not you marry here.",
    cta: "Book premarital counseling",
  },
  {
    slug: "grief",
    name: "Grief & Loss Care",
    fee: "No charge",
    body: "Walking with families through loss, before and long after the funeral. Individual sessions and seasonal grief groups.",
    cta: "Ask for grief support",
  },
  {
    slug: "pastoral",
    name: "Pastoral Counseling",
    fee: "No charge",
    body: "Confidential pastoral care for marriage strain, life transition, addiction, or a season you can't see your way through. We will also refer to licensed clinical care when that is what you need.",
    cta: "Request pastoral care",
  },
  {
    slug: "funeral",
    name: "Funerals & Homegoings",
    fee: "By arrangement",
    body: "We serve families in planning and leading homegoing services, and open our doors for repasts.",
    cta: "Contact us about a service",
  },
];

// ── Giving ───────────────────────────────────────────────────────────────────
export const STEWARDSHIP = {
  heading: "Why we give",
  body: "Giving at Victory is not fundraising — it is worship, and it is warfare. Every gift goes to work setting people free: keeping the lights on for Wednesday night, feeding neighbors on our block, training leaders through the L.E.A.D. Institute, and retiring the debt on God's house through the Greater Glory Campaign. We believe a church that breaks its own chains can help a family break theirs.",
  verse: "Every man according as he purposeth in his heart, so let him give.",
  reference: "2 Corinthians 9:7",
};

export const GIVING_ALLOCATION = [
  { label: "Weekly worship & ministry operations", note: "Keeping the doors open and the lights on" },
  { label: "Greater Glory Campaign", note: "Eliminating debt and renovating God's house — Haggai 2:9" },
  { label: "Community outreach", note: "Food, clothing, and help for our South Wichita neighbors" },
  { label: "L.E.A.D. Institute", note: "Training the next generation of leaders" },
];

export const CASHAPP_HANDLE = "$VictoryinWichitanow";
export const CASHAPP_URL = "https://cash.app/$VictoryinWichitanow";

// ── Givebutter (the church's real giving platform) ───────────────────────────
// The Greater Glory campaign. `embedUrl` is Givebutter's official campaign
// iframe embed — it renders the full donation flow (card, Apple/Google Pay,
// PayPal, Venmo, ACH, and recurring gifts) inside our own page.
//
// NOTE: Givebutter's newer <givebutter-widget> element needs a widget id
// generated in the Givebutter dashboard, which we don't have — hence the
// iframe. If Dr. Pennington creates a widget under Sharing → Widgets, we can
// swap to it for automatic height. accountId/campaignCode are recorded here so
// that swap is a two-line change.
export const GIVEBUTTER = {
  campaignUrl: "https://givebutter.com/greater-glory-omwhvc",
  embedUrl: "https://givebutter.com/embed/c/greater-glory-omwhvc",
  accountId: "s8fzTEhRHutQmX7A",
  campaignCode: "OMWHVC",
};

// ── Live chat / Slack ────────────────────────────────────────────────────────
// WBC Chat (slackwebsitechat) drives both the chat bubble in layout.tsx and the
// "Plan Your Visit" form, which posts straight into the church's Slack channel
// #victory-cof. This key is a public widget key — it ships in the page HTML by
// design — so it lives here rather than in an env var.
export const CHAT = {
  apiKey: "wbc_714b0c9b3af11bf2fa520d1aa564c1a1593915aafbcc361a",
  origin: "https://slackwebsitechat.vercel.app",
  agentIcon: "/photos/pastor.jpg",
  greeting:
    "Hi there! Thanks for visiting Victory Community of Faith. Is there anything I can help you with?",
};

// ── Media ────────────────────────────────────────────────────────────────────
// Leave podcastUrl empty until there is a real feed — an empty value hides the
// podcast card rather than shipping a broken link.
export const PODCAST_URL = "";

/** The book/series the Wednesday WOW study is currently working through. */
export const CURRENT_STUDY = {
  title: "The Divine Mindshift Bible Study",
  body: "Wednesday nights we're working through Dr. Pennington's book chapter by chapter — faith-filled thinking, emotional regulation, and the renewing of the mind.",
  productId: "divine-mindshift",
};
