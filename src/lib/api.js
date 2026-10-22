/**
 * API Django — remplace le client Supabase.
 * Mêmes signatures / formes de réponse ({ data, error }) que l'ancien
 * module, pour ne rien changer au reste de l'application.
 *
 * Si l'API n'est pas joignable (front statique sans backend),
 * on retombe sur le snapshot du menu exporté par Django
 * (menu_snapshot.json) : la maquette affiche toujours le vrai menu.
 */
import snapshot from './menu_snapshot.json';

const API_BASE = import.meta.env.VITE_API_BASE || '';
const TIMEOUT_MS = 4000;

let online = null; // null = inconnu, true/false sinon

async function api(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/api${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
      signal: controller.signal,
    });
    online = true;
    return { ok: res.ok, json: await res.json().catch(() => null) };
  } catch (e) {
    online = false;
    return { ok: false, json: null };
  } finally {
    clearTimeout(timer);
  }
}

/* ── Produits & Catégories ── */
export async function getCategories() {
  const r = await api('/categories/');
  if (r.ok && r.json) return { data: r.json.data, error: null };
  return { data: snapshot.categories, error: null };
}

export async function getProduits() {
  const r = await api('/produits/');
  if (r.ok && r.json) return { data: r.json.data, error: null };
  return { data: snapshot.produits, error: null };
}

export async function getProduitsByCategorie(catId) {
  const { data, error } = await getProduits();
  return { data: (data || []).filter(p => p.categorie_id === catId), error };
}

/* ── Paramètres (logo / nom restaurant) ── */
export async function getParametres() {
  const r = await api('/parametres/');
  if (r.ok && r.json) return { data: r.json.data, error: null };
  return { data: snapshot.parametres, error: null };
}

/* ── Commandes ── */
export async function createCommande(numeroTable, items, demandesSpeciales) {
  const r = await api('/commandes/', {
    method: 'POST',
    body: JSON.stringify({
      numero_table: numeroTable,
      demandes_speciales: demandesSpeciales || null,
      items: items.map(i => ({ id: i.id, nom: i.nom, prix_unit: i.prix_unit, quantite: i.quantite })),
    }),
  });
  if (r.ok && r.json && !r.json.error) return { data: r.json.data, error: null };

  // Backend injoignable : on garde la commande en local (file d'attente)
  // pour ne jamais perdre une commande de table.
  const locales = JSON.parse(localStorage.getItem('limoncello-commandes-locale') || '[]');
  const local = {
    numero_table: numeroTable,
    items, demandes_speciales: demandesSpeciales || null,
    montant_total: items.reduce((s, i) => s + i.prix_unit * i.quantite, 0),
    created_at: new Date().toISOString(),
    en_attente: true,
  };
  locales.push(local);
  localStorage.setItem('limoncello-commandes-locale', JSON.stringify(locales));
  return {
    data: { ...local, hors_ligne: true },
    error: null,
    horsLigne: true,
  };
}

/* ── Appel serveur ── */
export async function appelServeur(numeroTable) {
  const r = await api('/appels/', {
    method: 'POST',
    body: JSON.stringify({ numero_table: numeroTable }),
  });
  if (r.ok && r.json && !r.json.error) return { data: r.json.data, error: null };
  return { data: null, error: "Backend injoignable — l'appel sera transmis à la reconnexion." };
}

/* ── Infos de connexion ── */
export const isBackendOnline = () => online === true;
export const getAdminUrl = () => `${API_BASE}/admin/`;
