import { useState, useRef, useCallback, useEffect } from 'react';

const ACCENT = '#B8342A';

/* ─────────────────────────────────────────
   Ligne produit — style menu imprimé + image
───────────────────────────────────────── */
function ProduitCard({ produit, onAdd, lang, isMobile }) {
  const [qty, setQty] = useState(0);
  const L = lang === 'en' ? { add: 'Add' } : { add: 'Ajouter' };

  const handleAdd = () => {
    if (qty === 0) return;
    onAdd({ ...produit, prix_unit: produit.prix, quantite: qty });
    setQty(0);
  };

  const hasImage = produit.image_url && produit.image_url.trim() !== '';

  if (isMobile) {
    return (
      <div style={{
        padding: '12px 0',
        borderBottom: '1px solid #F5F5F5',
        display: 'flex',
        gap: hasImage ? 12 : 0,
      }}>
        {/* Image du plat */}
        {hasImage && (
          <div style={{
            width: 56, height: 56, borderRadius: 8, overflow: 'hidden', flexShrink: 0,
            background: '#FAFAFA', border: '1px solid #F0F0F0',
          }}>
            <img src={produit.image_url} alt={produit.nom}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy" />
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Nom + pointillés + prix */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 15, fontWeight: 700, color: '#1A1A1A',
              whiteSpace: 'nowrap',
            }}>{produit.nom}</span>

            <span style={{
              flex: 1, borderBottom: '1.5px dotted #CCC',
              position: 'relative', top: -3, minWidth: 8,
            }} />

            <span style={{
              fontSize: 15, fontWeight: 800, color: '#1A1A1A',
              whiteSpace: 'nowrap',
            }}>{Number(produit.prix).toFixed(2)} $</span>
          </div>

          {produit.description && (
            <p style={{
              fontSize: 12, color: '#999', fontStyle: 'italic',
              marginTop: 2, lineHeight: 1.3,
            }}>{produit.description}</p>
          )}

          {/* Contrôles quantité */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
            <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{
              width: 28, height: 28, borderRadius: 6,
              border: '1px solid #E0E0E0', background: '#FFFFFF', color: '#1A1A1A',
              fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              touchAction: 'manipulation',
            }}>−</button>
            <span style={{
              fontSize: 13, fontWeight: 700, color: '#1A1A1A',
              minWidth: 14, textAlign: 'center',
            }}>{qty}</span>
            <button onClick={() => setQty(q => q + 1)} style={{
              width: 28, height: 28, borderRadius: 6,
              border: 'none', background: ACCENT, color: '#FFFFFF',
              fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              touchAction: 'manipulation',
            }}>+</button>
            {qty > 0 && (
              <button onClick={handleAdd} style={{
                background: ACCENT, color: '#FFFFFF',
                border: 'none', borderRadius: 6,
                padding: '5px 12px', fontSize: 11, fontWeight: 700,
                cursor: 'pointer', touchAction: 'manipulation',
                marginLeft: 2,
              }}>✓ {L.add}</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop card (in book)
  return (
    <div style={{ padding: '8px 0', borderBottom: '1px solid #F5F5F5' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 13.5, fontWeight: 700, color: '#1A1A1A',
          whiteSpace: 'nowrap',
        }}>{produit.nom}</span>

        <span style={{
          flex: 1, borderBottom: '1.5px dotted #CCC',
          position: 'relative', top: -3, minWidth: 8,
        }} />

        <span style={{
          fontSize: 13.5, fontWeight: 800, color: '#1A1A1A',
          whiteSpace: 'nowrap',
        }}>{Number(produit.prix).toFixed(2)} $</span>
      </div>

      {produit.description && (
        <p style={{
          fontSize: 10.5, color: '#999', fontStyle: 'italic',
          marginTop: 2, lineHeight: 1.3,
        }}>{produit.description.length > 55 ? produit.description.slice(0, 55) + '…' : produit.description}</p>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
        <button onClick={() => setQty(q => Math.max(0, q - 1))} style={{
          width: 22, height: 22, borderRadius: 5,
          border: '1px solid #E0E0E0', background: '#FFFFFF', color: '#1A1A1A',
          fontSize: 13, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          touchAction: 'manipulation',
        }}>−</button>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A', minWidth: 12, textAlign: 'center' }}>{qty}</span>
        <button onClick={() => setQty(q => q + 1)} style={{
          width: 22, height: 22, borderRadius: 5,
          border: 'none', background: ACCENT, color: '#FFFFFF',
          fontSize: 13, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          touchAction: 'manipulation',
        }}>+</button>
        {qty > 0 && (
          <button onClick={handleAdd} style={{
            background: ACCENT, color: '#FFFFFF',
            border: 'none', borderRadius: 5,
            padding: '3px 8px', fontSize: 9, fontWeight: 700,
            cursor: 'pointer', touchAction: 'manipulation',
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
        <div style={{ borderBottom: `2px solid ${ACCENT}`, marginBottom: 10, paddingBottom: 8 }}>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 15, fontWeight: 800, color: ACCENT, margin: 0,
          }}>
            {categorie?.nom}
            <span style={{ fontSize: 10, fontWeight: 500, color: '#999', marginLeft: 6 }}>
              ({produits.length})
            </span>
          </h3>
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
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrollingToRef = useRef(false);

  const flip = useCallback((dir) => {
    if (flipping) return;
    if (dir === 'next' && spread >= totalSpreads - 1) return;
    if (dir === 'prev' && spread <= 0) return;
    const next = dir === 'next' ? spread + 1 : spread - 1;
    setFlipDir(dir); setNextSpread(next); setFlipping(true);
    setTimeout(() => { setSpread(next); setFlipping(false); setFlipDir(null); }, 600);
  }, [flipping, spread, totalSpreads]);

  // ═══════════════════════════════════════════
  //  SCROLL SPY — auto-detect active category
  // ═══════════════════════════════════════════
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingToRef.current) return;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const idx = parseInt(entry.target.dataset.catIndex);
          if (!isNaN(idx) && idx !== activeCat) {
            setActiveCat(idx);
          }
        }
      });
    }, {
      root: scrollContainerRef.current,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.3, 0.5, 1],
    });

    sectionRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile, pages, activeCat]);

  const scrollToCategory = (idx) => {
    const el = sectionRefs.current[idx];
    const container = scrollContainerRef.current;
    if (!el || !container) return;

    isScrollingToRef.current = true;
    setActiveCat(idx);

    const offset = 8;
    const targetTop = el.offsetTop - offset;
    container.scrollTo({ top: targetTop, behavior: 'smooth' });

    setTimeout(() => { isScrollingToRef.current = false; }, 600);
  };

  if (!pages || pages.length === 0) return (
    <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
      <p style={{ fontSize: 15 }}>Aucun produit disponible</p>
    </div>
  );

  // ═══════════════════════════════════════════
  //  MOBILE — Scrollable menu with sticky header
  // ═══════════════════════════════════════════
  if (isMobile) {
    // Build categories with their products
    const categories = [];
    pages.forEach(p => {
      if (!categories.find(c => c.nom === p.categorie?.nom)) {
        categories.push({ ...p.categorie, _products: [] });
      }
      const cat = categories.find(c => c.nom === p.categorie?.nom);
      cat._products.push(...p.produits);
    });

    const currentCat = categories[activeCat];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>

        {/* ══ Sticky category tabs ══ */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: '#FFFFFF',
          borderBottom: '1px solid #F0F0F0',
          paddingTop: 8, paddingBottom: 8,
        }}>
          <div  style={{
            display: 'flex', gap: 6, overflowX: 'auto', padding: '0 12px',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}>
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {categories.map((cat, i) => (
              <button key={i}
                onClick={() => scrollToCategory(i)}
                style={{
                  flexShrink: 0,
                  padding: '7px 16px', borderRadius: 24,
                  background: i === activeCat ? ACCENT : '#FFFFFF',
                  color: i === activeCat ? '#FFFFFF' : '#666',
                  border: i === activeCat ? 'none' : '1px solid #E0E0E0',
                  fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 5,
                  whiteSpace: 'nowrap', touchAction: 'manipulation',
                  transition: 'all 0.25s',
                }}>
                <span style={{ fontSize: 14 }}>{cat?.emoji || '🍽️'}</span>
                {cat?.nom}
              </button>
            ))}
          </div>
        </div>

        {/* ══ Sticky current category header ══ */}
        <div style={{
          position: 'sticky', top: 47, zIndex: 49,
          background: '#FFFFFF',
          borderBottom: `2px solid ${ACCENT}`,
          padding: '10px 16px 8px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 18, fontWeight: 800, color: ACCENT, margin: 0,
          }}>
            {currentCat?.nom}
            <span style={{ fontSize: 11, fontWeight: 500, color: '#999', marginLeft: 6 }}>
              ({currentCat?._products.length})
            </span>
          </h3>
          {currentCat?.emoji && (
            <span style={{
              width: 30, height: 30, borderRadius: '50%',
              background: '#FAFAFA', border: '1px solid #F0F0F0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15,
            }}>{currentCat.emoji}</span>
          )}
        </div>

        {/* ══ Scrollable content ══ */}
        <div
          ref={scrollContainerRef}
          style={{
            flex: 1, overflowY: 'auto',
            padding: '0 16px 80px',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              data-cat-index={idx}
              ref={el => sectionRefs.current[idx] = el}
              style={{ paddingTop: 4 }}
            >
              {/* Mini category separator (visible when scrolling into new section) */}
              <div style={{
                padding: '14px 0 6px',
                display: idx > 0 ? 'block' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 13, fontWeight: 600, color: '#CCC',
                  textTransform: 'uppercase', letterSpacing: '1px',
                }}>{cat?.emoji} {cat?.nom}</div>
              </div>

              {/* Products */}
              {cat._products.map(p => (
                <ProduitCard key={p.id} produit={p} onAdd={onAdd} lang={lang} isMobile={true} />
              ))}
            </div>
          ))}

          {/* Footer contact dans le scroll */}
          <div style={{
            textAlign: 'center', padding: '24px 0 80px',
            color: '#999', fontSize: 12,
            borderTop: '1px solid #F0F0F0', marginTop: 16,
          }}>
            <p style={{ marginBottom: 6, color: '#666' }}>20 Avenue Tombalbaye, Gombe, Kinshasa</p>
            <p style={{ color: '#666' }}>+243 815 141 111</p>
          </div>
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
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 4,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, #F0F0F0, #E0E0E0, #F0F0F0)',
            zIndex: 15,
          }} />

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

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <button onClick={() => flip('prev')} disabled={spread === 0 || flipping} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: spread === 0 ? '#F5F5F5' : ACCENT,
          border: 'none', color: spread === 0 ? '#CCC' : '#FFFFFF',
          fontSize: 20, cursor: spread === 0 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>

        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: totalSpreads }).map((_, i) => (
            <div key={i} onClick={() => !flipping && setSpread(i)} style={{
              width: i === spread ? 24 : 7, height: 7, borderRadius: 4,
              background: i === spread ? ACCENT : '#E0E0E0',
              transition: 'all 0.3s', cursor: 'pointer',
            }} />
          ))}
        </div>

        <button onClick={() => flip('next')} disabled={spread >= totalSpreads - 1 || flipping} style={{
          width: 44, height: 44, borderRadius: '50%',
          background: spread >= totalSpreads - 1 ? '#F5F5F5' : ACCENT,
          border: 'none', color: spread >= totalSpreads - 1 ? '#CCC' : '#FFFFFF',
          fontSize: 20, cursor: spread >= totalSpreads - 1 ? 'default' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>›</button>
      </div>
    </div>
  );
}
