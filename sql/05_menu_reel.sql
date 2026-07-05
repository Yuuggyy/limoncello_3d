-- ============================================
-- MENU RÉEL — Limoncello
-- Viandes, Sauces & Accompagnements, Poissons & Crustacés
-- À exécuter APRÈS 01_schema.sql, 02_parametres.sql
-- ============================================

-- ════════ CATÉGORIES ════════
INSERT INTO public.categories (nom, description, emoji, ordre, actif) VALUES
('Viandes et Volailles',        'Viandes grillées et volailles',        '🥩', 10, true),
('Sauces et Accompagnements',   'Sauces et garnitures',                 '🍟', 11, true),
('Poissons et Crustacés',       'Poissons et fruits de mer',            '🐟', 12, true)
ON CONFLICT DO NOTHING;

-- ════════ VIANDES ET VOLAILLES ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Côte à l''os',        '400gr', 32.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 1),
('Côtes d''Agneau',     NULL, 38.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 2),
('Filet Pur, Sauce au Choix', '250gr, accompagnement', 38.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 3),
('Entrecôte irlandaise, Sauce au Choix', '350gr', 38.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 4),
('Bœuf Strogonoff',     NULL, 28.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 5),
('Straccetti Rucola e Parmigiano', 'Émincé de filet pur, roquette, copeaux parmesan', 28.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 6),
('Mix Grill',           'Bœuf, côtes d''agneaux, volaille, merguez, pdt en chemise', 30.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 7),
('Burger Beef Mafia',   'Revisité à l''italienne', 20.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 8),
('Scaloppine al Limone', 'Escalope de veau importée, citron', 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 9),
('Scaloppine Pizzaiola', 'Escalope de veau importée, câpre, tomate', 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 10),
('Scaloppine Milanese', 'Escalope de veau importée panée', 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 11),
('Scaloppine ai Funghi', 'Escalope de veau importée, champignons, crème fraîche', 36.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 12),
('Paillarde de veau au Ferri', NULL, 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 13),
('Saltimbocca à la Romana', 'Escalope de veau importée, mozzarella, jambon, sauce blanche', 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 14),
('Cordon Bleu',         'Escalope de veau importée panée, fourrée mozzarella, jambon', 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 15),
('Souris d''agneau aux saveurs orientales', 'Accompagnement couscous et légumes', 36.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 16),
('Osso Bucco',          'Jarret de bœuf, sauce tomate', 34.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 17),
('Piccata di Pollo al Limone ou sauce Marsala', NULL, 36.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 18),
('Poussin de Ferme grillé au Pili ou Estragon', 'Poussin entier rôti', 36.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 19),
('Poulet DG',           'Banane plantain, curry, carotte, haricot vert, poivre', 25.00, (SELECT id FROM categories WHERE nom='Viandes et Volailles'), NULL, true, 20)
ON CONFLICT DO NOTHING;

-- ════════ SAUCES ET ACCOMPAGNEMENTS ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Béarnaise · Poivre Vert · Roquefort',  'Champignons, poivre concassé', 8.00, (SELECT id FROM categories WHERE nom='Sauces et Accompagnements'), NULL, true, 1),
('Frites de pomme de terre · Frites de patate douce', 'Pomme de terre nature ou sautées', 8.00, (SELECT id FROM categories WHERE nom='Sauces et Accompagnements'), NULL, true, 2),
('Croquettes de pomme de terre · Purée · Polenta', 'Pâtes · Riz · Banane plantain', 8.00, (SELECT id FROM categories WHERE nom='Sauces et Accompagnements'), NULL, true, 3),
('Légumes sautés · Légumes vapeur', NULL, 8.00, (SELECT id FROM categories WHERE nom='Sauces et Accompagnements'), NULL, true, 4),
('Chicon Braisé · Épinards en branche · Salade', NULL, 10.00, (SELECT id FROM categories WHERE nom='Sauces et Accompagnements'), NULL, true, 5)
ON CONFLICT DO NOTHING;

-- ════════ POISSONS ET CRUSTACÉS ════════
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Capitaine à l''Huile d''Olive', NULL, 30.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 1),
('Dos de Capitaine Siciliana', 'Sur un lit de purée, tomate fraîche, câpres, oignon grillé', 32.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 2),
('Capitaine à la Congolaise', 'Sauce tomate, poivron', 32.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 3),
('Sole entière Meunière', NULL, 30.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 4),
('Deux solettes d''Ostende grillées', NULL, 36.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 5),
('Saumon à l''unilatérale sauce Mousseline', NULL, 36.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 6),
('Tilapia Meunière', NULL, 30.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 7),
('Dorade entière', 'Légumes vapeur, pommes de terre nouvelle', 36.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 8),
('Fritto Misto', 'Scampi, calamare, cossa, poisson, sauce tartare', 32.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 9),
('Cossa ail et piment', NULL, 32.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 10),
('Cuisses de grenouille à l''ail', NULL, 36.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 11),
('Calamar fritti', NULL, 36.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 12),
('Scampi fritti', NULL, 38.00, (SELECT id FROM categories WHERE nom='Poissons et Crustacés'), NULL, true, 13)
ON CONFLICT DO NOTHING;

SELECT 'Menu réel Limoncello ajouté ✅ — 3 catégories, 38 plats' AS status;
