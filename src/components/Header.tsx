"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="container-content flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex shrink-0 flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-semibold tracking-wide text-navy">
            {site.name}
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
            {site.contact.city}
          </span>
        </Link>

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-x-5 xl:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link href="/contact" className="btn-gold whitespace-nowrap">
            Prendre rendez-vous
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-navy/20 text-navy xl:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <nav className="border-t border-navy/10 bg-cream xl:hidden">
          <div className="container-content flex flex-col py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/5 py-3 text-navy hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4">
              Prendre rendez-vous
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
