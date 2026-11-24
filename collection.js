const collection = [
    {
        name: "Le Grand Dieu Pan",
        author: "Arthur Machen",
        publisher: "Callidor",
        pic: "grand_dieu_pan.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ]
    },
    {
        name: "Le Roi en Jaune",
        author: "Robert W. Chambers",
        publisher: "Callidor",
        pic: "roi_en_jaune.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "23/11/2026"
    },
    {
        name: "Les Hauts de Hurlevent",
        author: "Emilie Bronte",
        publisher: "Callidor",
        pic: "hauts_hurlevent.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "23/11/2026"
    },
    {
        name: "Le Cycle d'Elric",
        author: "Michael Moorcock",
        publisher: "Omnibus",
        pic: "cycle_elric.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "23/11/2026"
    },
    {
        name: "World of WarCraft : Sylvanas",
        author: "Christie Golden",
        publisher: "Bragelonne",
        pic: "sylvanas.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "23/11/2026"
    },
    {
        name: "L'Ange du Chaos",
        author: "Michel Robert",
        publisher: "Pocket",
        pic: "ange_chaos.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ]
    },
    {
        name: "One Piece",
        author: "Eiichiro Oda",
        publisher: "Glenat",
        pic: "one_piece_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: true,
        },
        tags: [
            "Manga",
            "Shonen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-113"],
            last_volume_published: 113,
            is_finished: false
        }
    },
    {
        name: "Jujutsu Kaisen",
        author: "Gege Akutami",
        publisher: "Ki-oon",
        pic: "jujutsu_kaisen_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Manga",
            "Shonen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-2"],
            last_volume_published: 30,
            is_finished: false
        }
    },
    {
        name: "Berserk",
        author: "Kentarō Miura",
        publisher: "Glenat",
        pic: "berserk_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-34"],
            last_volume_published: 43,
            is_finished: false
        }
    },
    {
        name: "Gloutons & Dragons",
        author: "Ryōko Kui",
        publisher: "Casterman",
        pic: "gloutons_dragons_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-5"],
            last_volume_published: 14,
            is_finished: true
        }
    },
    {
        name: "Frieren",
        author: "Kanehito Yamada",
        publisher: "Ki-oon",
        pic: "frieren_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Shonen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-5"],
            last_volume_published: 15,
            is_finished: false
        }
    },
    {
        name: "The Promised Neverland",
        author: "Kaiu Shirai",
        publisher: "Kaze",
        pic: "promised_neverland_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Shonen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: [1],
            last_volume_published: 20,
            is_finished: true
        }
    },
    {
        name: "L'atelier des Sorciers",
        author: "Kamome Shirahama",
        publisher: "Pika Edition",
        pic: "atelier_sorciers_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-7"],
            last_volume_published: 16,
            is_finished: false
        }
    },
    {
        name: "Les Enfants de la Mer",
        author: "Daisuke Igarashi",
        publisher: "Sarbacane",
        pic: "enfants_mer_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-2"],
            last_volume_published: 5,
            is_finished: true
        }
    },
    {
        name: "Made in Abyss",
        author: "Akihito Tsukushi",
        publisher: "Ototo",
        pic: "made_in_abyss_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-9", 14],
            last_volume_published: 15,
            is_finished: false
        }
    },
    {
        name: "Invicible",
        author: "Robert Kirkman",
        publisher: "Delcourt",
        pic: "invincible_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "BD & Comics"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-3"],
            last_volume_published: 12,
            is_finished: true
        }
    },
    {
        name: "Requiem, Chevalier Vampire",
        author: "Pat Mills",
        publisher: "Delcourt",
        pic: "requiem_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "BD & Comics"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-2"],
            last_volume_published: 11,
            is_finished: false
        }
    },
    {
        name: "Elden Ring le Chemin Vers l'Arbre Monde",
        author: "Nikiichi Tobita",
        publisher: "Mana Books",
        pic: "elden_ring_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-2"],
            last_volume_published: 11,
            is_finished: false
        }
    },
    {
        name: "L'Attaque des Titans",
        author: "Hajime Isayama",
        publisher: "Pika Edition",
        pic: "attack_titans_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-5"],
            last_volume_published: 34,
            is_finished: true
        }
    },
    {
        name: "Vinland Saga",
        author: "Makoto Yukimura",
        publisher: "Kurokawa",
        pic: "vinland_saga_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "24/11/2026",
        tags: [
            "Manga",
            "Seinen"
        ],
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-3"],
            last_volume_published: 29,
            is_finished: true
        }
    },
    {
        name: "Chainsaw Man",
        author: "Tatsuki Fujimoto",
        publisher: "Kaze",
        pic: "chainsaw_man_01.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        tags: [
            "Manga",
            "Shonen"
        ],
        dateAdded: "23/11/2026",
        collection_state: {
            updated_on: "23/11/2026",
            volumes: ["1-5"],
            last_volume_published: 24,
            is_finished: true
        }
    },
    {
        name: "Le Hobbit",
        author: "J.R.R Tolkien",
        publisher: "Pocket",
        pic: "hobbit.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        dateAdded: "23/11/2026",
        tags: [
            "Roman"
        ]
    },
    {
        name: "The Nikopol Trilogy",
        author: "Enki Bilal",
        publisher: "Casterman",
        pic: "nikopol.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "23/11/2026",
        tags: [
            "BD / Comics"
        ]
    },
    {
        name: "The Art and Making of Arcane",
        author: "Elisabeth Vincentelli",
        publisher: "Insight Editions",
        pic: "arcane_artbook.jpg",
        ownsIt: {
            lulu: true,
            malvy: false,
        },
        dateAdded: "23/11/2026",
        tags: [
            "Artbook"
        ]
    },
    {
        name: "Fantasy Characters & Creatures: An Artist's Sourcebook",
        author: "Satoshi Matsuura",
        publisher: "Tuttle Publishing",
        pic: "fantasy_characters.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "23/11/2026",
        tags: [
            "Artbook"
        ]
    },
    {
        name: "One Piece Color Walk - Tome 03",
        author: "Eiichiro Oda",
        publisher: "Glenat",
        pic: "one_piece_color_walk_03.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "23/11/2026",
        tags: [
            "Artbook"
        ]
    },
    {
        name: "La Grand Aventure de Pikachu",
        author: "Joseph Tobin",
        publisher: "Pix'n Love",
        pic: "grande_aventure_pikachu.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "24/11/2026",
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ]
    },
    {
        name: "Dark Souls Par-Delà la Mort Volume 1",
        author: "Damien Mecheri",
        publisher: "Third Edition",
        pic: "dark_souls_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "23/11/2026",
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ]
    },
    {
        name: "Dark Souls Par-Delà la Mort Volume 2",
        author: "Damien Mecheri",
        publisher: "Third Edition",
        pic: "dark_souls_02.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "24/11/2026",
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ]
    },
    {
        name: "Entre les Mondes de Death Stranding",
        author: "Anthony Fournier",
        publisher: "Third Edition",
        pic: "death_stranding.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        dateAdded: "24/11/2026",
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ]
    },
    {
        name: "Léviathan",
        author: "Shiro Kuroi",
        publisher: "Ki-oon",
        pic: "leviathan_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-2"],
            last_volume_published: 3,
            is_finished: true
        }
    },
    {
        name: "World of Warcraft Chroniques Volume 01",
        author: "Chris Metzen",
        publisher: "Panini Books",
        pic: "wow_chroniques_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Dans le Cerveau du Gamer",
        author: "Celia Holdent",
        publisher: "Dunod",
        pic: "cerveau_gamer.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Morpho Mammifères",
        author: "Michel Lauricella",
        publisher: "Editions Eyrolles",
        pic: "morpho_mammiferes.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Art"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "La Terreur Féministe",
        author: "Irène Rose",
        publisher: "Editions Divergences",
        pic: "terreur_feministe.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Politique"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Moi les hommes, je les Déteste",
        author: "Pauline Harmange",
        publisher: "Seuil",
        pic: "les_hommes_je_les_deteste.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Politique"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Le Cauchemar d'Innsmouth",
        author: "H.P. Lovecraft",
        publisher: "J'ai Lu",
        pic: "cauchemar_innsmouth.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "L'art du Game Design",
        author: "Jesse Schell",
        publisher: "Dunod",
        pic: "art_game_design.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Jeux Vidéos"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Les 1001 Merveilles de l'Architecture qu'il Faut Avoir Vu dans sa Vie",
        author: "François Barré",
        publisher: "Flammarion",
        pic: "1001_architectures.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Art"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Les 1001 Tableaux qu'il Faut Avoir Vu dans sa Vie",
        author: "Pierre Assouline",
        publisher: "Flammarion",
        pic: "1001_tableaux.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Art"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Strange Houses",
        author: "Uketsu",
        publisher: "Harpervia",
        pic: "strange_houses.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman",
            "Illustrated"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Dagon",
        author: "H.P. Lovecraft",
        publisher: "J'ai Lu",
        pic: "dagon.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Le Prince des Ténèbres",
        author: "Jeannine Frost",
        publisher: "Bragelonne",
        pic: "prince_tenebres_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-2"],
            last_volume_published: 4,
            is_finished: true
        }
    },
    {
        name: "Knights of Sidonia",
        author: "Tsutomu Nihei",
        publisher: "Glenat",
        pic: "kingts_sidonia_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-2"],
            last_volume_published: 15,
            is_finished: true
        }
    },
    {
        name: "Huger Games",
        author: "Suzanne Collins",
        publisher: "Pocket Jeunesse",
        pic: "hunger_games_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-3"],
            last_volume_published: 3,
            is_finished: true
        }
    },
    {
        name: "Le Prince des Nuages",
        author: "Christopher Galfard",
        publisher: "Pocket Jeunesse",
        pic: "prince_nuages_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: [1],
            last_volume_published: 3,
            is_finished: true
        }
    },
    {
        name: "Percy Jackson",
        author: "Rick Riordan",
        publisher: "Le Livre de Poche Jeunesse",
        pic: "percy_jackson_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-4"],
            last_volume_published: 7,
            is_finished: false
        }
    },
    {
        name: "Dracula",
        author: "Bram Stoker",
        publisher: "L'Ecole des Loisirs",
        pic: "dracula.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "L'Odyssée",
        author: "Homère",
        publisher: "L'Ecole des Loisirs",
        pic: "odyssee.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "L'Iliade",
        author: "Homère",
        publisher: "L'Ecole des Loisirs",
        pic: "iliade.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Courbet",
        author: "Fabrice Masanès",
        publisher: "Taschen",
        pic: "courbet.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Encyclopédie",
            "Art"
        ],
        dateAdded: "24/11/2026"
    },
    {
        name: "Chroniques du Monde Emergé",
        author: "Licia Troisi",
        publisher: "Pocket Jeunesse",
        pic: "chronique_monde_emerge_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Roman"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["2-3"],
            last_volume_published: 4,
            is_finished: true
        }
    },
    {
        name: "Les Légendaires",
        author: "Patrick Sobral",
        publisher: "Delcourt",
        pic: "legendaires_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "BD / Comics"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: [1, 10, "12-14"],
            last_volume_published: 23,
            is_finished: true
        }
    },
    {
        name: "Les Légendaires Origines",
        author: "Patrick Sobral",
        publisher: "Delcourt",
        pic: "legendaires_origines_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "BD / Comics"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-2"],
            last_volume_published: 8,
            is_finished: false
        }
    },
    {
        name: "Blame!",
        author: "Tsutomu Nihei",
        publisher: "Glenat",
        pic: "blame_01.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "24/11/2026",
        collection_state: {
            updated_on: "24/11/2026",
            volumes: ["1-6"],
            last_volume_published: 6,
            is_finished: true
        }
    },
    {
        name: "Blame! - Tome 0",
        author: "Tsutomu Nihei",
        publisher: "Glenat",
        pic: "blame_00.jpg",
        ownsIt: {
            lulu: false,
            malvy: true,
        },
        tags: [
            "Manga",
            "Seinen"
        ],
        dateAdded: "24/11/2026"
    }
];