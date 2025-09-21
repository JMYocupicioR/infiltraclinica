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
  ogImage: "/og-image.jpg", // Imagen para compartir en redes sociales
  facebookAppId: "", // Se puede agregar Facebook App ID si es necesario
  twitterHandle: "@infiltraclinica", // Se puede actualizar cuando tengan Twitter
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

// Función para generar Open Graph meta tags
export const generateOpenGraphTags = (options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}) => {
  const {
    title = SITE_CONFIG.defaultTitle,
    description = SITE_CONFIG.description,
    image = absoluteUrl(SITE_CONFIG.ogImage),
    url = SITE_CONFIG.siteUrl,
    type = 'website'
  } = options;

  return {
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:site_name': SITE_CONFIG.name,
    'og:locale': SITE_CONFIG.locale,
    // Facebook específico
    'fb:app_id': SITE_CONFIG.facebookAppId,
    // Twitter Cards
    'twitter:card': 'summary_large_image',
    'twitter:site': SITE_CONFIG.twitterHandle,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
  };
};

// Structured data para condiciones médicas
export const medicalConditionJsonLd = (options: {
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: options.name,
  description: options.description,
  signOrSymptom: options.symptoms.map(symptom => ({
    "@type": "MedicalSignOrSymptom",
    name: symptom
  })),
  possibleTreatment: options.treatments.map(treatment => ({
    "@type": "MedicalTherapy", 
    name: treatment
  })),
  associatedAnatomy: {
    "@type": "AnatomicalStructure",
    name: "Articulaciones"
  }
});
