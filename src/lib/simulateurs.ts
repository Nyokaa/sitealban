/**
 * Logique de calcul des simulateurs (succession, plus-value, capacité d'emprunt).
 * -----------------------------------------------------------------------------
 * ⚠️ Estimations à titre informatif, fondées sur les barèmes usuels en vigueur.
 * Seule l'étude peut établir un calcul exact tenant compte de votre situation.
 * Les barèmes sont à vérifier périodiquement (lois de finances).
 */

// =====================  1. DROITS DE SUCCESSION  =============================

export type LienParente =
  | "ligne_directe"
  | "conjoint"
  | "frere_soeur"
  | "neveu_niece"
  | "autre";

export const LIENS: { key: LienParente; label: string }[] = [
  { key: "ligne_directe", label: "Enfant / parent (ligne directe)" },
  { key: "conjoint", label: "Conjoint / partenaire de PACS" },
  { key: "frere_soeur", label: "Frère / sœur" },
  { key: "neveu_niece", label: "Neveu / nièce" },
  { key: "autre", label: "Autre / sans lien de parenté" },
];

const ABATTEMENTS: Record<LienParente, number> = {
  ligne_directe: 100000,
  conjoint: Infinity, // exonération totale
  frere_soeur: 15932,
  neveu_niece: 7967,
  autre: 1594,
};

const BAREME_DIRECT = [
  { plafond: 8072, taux: 0.05 },
  { plafond: 12109, taux: 0.1 },
  { plafond: 15932, taux: 0.15 },
  { plafond: 552324, taux: 0.2 },
  { plafond: 902838, taux: 0.3 },
  { plafond: 1805677, taux: 0.4 },
  { plafond: Infinity, taux: 0.45 },
];

const BAREME_FRERE = [
  { plafond: 24430, taux: 0.35 },
  { plafond: Infinity, taux: 0.45 },
];

function appliquerBareme(
  base: number,
  tranches: { plafond: number; taux: number }[]
): number {
  let reste = base;
  let total = 0;
  let bas = 0;
  for (const t of tranches) {
    if (reste <= 0) break;
    const m = Math.min(reste, t.plafond - bas);
    total += m * t.taux;
    reste -= m;
    bas = t.plafond;
  }
  return total;
}

export type ResultatSuccession = {
  part: number;
  abattement: number;
  baseImposable: number;
  droits: number;
  net: number;
  exonere: boolean;
};

export function calculerSuccession(
  montant: number,
  lien: LienParente
): ResultatSuccession {
  const part = Math.max(0, Math.round(montant) || 0);

  if (lien === "conjoint") {
    return { part, abattement: part, baseImposable: 0, droits: 0, net: part, exonere: true };
  }

  const abattement = Math.min(part, ABATTEMENTS[lien]);
  const base = Math.max(0, part - abattement);

  let droits = 0;
  if (lien === "ligne_directe") droits = appliquerBareme(base, BAREME_DIRECT);
  else if (lien === "frere_soeur") droits = appliquerBareme(base, BAREME_FRERE);
  else if (lien === "neveu_niece") droits = base * 0.55;
  else droits = base * 0.6;

  return { part, abattement, baseImposable: base, droits, net: part - droits, exonere: false };
}

// =====================  2. PLUS-VALUE IMMOBILIÈRE  ===========================

function tauxAbattementIR(annees: number): number {
  if (annees <= 5) return 0;
  let a = (Math.min(annees, 21) - 5) * 0.06; // 6e à 21e année : 6 %/an
  if (annees >= 22) a += 0.04; // 22e année : 4 %
  return Math.min(1, a); // exonération d'IR au-delà de 22 ans
}

function tauxAbattementPS(annees: number): number {
  if (annees <= 5) return 0;
  let a = (Math.min(annees, 21) - 5) * 0.0165; // 6e à 21e : 1,65 %/an
  if (annees >= 22) a += 0.016; // 22e : 1,60 %
  if (annees >= 23) a += (Math.min(annees, 30) - 22) * 0.09; // 23e à 30e : 9 %/an
  return Math.min(1, a); // exonération de PS au-delà de 30 ans
}

export type ResultatPlusValue = {
  plusValueBrute: number;
  abattementIR: number;
  abattementPS: number;
  impotIR: number;
  prelevementsSociaux: number;
  total: number;
  net: number;
  exonere: boolean;
};

export function calculerPlusValue(
  prixAchat: number,
  prixVente: number,
  annees: number,
  residencePrincipale: boolean
): ResultatPlusValue {
  const pv = Math.max(0, (prixVente || 0) - (prixAchat || 0));

  if (residencePrincipale) {
    return {
      plusValueBrute: pv,
      abattementIR: 0,
      abattementPS: 0,
      impotIR: 0,
      prelevementsSociaux: 0,
      total: 0,
      net: pv,
      exonere: true,
    };
  }

  const abIR = tauxAbattementIR(annees);
  const abPS = tauxAbattementPS(annees);
  const impotIR = pv * (1 - abIR) * 0.19; // impôt sur le revenu : 19 %
  const ps = pv * (1 - abPS) * 0.172; // prélèvements sociaux : 17,2 %
  const total = impotIR + ps;

  return {
    plusValueBrute: pv,
    abattementIR: abIR,
    abattementPS: abPS,
    impotIR,
    prelevementsSociaux: ps,
    total,
    net: pv - total,
    exonere: false,
  };
}

// =====================  3. CAPACITÉ D'EMPRUNT  ===============================

export type ResultatCapacite = {
  mensualiteMax: number;
  montantEmpruntable: number;
  coutInterets: number;
  budgetTotal: number;
};

export function calculerCapacite(
  revenusMensuels: number,
  chargesMensuelles: number,
  tauxAnnuel: number,
  dureeAnnees: number,
  apport: number,
  tauxEndettement = 0.35
): ResultatCapacite {
  const mensualiteMax = Math.max(
    0,
    (revenusMensuels || 0) * tauxEndettement - (chargesMensuelles || 0)
  );
  const n = (dureeAnnees || 0) * 12;
  const i = (tauxAnnuel || 0) / 100 / 12;

  let montant = 0;
  if (n > 0) {
    montant =
      i > 0 ? (mensualiteMax * (1 - Math.pow(1 + i, -n))) / i : mensualiteMax * n;
  }

  const coutInterets = Math.max(0, mensualiteMax * n - montant);
  const budgetTotal = montant + (apport || 0);

  return { mensualiteMax, montantEmpruntable: montant, coutInterets, budgetTotal };
}
