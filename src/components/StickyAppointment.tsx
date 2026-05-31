import Link from "next/link";

/**
 * Bouton "Prendre rendez-vous" fixe, toujours visible pendant le défilement.
 * Onglet vertical collé au bord droit de l'écran, sur tous les formats
 * (bureau, tablette et mobile).
 */
export default function StickyAppointment() {
  return (
    <Link
      href="/contact"
      aria-label="Prendre rendez-vous"
      className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 items-center rounded-l-lg bg-gold px-2 py-4 text-white shadow-lg transition-colors hover:bg-gold-dark"
    >
      <span className="rotate-180 text-sm font-semibold tracking-wide [writing-mode:vertical-rl]">
        Prendre rendez-vous
      </span>
    </Link>
  );
}
