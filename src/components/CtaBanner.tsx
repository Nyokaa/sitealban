import Link from "next/link";
import { site } from "@/data/site";

export default function CtaBanner() {
  return (
    <section className="bg-cream-dark">
      <div className="container-content py-16">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-navy px-8 py-12 text-center text-cream sm:px-16">
          <p className="eyebrow">Un projet, une question ?</p>
          <h2 className="max-w-2xl text-3xl font-semibold text-cream sm:text-4xl">
            Échangeons sur votre projet en toute confiance
          </h2>
          <p className="max-w-xl text-cream/75">
            Notre équipe vous accompagne avec écoute et rigueur. Prenez rendez-vous
            ou appelez-nous au{" "}
            <a href={`tel:${site.contact.phoneHref}`} className="font-semibold text-gold-light">
              {site.contact.phone}
            </a>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Prendre rendez-vous
            </Link>
            <Link href="/outils" className="btn-outline border-cream/30 text-cream hover:text-gold-light">
              Estimer mes frais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
