-- ============================================
-- MENU RÉEL — Limoncello (suite)
-- Pizza au Feu de Bois
-- À exécuter APRÈS 07_entrees_salades.sql
-- ============================================

-- ════════ CATÉGORIE ════════
INSERT INTO public.categories (nom, description, emoji, ordre, actif) VALUES
('Pizza au Feu de Bois', 'Pizzas cuites au feu de bois', '🍕', 7, true)
ON CONFLICT DO NOTHING;

-- ════════ PIZZAS ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Focaccia',            'Sel, épices', 12.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 1),
('Margherita',           'Tomate, mozzarella, origan', 22.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 2),
('Prosciutto',           'Tomate, mozzarella, jambon, champignons, olives vertes', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 3),
('Calzone',              'Tomate, mozzarella, jambon, parmesan + un ingrédient au choix', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 4),
('Diavola',              'Tomate, poivrons, mozzarella, salami piquant, olives', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 5),
('Tonino',               'Tomate, mozzarella, thon, oignons, olives', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 6),
('Hawaïenne',            'Tomate, mozzarella, jambon, ananas', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 7),
('Vegetariana',          'Tomates fraîches, mozzarella, champignons, oignons, olives, légumes grillés', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 8),
('Polo',                 'Tomate, mozzarella, poulet', 23.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 9),
('Pizza Funghi',         'Tomate, mozzarella, champignons, origan', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 10),
('Napoli',               'Tomate, mozzarella, anchois, câpres, origan', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 11),
('Capricciosa',          'Tomate, mozzarella, jambon, artichauts, olives vertes, oignons', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 12),
('Pizza Limoncello',     'Tomate, mozzarella, champignons, cèpes, tomates cerise, basilic frais', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 13),
('Rocca',                'Tomate, mozzarella, tomates cerise, roquette', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 14),
('Quattro Stagioni',     'Tomate, mozzarella, jambon de Parme, artichauts, champignons, olives noires', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 15),
('Brezaola',             'Tomate, mozzarella, brezaola, roquette, basilic', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 16),
('Cossa',                'Tomate, mozzarella, cossas, ail', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 17),
('Focaccia Garnie',      'Mozzarella, roquette, jambon de Parme', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 18),
('Quattro Formaggi',     'Tomate, quatre fromages différents, olives vertes', 25.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 19),
('Frutti di Mare',       'Tomate, mozzarella, fruits de mer', 26.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 20),
('Salmone',              'Tomate, mozzarella, crème fraîche, saumon fumé', 26.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 21),
('Supplément Ingrédient - Petit', 'Ingrédient supplémentaire au choix', 2.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 22),
('Supplément Ingrédient - Grand', 'Ingrédient supplémentaire au choix', 5.00, (SELECT id FROM categories WHERE nom='Pizza au Feu de Bois'), NULL, true, 23)
ON CONFLICT DO NOTHING;

SELECT 'Pizza au Feu de Bois ajoutée ✅ — 1 catégorie, 23 plats' AS status;
