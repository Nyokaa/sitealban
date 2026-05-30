import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "L'équipe",
  description:
    "Rencontrez l'équipe d'AETERNAM NOTAIRES : des notaires expérimentés, à votre écoute et attentifs à vos besoins.",
};

export default function EquipePage() {
  return (
    <>
      <PageHeader
        eyebrow="L'équipe"
        title="Des notaires à votre écoute"
        description="Disponibles et attentifs, nos notaires vous accompagnent avec rigueur et pédagogie à chaque étape de vos projets."
      />

      <section className="container-content py-16">
        <div className="grid gap-10">
          {team.map((m) => (
            <article
              key={m.name}
              className="grid gap-8 rounded-2xl border border-navy/10 bg-white p-8 md:grid-cols-3"
            >
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-navy font-serif text-4xl text-gold-light">
                  {m.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    initials(m.name)
                  )}
                </div>
                <h2 className="mt-5 font-serif text-2xl text-navy">{m.name}</h2>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                  {m.role}
                </p>
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="mt-2 break-all text-sm text-ink/60 hover:text-gold"
                  >
                    {m.email}
                  </a>
                )}
              </div>

              <div className="prose-notaire md:col-span-2">
                {m.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}
