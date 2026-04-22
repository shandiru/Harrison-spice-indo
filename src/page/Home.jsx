import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import GallerySection from "../components/Gallery";
import ReviewsSection from "../components/Review";
import AboutSection from "../components/Aboutus-Part-1";
import AchievementSection from "../components/Aboutus-Part-2";
import MenuSection from "../components/Menu";

const siteUrl = "https://www.harrisonsspice.co.uk";
const homeUrl = `${siteUrl}/`;
const heroVideoUrl = `${siteUrl}/hero.mp4`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Harrison Spice",
      description:
        "Harrison Spice is an Indo-Chinese buffet restaurant in Coalville, Leicestershire offering bold flavours, weekly menu variety, and table reservations.",
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${homeUrl}#webpage`,
      url: homeUrl,
      name: "Harrison Spice | Indo-Chinese Buffet in Coalville",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${homeUrl}#restaurant`,
      },
      description:
        "Explore Harrison Spice, an Indo-Chinese buffet restaurant in Coalville, Leicestershire with weekly rotating menus, signature dishes, and guest reviews.",
      primaryImageOfPage: {
        "@type": "VideoObject",
        contentUrl: heroVideoUrl,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "Restaurant",
      "@id": `${homeUrl}#restaurant`,
      name: "Harrison Spice",
      url: homeUrl,
      telephone: "+44 116 239 5644",
      email: "info@harrisonspice.com",
      servesCuisine: ["Indian", "Chinese", "Indo-Chinese Buffet"],
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coalville",
        addressRegion: "Leicestershire",
        addressCountry: "GB",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Coalville",
        },
        {
          "@type": "AdministrativeArea",
          name: "Leicestershire",
        },
      ],
      description:
        "Harrison Spice brings together bold Indian spices and rich Chinese cooking traditions with weekly changing buffet inspiration in Coalville.",
    },
  ],
};

const Home = () => {
  return (
    <>
      <Helmet>
        <html lang="en-GB" />
        <title>Harrison Spice | Indo-Chinese Buffet in Coalville</title>
        <meta
          name="description"
          content="Visit Harrison Spice in Coalville, Leicestershire for an Indo-Chinese buffet with weekly changing menus, signature dishes, guest reviews, and table reservations."
        />
        <meta
          name="keywords"
          content="Harrison Spice, Indo-Chinese buffet, Coalville restaurant, Leicestershire buffet, Indian Chinese restaurant, buffet restaurant Coalville"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Harrison Spice" />
        <meta name="geo.placename" content="Coalville, Leicestershire" />
        <meta name="geo.region" content="GB-ENG" />
        <meta name="ICBM" content="Coalville, Leicestershire" />
        <link rel="canonical" href={homeUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Harrison Spice" />
        <meta property="og:title" content="Harrison Spice | Indo-Chinese Buffet in Coalville" />
        <meta
          property="og:description"
          content="Discover Harrison Spice in Coalville for Indo-Chinese buffet dining, weekly menu variety, guest reviews, and easy reservation contact details."
        />
        <meta property="og:url" content={homeUrl} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:video" content={heroVideoUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harrison Spice | Indo-Chinese Buffet in Coalville" />
        <meta
          name="twitter:description"
          content="Indo-Chinese buffet dining in Coalville, Leicestershire with weekly changing menus and signature Harrison Spice hospitality."
        />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div>
        <HeroSection />
        <AboutSection />
        <AchievementSection />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
      </div>
    </>
  );
};

export default Home;
