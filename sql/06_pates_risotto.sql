-- ============================================
-- MENU RÉEL — Limoncello (suite)
-- Pâtes / Pâtes, Gnocchi et Risotto
-- À exécuter APRÈS 05_menu_reel.sql
-- ============================================

-- ════════ CATÉGORIES ════════
INSERT INTO public.categories (nom, description, emoji, ordre, actif) VALUES
('Pâtes',                       'Pâtes simples',                         '🍝', 13, true),
('Pâtes, Gnocchi et Risotto',   'Pâtes fraîches, gnocchi et risottos',   '🍚', 14, true)
ON CONFLICT DO NOTHING;

-- ════════ PÂTES (base) ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Nature',              NULL, 13.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 1),
('Pesto',               'Pignons, basilic', 20.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 2),
('Carbonara',           'Lardons, œuf, crème fraîche', 25.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 3),
('Pomodoro',            'Tomate', 20.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 4),
('Bolognese',           'Ragoût de bœuf', 20.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 5),
('Arrabbiata',          'Tomate, pili', 20.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 6),
('Puttanesca',          'Anchois, thon, câpres, tomates, olive noire', 20.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 7),
('Quattro Formaggi',    NULL, 20.00, (SELECT id FROM categories WHERE nom='Pâtes'), NULL, true, 8)
ON CONFLICT DO NOTHING;

-- ════════ PÂTES, GNOCCHI ET RISOTTO ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Spaghetti Crudaiola', 'Tomate fraîche froide, mozzarella, roquette, pesto', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 1),
('Spaghetti al Pollo',  'Poulet, champignons, crème fraîche', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 2),
('Penne Saumon Fumé, Crème', NULL, 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 3),
('Spaghetti ai Frutti di Mare', 'Fruits de mer', 34.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 4),
('Spaghetti alle Vongole', 'Coquillages', 34.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 5),
('Spaghetti ai Cartoccio', 'Fruits de mer, sauce tomate', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 6),
('Penne Foie Gras',     NULL, 34.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 7),
('Tagliatelle Primavera', 'Tomate fraîche, champignons, courgettes', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 8),
('Tagliatelle ai Funghi', 'Cèpes, crème fraîche', 28.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 9),
('Tagliatelle Mare e Monti', 'Champignons, petit pois, courgettes, cossa, tomates', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 10),
('Lasagna Maison',      'Bœuf', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 11),
('Ravioli Maison Carne', 'Bœuf, ou Spinaci e Ricotta, ou Cèpes (Solo, Duo ou Trio)', 26.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 12),
('Gnocchi',             'Sauce au choix', 28.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 13),
('Risotto ai Funghi ou al San Daniele', 'Cèpes, ou jambon San Daniele', 28.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 14),
('Risotto façon Paella', 'Riz safran, fruits de mer, saucisse de bœuf', 28.00, (SELECT id FROM categories WHERE nom='Pâtes, Gnocchi et Risotto'), NULL, true, 15)
ON CONFLICT DO NOTHING;

SELECT 'Pâtes / Gnocchi / Risotto ajoutés ✅ — 2 catégories, 23 plats' AS status;
