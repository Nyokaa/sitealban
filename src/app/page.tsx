import Link from "next/link";
import { site } from "@/data/site";
import { expertises } from "@/data/expertises";
import { articles } from "@/data/articles";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  const dernieresActus = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-cream">
        {/* Image de fond */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/hero-bg.jpg`}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Voile bleu nuit pour la lisibilité du texte */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"
          aria-hidden
        />
        <div className="container-content relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-5">Étude notariale · {site.contact.city}</p>
            <h1 className="text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
              {site.slogan}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              {site.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Prendre rendez-vous
              </Link>
              <Link
                href="/expertise"
                className="btn-outline border-cream/30 text-cream hover:text-gold-light"
              >
                Découvrir nos expertises
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-cream/15 bg-cream/5 p-8 backdrop-blur">
              <p className="font-serif text-2xl text-cream">
                Un accompagnement clair, humain et rigoureux
              </p>
              <p className="mt-3 text-cream/70">
                Des particuliers aux entreprises et institutions, nous sécurisons
                chacun de vos actes à chaque étape.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-cream/10 pt-6 text-center">
                <Stat value="10" label="domaines d'expertise" />
                <Stat value="100%" label="actes sécurisés" />
                <Stat value="6j/7" label="à votre écoute" />
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="container-content py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="L'étude"
            title="Une vision moderne et engagée du notariat"
            description="Alliant exigence juridique et innovation technologique, AETERNAM NOTAIRES vous accompagne dans chaque étape des projets essentiels de votre vie."
          />
          <div className="prose-notaire">
            <p>
              Notre mission : traduire vos intentions avec précision dans les
              actes que vous signez et faire de chaque échange une expérience
              simple et fluide.
            </p>
            <p>
              Notre équipe de notaires expérimentés reste à votre écoute,
              disponible et attentive à vos besoins.
            </p>
            <Link href="/l-etude" className="btn-outline mt-2">
              En savoir plus sur l&apos;étude
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="bg-cream-dark py-20">
        <div className="container-content">
          <SectionHeading
            center
            eyebrow="Nos domaines"
            title="Des expertises au service de tous vos projets"
            description="De l'immobilier à la transmission de patrimoine, nous couvrons l'ensemble des besoins juridiques des particuliers, entreprises et institutions."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((e) => (
              <Link
                key={e.slug}
                href={`/expertise/${e.slug}`}
                className="group flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-navy group-hover:text-gold">
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {e.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-gold">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="container-content py-20">
        <SectionHeading
          center
          eyebrow="Pourquoi nous choisir"
          title="La sécurité juridique alliée à la proximité"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Écoute & pédagogie",
              text: "Nous prenons le temps d'expliquer chaque acte pour que vous décidiez en toute confiance.",
            },
            {
              title: "Rigueur juridique",
              text: "Chaque dossier est sécurisé et vérifié dans le moindre détail, dans votre intérêt.",
            },
            {
              title: "Innovation & disponibilité",
              text: "Acte électronique, signature à distance, conseil fiscal intégré : un notariat moderne.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-xl border border-navy/10 bg-white p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-serif text-xl text-gold">
                ✦
              </div>
              <h3 className="text-lg font-semibold text-navy">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section className="bg-cream-dark py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Actualités"
              title="Les dernières informations juridiques"
            />
            <Link href="/actualites" className="btn-outline">
              Toutes les actualités
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {dernieresActus.map((a) => (
              <Link
                key={a.slug}
                href={`/actualites/${a.slug}`}
                className="group flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {a.category}
                </span>
                <h3 className="mt-3 flex-1 font-serif text-xl text-navy group-hover:text-gold">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70 line-clamp-3">{a.excerpt}</p>
                <time className="mt-4 text-xs text-ink/50">
                  {new Date(a.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-gold-light">{value}</dt>
      <dd className="mt-1 text-xs text-cream/60">{label}</dd>
    </div>
  );
}
