"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Sans backend, on ouvre l'e-mail pré-rempli vers l'étude : fiable et
    // compatible avec un hébergement statique. (À remplacer par une route API
    // ou un service d'envoi le jour où un serveur est disponible.)
    const data = new FormData(e.currentTarget);
    const nom = String(data.get("nom") ?? "");
    const tel = String(data.get("tel") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Demande de contact — ${nom || "site internet"}`;
    const body = [
      `Nom et prénom : ${nom}`,
      `Téléphone : ${tel}`,
      `E-mail : ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-gold/40 bg-gold/10 p-8 text-center">
        <p className="font-serif text-2xl text-navy">Merci !</p>
        <p className="mt-2 text-ink/70">
          Votre logiciel de messagerie vient de s&apos;ouvrir avec votre demande
          pré-remplie : il ne vous reste qu&apos;à l&apos;envoyer. Si rien ne
          s&apos;est ouvert, écrivez-nous directement à{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-gold">
            {site.contact.email}
          </a>
          .
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
