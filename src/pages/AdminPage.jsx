import { useEffect, useState } from 'react';
import { getAdminUrl, isBackendOnline } from '../lib/api';

const C = {
  gold: '#C8B800', goldDeep: '#6B5A00', cream: '#FFFEF5',
  dark: '#1A1A00', darkSoft: 'rgba(26,26,0,0.55)', border: 'rgba(200,184,0,0.20)',
};

export default function AdminPage() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setChecked(true), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: '100vh', background: C.cream,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div style={{
        maxWidth: 460, width: '100%', textAlign: 'center',
        border: `1px solid ${C.border}`, borderRadius: 18, padding: '40px 28px',
        background: '#fff', boxShadow: '0 20px 60px rgba(26,26,0,0.10)',
      }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🍋</div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 28, color: C.dark, margin: '0 0 8px',
        }}>Back-office Limoncello</h1>
        <p style={{ color: C.darkSoft, fontSize: 14, lineHeight: 1.6, margin: '0 0 24px' }}>
          La gestion administrative est désormais assurée par le <strong>backend Django</strong>
          (produits, catégories, commandes, appels serveur, paramètres).
        </p>
        <a href={getAdminUrl() || '/admin/'}
           style={{
             display: 'inline-block', padding: '12px 28px', borderRadius: 999,
             background: `linear-gradient(135deg, ${C.gold}, #E0CF30)`,
             color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: 14,
           }}>
          Ouvrir l'administration Django →
        </a>
        {checked && !isBackendOnline() && (
          <p style={{ color: C.darkSoft, fontSize: 12.5, marginTop: 20 }}>
            Le backend Django n'est pas joignable depuis cette version statique.
            Déployez le backend (voir <code>README</code> du repo) puis reconnectez-vous.
          </p>
        )}
      </div>
    </div>
  );
}
