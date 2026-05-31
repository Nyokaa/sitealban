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
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
            alt={site.name}
            className="h-20 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-cream/70">{site.slogan}</p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={site.social.facebook} label="Facebook">f</SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">in</SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">in</SocialLink>
          </div>
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
          <p className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions légales
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
