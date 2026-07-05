-- ============================================
-- MENU RÉEL — Limoncello (suite)
-- Entrées - Antipasti / Salades
-- À exécuter APRÈS 06_pates_risotto.sql
-- ============================================

-- ════════ CATÉGORIES ════════
INSERT INTO public.categories (nom, description, emoji, ordre, actif) VALUES
('Entrées - Antipasti',  'Entrées et antipasti italiens', '🥗', 8, true),
('Salades',              'Salades composées',             '🥬', 9, true)
ON CONFLICT DO NOTHING;

-- ════════ ENTRÉES - ANTIPASTI ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Assiettes de Spécialités Italiennes', 'Légumes grillés, charcuterie', 26.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 1),
('Carpaccio de Bœuf roquette et Parmesan', NULL, 24.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 2),
('Avocat vinaigrette',  NULL, 13.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 3),
('Avocat crevettes grises', NULL, 26.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 4),
('Jambon de Parme et melon', NULL, 26.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 5),
('Cocktail de Crevettes', NULL, 22.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 6),
('Carpaccio de Capitaine', NULL, 20.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 7),
('Tartare de saumon al fresco', NULL, 25.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 8),
('Saumon fumé et ses accompagnements', NULL, 26.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 9),
('Cossas ail et piment', NULL, 18.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 10),
('Cuisses de Grenouille à l''ail', NULL, 22.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 11),
('Calamare Fritti',     NULL, 22.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 12),
('Scampi Fritti',       NULL, 22.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 13),
('Eperlan fritti (ndakala)', '100gr', 14.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 14),
('Parmigiana',          'Aubergines gratinées', 22.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 15),
('Mêlée de Champignons et Cossas au Basilic', NULL, 23.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 16),
('Minestrone',          NULL, 13.00, (SELECT id FROM categories WHERE nom='Entrées - Antipasti'), NULL, true, 17)
ON CONFLICT DO NOTHING;

-- ════════ SALADES ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Salade Roquette et Parmesan', NULL, 20.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 1),
('Burrata alla Caprese', 'Tomates, pignons, basilic', 26.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 2),
('Salade Niçoise',      'Thon, œufs, olives, tomates, anchois', 22.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 3),
('Salade Chèvre',       'Chèvre, pommes, raisins secs, granola', 22.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 4),
('Salade Avé Cesare',   'Poulet, avocat, parmesan', 22.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 5),
('Salade Mixte',        'Tomates, concombres, oignons', 20.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 6),
('Salade Italienne',    'Tomates, olives, roquette, jambon de Parme', 22.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 7),
('Salade au Foie Gras', 'Foie gras, figues, poires, pain d''épices', 26.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 8),
('Salade Océane',       'Saumon fumé, crevettes, tomates, chicon, cœur de palmier', 26.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 9),
('Salade Halloumi',     'Tomates, menthe, oignons, courgettes grillées, halloumi', 26.00, (SELECT id FROM categories WHERE nom='Salades'), NULL, true, 10)
ON CONFLICT DO NOTHING;

SELECT 'Entrées / Salades ajoutés ✅ — 2 catégories, 27 plats' AS status;
