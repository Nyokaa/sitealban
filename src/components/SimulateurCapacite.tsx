"use client";

import { useMemo, useState } from "react";
import { euros } from "@/lib/fraisAcquisition";
import { calculerCapacite } from "@/lib/simulateurs";

export default function SimulateurCapacite() {
  const [revenus, setRevenus] = useState(3500);
  const [charges, setCharges] = useState(200);
  const [taux, setTaux] = useState(3.5);
  const [duree, setDuree] = useState(25);
  const [apport, setApport] = useState(20000);

  const r = useMemo(
    () => calculerCapacite(revenus, charges, taux, duree, apport),
    [revenus, charges, taux, duree, apport]
  );

  return (
    <div className="grid gap-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Champ id="revenus" label="Revenus nets mensuels du foyer" value={revenus} onChange={setRevenus} step={100} unit="€" />
        <Champ id="charges" label="Charges mensuelles (crédits en cours)" value={charges} onChange={setCharges} step={50} unit="€" />
        <Champ id="apport" label="Apport personnel" value={apport} onChange={setApport} step={5000} unit="€" />

        <div>
          <label htmlFor="duree" className="mb-2 block text-sm font-semibold text-navy">
            Durée du prêt : <span className="text-gold">{duree} ans</span>
          </label>
          <input
            id="duree"
            type="range"
            min={5}
            max={30}
            step={1}
            value={duree}
            onChange={(e) => setDuree(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div>
          <label htmlFor="taux" className="mb-2 block text-sm font-semibold text-navy">
            Taux d&apos;intérêt annuel : <span className="text-gold">{taux.toFixed(2)} %</span>
          </label>
          <input
            id="taux"
            type="range"
            min={0.5}
            max={6}
            step={0.05}
            value={taux}
            onChange={(e) => setTaux(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <p className="rounded-lg bg-cream-dark px-4 py-3 text-xs leading-relaxed text-ink/60">
          Estimation indicative basée sur un taux d&apos;endettement maximal de
          35 % (assurance comprise). Le calcul réel dépend de votre profil et des
          conditions de la banque.
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-navy p-6 text-cream">
        <div>
          <p className="text-sm uppercase tracking-wider text-gold">
            Montant empruntable estimé
          </p>
          <p className="mt-2 text-4xl font-semibold text-cream">
            {euros(r.montantEmpruntable)}
          </p>
          <p className="mt-1 text-sm text-cream/60">
            mensualité maximale : {euros(r.mensualiteMax)} / mois
          </p>

          <div className="mt-6 space-y-2 border-t border-cream/10 pt-5 text-sm">
            <Ligne label="Mensualité maximale" value={`${euros(r.mensualiteMax)} / mois`} />
            <Ligne label="Coût total des intérêts" value={euros(r.coutInterets)} />
            <Ligne label="Apport personnel" value={euros(apport)} />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
          <span className="font-semibold">Budget d&apos;achat total</span>
          <span className="font-semibold">{euros(r.budgetTotal)}</span>
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
  step,
  unit,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  step: number;
  unit: string;
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
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 pr-12 text-lg font-semibold text-navy outline-none focus:border-gold"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50">
          {unit}
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
