import { getClientEnv } from "@/lib/env";

/** JSON-LD builders — returned as objects and inlined with <script type="application/ld+json">. */

export function localBusinessJsonLd() {
  const { siteUrl } = getClientEnv();
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Cloud School",
    description: "AI-assisted Cloud, DevOps and AWS training for IT professionals in Chennai.",
    url: siteUrl,
    telephone: "+919840991965",
    email: "awstrainingchn@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6, Manickavasagar Street, Pallikaranai",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600100",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 12.925, longitude: 80.211 },
    sameAs: ["https://wa.me/919840991965"],
    offers: {
      "@type": "Offer",
      name: "Weekend AI Workshop",
      price: "199",
      priceCurrency: "INR",
    },
  };
}

export function courseJsonLd() {
  const { siteUrl } = getClientEnv();
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI-Assisted Cloud Engineering Program",
    description:
      "A comprehensive program taking experienced IT professionals from admin roles to Cloud / DevOps Engineers, with AI woven into every module.",
    provider: {
      "@type": "Organization",
      name: "The Cloud School",
      sameAs: siteUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Offline",
      courseWorkload: "PT20H",
      location: {
        "@type": "Place",
        name: "The Cloud School, Pallikaranai, Chennai",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the Cloud Engineering program for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Experienced IT professionals — VMware, Windows, Linux, and Network administrators, M365 admins, and IT support engineers — who want to move into Cloud, DevOps or AI roles.",
        },
      },
      {
        "@type": "Question",
        name: "Where is The Cloud School located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6, Manickavasagar Street, Pallikaranai, Chennai. We also run weekend workshops and flexible weekday/weekend batches.",
        },
      },
      {
        "@type": "Question",
        name: "How much does the workshop cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weekend AI workshops are ₹199 for a 2-hour live session. The flagship program fee is shared during your free consultation call.",
        },
      },
    ],
  };
}
