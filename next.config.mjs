/** @type {import('next').NextConfig} */

// En production sur GitHub Pages, le site est servi sous /sitealban.
// En local (npm run dev), aucun basePath n'est appliqué.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "sitealban";

const nextConfig = {
  reactStrictMode: true,
  // Export statique : génère un dossier `out/` servable par GitHub Pages.
  output: "export",
  // Pas d'optimisation d'images côté serveur (incompatible avec l'export).
  images: { unoptimized: true },
  // Préfixe d'URL pour un site de projet GitHub Pages (nyokaa.github.io/sitealban).
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  // Rend le basePath disponible côté composants (pour les images dans /public).
  env: { NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repo}` : "" },
  // Génère des dossiers avec index.html (URLs propres sur Pages).
  trailingSlash: true,
};

export default nextConfig;
