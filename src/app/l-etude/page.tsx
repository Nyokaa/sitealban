import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "L'étude",
  description:
    "Découvrez AETERNAM NOTAIRES : une étude notariale moderne, alliant exigence juridique et innovation au service de tous vos projets.",
};

export default function EtudePage() {
  return (
    <>
      <PageHeader
        eyebrow="L'étude"
        title="Une vision moderne et engagée du notariat"
        description="Alliant exigence juridique et innovation technologique, nous vous accompagnons dans chaque étape des projets essentiels de votre vie."
      />

      <section className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="prose-notaire lg:col-span-2">
            <p>
              {site.name} met son expertise au service des particuliers, des
              entreprises et des institutions. Notre mission : vous offrir un
              accompagnement juridique clair, humain et rigoureux, à chaque étape
              de vos démarches.
            </p>
            <p>
              Notre mission est de traduire vos intentions avec précision dans les
              actes que vous signez, et de faire de chaque échange une expérience
              simple et fluide. Nous croyons qu&apos;un acte notarié n&apos;est pas
              une simple formalité, mais un moment important d&apos;une vie.
            </p>
            <p>
              Notre équipe de notaires expérimentés reste à votre écoute,
              disponible et attentive à vos besoins. Nous intégrons
              systématiquement le conseil fiscal et patrimonial pour vous aider à
              décider en toute sérénité.
            </p>
          </div>

          <aside className="rounded-2xl bg-cream-dark p-7">
            <h3 className="text-lg font-semibold text-navy">Nos engagements</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              {[
                "Une information claire et pédagogique",
                "La sécurité juridique de chaque acte",
                "Un conseil fiscal et patrimonial intégré",
                "L'innovation au service de la simplicité",
                "Une disponibilité 6 jours sur 7",
              ].map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="mt-1 text-gold">✦</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Exigence",
              text: "Une rigueur juridique sans compromis pour sécuriser durablement vos décisions.",
            },
            {
              title: "Humanité",
              text: "Une écoute attentive et un accompagnement personnalisé à chaque étape.",
            },
            {
              title: "Innovation",
              text: "Acte électronique, signature à distance, outils en ligne : un notariat de son temps.",
            },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-navy/10 bg-white p-7">
              <h3 className="font-serif text-2xl text-navy">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
