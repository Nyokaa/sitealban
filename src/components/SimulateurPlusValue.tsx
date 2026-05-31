"use client";

import { useMemo, useState } from "react";
import { euros, pourcent } from "@/lib/fraisAcquisition";
import { calculerPlusValue } from "@/lib/simulateurs";

export default function SimulateurPlusValue() {
  const [prixAchat, setPrixAchat] = useState(200000);
  const [prixVente, setPrixVente] = useState(320000);
  const [annees, setAnnees] = useState(10);
  const [residencePrincipale, setRP] = useState(false);

  const r = useMemo(
    () => calculerPlusValue(prixAchat, prixVente, annees, residencePrincipale),
    [prixAchat, prixVente, annees, residencePrincipale]
  );

  return (
    <div className="grid gap-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Champ
          id="achat"
          label="Prix d'achat (et frais)"
          value={prixAchat}
          onChange={setPrixAchat}
        />
        <Champ
          id="vente"
          label="Prix de vente"
          value={prixVente}
          onChange={setPrixVente}
        />

        <div>
          <label htmlFor="annees" className="mb-2 block text-sm font-semibold text-navy">
            Durée de détention : <span className="text-gold">{annees} ans</span>
          </label>
          <input
            id="annees"
            type="range"
            min={0}
            max={35}
            step={1}
            value={annees}
            onChange={(e) => setAnnees(Number(e.target.value))}
            className="w-full accent-gold"
          />
          <div className="mt-1 flex justify-between text-xs text-ink/50">
            <span>0 an</span>
            <span>35 ans</span>
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-ink/70">
          <input
            type="checkbox"
            checked={residencePrincipale}
            onChange={(e) => setRP(e.target.checked)}
            className="mt-1 accent-gold"
          />
          <span>Il s&apos;agit de ma résidence principale (exonérée)</span>
        </label>

        <p className="rounded-lg bg-cream-dark px-4 py-3 text-xs leading-relaxed text-ink/60">
          Estimation indicative (IR 19 % + prélèvements sociaux 17,2 %, avec
          abattements pour durée de détention). Hors surtaxe sur les plus-values
          élevées et hors forfaits travaux/frais. La résidence principale est
          exonérée.
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-navy p-6 text-cream">
        <div>
          <p className="text-sm uppercase tracking-wider text-gold">
            Impôt sur la plus-value estimé
          </p>
          <p className="mt-2 text-4xl font-semibold text-cream">
            {r.exonere ? "0 €" : euros(r.total)}
          </p>
          <p className="mt-1 text-sm text-cream/60">
            {r.exonere
              ? "Vente exonérée d'impôt sur la plus-value"
              : `Plus-value brute : ${euros(r.plusValueBrute)}`}
          </p>

          {!r.exonere && (
            <div className="mt-6 space-y-2 border-t border-cream/10 pt-5 text-sm">
              <Ligne
                label={`Impôt sur le revenu (abatt. ${pourcent(r.abattementIR)})`}
                value={euros(r.impotIR)}
              />
              <Ligne
                label={`Prélèvements sociaux (abatt. ${pourcent(r.abattementPS)})`}
                value={euros(r.prelevementsSociaux)}
              />
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
          <span className="font-semibold">Plus-value nette d&apos;impôt</span>
          <span className="font-semibold">{euros(r.net)}</span>
        </div>
      </div>
    </div>
  );
}

function Champ({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          min={0}
          step={5000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 pr-12 text-lg font-semibold text-navy outline-none focus:border-gold"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50">
          €
        </span>
      </div>
    </div>
  );
}

function Ligne({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-cream/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
