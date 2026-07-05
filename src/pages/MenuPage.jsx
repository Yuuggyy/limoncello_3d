import { useState, useEffect } from 'react';
import { getCategories, getProduits, appelServeur, getParametres } from '../lib/supabase';
import Book3D from '../components/Book3D';
import Panier from '../components/Panier';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return isMobile;
}

const ITEMS_PER_PAGE = 6;

const T = {
  fr: {
    titre: 'Notre Menu', chargement: 'Chargement…',
    panier: 'Commande', appelServeur: '🔔 Serveur',
    appelServeurFull: '🔔 Appeler le serveur',
    tableModal: 'Votre numéro de table ?',
    tablePh: 'Ex: 5, Bar, Terrasse…',
    envoyer: 'Appeler', annuler: 'Annuler',
    appelOk: '🔔 Le serveur arrive !',
    errTable: 'Indiquez votre numéro de table.',
    errAppel: "Erreur: impossible d'appeler le serveur.",
  },
  en: {
    titre: 'Our Menu', chargement: 'Loading…',
    panier: 'Order', appelServeur: '🔔 Waiter',
    appelServeurFull: '🔔 Call waiter',
    tableModal: 'Your table number?',
    tablePh: 'e.g. 5, Bar, Terrace…',
    envoyer: 'Call', annuler: 'Cancel',
    appelOk: '🔔 Waiter is coming!',
    errTable: 'Please enter your table number.',
    errAppel: 'Error: could not call the waiter. Try again.',
  },
};

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [lang, setLang]             = useState('fr');
  const [panier, setPanier]         = useState([]);
  const [showPanier, setShowPanier] = useState(false);
  const [showAppel, setShowAppel]   = useState(false);
  const [tableAppel, setTableAppel] = useState('');
  const [errAppel, setErrAppel]     = useState('');
  const [toast, setToast]           = useState('');
  const [appelLoading, setAppelLoading] = useState(false);
  const [parametres, setParametres] = useState(null);

  const isMobile = useIsMobile();
  const L = T[lang];

  useEffect(() => {
    Promise.all([getCategories(), getProduits(), getParametres()]).then(([cats, prods, params]) => {
      setCategories(cats.data || []);
      setProduits(prods.data || []);
      setParametres(params.data || null);
      setLoading(false);
    });
  }, []);

  const buildPages = () => {
    const pages = [];
    categories.forEach(cat => {
      const catProds = produits.filter(p => p.categorie_id === cat.id);
      if (!catProds.length) return;
      for (let i = 0; i < catProds.length; i += ITEMS_PER_PAGE) {
        pages.push({ categorie: cat, produits: catProds.slice(i, i + ITEMS_PER_PAGE) });
      }
    });
    const sansCat = produits.filter(p => !p.categorie_id);
    if (sansCat.length > 0) {
      for (let i = 0; i < sansCat.length; i += ITEMS_PER_PAGE) {
        pages.push({ categorie: { nom: 'Autres', emoji: '🍽️' }, produits: sansCat.slice(i, i + ITEMS_PER_PAGE) });
      }
    }
    return pages;
  };

  const handleAdd = (produit) => {
    setPanier(prev => {
      const idx = prev.findIndex(i => i.id === produit.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantite: next[idx].quantite + produit.quantite };
        return next;
      }
      return [...prev, { ...produit }];
    });
    showToast(`✓ ${produit.nom} ajouté`);
  };

  const handleUpdateQty = (idx, delta) => {
    setPanier(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], quantite: next[idx].quantite + delta };
      if (next[idx].quantite <= 0) next.splice(idx, 1);
      return next;
    });
  };

  const handleConfirm = (msg) => {
    setPanier([]); setShowPanier(false); showToast(msg);
  };

  const handleAppelServeur = async () => {
    if (!tableAppel.trim()) { setErrAppel(L.errTable); return; }
    setAppelLoading(true); setErrAppel('');
    const { error } = await appelServeur(tableAppel.trim());
    setAppelLoading(false);
    if (error) {
      setErrAppel(L.errAppel);
      return;
    }
    setShowAppel(false); setTableAppel('');
    showToast(L.appelOk);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const pages = buildPages();
  const totalItems = panier.reduce((s, i) => s + i.quantite, 0);

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>

      {/* ══ HEADER ══ */}
      <header style={{
        padding: isMobile ? '14px 20px' : '20px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid #F0F0F0',
        background: '#FFFFFF',
        position: 'sticky', top: 0, zIndex: 100,
        gap: 12,
      }}>
        {/* Nom du restaurant */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          {parametres?.logo_url && (
            <img src={parametres.logo_url} alt="Logo"
              style={{
                width: isMobile ? 34 : 42, height: isMobile ? 34 : 42,
                borderRadius: '50%', objectFit: 'cover', flexShrink: 0,
              }} />
          )}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? 22 : 28,
            fontWeight: 700,
            color: '#1A1A1A',
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            margin: 0,
          }}>{parametres?.nom_restaurant || L.titre}</h1>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12 }}>
          <button onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')} style={{
            background: 'transparent', border: '1px solid #E0E0E0',
            color: '#666', borderRadius: 8,
            padding: isMobile ? '6px 10px' : '8px 14px',
            fontSize: isMobile ? 12 : 13, fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>{lang === 'fr' ? '🇬🇧' : '🇫🇷'}</button>

          <button onClick={() => setShowAppel(true)} style={{
            background: 'transparent', border: '1px solid #E0E0E0',
            color: '#666', borderRadius: 8,
            padding: isMobile ? '6px 12px' : '8px 16px',
            fontSize: isMobile ? 12 : 13, fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>{isMobile ? '🔔' : L.appelServeurFull}</button>

          <button onClick={() => setShowPanier(true)} style={{
            background: totalItems > 0 ? '#1A1A1A' : 'transparent',
            border: totalItems > 0 ? 'none' : '1px solid #E0E0E0',
            color: totalItems > 0 ? '#FFFFFF' : '#666',
            borderRadius: 8,
            padding: isMobile ? '6px 14px' : '8px 18px',
            fontSize: isMobile ? 12 : 13, fontWeight: 700, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6,
            whiteSpace: 'nowrap',
          }}>
            🛒 {!isMobile && L.panier}
            {totalItems > 0 && (
              <span style={{
                background: isMobile ? '#FDD835' : 'rgba(255,255,255,0.25)',
                color: isMobile ? '#1A1A1A' : '#FFFFFF',
                borderRadius: '50%',
                minWidth: isMobile ? 18 : 20, height: isMobile ? 18 : 20,
                padding: '0 5px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isMobile ? 10 : 11, fontWeight: 800,
              }}>{totalItems}</span>
            )}
          </button>
        </div>
      </header>

      {/* ══ CONTENU ══ */}
      <main style={{
        flex: 1,
        padding: isMobile ? '20px 16px 80px' : '32px 24px 60px',
        maxWidth: 960, width: '100%', margin: '0 auto',
        boxSizing: 'border-box',
      }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '80px 0' }}>
            <div className="spinner" />
            <p style={{ color: '#999', fontSize: 14 }}>{L.chargement}</p>
          </div>
        ) : (
          <Book3D pages={pages} onAdd={handleAdd} lang={lang} isMobile={isMobile} />
        )}
      </main>

      {/* ══ FOOTER ══ */}
      {!loading && parametres && (parametres.adresse || parametres.telephone) && (
        <footer style={{
          borderTop: '1px solid #F0F0F0',
          padding: isMobile ? '20px 16px 90px' : '28px 24px 40px',
          textAlign: 'center',
          color: '#999',
          fontSize: isMobile ? 12 : 13,
          maxWidth: 960, width: '100%', margin: '0 auto',
        }}>
          {parametres.adresse && <p style={{ marginBottom: 6, color: '#666' }}>{parametres.adresse}</p>}
          {parametres.horaires && <p style={{ marginBottom: 6 }}>{parametres.horaires}</p>}
          {parametres.telephone && (
            <p style={{ color: '#666' }}>
              {parametres.telephone}
              {parametres.whatsapp && (
                <a href={`https://wa.me/${parametres.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#1A1A1A', marginLeft: 10, textDecoration: 'none', fontWeight: 600 }}>
                  WhatsApp
                </a>
              )}
            </p>
          )}
        </footer>
      )}

      {/* ══ PANIER ══ */}
      {showPanier && (
        <Panier
          items={panier}
          onUpdateQty={handleUpdateQty}
          onRemove={(idx) => setPanier(prev => prev.filter((_, i) => i !== idx))}
          onClose={() => setShowPanier(false)}
          onConfirm={handleConfirm}
          lang={lang}
          isMobile={isMobile}
        />
      )}

      {/* ══ MODAL APPEL SERVEUR ══ */}
      {showAppel && (
        <div className="modal-overlay" onClick={() => setShowAppel(false)}>
          <div className="modal"
            style={{ maxWidth: isMobile ? '92vw' : 420 }}
            onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: isMobile ? 36 : 44, marginBottom: 10 }}>🔔</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? 18 : 22, color: '#1A1A1A',
                margin: 0,
              }}>{L.tableModal}</h2>
            </div>
            <div style={{ marginBottom: 16 }}>
              <input className="input" value={tableAppel}
                onChange={e => { setTableAppel(e.target.value); setErrAppel(''); }}
                placeholder={L.tablePh}
                onKeyDown={e => e.key === 'Enter' && handleAppelServeur()}
                autoFocus
                style={{ fontSize: isMobile ? 16 : 15 }}
              />
              {errAppel && <p style={{ color: '#e63946', fontSize: 12, marginTop: 6 }}>⚠️ {errAppel}</p>}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-outline" onClick={() => setShowAppel(false)}
                style={{ flex: 1, padding: isMobile ? 14 : 12, fontSize: isMobile ? 15 : 14 }}>
                {L.annuler}
              </button>
              <button className="btn btn-dark" onClick={handleAppelServeur} disabled={appelLoading}
                style={{ flex: 1, padding: isMobile ? 14 : 12, fontSize: isMobile ? 15 : 14 }}>
                {appelLoading ? '⏳…' : L.envoyer}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ TOAST ══ */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: isMobile ? 20 : 30, left: '50%',
          transform: 'translateX(-50%)',
          background: '#1A1A1A', color: '#FFFFFF',
          padding: '12px 24px', borderRadius: 12,
          fontSize: 14, fontWeight: 500, zIndex: 200,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          animation: 'modalIn 0.3s ease',
        }}>{toast}</div>
      )}
    </div>
  );
}
