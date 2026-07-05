import { useState, useRef, useCallback } from 'react';

/* ─────────────────────────────────────────
   Carte produit — épuré, minimal
───────────────────────────────────────── */
function ProduitCard({ produit, onAdd, lang, isMobile }) {
  const [qty, setQty] = useState(0);
  const L = lang === 'en' ? { add: 'Add' } : { add: 'Ajouter' };

  const handleAdd = () => {
    if (qty === 0) return;
    onAdd({ ...produit, prix_unit: produit.prix, quantite: qty });
    setQty(0);
  };

  if (isMobile) {
    return (
      <div style={{
        display: 'flex', gap: 14, padding: '14px 16px',
        background: '#FFFFFF', borderRadius: 12,
        marginBottom: 10, alignItems: 'center',
        border: '1px solid #F0F0F0',
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: 10, overflow: 'hidden', flexShrink: 0,
          background: '#FAFAFA',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {produit.image_url
            ? <img src={produit.image_url} alt={produit.nom}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span style={{ fontSize: 24 }}>🍽️</span>}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 15, fontWeight: 600, color: '#1A1A1A',
            lineHeight: 1.3, marginBottom: 3,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{produit.nom}</p>
          {produit.description && (
            <p style={{ fontSize: 12, color: '#999', lineHeight: 1.4, marginBottom: 5,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {produit.description}
            </p>
          )}
          <p style={{ fontSize: 16, fontWeight: 700, color: '#1A1A1A' }}>
            {Number(produit.prix).toFixed(2)}<span style={{ fontSize: 11, fontWeight: 400, color: '#999' }}> €</span>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{
              width: 30, height: 30, borderRadius: 8,
              border: '1px solid #E0E0E0', background: '#FFFFFF', color: '#1A1A1A',
              fontSize: 18, fontWeight: 400,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              touchAction: 'manipulation',
            }}>−</button>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', minWidth: 20, textAlign: 'center' }}>
              {qty}
            </span>
            <button onClick={() => setQty(q => q + 1)} style={{
              width: 30, height: 30, borderRadius: 8,
              border: 'none', background: '#1A1A1A', color: '#FFFFFF',
              fontSize: 18, fontWeight: 400,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              touchAction: 'manipulation',
            }}>+</button>
          </div>
          {qty > 0 && (
            <button onClick={handleAdd} style={{
              background: '#FDD835', color: '#1A1A1A',
              border: 'none', borderRadius: 8,
              padding: '6px 16px', fontSize: 12, fontWeight: 700,
              cursor: 'pointer', whiteSpace: 'nowrap', touchAction: 'manipulation',
            }}>✓ {L.add}</button>
          )}
        </div>
      </div>
    );
  }

  // Desktop card (in book)
  return (
    <div style={{
      display: 'flex', gap: 12, padding: '12px 0',
      borderBottom: '1px solid #F0F0F0',
      alignItems: 'center',
    }}>
      <div style={{
        width: 50, height: 50, borderRadius: 8, overflow: 'hidden', flexShrink: 0,
        background: '#FAFAFA',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {produit.image_url
          ? <img src={produit.image_url} alt={produit.nom}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ fontSize: 20 }}>🍽️</span>}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 14, fontWeight: 600, color: '#1A1A1A',
          lineHeight: 1.3, marginBottom: 2,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{produit.nom}</p>
        {produit.description && (
          <p style={{ fontSize: 11, color: '#999', lineHeight: 1.3, marginBottom: 3 }}>
            {produit.description.length > 50 ? produit.description.slice(0, 50) + '…' : produit.description}
          </p>
        )}
        <p style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A' }}>
          {Number(produit.prix).toFixed(2)}<span style={{ fontSize: 9, fontWeight: 400, color: '#999' }}> €</span>
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{
            width: 24, height: 24, borderRadius: 6, border: '1px solid #E0E0E0',
            background: '#FFFFFF', color: '#1A1A1A',
            fontSize: 14, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation',
          }}>−</button>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#1A1A1A', minWidth: 14, textAlign: 'center' }}>
            {qty}
          </span>
          <button onClick={() => setQty(q => q + 1)} style={{
            width: 24, height: 24, borderRadius: 6, border: 'none',
            background: '#1A1A1A', color: '#FFFFFF',
            fontSize: 14, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation',
          }}>+</button>
        </div>
        {qty > 0 && (
          <button onClick={handleAdd} style={{
            background: '#FDD835', color: '#1A1A1A',
            border: 'none', borderRadius: 6,
            padding: '4px 10px', fontSize: 10, fontWeight: 700,
            cursor: 'pointer', whiteSpace: 'nowrap', touchAction: 'manipulation',
          }}>✓ {L.add}</button>
        )}
      </div>
    </div>
  );
}

/* ─── Desktop book page content ─── */
function PageContent({ produits, categorie, pageNum, totalPages, onAdd, lang, side }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#FFFFFF',
      padding: '20px 16px 12px',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      {categorie && (
        <div style={{
          borderBottom: '2px solid #1A1A1A',
          marginBottom: 12, paddingBottom: 8,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 18 }}>{categorie.emoji || '🍽️'}</span>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 16, fontWeight: 700, color: '#1A1A1A',
          }}>{categorie.nom}</span>
        </div>
      )}

      <div style={{ flex: 1, overflow: 'hidden' }}>
        {produits.map(p => (
          <ProduitCard key={p.id} produit={p} onAdd={onAdd} lang={lang} isMobile={false} />
        ))}
      </div>

      <p style={{
        textAlign: side === 'left' ? 'left' : 'right',
        fontSize: 10, color: '#CCC',
        marginTop: 6, fontFamily: "'Playfair Display', serif",
      }}>{pageNum} / {totalPages}</p>
    </div>
  );
}

/* ─── Desktop flipping page ─── */
function FlippingPage({ flipping, flipDir, fromPage, toPage, onAdd, lang, totalPages, spreadIndex }) {
  if (!flipping) return null;
  return (
    <div style={{
      position: 'absolute', width: '50%', top: 0, bottom: 0,
      [flipDir === 'next' ? 'right' : 'left']: 0,
      transformOrigin: flipDir === 'next' ? 'left center' : 'right center',
      transformStyle: 'preserve-3d', zIndex: 20,
      animation: `pageFlip 0.6s cubic-bezier(0.4,0,0.2,1) forwards`,
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
        borderRadius: flipDir === 'next' ? '0 10px 10px 0' : '10px 0 0 10px',
      }}>
        {fromPage && <PageContent produits={fromPage.produits} categorie={fromPage.categorie}
          pageNum={flipDir === 'next' ? spreadIndex * 2 + 2 : spreadIndex * 2 + 1}
          totalPages={totalPages} onAdd={onAdd} lang={lang}
          side={flipDir === 'next' ? 'right' : 'left'} />}
      </div>
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
        transform: 'rotateY(180deg) scaleX(-1)',
        borderRadius: flipDir === 'next' ? '10px 0 0 10px' : '0 10px 10px 0',
      }}>
        {toPage && <PageContent produits={toPage.produits} categorie={toPage.categorie}
          pageNum={flipDir === 'next' ? spreadIndex * 2 + 3 : spreadIndex * 2}
          totalPages={totalPages} onAdd={onAdd} lang={lang}
          side={flipDir === 'next' ? 'left' : 'right'} />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Book3D — main component
───────────────────────────────────────── */
export default function Book3D({ pages, onAdd, lang, isMobile }) {
  const [spread, setSpread]         = useState(0);
  const [flipping, setFlipping]     = useState(false);
  const [flipDir, setFlipDir]       = useState(null);
  const [nextSpread, setNextSpread] = useState(0);
  const [activeCat, setActiveCat]   = useState(0);
  const totalSpreads = Math.ceil(pages.length / 2);

  const touchStart = useRef(null);

  const flip = useCallback((dir) => {
    if (flipping) return;
    if (dir === 'next' && spread >= totalSpreads - 1) return;
    if (dir === 'prev' && spread <= 0) return;
    const next = dir === 'next' ? spread + 1 : spread - 1;
    setFlipDir(dir); setNextSpread(next); setFlipping(true);
    setTimeout(() => { setSpread(next); setFlipping(false); setFlipDir(null); }, 600);
  }, [flipping, spread, totalSpreads]);

  if (!pages || pages.length === 0) return (
    <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
      <p style={{ fontSize: 15 }}>Aucun produit disponible</p>
    </div>
  );

  // ═══════════════════════════════════════════
  //  MOBILE — Category tabs + scrollable cards
  // ═══════════════════════════════════════════
  if (isMobile) {
    const categories = [];
    pages.forEach(p => {
      if (!categories.find(c => c.nom === p.categorie?.nom)) {
        categories.push(p.categorie);
      }
    });

    const currentCat = categories[activeCat];
    const currentPages = pages.filter(p => p.categorie?.nom === currentCat?.nom);
    const allProducts = currentPages.flatMap(p => p.produits);

    const onCatTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
    const onCatTouchEnd = (e) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        if (diff > 0 && activeCat < categories.length - 1) setActiveCat(activeCat + 1);
        else if (diff < 0 && activeCat > 0) setActiveCat(activeCat - 1);
      }
      touchStart.current = null;
    };

    return (
      <div
        onTouchStart={onCatTouchStart}
        onTouchEnd={onCatTouchEnd}
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        {/* Category tabs */}
        <div style={{
          display: 'flex', gap: 8, overflowX: 'auto', padding: '0 4px 16px',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveCat(i)} style={{
              flexShrink: 0,
              padding: '8px 18px', borderRadius: 24,
              background: i === activeCat ? '#1A1A1A' : '#FFFFFF',
              color: i === activeCat ? '#FFFFFF' : '#666',
              border: i === activeCat ? 'none' : '1px solid #E0E0E0',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              whiteSpace: 'nowrap', touchAction: 'manipulation',
              transition: 'all 0.2s',
            }}>
              <span style={{ fontSize: 15 }}>{cat?.emoji || '🍽️'}</span>
              {cat?.nom}
            </button>
          ))}
        </div>

        {/* Category indicator dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 12 }}>
          {categories.map((_, i) => (
            <div key={i} style={{
              width: i === activeCat ? 24 : 6, height: 6, borderRadius: 3,
              background: i === activeCat ? '#1A1A1A' : '#E0E0E0',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        {/* Products */}
        <div style={{ paddingBottom: 20 }}>
          {allProducts.map(p => (
            <ProduitCard key={p.id} produit={p} onAdd={onAdd} lang={lang} isMobile={true} />
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  //  DESKTOP — Book layout
  // ═══════════════════════════════════════════
  const leftPage  = pages[spread * 2]     || null;
  const rightPage = pages[spread * 2 + 1] || null;
  const nextLeftPage  = pages[nextSpread * 2]     || null;
  const nextRightPage = pages[nextSpread * 2 + 1] || null;
  const flippingFromPage = flipDir === 'next' ? rightPage : leftPage;
  const flippingToPage   = flipDir === 'next' ? nextLeftPage : nextRightPage;
  const bookHeight = 540;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <div
        onTouchStart={(e) => touchStart.current = e.touches[0].clientX}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) flip(diff > 0 ? 'next' : 'prev');
          touchStart.current = null;
        }}
        style={{ width: '100%', maxWidth: 820, perspective: '2000px', userSelect: 'none' }}
      >
        <div style={{
          display: 'flex', height: bookHeight, position: 'relative',
          boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
          borderRadius: '6px 12px 12px 6px',
          transformStyle: 'preserve-3d',
        }}>
          {/* Spine */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 4,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, #F0F0F0, #E0E0E0, #F0F0F0)',
            zIndex: 15,
          }} />

          {/* Left page */}
          <div style={{
            flex: 1, overflow: 'hidden', borderRadius: '6px 0 0 6px',
            opacity: flipping && flipDir === 'prev' ? 0 : 1,
            background: '#FFFFFF',
          }}>
            {leftPage
              ? <PageContent produits={leftPage.produits} categorie={leftPage.categorie}
                  pageNum={spread * 2 + 1} totalPages={pages.length} onAdd={onAdd} lang={lang} side="left" />
              : <div style={{ width: '100%', height: '100%', background: '#FFFFFF' }} />
            }
          </div>

          {/* Right page */}
          <div style={{
            flex: 1, overflow: 'hidden', borderRadius: '0 6px 6px 0',
            opacity: flipping && flipDir === 'next' ? 0 : 1,
            background: '#FFFFFF',
          }}>
            {rightPage
              ? <PageContent produits={rightPage.produits} categorie={rightPage.categorie}
                  pageNum={spread * 2 + 2} totalPages={pages.length} onAdd={onAdd} lang={lang} side="right" />
              : <div style={{ width: '100%', height: '100%', background: '#FFFFFF' }} />
            }
          </div>

          {/* Background pages during flip */}
          {flipping && (
            <>
              {flipDir === 'next' && nextLeftPage && (
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', overflow: 'hidden', borderRadius: '6px 0 0 6px', zIndex: 5 }}>
                  <PageContent produits={nextLeftPage.produits} categorie={nextLeftPage.categorie}
                    pageNum={nextSpread * 2 + 1} totalPages={pages.length} onAdd={onAdd} lang={lang} side="left" />
                </div>
              )}
              {flipDir === 'prev' && nextRightPage && (
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', overflow: 'hidden', borderRadius: '0 6px 6px 0', zIndex: 5 }}>
                  <PageContent produits={nextRightPage.produits} categorie={nextRightPage.categorie}
                    pageNum={nextSpread * 2 + 2} totalPages={pages.length} onAdd={onAdd} lang={lang} side="right" />
                </div>
              )}
            </>
          )}

          <FlippingPage
            flipping={flipping} flipDir={flipDir}
            fromPage={flippingFromPage} toPage={flippingToPage}
            onAdd={onAdd} lang={lang}
            totalPages={pages.length} spreadIndex={spread}
          />
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <button onClick={() => flip('prev')} disabled={spread === 0 || flipping} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: spread === 0 ? '#F5F5F5' : '#1A1A1A',
          border: 'none', color: spread === 0 ? '#CCC' : '#FFFFFF',
          fontSize: 20, cursor: spread === 0 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>

        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: totalSpreads }).map((_, i) => (
            <div key={i} onClick={() => !flipping && setSpread(i)} style={{
              width: i === spread ? 24 : 7, height: 7, borderRadius: 4,
              background: i === spread ? '#1A1A1A' : '#E0E0E0',
              transition: 'all 0.3s', cursor: 'pointer',
            }} />
          ))}
        </div>

        <button onClick={() => flip('next')} disabled={spread >= totalSpreads - 1 || flipping} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: spread >= totalSpreads - 1 ? '#F5F5F5' : '#1A1A1A',
          border: 'none', color: spread >= totalSpreads - 1 ? '#CCC' : '#FFFFFF',
          fontSize: 20, cursor: spread >= totalSpreads - 1 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>›</button>
      </div>
    </div>
  );
}
