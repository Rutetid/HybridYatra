import Head from "next/head";
import Hero from "@/components/Hero";
import GovernmentBacking from "@/components/GovernmentBacking";
import ProcessSteps from "@/components/ProcessSteps";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hybrid Yatra - Convert Your Petrol Vehicle to Hybrid | Patna's First
          Green Tech Startup
        </title>
        <meta
          name="description"
          content="Transform your petrol two-wheeler into hybrid with ₹50,000 investment. Government-funded by Startup Bihar. 50% fuel savings, RTO registration support. Patna's first hybrid conversion garage."
        />
        <meta
          name="keywords"
          content="hybrid conversion, electric vehicle, petrol to hybrid, Patna garage, green technology, fuel savings, Startup Bihar, eco-friendly"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hybridyatra.com/" />
        <meta
          property="og:title"
          content="Hybrid Yatra - Convert Your Petrol Vehicle to Hybrid"
        />
        <meta
          property="og:description"
          content="Save 50% on fuel costs! Convert your two-wheeler to hybrid. Government-backed by Startup Bihar. ₹50,000 investment for lifetime savings."
        />
        <meta
          property="og:image"
          content="https://hybridyatra.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hybridyatra.com/" />
        <meta
          property="twitter:title"
          content="Hybrid Yatra - Convert Your Petrol Vehicle to Hybrid"
        />
        <meta
          property="twitter:description"
          content="Save 50% on fuel costs! Convert your two-wheeler to hybrid. Government-backed by Startup Bihar."
        />
        <meta
          property="twitter:image"
          content="https://hybridyatra.com/og-image.jpg"
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hybrid Yatra" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hybridyatra.com/" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hybrid Yatra",
              description:
                "Convert your petrol two-wheeler to hybrid with government-backed technology",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Gandhi Maidan Road",
                addressLocality: "Patna",
                addressRegion: "Bihar",
                postalCode: "800001",
                addressCountry: "IN",
              },
              telephone: "+91-99999-99999",
              email: "info@hybridyatra.com",
              url: "https://hybridyatra.com",
              priceRange: "₹50,000",
              openingHours: ["Mo-Sa 09:00-19:00"],
              paymentAccepted: "Cash, Card, UPI",
              currenciesAccepted: "INR",
            }),
          }}
        />
      </Head>

      <main>
        <Hero />
        <GovernmentBacking />
        <ProcessSteps />
        <Benefits />
        <Contact />
      </main>
    </>
  );
}
