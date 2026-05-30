import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez AETERNAM NOTAIRES à Nantes : adresse, téléphone, e-mail, horaires et formulaire de prise de rendez-vous.",
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    `${site.contact.address}, ${site.contact.postalCode} ${site.contact.city}`
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Échangeons sur votre projet"
        description="Notre équipe vous répond et vous accueille du lundi au samedi. Prenez rendez-vous ou écrivez-nous directement."
      />

      <section className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Coordonnées */}
          <div>
            <h2 className="text-2xl font-semibold text-navy">Nous joindre</h2>
            <div className="mt-6 space-y-5">
              <InfoBlock label="Adresse">
                {site.contact.address}
                <br />
                {site.contact.postalCode} {site.contact.city}
              </InfoBlock>
              <InfoBlock label="Téléphone">
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-gold">
                  {site.contact.phone}
                </a>
              </InfoBlock>
              <InfoBlock label="E-mail">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all hover:text-gold"
                >
                  {site.contact.email}
                </a>
              </InfoBlock>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-navy">Horaires</h3>
            <ul className="mt-3 max-w-sm space-y-1 text-sm">
              {site.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-navy/5 py-1.5"
                >
                  <span className="text-ink/60">{h.day}</span>
                  <span className="text-navy">{h.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-xl border border-navy/10">
              <iframe
                title="Localisation de l'étude"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-semibold text-navy">
              Écrivez-nous
            </h2>
            <p className="mt-2 text-ink/70">
              Remplissez ce formulaire, nous vous recontactons rapidement.
            </p>
            <div className="mt-6 rounded-2xl border border-navy/10 bg-cream-dark/50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">
        {label}
      </p>
      <p className="mt-1 text-navy">{children}</p>
    </div>
  );
}
