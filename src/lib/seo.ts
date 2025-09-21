export type StructuredData = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const SITE_CONFIG = {
  name: "Infiltra Clínica",
  tagline: "Infiltraciones de precisión en Mérida",
  defaultTitle: "Infiltraciones de precisión en Mérida | Infiltra Clínica",
  description:
    "Clínica hiperespecializada en infiltraciones de precisión para aliviar el dolor articular en Mérida, Yucatán. Procedimientos guiados, explicación clara y seguimiento médico.",
  siteUrl: "https://www.infiltraclinicamerida.com",
  locale: "es_MX",
  localeAlternate: ["es_MX"],
  whatsappUrl: "https://wa.me/+5219993537967",
  telephoneDisplay: "+52 999 353 7967",
  telephoneSchema: "+529993537967",
  defaultImagePath: "/favicon.svg",
  sameAs: [] as string[],
  address: {
    locality: "Mérida",
    region: "Yucatán",
    country: "MX",
  },
} as const;

export const absoluteUrl = (path = "/") => {
  if (!path) return SITE_CONFIG.siteUrl;
  try {
    return new URL(path, SITE_CONFIG.siteUrl).toString();
  } catch (error) {
    const normalized = path.startsWith("/") ? path : "/" + path;
    return SITE_CONFIG.siteUrl + normalized;
  }
};

export const localBusinessJsonLd = (overrides: StructuredData = {}): StructuredData => {
  const data: StructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.telephoneSchema,
    image: absoluteUrl(SITE_CONFIG.defaultImagePath),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    areaServed: {
      "@type": "City",
      name: SITE_CONFIG.address.locality,
    },
    medicalSpecialty: ["Orthopedic", "Physiotherapy"],
    availableService: [
      "Infiltraciones guiadas por imagen",
      "Medicina regenerativa",
      "Control del dolor articular",
    ],
    priceRange: "$$",
  };

  if (SITE_CONFIG.sameAs.length) {
    data.sameAs = SITE_CONFIG.sameAs;
  }

  return { ...data, ...overrides };
};

export const breadcrumbJsonLd = (items: BreadcrumbItem[]): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqJsonLd = (items: FaqItem[]): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
