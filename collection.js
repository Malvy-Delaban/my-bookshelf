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
        ],
        dateAdded: "23/11/2026"
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
            volumes: ["1"],
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
        tags: [
            "Artbook"
        ]
    }
];