"use client";

import { useMemo, useState } from "react";
import { euros, pourcent } from "@/lib/fraisAcquisition";
import {
  calculerSuccession,
  LIENS,
  type LienParente,
} from "@/lib/simulateurs";

export default function SimulateurSuccession() {
  const [montant, setMontant] = useState(300000);
  const [lien, setLien] = useState<LienParente>("ligne_directe");

  const r = useMemo(() => calculerSuccession(montant, lien), [montant, lien]);

  return (
    <div className="grid gap-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
      <div className="space-y-7">
        <div>
          <label htmlFor="lien" className="mb-2 block text-sm font-semibold text-navy">
            Lien avec le défunt
          </label>
          <select
            id="lien"
            value={lien}
            onChange={(e) => setLien(e.target.value as LienParente)}
            className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 text-navy outline-none focus:border-gold"
          >
            {LIENS.map((l) => (
              <option key={l.key} value={l.key}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="part" className="mb-2 block text-sm font-semibold text-navy">
            Montant reçu (part nette taxable)
          </label>
          <div className="relative">
            <input
              id="part"
              type="number"
              min={0}
              step={5000}
              value={montant}
              onChange={(e) => setMontant(Number(e.target.value))}
              className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 pr-12 text-lg font-semibold text-navy outline-none focus:border-gold"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50">
              €
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={2000000}
            step={5000}
            value={Math.min(montant, 2000000)}
            onChange={(e) => setMontant(Number(e.target.value))}
            className="mt-4 w-full accent-gold"
          />
        </div>

        <p className="rounded-lg bg-cream-dark px-4 py-3 text-xs leading-relaxed text-ink/60">
          Estimation indicative des droits de succession après abattement. Le
          conjoint et le partenaire de PACS sont totalement exonérés. Hors cas
          particuliers (handicap, exonérations spécifiques, donations
          antérieures).
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-navy p-6 text-cream">
        <div>
          <p className="text-sm uppercase tracking-wider text-gold">
            Droits de succession estimés
          </p>
          <p className="mt-2 text-4xl font-semibold text-cream">
            {r.exonere ? "0 €" : euros(r.droits)}
          </p>
          <p className="mt-1 text-sm text-cream/60">
            {r.exonere
              ? "Transmission exonérée de droits"
              : `soit ${pourcent(r.part > 0 ? r.droits / r.part : 0)} de la part reçue`}
          </p>

          <div className="mt-6 space-y-2 border-t border-cream/10 pt-5 text-sm">
            <Ligne label="Part reçue" value={euros(r.part)} />
            <Ligne
              label="Abattement"
              value={r.exonere ? "Exonération totale" : euros(r.abattement)}
            />
            <Ligne label="Base imposable" value={euros(r.baseImposable)} />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
          <span className="font-semibold">Montant net transmis</span>
          <span className="font-semibold">{euros(r.net)}</span>
        </div>
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
