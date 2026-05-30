import Link from "next/link";

/**
 * Bouton "Prendre rendez-vous" fixe, toujours visible pendant le défilement.
 * - Bureau / tablette : onglet vertical collé au bord droit de l'écran.
 * - Mobile : bouton rond compact en bas à droite.
 */
export default function StickyAppointment() {
  return (
    <>
      {/* Onglet vertical (bord droit) — masqué sur mobile */}
      <Link
        href="/contact"
        aria-label="Prendre rendez-vous"
        className="group fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-l-lg bg-gold py-4 pl-3 pr-2 text-white shadow-lg transition-colors hover:bg-gold-dark sm:flex"
      >
        <span aria-hidden className="text-base">
          📅
        </span>
        <span className="text-sm font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180">
          Prendre rendez-vous
        </span>
      </Link>

      {/* Bouton rond compact — visible uniquement sur mobile */}
      <Link
        href="/contact"
        aria-label="Prendre rendez-vous"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl text-white shadow-lg transition-colors hover:bg-gold-dark sm:hidden"
      >
        <span aria-hidden>📅</span>
      </Link>
    </>
  );
}
