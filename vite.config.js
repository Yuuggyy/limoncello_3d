import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const FALLBACK_TITLE = 'Menu Digital';
const FALLBACK_DESC = 'Découvrez notre menu et commandez directement en ligne.';
const FALLBACK_FAVICON = '/favicon.svg';

// Injecte le logo, le nom du restaurant et les métadonnées Open Graph
// directement dans index.html à chaque build/dev, en lisant la table
// `parametres` de Supabase. Le favicon (onglet navigateur) et l'aperçu
// de lien (WhatsApp, Facebook...) restent toujours à jour avec ce qui
// est configuré dans l'admin — sans jamais toucher le code à la main.
function metaInjectionPlugin() {
  return {
    name: 'inject-restaurant-meta',
    transformIndexHtml(html) {
      // Paramètres lus depuis le snapshot exporté par le backend Django
      let nom = FALLBACK_TITLE;
      let logo = FALLBACK_FAVICON;
      try {
        const snap = require('./src/lib/menu_snapshot.json');
        if (snap?.parametres?.nom_restaurant) nom = snap.parametres.nom_restaurant;
        if (snap?.parametres?.logo_url) logo = snap.parametres.logo_url;
      } catch (e) { /* fallback */ }
      const title = `${nom} - Menu`;
      return html
        .replaceAll('__TITLE__', title)
        .replaceAll('__OG_TITLE__', title)
        .replaceAll('__OG_DESC__', FALLBACK_DESC)
        .replaceAll('__OG_IMAGE__', logo)
        .replaceAll('__FAVICON_URL__', logo);
    },
  };
}

export default defineConfig({
  plugins: [react(), metaInjectionPlugin()],
  server: { port: 3001 },
});
