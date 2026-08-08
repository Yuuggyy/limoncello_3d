const RESTAURANT_DATA = {
  "slug": "limoncello",
  "name": "Limoncello",
  "emoji": "🍋",
  "adminPassword": "limoncello2025",
  "parametres": {
    "nom_restaurant": "Limoncello",
    "adresse": "20 Avenue Tombalbaye, Gombe, Kinshasa, RDC",
    "telephone": "+243 815 141 111",
    "whatsapp": "243815141111",
    "horaires": "Lun 12h30-22h · Mar Fermé · Mer 12h30-18h30 · Jeu 12h30-22h · Ven 12h30-22h30 · Sam 12h-00h · Dim 12h30-22h"
  },
  "categories": [
    {
      "id": "cat_0",
      "nom": "Viandes et Volailles",
      "description": "Viandes grillées et volailles",
      "emoji": "🥩",
      "ordre": 10,
      "actif": true
    },
    {
      "id": "cat_1",
      "nom": "Sauces et Accompagnements",
      "description": "Sauces et garnitures",
      "emoji": "🍟",
      "ordre": 11,
      "actif": true
    },
    {
      "id": "cat_2",
      "nom": "Poissons et Crustacés",
      "description": "Poissons et fruits de mer",
      "emoji": "🐟",
      "ordre": 12,
      "actif": true
    },
    {
      "id": "cat_3",
      "nom": "Pâtes",
      "description": "Pâtes simples",
      "emoji": "🍝",
      "ordre": 13,
      "actif": true
    },
    {
      "id": "cat_4",
      "nom": "Pâtes, Gnocchi et Risotto",
      "description": "Pâtes fraîches, gnocchi et risottos",
      "emoji": "🍚",
      "ordre": 14,
      "actif": true
    },
    {
      "id": "cat_5",
      "nom": "Entrées - Antipasti",
      "description": "Entrées et antipasti italiens",
      "emoji": "🥗",
      "ordre": 8,
      "actif": true
    },
    {
      "id": "cat_6",
      "nom": "Salades",
      "description": "Salades composées",
      "emoji": "🥬",
      "ordre": 9,
      "actif": true
    },
    {
      "id": "cat_7",
      "nom": "Pizza au Feu de Bois",
      "description": "Pizzas cuites au feu de bois",
      "emoji": "🍕",
      "ordre": 7,
      "actif": true
    }
  ],
  "produits": [
    {
      "id": "prod_0",
      "categorie_id": "cat_0",
      "nom": "Côte à l'os",
      "description": "400gr",
      "prix": 32.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_1",
      "categorie_id": "cat_0",
      "nom": "Côtes d'Agneau",
      "description": "",
      "prix": 38.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_2",
      "categorie_id": "cat_0",
      "nom": "Filet Pur, Sauce au Choix",
      "description": "250gr, accompagnement",
      "prix": 38.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_3",
      "categorie_id": "cat_0",
      "nom": "Entrecôte irlandaise, Sauce au Choix",
      "description": "350gr",
      "prix": 38.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_4",
      "categorie_id": "cat_0",
      "nom": "Bœuf Strogonoff",
      "description": "",
      "prix": 28.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_5",
      "categorie_id": "cat_0",
      "nom": "Straccetti Rucola e Parmigiano",
      "description": "Émincé de filet pur, roquette, copeaux parmesan",
      "prix": 28.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_6",
      "categorie_id": "cat_0",
      "nom": "Mix Grill",
      "description": "Bœuf, côtes d'agneaux, volaille, merguez, pdt en chemise",
      "prix": 30.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_7",
      "categorie_id": "cat_0",
      "nom": "Burger Beef Mafia",
      "description": "Revisité à l'italienne",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_8",
      "categorie_id": "cat_0",
      "nom": "Scaloppine al Limone",
      "description": "Escalope de veau importée, citron",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_9",
      "categorie_id": "cat_0",
      "nom": "Scaloppine Pizzaiola",
      "description": "Escalope de veau importée, câpre, tomate",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_10",
      "categorie_id": "cat_0",
      "nom": "Scaloppine Milanese",
      "description": "Escalope de veau importée panée",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 11
    },
    {
      "id": "prod_11",
      "categorie_id": "cat_0",
      "nom": "Scaloppine ai Funghi",
      "description": "Escalope de veau importée, champignons, crème fraîche",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 12
    },
    {
      "id": "prod_12",
      "categorie_id": "cat_0",
      "nom": "Paillarde de veau au Ferri",
      "description": "",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 13
    },
    {
      "id": "prod_13",
      "categorie_id": "cat_0",
      "nom": "Saltimbocca à la Romana",
      "description": "Escalope de veau importée, mozzarella, jambon, sauce blanche",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 14
    },
    {
      "id": "prod_14",
      "categorie_id": "cat_0",
      "nom": "Cordon Bleu",
      "description": "Escalope de veau importée panée, fourrée mozzarella, jambon",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 15
    },
    {
      "id": "prod_15",
      "categorie_id": "cat_0",
      "nom": "Souris d'agneau aux saveurs orientales",
      "description": "Accompagnement couscous et légumes",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 16
    },
    {
      "id": "prod_16",
      "categorie_id": "cat_0",
      "nom": "Osso Bucco",
      "description": "Jarret de bœuf, sauce tomate",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 17
    },
    {
      "id": "prod_17",
      "categorie_id": "cat_0",
      "nom": "Piccata di Pollo al Limone ou sauce Marsala",
      "description": "",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 18
    },
    {
      "id": "prod_18",
      "categorie_id": "cat_0",
      "nom": "Poussin de Ferme grillé au Pili ou Estragon",
      "description": "Poussin entier rôti",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 19
    },
    {
      "id": "prod_19",
      "categorie_id": "cat_0",
      "nom": "Poulet DG",
      "description": "Banane plantain, curry, carotte, haricot vert, poivre",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 20
    },
    {
      "id": "prod_20",
      "categorie_id": "cat_1",
      "nom": "Béarnaise · Poivre Vert · Roquefort",
      "description": "Champignons, poivre concassé",
      "prix": 8.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_21",
      "categorie_id": "cat_1",
      "nom": "Frites de pomme de terre · Frites de patate douce",
      "description": "Pomme de terre nature ou sautées",
      "prix": 8.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_22",
      "categorie_id": "cat_1",
      "nom": "Croquettes de pomme de terre · Purée · Polenta",
      "description": "Pâtes · Riz · Banane plantain",
      "prix": 8.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_23",
      "categorie_id": "cat_1",
      "nom": "Légumes sautés · Légumes vapeur",
      "description": "",
      "prix": 8.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_24",
      "categorie_id": "cat_1",
      "nom": "Chicon Braisé · Épinards en branche · Salade",
      "description": "",
      "prix": 10.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_25",
      "categorie_id": "cat_2",
      "nom": "Capitaine à l'Huile d'Olive",
      "description": "",
      "prix": 30.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_26",
      "categorie_id": "cat_2",
      "nom": "Dos de Capitaine Siciliana",
      "description": "Sur un lit de purée, tomate fraîche, câpres, oignon grillé",
      "prix": 32.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_27",
      "categorie_id": "cat_2",
      "nom": "Capitaine à la Congolaise",
      "description": "Sauce tomate, poivron",
      "prix": 32.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_28",
      "categorie_id": "cat_2",
      "nom": "Sole entière Meunière",
      "description": "",
      "prix": 30.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_29",
      "categorie_id": "cat_2",
      "nom": "Deux solettes d'Ostende grillées",
      "description": "",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_30",
      "categorie_id": "cat_2",
      "nom": "Saumon à l'unilatérale sauce Mousseline",
      "description": "",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_31",
      "categorie_id": "cat_2",
      "nom": "Tilapia Meunière",
      "description": "",
      "prix": 30.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_32",
      "categorie_id": "cat_2",
      "nom": "Dorade entière",
      "description": "Légumes vapeur, pommes de terre nouvelle",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_33",
      "categorie_id": "cat_2",
      "nom": "Fritto Misto",
      "description": "Scampi, calamare, cossa, poisson, sauce tartare",
      "prix": 32.0,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_34",
      "categorie_id": "cat_2",
      "nom": "Cossa ail et piment",
      "description": "",
      "prix": 32.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_35",
      "categorie_id": "cat_2",
      "nom": "Cuisses de grenouille à l'ail",
      "description": "",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 11
    },
    {
      "id": "prod_36",
      "categorie_id": "cat_2",
      "nom": "Calamar fritti",
      "description": "",
      "prix": 36.0,
      "image_url": null,
      "disponible": true,
      "ordre": 12
    },
    {
      "id": "prod_37",
      "categorie_id": "cat_2",
      "nom": "Scampi fritti",
      "description": "",
      "prix": 38.0,
      "image_url": null,
      "disponible": true,
      "ordre": 13
    },
    {
      "id": "prod_38",
      "categorie_id": "cat_3",
      "nom": "Nature",
      "description": "",
      "prix": 13.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_39",
      "categorie_id": "cat_3",
      "nom": "Pesto",
      "description": "Pignons, basilic",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_40",
      "categorie_id": "cat_3",
      "nom": "Carbonara",
      "description": "Lardons, œuf, crème fraîche",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_41",
      "categorie_id": "cat_3",
      "nom": "Pomodoro",
      "description": "Tomate",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_42",
      "categorie_id": "cat_3",
      "nom": "Bolognese",
      "description": "Ragoût de bœuf",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_43",
      "categorie_id": "cat_3",
      "nom": "Arrabbiata",
      "description": "Tomate, pili",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_44",
      "categorie_id": "cat_3",
      "nom": "Puttanesca",
      "description": "Anchois, thon, câpres, tomates, olive noire",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_45",
      "categorie_id": "cat_3",
      "nom": "Quattro Formaggi",
      "description": "",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_46",
      "categorie_id": "cat_4",
      "nom": "Spaghetti Crudaiola",
      "description": "Tomate fraîche froide, mozzarella, roquette, pesto",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_47",
      "categorie_id": "cat_4",
      "nom": "Spaghetti al Pollo",
      "description": "Poulet, champignons, crème fraîche",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_48",
      "categorie_id": "cat_4",
      "nom": "Penne Saumon Fumé, Crème",
      "description": "",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_49",
      "categorie_id": "cat_4",
      "nom": "Spaghetti ai Frutti di Mare",
      "description": "Fruits de mer",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_50",
      "categorie_id": "cat_4",
      "nom": "Spaghetti alle Vongole",
      "description": "Coquillages",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_51",
      "categorie_id": "cat_4",
      "nom": "Spaghetti ai Cartoccio",
      "description": "Fruits de mer, sauce tomate",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_52",
      "categorie_id": "cat_4",
      "nom": "Penne Foie Gras",
      "description": "",
      "prix": 34.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_53",
      "categorie_id": "cat_4",
      "nom": "Tagliatelle Primavera",
      "description": "Tomate fraîche, champignons, courgettes",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_54",
      "categorie_id": "cat_4",
      "nom": "Tagliatelle ai Funghi",
      "description": "Cèpes, crème fraîche",
      "prix": 28.0,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_55",
      "categorie_id": "cat_4",
      "nom": "Tagliatelle Mare e Monti",
      "description": "Champignons, petit pois, courgettes, cossa, tomates",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_56",
      "categorie_id": "cat_4",
      "nom": "Lasagna Maison",
      "description": "Bœuf",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 11
    },
    {
      "id": "prod_57",
      "categorie_id": "cat_4",
      "nom": "Ravioli Maison Carne",
      "description": "Bœuf, ou Spinaci e Ricotta, ou Cèpes (Solo, Duo ou Trio)",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 12
    },
    {
      "id": "prod_58",
      "categorie_id": "cat_4",
      "nom": "Gnocchi",
      "description": "Sauce au choix",
      "prix": 28.0,
      "image_url": null,
      "disponible": true,
      "ordre": 13
    },
    {
      "id": "prod_59",
      "categorie_id": "cat_4",
      "nom": "Risotto ai Funghi ou al San Daniele",
      "description": "Cèpes, ou jambon San Daniele",
      "prix": 28.0,
      "image_url": null,
      "disponible": true,
      "ordre": 14
    },
    {
      "id": "prod_60",
      "categorie_id": "cat_4",
      "nom": "Risotto façon Paella",
      "description": "Riz safran, fruits de mer, saucisse de bœuf",
      "prix": 28.0,
      "image_url": null,
      "disponible": true,
      "ordre": 15
    },
    {
      "id": "prod_61",
      "categorie_id": "cat_5",
      "nom": "Assiettes de Spécialités Italiennes",
      "description": "Légumes grillés, charcuterie",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_62",
      "categorie_id": "cat_5",
      "nom": "Carpaccio de Bœuf roquette et Parmesan",
      "description": "",
      "prix": 24.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_63",
      "categorie_id": "cat_5",
      "nom": "Avocat vinaigrette",
      "description": "",
      "prix": 13.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_64",
      "categorie_id": "cat_5",
      "nom": "Avocat crevettes grises",
      "description": "",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_65",
      "categorie_id": "cat_5",
      "nom": "Jambon de Parme et melon",
      "description": "",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_66",
      "categorie_id": "cat_5",
      "nom": "Cocktail de Crevettes",
      "description": "",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_67",
      "categorie_id": "cat_5",
      "nom": "Carpaccio de Capitaine",
      "description": "",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_68",
      "categorie_id": "cat_5",
      "nom": "Tartare de saumon al fresco",
      "description": "",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_69",
      "categorie_id": "cat_5",
      "nom": "Saumon fumé et ses accompagnements",
      "description": "",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_70",
      "categorie_id": "cat_5",
      "nom": "Cossas ail et piment",
      "description": "",
      "prix": 18.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_71",
      "categorie_id": "cat_5",
      "nom": "Cuisses de Grenouille à l'ail",
      "description": "",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 11
    },
    {
      "id": "prod_72",
      "categorie_id": "cat_5",
      "nom": "Calamare Fritti",
      "description": "",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 12
    },
    {
      "id": "prod_73",
      "categorie_id": "cat_5",
      "nom": "Scampi Fritti",
      "description": "",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 13
    },
    {
      "id": "prod_74",
      "categorie_id": "cat_5",
      "nom": "Eperlan fritti (ndakala)",
      "description": "100gr",
      "prix": 14.0,
      "image_url": null,
      "disponible": true,
      "ordre": 14
    },
    {
      "id": "prod_75",
      "categorie_id": "cat_5",
      "nom": "Parmigiana",
      "description": "Aubergines gratinées",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 15
    },
    {
      "id": "prod_76",
      "categorie_id": "cat_5",
      "nom": "Mêlée de Champignons et Cossas au Basilic",
      "description": "",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 16
    },
    {
      "id": "prod_77",
      "categorie_id": "cat_5",
      "nom": "Minestrone",
      "description": "",
      "prix": 13.0,
      "image_url": null,
      "disponible": true,
      "ordre": 17
    },
    {
      "id": "prod_78",
      "categorie_id": "cat_6",
      "nom": "Salade Roquette et Parmesan",
      "description": "",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_79",
      "categorie_id": "cat_6",
      "nom": "Burrata alla Caprese",
      "description": "Tomates, pignons, basilic",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_80",
      "categorie_id": "cat_6",
      "nom": "Salade Niçoise",
      "description": "Thon, œufs, olives, tomates, anchois",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_81",
      "categorie_id": "cat_6",
      "nom": "Salade Chèvre",
      "description": "Chèvre, pommes, raisins secs, granola",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_82",
      "categorie_id": "cat_6",
      "nom": "Salade Avé Cesare",
      "description": "Poulet, avocat, parmesan",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_83",
      "categorie_id": "cat_6",
      "nom": "Salade Mixte",
      "description": "Tomates, concombres, oignons",
      "prix": 20.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_84",
      "categorie_id": "cat_6",
      "nom": "Salade Italienne",
      "description": "Tomates, olives, roquette, jambon de Parme",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_85",
      "categorie_id": "cat_6",
      "nom": "Salade au Foie Gras",
      "description": "Foie gras, figues, poires, pain d'épices",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_86",
      "categorie_id": "cat_6",
      "nom": "Salade Océane",
      "description": "Saumon fumé, crevettes, tomates, chicon, cœur de palmier",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_87",
      "categorie_id": "cat_6",
      "nom": "Salade Halloumi",
      "description": "Tomates, menthe, oignons, courgettes grillées, halloumi",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_88",
      "categorie_id": "cat_7",
      "nom": "Focaccia",
      "description": "Sel, épices",
      "prix": 12.0,
      "image_url": null,
      "disponible": true,
      "ordre": 1
    },
    {
      "id": "prod_89",
      "categorie_id": "cat_7",
      "nom": "Margherita",
      "description": "Tomate, mozzarella, origan",
      "prix": 22.0,
      "image_url": null,
      "disponible": true,
      "ordre": 2
    },
    {
      "id": "prod_90",
      "categorie_id": "cat_7",
      "nom": "Prosciutto",
      "description": "Tomate, mozzarella, jambon, champignons, olives vertes",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 3
    },
    {
      "id": "prod_91",
      "categorie_id": "cat_7",
      "nom": "Calzone",
      "description": "Tomate, mozzarella, jambon, parmesan + un ingrédient au choix",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 4
    },
    {
      "id": "prod_92",
      "categorie_id": "cat_7",
      "nom": "Diavola",
      "description": "Tomate, poivrons, mozzarella, salami piquant, olives",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 5
    },
    {
      "id": "prod_93",
      "categorie_id": "cat_7",
      "nom": "Tonino",
      "description": "Tomate, mozzarella, thon, oignons, olives",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 6
    },
    {
      "id": "prod_94",
      "categorie_id": "cat_7",
      "nom": "Hawaïenne",
      "description": "Tomate, mozzarella, jambon, ananas",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 7
    },
    {
      "id": "prod_95",
      "categorie_id": "cat_7",
      "nom": "Vegetariana",
      "description": "Tomates fraîches, mozzarella, champignons, oignons, olives, légumes grillés",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 8
    },
    {
      "id": "prod_96",
      "categorie_id": "cat_7",
      "nom": "Polo",
      "description": "Tomate, mozzarella, poulet",
      "prix": 23.0,
      "image_url": null,
      "disponible": true,
      "ordre": 9
    },
    {
      "id": "prod_97",
      "categorie_id": "cat_7",
      "nom": "Pizza Funghi",
      "description": "Tomate, mozzarella, champignons, origan",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 10
    },
    {
      "id": "prod_98",
      "categorie_id": "cat_7",
      "nom": "Napoli",
      "description": "Tomate, mozzarella, anchois, câpres, origan",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 11
    },
    {
      "id": "prod_99",
      "categorie_id": "cat_7",
      "nom": "Capricciosa",
      "description": "Tomate, mozzarella, jambon, artichauts, olives vertes, oignons",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 12
    },
    {
      "id": "prod_100",
      "categorie_id": "cat_7",
      "nom": "Pizza Limoncello",
      "description": "Tomate, mozzarella, champignons, cèpes, tomates cerise, basilic frais",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 13
    },
    {
      "id": "prod_101",
      "categorie_id": "cat_7",
      "nom": "Rocca",
      "description": "Tomate, mozzarella, tomates cerise, roquette",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 14
    },
    {
      "id": "prod_102",
      "categorie_id": "cat_7",
      "nom": "Quattro Stagioni",
      "description": "Tomate, mozzarella, jambon de Parme, artichauts, champignons, olives noires",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 15
    },
    {
      "id": "prod_103",
      "categorie_id": "cat_7",
      "nom": "Brezaola",
      "description": "Tomate, mozzarella, brezaola, roquette, basilic",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 16
    },
    {
      "id": "prod_104",
      "categorie_id": "cat_7",
      "nom": "Cossa",
      "description": "Tomate, mozzarella, cossas, ail",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 17
    },
    {
      "id": "prod_105",
      "categorie_id": "cat_7",
      "nom": "Focaccia Garnie",
      "description": "Mozzarella, roquette, jambon de Parme",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 18
    },
    {
      "id": "prod_106",
      "categorie_id": "cat_7",
      "nom": "Quattro Formaggi",
      "description": "Tomate, quatre fromages différents, olives vertes",
      "prix": 25.0,
      "image_url": null,
      "disponible": true,
      "ordre": 19
    },
    {
      "id": "prod_107",
      "categorie_id": "cat_7",
      "nom": "Frutti di Mare",
      "description": "Tomate, mozzarella, fruits de mer",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 20
    },
    {
      "id": "prod_108",
      "categorie_id": "cat_7",
      "nom": "Salmone",
      "description": "Tomate, mozzarella, crème fraîche, saumon fumé",
      "prix": 26.0,
      "image_url": null,
      "disponible": true,
      "ordre": 21
    },
    {
      "id": "prod_109",
      "categorie_id": "cat_7",
      "nom": "Supplément Ingrédient - Petit",
      "description": "Ingrédient supplémentaire au choix",
      "prix": 2.0,
      "image_url": null,
      "disponible": true,
      "ordre": 22
    },
    {
      "id": "prod_110",
      "categorie_id": "cat_7",
      "nom": "Supplément Ingrédient - Grand",
      "description": "Ingrédient supplémentaire au choix",
      "prix": 5.0,
      "image_url": null,
      "disponible": true,
      "ordre": 23
    }
  ]
};