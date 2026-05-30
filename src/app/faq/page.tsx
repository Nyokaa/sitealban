import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Les réponses à vos questions sur le rôle du notaire, les démarches, les coûts, la famille, le patrimoine et le droit des affaires.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Vos questions, nos réponses"
        description="Retrouvez les réponses aux questions les plus fréquentes. Vous ne trouvez pas votre réponse ? Contactez-nous directement."
      />

      <section className="container-content py-16">
        <div className="space-y-12">
          {faq.map((cat) => (
            <div key={cat.category}>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                {cat.category}
              </h2>
              <FaqAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
