"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: brancher l'envoi réel (API route, service email, CRM...).
    // Pour l'instant, on simule un envoi côté client.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-8 text-center">
        <p className="font-serif text-2xl text-navy">Merci pour votre message</p>
        <p className="mt-2 text-ink/70">
          Notre équipe vous recontactera dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field id="nom" label="Nom et prénom" required />
      <Field id="tel" label="Numéro de téléphone" type="tel" />
      <Field id="email" label="Adresse e-mail" type="email" required />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 outline-none focus:border-gold"
        />
      </div>
      <label className="flex items-start gap-3 text-xs text-ink/60">
        <input type="checkbox" required className="mt-1 accent-gold" />
        <span>
          J&apos;accepte que mes données soient utilisées pour être recontacté(e).
          Elles ne seront jamais transmises à des tiers.
        </span>
      </label>
      <button type="submit" className="btn-gold w-full sm:w-auto">
        Envoyer ma demande
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-navy/15 bg-white px-4 py-3 outline-none focus:border-gold"
      />
    </div>
  );
}
