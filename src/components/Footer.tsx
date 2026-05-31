import Link from "next/link";
import { navigation, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy text-cream/80">
      <div className="container-content grid gap-10 py-14 md:grid-cols-4">
        {/* Identité */}
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.webp`}
            alt={site.name}
            className="h-24 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-cream/70">{site.slogan}</p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={site.social.facebook} label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M14 13.5h2.5l1-4H14V7c0-1 .5-1.5 1.7-1.5H17.5V2.1C17 2 15.8 2 14.9 2 12.3 2 11 3.5 11 6.2v3.3H8v4h3V22h3v-8.5Z" />
              </svg>
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.1V21H3.4V8.4Zm5.2 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H8.6V8.4Z" />
              </svg>
            </SocialLink>
          </div>

          {/* Logo institutionnel Notaires de France */}
          <a
            href="https://www.notaires.fr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Notaires de France"
            className="mt-6 inline-flex rounded-lg bg-white p-3 shadow-sm transition-transform hover:scale-[1.03]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/notaires-de-france.webp`}
              alt="Notaires de France"
              className="h-16 w-auto"
            />
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Nous contacter
          </h4>
          <address className="space-y-2 text-sm not-italic">
            <p>
              {site.contact.address}
              <br />
              {site.contact.postalCode} {site.contact.city}
            </p>
            <p>
              <a href={`tel:${site.contact.phoneHref}`} className="hover:text-gold">
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="break-all hover:text-gold">
                {site.contact.email}
              </a>
            </p>
          </address>
        </div>

        {/* Horaires */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
            Horaires
          </h4>
          <ul className="space-y-1 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-cream/60">{h.day}</span>
                <span className="text-right">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-content flex flex-col gap-2 py-5 text-xs text-cream/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-gold">
              Politique de confidentialité
            </Link>
            <Link href="/faq" className="hover:text-gold">
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-xs font-semibold uppercase transition-colors hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}
