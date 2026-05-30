"use client";

import { useMemo, useState } from "react";
import {
  calculerFrais,
  euros,
  pourcent,
  type TypeBien,
} from "@/lib/fraisAcquisition";

export default function SimulateurFrais() {
  const [prix, setPrix] = useState(250000);
  const [type, setType] = useState<TypeBien>("ancien");

  const r = useMemo(() => calculerFrais(prix, type), [prix, type]);

  const lignes = [
    { label: "Émoluments du notaire (HT)", value: r.emolumentsHT },
    { label: "TVA sur émoluments (20 %)", value: r.tvaEmoluments },
    { label: "Droits de mutation & taxes", value: r.droitsMutation },
    { label: "Contribution de sécurité immobilière", value: r.csi },
    { label: "Formalités & débours", value: r.formalitesEtDebours },
  ];

  return (
    <div className="grid gap-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
      {/* Entrées */}
      <div className="space-y-7">
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy">
            Type de bien
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { key: "ancien", label: "Ancien" },
                { key: "neuf", label: "Neuf / VEFA" },
              ] as { key: TypeBien; label: string }[]
            ).map((o) => (
              <button
                key={o.key}
                type="button"
                onClick={() => setType(o.key)}
                className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                  type === o.key
                    ? "border-gold bg-gold/10 text-navy"
                    : "border-navy/15 text-ink/70 hover:border-gold/50"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="prix"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            Prix d&apos;achat du bien
          </label>
          <div className="relative">
            <input
              id="prix"
              type="number"
              min={0}
              step={5000}
              value={prix}
              onChange={(e) => setPrix(Number(e.target.value))}
              className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 pr-12 text-lg font-semibold text-navy outline-none focus:border-gold"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50">
              €
            </span>
          </div>
          <input
            type="range"
            min={50000}
            max={1500000}
            step={5000}
            value={Math.min(prix, 1500000)}
            onChange={(e) => setPrix(Number(e.target.value))}
            className="mt-4 w-full accent-gold"
          />
          <div className="mt-1 flex justify-between text-xs text-ink/50">
            <span>50 000 €</span>
            <span>1 500 000 €</span>
          </div>
        </div>

        <p className="rounded-lg bg-cream-dark px-4 py-3 text-xs leading-relaxed text-ink/60">
          Estimation indicative basée sur les barèmes réglementés en vigueur.
          Pour le neuf, la TVA (20 %) est généralement comprise dans le prix
          affiché. Seule l&apos;étude établit un décompte définitif.
        </p>
      </div>

      {/* Résultat */}
      <div className="flex flex-col justify-between rounded-xl bg-navy p-6 text-cream">
        <div>
          <p className="text-sm uppercase tracking-wider text-gold">
            Frais d&apos;acquisition estimés
          </p>
          <p className="mt-2 text-4xl font-semibold text-cream">
            {euros(r.total)}
          </p>
          <p className="mt-1 text-sm text-cream/60">
            soit environ {pourcent(r.pourcentage)} du prix d&apos;achat
          </p>

          <div className="mt-6 space-y-2 border-t border-cream/10 pt-5 text-sm">
            {lignes.map((l) => (
              <div key={l.label} className="flex justify-between gap-4">
                <span className="text-cream/70">{l.label}</span>
                <span className="font-medium">{euros(l.value)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
          <span className="font-semibold">Budget total</span>
          <span className="font-semibold">{euros(r.prix + r.total)}</span>
        </div>
      </div>
    </div>
  );
}
