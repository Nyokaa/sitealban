import { site } from "@/data/site";

/**
 * Données structurées (JSON-LD) au format schema.org "Notary".
 * Aide les moteurs de recherche (Google, etc.) à comprendre l'étude :
 * coordonnées, horaires, position → meilleur référencement local.
 */

const JOURS: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
};

function horaires() {
  const spec: { "@type": string; dayOfWeek: string; opens: string; closes: string }[] = [];
  for (const h of site.hours) {
    const m = h.value.match(/(\d{2})h(\d{2}).*?(\d{2})h(\d{2})/);
    if (m && JOURS[h.day]) {
      spec.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: JOURS[h.day],
        opens: `${m[1]}:${m[2]}`,
        closes: `${m[3]}:${m[4]}`,
      });
    }
  }
  return spec;
}

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Notary",
    name: site.name,
    description: site.intro,
    url: site.url,
    image: `${site.url}/logo.webp`,
    telephone: site.contact.phoneHref,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      postalCode: site.contact.postalCode,
      addressLocality: site.contact.city,
      addressCountry: "FR",
    },
    openingHoursSpecification: horaires(),
    areaServed: site.contact.city,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
