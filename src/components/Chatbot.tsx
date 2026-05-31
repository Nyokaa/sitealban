"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faq } from "@/data/faq";
import { expertises } from "@/data/expertises";
import { site } from "@/data/site";

/**
 * Assistant guidé (sans IA, 100 % côté navigateur).
 * -----------------------------------------------------------------------------
 * Répond aux questions fréquentes, présente les domaines d'expertise, oriente
 * vers la prise de rendez-vous et propose une recherche par mots-clés sur la
 * FAQ et les expertises.
 *
 * 👉 Évolution vers une IA : l'interface (messages + saisie) reste identique.
 *    Il suffira de remplacer la logique de `handleUserText` par un appel à une
 *    route serveur `/api/chat` qui interroge le modèle. Le reste ne bouge pas.
 */

type Reply = { label: string; onClick: () => void };
type Message = { from: "bot" | "user"; content: React.ReactNode };

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // Défilement automatique vers le dernier message.
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Message d'accueil à la première ouverture.
  useEffect(() => {
    if (open && messages.length === 0) {
      botSay(
        <>
          Bonjour 👋 Je suis l&apos;assistant de {site.name}. Comment puis-je vous
          aider ? Choisissez un sujet ou posez votre question.
        </>,
        rootReplies()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function botSay(content: React.ReactNode, nextReplies: Reply[] = []) {
    setMessages((m) => [...m, { from: "bot", content }]);
    setReplies(nextReplies);
  }
  function userSay(text: string) {
    setMessages((m) => [...m, { from: "user", content: text }]);
    setReplies([]);
  }

  // ---- Écrans / nœuds de conversation ----------------------------------------

  function rootReplies(): Reply[] {
    return [
      { label: "📁 Nos domaines d'expertise", onClick: showExpertises },
      { label: "❓ Questions fréquentes", onClick: showFaqCategories },
      { label: "💶 Frais & honoraires", onClick: showFrais },
      { label: "📅 Prendre rendez-vous", onClick: showRdv },
      { label: "📞 Nous contacter", onClick: showContact },
    ];
  }

  function backToMenu() {
    botSay("Que souhaitez-vous faire ?", rootReplies());
  }

  function showExpertises() {
    userSay("Nos domaines d'expertise");
    botSay(
      "Voici nos domaines d'expertise. Sélectionnez-en un pour en savoir plus :",
      [
        ...expertises.map((e) => ({
          label: e.title,
          onClick: () => showExpertise(e.slug),
        })),
        { label: "↩︎ Menu principal", onClick: backToMenu },
      ]
    );
  }

  function showExpertise(slug: string) {
    const e = expertises.find((x) => x.slug === slug);
    if (!e) return backToMenu();
    userSay(e.title);
    botSay(
      <>
        <p>{e.excerpt}</p>
        <Link
          href={`/expertise/${e.slug}`}
          className="mt-2 inline-block font-semibold text-gold underline"
          onClick={() => setOpen(false)}
        >
          Voir la page « {e.title} » →
        </Link>
      </>,
      [
        { label: "📁 Autres expertises", onClick: showExpertises },
        { label: "📅 Prendre rendez-vous", onClick: showRdv },
        { label: "↩︎ Menu principal", onClick: backToMenu },
      ]
    );
  }

  function showFaqCategories() {
    userSay("Questions fréquentes");
    botSay("Sur quel thème porte votre question ?", [
      ...faq.map((c) => ({
        label: c.category,
        onClick: () => showFaqQuestions(c.category),
      })),
      { label: "↩︎ Menu principal", onClick: backToMenu },
    ]);
  }

  function showFaqQuestions(category: string) {
    const cat = faq.find((c) => c.category === category);
    if (!cat) return backToMenu();
    userSay(category);
    botSay("Choisissez votre question :", [
      ...cat.items.map((it, i) => ({
        label: it.question,
        onClick: () => showFaqAnswer(category, i),
      })),
      { label: "↩︎ Thèmes", onClick: showFaqCategories },
    ]);
  }

  function showFaqAnswer(category: string, index: number) {
    const cat = faq.find((c) => c.category === category);
    const item = cat?.items[index];
    if (!item) return backToMenu();
    userSay(item.question);
    botSay(
      <>
        <p>{item.answer}</p>
        <p className="mt-2 text-xs text-ink/50">
          Cette réponse est donnée à titre informatif. Pour votre situation
          précise, contactez l&apos;étude.
        </p>
      </>,
      [
        { label: "❓ Autres questions", onClick: showFaqCategories },
        { label: "📅 Prendre rendez-vous", onClick: showRdv },
        { label: "↩︎ Menu principal", onClick: backToMenu },
      ]
    );
  }

  function showFrais() {
    userSay("Frais & honoraires");
    botSay(
      <>
        <p>
          Les « frais de notaire » sont composés en grande partie de taxes
          reversées à l&apos;État. Vous pouvez estimer le coût de votre
          acquisition en quelques secondes :
        </p>
        <Link
          href="/outils"
          className="mt-2 inline-block font-semibold text-gold underline"
          onClick={() => setOpen(false)}
        >
          Ouvrir le simulateur de frais →
        </Link>
      </>,
      [
        {
          label: "En savoir plus sur les honoraires",
          onClick: () => {
            botSay(
              <Link
                href="/honoraires"
                className="font-semibold text-gold underline"
                onClick={() => setOpen(false)}
              >
                Voir la page Honoraires →
              </Link>,
              [{ label: "↩︎ Menu principal", onClick: backToMenu }]
            );
          },
        },
        { label: "↩︎ Menu principal", onClick: backToMenu },
      ]
    );
  }

  function showRdv() {
    userSay("Prendre rendez-vous");
    botSay(
      <>
        <p>Avec plaisir ! Vous pouvez :</p>
        <ul className="mt-2 space-y-1">
          <li>
            •{" "}
            <Link
              href="/contact"
              className="font-semibold text-gold underline"
              onClick={() => setOpen(false)}
            >
              Remplir le formulaire de contact
            </Link>
          </li>
          <li>
            • Nous appeler au{" "}
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="font-semibold text-gold underline"
            >
              {site.contact.phone}
            </a>
          </li>
        </ul>
      </>,
      [{ label: "↩︎ Menu principal", onClick: backToMenu }]
    );
  }

  function showContact() {
    userSay("Nous contacter");
    botSay(
      <>
        <p className="font-semibold text-navy">{site.name}</p>
        <p>
          {site.contact.address}
          <br />
          {site.contact.postalCode} {site.contact.city}
        </p>
        <p className="mt-1">
          Tél :{" "}
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="font-semibold text-gold underline"
          >
            {site.contact.phone}
          </a>
        </p>
        <p>
          E-mail :{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-semibold text-gold underline"
          >
            {site.contact.email}
          </a>
        </p>
      </>,
      [
        { label: "📅 Prendre rendez-vous", onClick: showRdv },
        { label: "↩︎ Menu principal", onClick: backToMenu },
      ]
    );
  }

  // ---- Recherche par mots-clés (saisie libre) --------------------------------

  function handleUserText(raw: string) {
    const text = raw.trim();
    if (!text) return;
    userSay(text);
    setInput("");

    const tokens = normalize(text)
      .split(/\s+/)
      .filter((t) => t.length >= 3);

    type Hit = { score: number; reply: Reply };
    const hits: Hit[] = [];

    faq.forEach((cat, ci) =>
      cat.items.forEach((it, ii) => {
        const hay = normalize(`${it.question} ${it.answer}`);
        const score = tokens.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0);
        if (score > 0)
          hits.push({
            score,
            reply: {
              label: it.question,
              onClick: () => showFaqAnswer(cat.category, ii),
            },
          });
      })
    );

    expertises.forEach((e) => {
      const hay = normalize(`${e.title} ${e.excerpt} ${e.description}`);
      const score = tokens.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0);
      if (score > 0)
        hits.push({
          score,
          reply: { label: `Expertise : ${e.title}`, onClick: () => showExpertise(e.slug) },
        });
    });

    hits.sort((a, b) => b.score - a.score);
    const top = hits.slice(0, 4).map((h) => h.reply);

    if (top.length > 0) {
      botSay("Voici ce que j'ai trouvé qui pourrait vous aider :", [
        ...top,
        { label: "↩︎ Menu principal", onClick: backToMenu },
      ]);
    } else {
      botSay(
        <>
          Je n&apos;ai pas de réponse précise à cette question. Le mieux est de
          contacter directement l&apos;étude — nous vous répondrons avec plaisir.
        </>,
        [
          { label: "📅 Prendre rendez-vous", onClick: showRdv },
          { label: "📞 Nous contacter", onClick: showContact },
          { label: "↩︎ Menu principal", onClick: backToMenu },
        ]
      );
    }
  }

  // ---- Rendu -----------------------------------------------------------------

  return (
    <>
      {/* Lanceur (bas gauche pour ne pas gêner le bouton rendez-vous à droite) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"}
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-cream shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 5.5C4 4.7 4.7 4 5.5 4h13c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5H9l-4 4v-4H5.5C4.7 16 4 15.3 4 14.5v-9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Panneau de conversation */}
      {open && (
        <div className="fixed bottom-24 left-5 z-50 flex h-[70vh] max-h-[560px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-navy/10 bg-cream shadow-2xl">
          {/* En-tête */}
          <div className="flex items-center gap-3 bg-navy px-4 py-3 text-cream">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-serif text-sm font-bold text-white">
              {site.shortName?.[0] ?? "A"}
            </div>
            <div>
              <p className="text-sm font-semibold">Assistant {site.shortName}</p>
              <p className="text-xs text-cream/60">En ligne · réponses indicatives</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-gold text-white"
                      : "rounded-bl-sm bg-white text-ink shadow-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* Réponses rapides */}
            {replies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {replies.map((r, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={r.onClick}
                    className="rounded-full border border-navy/20 bg-white px-3 py-1.5 text-left text-xs font-medium text-navy transition-colors hover:border-gold hover:text-gold"
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Saisie */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUserText(input);
            }}
            className="flex items-center gap-2 border-t border-navy/10 bg-white px-3 py-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre question…"
              className="flex-1 rounded-full border border-navy/15 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-dark"
            >
              →
            </button>
          </form>
        </div>
      )}
    </>
  );
}
