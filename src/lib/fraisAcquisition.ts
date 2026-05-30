/**
 * Calcul indicatif des frais d'acquisition immobilière ("frais de notaire").
 * -----------------------------------------------------------------------------
 * ⚠️ Estimation à titre informatif. Seule l'étude peut établir un décompte exact
 * tenant compte de votre situation, du bien et du département.
 *
 * Sources des barèmes :
 *  - Émoluments proportionnels du notaire : barème réglementé (tranches dégressives).
 *  - Droits de mutation (DMTO) : ~5,80 % dans l'ancien (taux départemental usuel),
 *    ~0,715 % dans le neuf (logement soumis à TVA).
 *  - Contribution de sécurité immobilière : 0,10 % du prix.
 *  - TVA sur émoluments et formalités : 20 %.
 */

export type TypeBien = "ancien" | "neuf";

export type ResultatFrais = {
  prix: number;
  emolumentsHT: number;
  tvaEmoluments: number;
  emolumentsTTC: number;
  droitsMutation: number;
  csi: number;
  formalitesEtDebours: number;
  total: number;
  pourcentage: number; // total / prix
};

// Tranches du barème des émoluments proportionnels (arrêté en vigueur).
const TRANCHES = [
  { plafond: 6500, taux: 0.0387 },
  { plafond: 17000, taux: 0.01596 },
  { plafond: 60000, taux: 0.01064 },
  { plafond: Infinity, taux: 0.00799 },
];

// Taux de droits de mutation selon le type de bien.
const TAUX_DMTO = {
  ancien: 0.058, // droits d'enregistrement dans l'ancien
  neuf: 0.00715, // taxe de publicité foncière réduite (logement neuf, TVA à part)
};

const TAUX_CSI = 0.001; // contribution de sécurité immobilière
const TVA = 0.2;
const FORMALITES_ET_DEBOURS = 800; // forfait moyen (débours, formalités, copies...)

export function calculerEmolumentsHT(prix: number): number {
  let reste = prix;
  let total = 0;
  let base = 0;
  for (const tranche of TRANCHES) {
    if (reste <= 0) break;
    const largeur = tranche.plafond - base;
    const montant = Math.min(reste, largeur);
    total += montant * tranche.taux;
    reste -= montant;
    base = tranche.plafond;
  }
  return total;
}

export function calculerFrais(prix: number, type: TypeBien): ResultatFrais {
  const prixSain = Math.max(0, Math.round(prix) || 0);

  const emolumentsHT = calculerEmolumentsHT(prixSain);
  const tvaEmoluments = emolumentsHT * TVA;
  const emolumentsTTC = emolumentsHT + tvaEmoluments;

  const droitsMutation = prixSain * TAUX_DMTO[type];
  const csi = prixSain * TAUX_CSI;
  const formalitesEtDebours = prixSain > 0 ? FORMALITES_ET_DEBOURS : 0;

  const total =
    emolumentsTTC + droitsMutation + csi + formalitesEtDebours;

  return {
    prix: prixSain,
    emolumentsHT,
    tvaEmoluments,
    emolumentsTTC,
    droitsMutation,
    csi,
    formalitesEtDebours,
    total,
    pourcentage: prixSain > 0 ? total / prixSain : 0,
  };
}

export function euros(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export function pourcent(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(n);
}
