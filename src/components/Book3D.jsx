import { useState, useRef, useCallback } from 'react';

/* ─────────────────────────────────────────
   Carte produit — mobile-first
───────────────────────────────────────── */
function ProduitCard({ produit, onAdd, lang, isMobile }) {
  const [qty, setQty] = useState(0);
  const L = lang === 'en' ? { add: 'Order' } : { add: 'Ajouter' };

  const handleAdd = () => {
    if (qty === 0) return;
    onAdd({ ...produit, prix_unit: produit.prix, quantite: qty });
    setQty(0);
  };

  if (isMobile) {
    // ── CARTE MOBILE pleine largeur ──
    return (
      <div style={{
        display: 'flex', gap: 12, padding: '12px 14px',
        background: '#FFFFFF', borderRadius: 14,
        marginBottom: 10, alignItems: 'center',
        boxShadow: '0 2px 10px rgba(61,82,38,0.06)',
        border: '1px solid rgba(139,195,74,0.1)',
      }}>
        {/* Image */}
        <div style={{
          width: 64, height: 64, borderRadius: 12, overflow: 'hidden', flexShrink: 0,
          background: '#F0F8E8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {produit.image_url
            ? <img src={produit.image_url} alt={produit.nom}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span style={{ fontSize: 26 }}>🍽️</span>}
        </div>

        {/* Infos */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 15, fontWeight: 700, color: '#3D5226',
            lineHeight: 1.3, marginBottom: 2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{produit.nom}</p>
          {produit.description && (
            <p style={{ fontSize: 12, color: '#8A9B6E', lineHeight: 1.4, marginBottom: 4,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {produit.description}
            </p>
          )}
          <p style={{ fontSize: 16, fontWeight: 800, color: '#5A7038' }}>
            {Number(produit.prix).toFixed(2)}<span style={{ fontSize: 11, fontWeight: 500 }}> €</span>
          </p>
        </div>

        {/* Contrôles quantité */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{
              width: 30, height: 30, borderRadius: '50%',
              border: '1.5px solid rgba(139,195,74,0.4)',
              background: '#F0F8E8', color: '#3D5226',
              fontSize: 18, fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              touchAction: 'manipulation',
            }}>−</button>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#3D5226', minWidth: 20, textAlign: 'center' }}>
              {qty}
            </span>
            <button onClick={() => setQty(q => q + 1)} style={{
              width: 30, height: 30, borderRadius: '50%',
              border: 'none', background: '#FDD835', color: '#3D5226',
              fontSize: 18, fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              touchAction: 'manipulation',
            }}>+</button>
          </div>
          {qty > 0 && (
            <button onClick={handleAdd} style={{
              background: 'linear-gradient(135deg, #8BC34A, #FDD835)', color: '#FFFFFF',
              border: 'none', borderRadius: 8,
              padding: '6px 14px', fontSize: 12, fontWeight: 700,
              cursor: 'pointer', whiteSpace: 'nowrap', touchAction: 'manipulation',
              boxShadow: '0 3px 8px rgba(139,195,74,0.3)',
            }}>✓ {L.add}</button>
          )}
        </div>
      </div>
    );
  }

  // ── CARTE DESKTOP (dans le livre) ──
  return (
    <div style={{
      display: 'flex', gap: 10,
      padding: '10px 0',
      borderBottom: '1px solid rgba(61,82,38,0.12)',
      alignItems: 'center',
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 8, overflow: 'hidden', flexShrink: 0,
        background: 'rgba(61,82,38,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {produit.image_url
          ? <img src={produit.image_url} alt={produit.nom}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ fontSize: 22 }}>🍽️</span>}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 13, fontWeight: 700, color: '#3D5226',
          lineHeight: 1.3, marginBottom: 1,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{produit.nom}</p>
        {produit.description && (
          <p style={{ fontSize: 10, color: '#8A9B6E', lineHeight: 1.3, marginBottom: 2 }}>
            {produit.description.length > 45 ? produit.description.slice(0, 45) + '…' : produit.description}
          </p>
        )}
        <p style={{ fontSize: 14, fontWeight: 800, color: '#3D5226' }}>
          {Number(produit.prix).toFixed(2)}<span style={{ fontSize: 9, fontWeight: 500 }}> €</span>
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{
            width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #3D5226',
            background: 'transparent', color: '#3D5226',
            fontSize: 13, fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation',
          }}>−</button>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#3D5226', minWidth: 14, textAlign: 'center' }}>
            {qty}
          </span>
          <button onClick={() => setQty(q => q + 1)} style={{
            width: 22, height: 22, borderRadius: '50%', border: 'none',
            background: '#FDD835', color: '#3D5226',
            fontSize: 13, fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation',
          }}>+</button>
        </div>
        {qty > 0 && (
          <button onClick={handleAdd} style={{
            background: 'linear-gradient(135deg, #FDD835, #8BC34A)', color: '#FFFFFF',
            border: 'none', borderRadius: 5,
            padding: '3px 7px', fontSize: 9, fontWeight: 700,
            cursor: 'pointer', whiteSpace: 'nowrap', touchAction: 'manipulation',
          }}>✓ {L.add}</button>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Contenu d'une face de page (desktop book)
───────────────────────────────────────── */
function PageContent({ produits, categorie, pageNum, totalPages, onAdd, lang, side, isMobile }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: side === 'left'
        ? 'linear-gradient(to left, #F0F8E8, #FFFFFF)'
        : 'linear-gradient(to right, #F0F8E8, #FFFFFF)',
      padding: '18px 14px 10px',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
      boxShadow: side === 'left'
        ? 'inset -5px 0 15px rgba(61,82,38,0.06)'
        : 'inset 5px 0 15px rgba(61,82,38,0.06)',
    }}>
      {/* Lignes cahier */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, rgba(61,82,38,0.04) 24px, rgba(61,82,38,0.04) 25px)',
        backgroundPositionY: '44px',
      }} />

      {/* En-tête catégorie */}
      {categorie && (
        <div style={{
          borderBottom: '2px solid rgba(139,195,74,0.3)',
          marginBottom: 10, paddingBottom: 7,
          display: 'flex', alignItems: 'center', gap: 5,
          position: 'relative',
        }}>
          <span style={{ fontSize: 16 }}>{categorie.emoji || '🍽️'}</span>
          <span style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 15, fontWeight: 700, color: '#3D5226',
          }}>{categorie.nom}</span>
        </div>
      )}

      {/* Produits */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {produits.map(p => (
          <ProduitCard key={p.id} produit={p} onAdd={onAdd} lang={lang} isMobile={false} />
        ))}
      </div>

      {/* Numéro de page */}
      <p style={{
        textAlign: side === 'left' ? 'left' : 'right',
        fontSize: 9, color: 'rgba(61,82,38,0.3)',
        fontStyle: 'italic', marginTop: 4,
        fontFamily: "'Playfair Display',serif",
        position: 'relative',
      }}>{pageNum} / {totalPages}</p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Page animée (desktop)
───────────────────────────────────────── */
function FlippingPage({ flipping, flipDir, fromPage, toPage, onAdd, lang, totalPages, spreadIndex, isMobile }) {
  if (!flipping) return null;
  return (
    <div style={{
      position: 'absolute', width: '50%', top: 0, bottom: 0,
      [flipDir === 'next' ? 'right' : 'left']: 0,
      transformOrigin: flipDir === 'next' ? 'left center' : 'right center',
      transformStyle: 'preserve-3d', zIndex: 20,
      animation: `pageFlip 0.65s cubic-bezier(0.645,0.045,0.355,1.000) forwards`,
    }}>
      <style>{`
        @keyframes pageFlip {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(${flipDir === 'next' ? '-180deg' : '180deg'}); }
        }
      `}</style>
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
        borderRadius: flipDir === 'next' ? '0 8px 8px 0' : '8px 0 0 8px',
      }}>
        {fromPage && <PageContent produits={fromPage.produits} categorie={fromPage.categorie}
          pageNum={flipDir === 'next' ? spreadIndex * 2 + 2 : spreadIndex * 2 + 1}
          totalPages={totalPages} onAdd={onAdd} lang={lang}
          side={flipDir === 'next' ? 'right' : 'left'} isMobile={false} />}
      </div>
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
        transform: 'rotateY(180deg) scaleX(-1)',
        borderRadius: flipDir === 'next' ? '8px 0 0 8px' : '0 8px 8px 0',
      }}>
        {toPage && <PageContent produits={toPage.produits} categorie={toPage.categorie}
          pageNum={flipDir === 'next' ? spreadIndex * 2 + 3 : spreadIndex * 2}
          totalPages={totalPages} onAdd={onAdd} lang={lang}
          side={flipDir === 'next' ? 'left' : 'right'} isMobile={false} />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Book3D principal — mobile-first
───────────────────────────────────────── */
export default function Book3D({ pages, onAdd, lang, isMobile }) {
  const [spread, setSpread]         = useState(0);
  const [flipping, setFlipping]     = useState(false);
  const [flipDir, setFlipDir]       = useState(null);
  const [nextSpread, setNextSpread] = useState(0);
  const [activeCat, setActiveCat]   = useState(0);
  const totalSpreads = Math.ceil(pages.length / 2);

  const leftPage  = pages[spread * 2]     || null;
  const rightPage = pages[spread * 2 + 1] || null;

  const flip = useCallback((dir) => {
    if (flipping) return;
    if (dir === 'next' && spread >= totalSpreads - 1) return;
    if (dir === 'prev' && spread <= 0) return;

    const next = dir === 'next' ? spread + 1 : spread - 1;
    setFlipDir(dir); setNextSpread(next); setFlipping(true);
    setTimeout(() => { setSpread(next); setFlipping(false); setFlipDir(null); }, 650);
  }, [flipping, spread, totalSpreads]);

  // Swipe tactile (desktop)
  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) flip(diff > 0 ? 'next' : 'prev');
    touchStart.current = null;
  };

  if (!pages || pages.length === 0) return (
    <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(61,82,38,0.4)' }}>
      <div style={{ fontSize: 44, marginBottom: 14 }}>📖</div>
      <p style={{ fontSize: 15 }}>Aucun produit disponible</p>
    </div>
  );

  // ═══════════════════════════════════════════
  //  MODE MOBILE — Onglets catégories + liste défilante
  // ═══════════════════════════════════════════
  if (isMobile) {
    // Grouper par catégorie unique
    const categories = [];
    pages.forEach(p => {
      if (!categories.find(c => c.nom === p.categorie?.nom)) {
        categories.push(p.categorie);
      }
    });

    const currentCat = categories[activeCat];
    const currentPages = pages.filter(p => p.categorie?.nom === currentCat?.nom);
    const allProducts = currentPages.flatMap(p => p.produits);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Onglets catégories — scroll horizontal */}
        <div style={{
          display: 'flex', gap: 8, overflowX: 'auto', padding: '0 4px 14px',
          scrollbarWidth: 'none', msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveCat(i)} style={{
              flexShrink: 0,
              padding: '8px 16px', borderRadius: 20,
              background: i === activeCat
                ? 'linear-gradient(135deg, #FDD835, #8BC34A)'
                : '#FFFFFF',
              color: i === activeCat ? '#FFFFFF' : '#5A7038',
              border: i === activeCat ? 'none' : '1px solid rgba(139,195,74,0.2)',
              fontSize: 13, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 5,
              whiteSpace: 'nowrap', touchAction: 'manipulation',
              boxShadow: i === activeCat ? '0 3px 10px rgba(139,195,74,0.3)' : 'none',
              transition: 'all 0.2s',
            }}>
              <span style={{ fontSize: 15 }}>{cat?.emoji || '🍽️'}</span>
              {cat?.nom}
            </button>
          ))}
        </div>

        {/* En-tête catégorie active */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '4px 4px 12px',
        }}>
          <span style={{ fontSize: 22 }}>{currentCat?.emoji || '🍽️'}</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20, fontWeight: 800, color: '#3D5226',
          }}>{currentCat?.nom}</h2>
          <span style={{
            fontSize: 12, color: '#8A9B6E', fontWeight: 500,
          }}>{allProducts.length} {lang === 'en' ? 'items' : 'articles'}</span>
        </div>

        {/* Liste produits — défilement naturel */}
        <div style={{ paddingBottom: 80 }}>
          {allProducts.map(p => (
            <ProduitCard key={p.id} produit={p} onAdd={onAdd} lang={lang} isMobile={true} />
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  //  MODE DESKTOP — Livre 3D double page
  // ═══════════════════════════════════════════
  const nextLeftPage  = pages[nextSpread * 2]     || null;
  const nextRightPage = pages[nextSpread * 2 + 1] || null;
  const flippingFromPage = flipDir === 'next' ? rightPage : leftPage;
  const flippingToPage   = flipDir === 'next' ? nextLeftPage : nextRightPage;
  const bookHeight = 520;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        style={{ width: '100%', maxWidth: 820, perspective: '2500px', userSelect: 'none' }}>
        <div style={{
          display: 'flex', height: bookHeight, position: 'relative',
          boxShadow: '0 20px 50px rgba(61,82,38,0.12), 0 8px 16px rgba(61,82,38,0.08)',
          borderRadius: '4px 14px 14px 4px',
          transformStyle: 'preserve-3d',
        }}>
          {/* Reliure */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 8,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, #EDE9D8, #C5E1A5, #EDE9D8)',
            zIndex: 15, boxShadow: '0 0 12px rgba(61,82,38,0.06)',
          }} />

          {/* Page gauche */}
          <div style={{
            flex: 1, overflow: 'hidden', borderRadius: '8px 0 0 8px',
            opacity: flipping && flipDir === 'prev' ? 0 : 1,
          }}>
            {leftPage
              ? <PageContent produits={leftPage.produits} categorie={leftPage.categorie}
                  pageNum={spread * 2 + 1} totalPages={pages.length} onAdd={onAdd} lang={lang} side="left" isMobile={false} />
              : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to left,#F0F8E8,#FFFFFF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'rgba(61,82,38,0.2)', fontSize: 40 }}>✦</span>
                </div>
            }
          </div>

          {/* Page droite */}
          <div style={{
            flex: 1, overflow: 'hidden', borderRadius: '0 8px 8px 0',
            opacity: flipping && flipDir === 'next' ? 0 : 1,
          }}>
            {rightPage
              ? <PageContent produits={rightPage.produits} categorie={rightPage.categorie}
                  pageNum={spread * 2 + 2} totalPages={pages.length} onAdd={onAdd} lang={lang} side="right" isMobile={false} />
              : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right,#F0F8E8,#FFFFFF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'rgba(61,82,38,0.2)', fontSize: 40 }}>✦</span>
                </div>
            }
          </div>

          {/* Pages du spread suivant en fond */}
          {flipping && (
            <>
              {flipDir === 'next' && nextLeftPage && (
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', overflow: 'hidden', borderRadius: '8px 0 0 8px', zIndex: 5 }}>
                  <PageContent produits={nextLeftPage.produits} categorie={nextLeftPage.categorie}
                    pageNum={nextSpread * 2 + 1} totalPages={pages.length} onAdd={onAdd} lang={lang} side="left" isMobile={false} />
                </div>
              )}
              {flipDir === 'prev' && nextRightPage && (
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', overflow: 'hidden', borderRadius: '0 8px 8px 0', zIndex: 5 }}>
                  <PageContent produits={nextRightPage.produits} categorie={nextRightPage.categorie}
                    pageNum={nextSpread * 2 + 2} totalPages={pages.length} onAdd={onAdd} lang={lang} side="right" isMobile={false} />
                </div>
              )}
            </>
          )}

          {/* Page animée */}
          <FlippingPage
            flipping={flipping} flipDir={flipDir}
            fromPage={flippingFromPage} toPage={flippingToPage}
            onAdd={onAdd} lang={lang}
            totalPages={pages.length} spreadIndex={spread} isMobile={false}
          />
        </div>
      </div>

      {/* Navigation desktop */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <button onClick={() => flip('prev')} disabled={spread === 0 || flipping} style={{
          width: 46, height: 46, borderRadius: '50%',
          background: spread === 0 ? 'rgba(255,255,255,0.3)' : 'linear-gradient(135deg, #FDD835, #8BC34A)',
          border: 'none', color: spread === 0 ? 'rgba(61,82,38,0.2)' : '#FFFFFF',
          fontSize: 22, cursor: spread === 0 ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: spread === 0 ? 'none' : '0 4px 14px rgba(139,195,74,0.3)',
        }}>‹</button>

        <div style={{ display: 'flex', gap: 7 }}>
          {Array.from({ length: totalSpreads }).map((_, i) => (
            <div key={i} onClick={() => !flipping && setSpread(i)} style={{
              width: i === spread ? 22 : 7, height: 7, borderRadius: 4,
              background: i === spread ? '#8BC34A' : 'rgba(139,195,74,0.2)',
              transition: 'all 0.3s', cursor: 'pointer',
            }} />
          ))}
        </div>

        <button onClick={() => flip('next')} disabled={spread >= totalSpreads - 1 || flipping} style={{
          width: 46, height: 46, borderRadius: '50%',
          background: spread >= totalSpreads - 1 ? 'rgba(255,255,255,0.3)' : 'linear-gradient(135deg, #FDD835, #8BC34A)',
          border: 'none', color: spread >= totalSpreads - 1 ? 'rgba(61,82,38,0.2)' : '#FFFFFF',
          fontSize: 22, cursor: spread >= totalSpreads - 1 ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: spread >= totalSpreads - 1 ? 'none' : '0 4px 14px rgba(139,195,74,0.3)',
        }}>›</button>
      </div>

      <p style={{ fontSize: 11, color: 'rgba(139,195,74,0.4)', fontStyle: 'italic' }}>
        ← Glissez pour tourner les pages →
      </p>
    </div>
  );
}
