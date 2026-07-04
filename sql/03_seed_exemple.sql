-- ============================================
-- SEED EXEMPLE — Catégories & Produits Limoncello
-- À exécuter APRÈS 01_schema.sql et 02_parametres.sql
-- ============================================

-- ════════ CATÉGORIES ════════
INSERT INTO public.categories (nom, description, emoji, ordre, actif) VALUES
('Antipasti',  'Entrées italiennes froides et chaudes', '🫒', 1, true),
('Pizze',      'Pizzas au feu de bois',                  '🍕', 2, true),
('Pasta',      'Pâtes fraîches maison',                  '🍝', 3, true),
('Secondi',    'Plats principaux',                       '🥩', 4, true),
('Dolci',      'Desserts italiens',                      '🍰', 5, true),
('Bevande',    'Boissons',                               '🍷', 6, true)
ON CONFLICT DO NOTHING;

-- ════════ PRODUITS ════════
-- Antipasti
INSERT INTO public.produits (nom, description, prix, categorie_id, image_url, disponible, ordre) VALUES
('Bruschetta Classica', 'Pain grillé, tomates fraîches, ail, basilic, huile d''olive', 8.00, (SELECT id FROM categories WHERE nom='Antipasti'), NULL, true, 1),
('Burrata Pugliese',    'Burrata crémeuse, tomates cerises, roquette, pesto', 12.00, (SELECT id FROM categories WHERE nom='Antipasti'), NULL, true, 2),
('Tagliere Misto',      'Assortiment de charcuteries et fromages italiens', 18.00, (SELECT id FROM categories WHERE nom='Antipasti'), NULL, true, 3),
('Vitello Tonnato',     'Veau froid, sauce thon, câpres', 14.00, (SELECT id FROM categories WHERE nom='Antipasti'), NULL, true, 4),

-- Pizze
('Margherita',          'Tomate, mozzarella di bufala, basilic frais', 10.00, (SELECT id FROM categories WHERE nom='Pizze'), NULL, true, 1),
('Diavola',             'Tomate, mozzarella, salami piquant, piment', 12.00, (SELECT id FROM categories WHERE nom='Pizze'), NULL, true, 2),
('Quattro Formaggi',    'Mozzarella, gorgonzola, parmesan, fontina', 13.00, (SELECT id FROM categories WHERE nom='Pizze'), NULL, true, 3),
('Prosciutto e Funghi', 'Tomate, mozzarella, jambon de Parme, champignons', 12.50, (SELECT id FROM categories WHERE nom='Pizze'), NULL, true, 4),
('Calzone',             'Pizza pliée: ricotta, jambon, mozzarella', 11.00, (SELECT id FROM categories WHERE nom='Pizze'), NULL, true, 5),

-- Pasta
('Spaghetti Carbonara', 'Guanciale, jaune d''œuf, pecorino, poivre noir', 14.00, (SELECT id FROM categories WHERE nom='Pasta'), NULL, true, 1),
('Tagliatelle al Ragù', 'Pâtes fraîches, ragù de bœuf mijoté 4h', 15.00, (SELECT id FROM categories WHERE nom='Pasta'), NULL, true, 2),
('Penne all''Arrabbiata','Tomate, ail, piment rouge, persil', 11.00, (SELECT id FROM categories WHERE nom='Pasta'), NULL, true, 3),
('Ravioli Ricotta',     'Ravioli maison, ricotta, épinards, beurre sauge', 16.00, (SELECT id FROM categories WHERE nom='Pasta'), NULL, true, 4),
('Lasagna Bolognese',   'Couches de pâtes, ragù, béchamel, parmesan', 15.00, (SELECT id FROM categories WHERE nom='Pasta'), NULL, true, 5),

-- Secondi
('Bistecca alla Fiorentina', 'Entrecôte grillée, roquette, huile d''olive', 28.00, (SELECT id FROM categories WHERE nom='Secondi'), NULL, true, 1),
('Pollo al Limone',     'Poulet fermier, sauce citron, romarin', 16.00, (SELECT id FROM categories WHERE nom='Secondi'), NULL, true, 2),
('Osso Buco',           'Jarret de veau braisé, risotto au safran', 22.00, (SELECT id FROM categories WHERE nom='Secondi'), NULL, true, 3),
('Salmone alla Griglia','Saumon grillé, légumes de saison, citron', 19.00, (SELECT id FROM categories WHERE nom='Secondi'), NULL, true, 4),

-- Dolci
('Tiramisù',            'Mascarpone, café espresso, cacao', 7.00, (SELECT id FROM categories WHERE nom='Dolci'), NULL, true, 1),
('Panna Cotta',         'Crème vanillée, coulis de fruits rouges', 6.00, (SELECT id FROM categories WHERE nom='Dolci'), NULL, true, 2),
('Cannoli Siciliani',   'Pâte croustillante, ricotta sucrée, pistaches', 8.00, (SELECT id FROM categories WHERE nom='Dolci'), NULL, true, 3),
('Gelato Misto',        'Assortiment de glaces artisanales', 5.00, (SELECT id FROM categories WHERE nom='Dolci'), NULL, true, 4),

-- Bevande
('Espresso',            'Café italien serré', 2.50, (SELECT id FROM categories WHERE nom='Bevande'), NULL, true, 1),
('Cappuccino',          'Espresso, lait mousseux', 3.50, (SELECT id FROM categories WHERE nom='Bevande'), NULL, true, 2),
('Vino Rosso (verre)',  'Vin rouge italien au verre', 5.00, (SELECT id FROM categories WHERE nom='Bevande'), NULL, true, 3),
('Aperol Spritz',       'Aperol, prosecco, eau gazeuse, orange', 6.00, (SELECT id FROM categories WHERE nom='Bevande'), NULL, true, 4),
('Acqua Naturale',      'Eau plate 75cl', 2.00, (SELECT id FROM categories WHERE nom='Bevande'), NULL, true, 5)
ON CONFLICT DO NOTHING;

SELECT 'Seed terminé ✅ — 6 catégories et 28 produits ajoutés' AS status;
