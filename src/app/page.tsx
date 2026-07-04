import Navbar from "@/components/Navbar";
import PreachingHero from "@/components/PreachingHero";
import WatchLive from "@/components/WatchLive";
import WelcomePastor from "@/components/WelcomePastor";
import ScriptureBanner from "@/components/ScriptureBanner";
import ServiceTimes from "@/components/ServiceTimes";
import FirstTimeVisitor from "@/components/FirstTimeVisitor";
import AboutMission from "@/components/AboutMission";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Testimonies from "@/components/Testimonies";
import LatestSermon from "@/components/LatestSermon";
import UpcomingEvents from "@/components/UpcomingEvents";
import MinistriesPreview from "@/components/MinistriesPreview";
import PlanOfSalvation from "@/components/PlanOfSalvation";
import LeadInstitute from "@/components/LeadInstitute";
import Give from "@/components/Give";
import PhotoGallery from "@/components/PhotoGallery";
import MapAddress from "@/components/MapAddress";
import PrayerAndChat from "@/components/PrayerAndChat";
import MobileFriendly from "@/components/MobileFriendly";
import Footer from "@/components/Footer";
import { SITE, logoUrl, ogImageUrl, phoneTel } from "@/config/site";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: SITE.name,
  alternateName: SITE.tagline,
  url: SITE.url,
  logo: logoUrl,
  image: `${SITE.url.replace(/\/$/, "")}${ogImageUrl}`,
  description: SITE.description,
  telephone: phoneTel,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "18:00",
      closes: "19:30",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main>
        <PreachingHero />
        <WatchLive />
        <WelcomePastor />
        <ScriptureBanner />
        <ServiceTimes />
        <FirstTimeVisitor />
        <AboutMission />
        <WhatWeBelieve />
        <Testimonies />
        <LatestSermon />
        <UpcomingEvents />
        <MinistriesPreview />
        <PlanOfSalvation />
        <LeadInstitute />
        <Give />
        <PhotoGallery />
        <MapAddress />
        <PrayerAndChat />
        <MobileFriendly />
      </main>
      <Footer />
    </>
  );
}
