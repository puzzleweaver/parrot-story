
import type { Tree } from "./tree-type";
export const tree: Tree = {
    "0": {
        "actions": [
            {
                "dest": "71284",
                "label": "Let's go!",
                "needsFlags": []
            }
        ],
        "id": 0,
        "label": "Beginning of Game",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "text/title/a.png",
                    "scale": 0.5,
                    "x": 0.2,
                    "y": 0.35
                },
                {
                    "angle": 0,
                    "img": "text/title/parrot.png",
                    "scale": 0.5,
                    "x": 0.65,
                    "y": 0.25
                },
                {
                    "angle": 0,
                    "img": "text/title/story.png",
                    "scale": 0.65,
                    "x": 0.45,
                    "y": 0.8
                }
            ],
            "bg": "bg/canopy.png"
        },
        "text": "This is the story of a parrot and its egg."
    },
    "1826": {
        "actions": [
            {
                "dest": "85550",
                "label": "leave the dachshund for now"
            }
        ],
        "addsFlags": [],
        "id": "1826",
        "label": "Dachshund rejects martini",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/dachshund/gifted.png",
                    "scale": 0.65,
                    "x": 0.4,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "prop/martini.png",
                    "scale": 0.5,
                    "x": 0.8,
                    "y": 0.75
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The dachshund looks sad and confused. \"I'm a dog, I don't drink.\" You feel a little awkward."
    },
    "2739": {
        "actions": [
            {
                "dest": "14923",
                "label": "Continue talking to koala",
                "needsFlags": []
            },
            {
                "dest": "20907",
                "label": "Return to animals to get away from this conversation",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "talkedToKoala2",
            "canThrowRocks"
        ],
        "id": "2739",
        "label": "Koala Cult Talk 2",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "character/koala/surprised.png",
                    "scale": 0.8,
                    "x": 0.4920037464042546,
                    "y": 0.7
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "The koala continues, \"Well you see, it rules over everything! You will be in its favor if you perform our sacred ritual. Go to the volcano, and throw rocks into it as an offering.\" You don't know what to make of this, but this animal seems a bit crazed."
    },
    "2839": {
        "actions": [
            {
                "dest": "38201",
                "label": "Next"
            }
        ],
        "addsFlags": [],
        "id": "2839",
        "label": "Egg Hatching 3",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/egg/hatch3.png",
                    "scale": 0.7,
                    "x": 0.5,
                    "y": 0.55
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The shell begins to open, and you can see part of a small creature."
    },
    "4443": {
        "actions": [
            {
                "dest": "49884",
                "label": "...",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "4443",
        "label": "Hotel Egg Hatching 1",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/egg/hatch1.png",
                    "scale": 1,
                    "x": 0.5,
                    "y": 0.55
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The egg started shaking!"
    },
    "5565": {
        "actions": [
            {
                "dest": "40581",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "askForPossumName"
        ],
        "id": "5565",
        "label": "Possum Offended",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/possum/talking.png",
                    "scale": 0.45,
                    "x": 0.73,
                    "y": 0.71
                },
                {
                    "angle": 0,
                    "flipped": false,
                    "img": "character/parrot/blush.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.5,
                    "x": 0.215,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.19,
                    "x": 0.235,
                    "y": 0.3
                },
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "character/parrot/blush.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.5,
                    "x": 0.23,
                    "y": 0.7
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "The possum comes over to you and spreads its mouth in offense. \"No, I'm Pat! Why does everyone keep calling me Jen?\" Your face feels hot. You aren't sure what you were thinking.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "The possum comes over to you and spreads its mouth in offense. \"No, I'm Pat! Why does everyone keep calling me Jen?\" Your face feels hot. Managing all these social interactions is very confusing and draining."
            }
        ]
    },
    "5936": {
        "actions": [],
        "endgame": "lose",
        "id": "5936",
        "label": "Egg breaks on fountain",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/city_fountain.png",
                    "scale": 2,
                    "x": 0.08,
                    "y": 0.5606425359088512
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/parrot/sad.png",
                    "scale": 0.24,
                    "x": 0.54,
                    "y": 0.5420089620335692
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/egg/soup.png",
                    "scale": 0.1,
                    "x": 0.74,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/egg/brokenShellRight.png",
                    "scale": 0.105,
                    "x": 0.885,
                    "y": 0.6
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/egg/brokenShellLeft.png",
                    "scale": 0.1,
                    "x": 0.565,
                    "y": 0.7784893917831026
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "Your egg splatters across the fountain. You're devastated."
    },
    "7769": {
        "actions": [
            {
                "dest": "69799",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "7769",
        "label": "Rat Leader 1",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/rat/leader_talking.png",
                    "scale": 1.055,
                    "x": 0.555,
                    "y": 0.575
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "\"My dear brothers and sisters,\" the leader rat begins, \"we are coming up on an unprecedented time in the universe. The fifth dimension is here. It's upon us. Our minds are open to the secrets of the universe, filling us with warmth and happiness. Happiness is all there is.\" "
    },
    "9403": {
        "actions": [
            {
                "dest": "28035",
                "label": "Inspect drink",
                "needsFlags": []
            },
            {
                "dest": "16163",
                "label": "Thank him",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveCosmo"
        ],
        "id": "9403",
        "label": "bear pours cosmo",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.35,
                    "x": 0.1,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/barCounter.png",
                    "scale": 0.6,
                    "x": 0.55,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "character/bear/fillingCosmoDrink.png",
                    "scale": 0.2,
                    "x": 0.75,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "character/bear/fillingCosmo.png",
                    "scale": 0.4,
                    "x": 0.65,
                    "y": 0.25
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "The strange panda pours the cosmopolitan drink carefully. \"Hope your friend enjoys!\""
    },
    "9785": {
        "actions": [
            {
                "dest": "87223",
                "label": "Follow the rats through the hole",
                "needsFlags": []
            },
            {
                "dest": "18822",
                "label": "Leave the Bathroom",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "9785",
        "label": "Discover hole",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "setting/hole_in_wall.png",
                    "scale": 0.58,
                    "x": 0.525,
                    "y": 0.79
                },
                {
                    "angle": -0.55,
                    "img": "character/rat/rat_2.png",
                    "scale": 0.5,
                    "x": 0.77,
                    "y": 0.99
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_1.png",
                    "scale": 0.36,
                    "x": 0.265,
                    "y": 0.955
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "The rats lead you to the corner of the bathroom where there's a hole in the wall! It's just big enough for you to fit through!"
    },
    "10255": {
        "actions": [
            {
                "dest": "13631",
                "label": "Wander the city again",
                "needsFlags": []
            },
            {
                "dest": "11989",
                "label": "Dig through the fountain",
                "needsFlags": []
            },
            {
                "dest": "94275",
                "label": "Climb on the fountain",
                "needsFlags": [
                    "!hasClimbedFountain",
                    "!drunk"
                ]
            },
            {
                "dest": "94275",
                "label": "Push your luck and climb the fountain again",
                "needsFlags": [
                    "hasClimbedFountain"
                ]
            },
            {
                "dest": "94275",
                "label": "Climb fountain while tipsy",
                "needsFlags": [
                    "drunk"
                ]
            }
        ],
        "addsFlags": [
            "sawFountain"
        ],
        "id": "10255",
        "label": "Fountain Hub",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/city_fountain.png",
                    "scale": 1.05,
                    "x": 0.505,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/parrot/bindle.png",
                    "scale": 0.245,
                    "x": 0.105,
                    "y": 0.815
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.16,
                    "y": 0.65
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You arrive to the fountain! You love the smell of the water.",
        "textVariants": [
            {
                "flags": [
                    "sawFountain"
                ],
                "text": "The city fountain stares back at you. What do you do next?"
            },
            {
                "flags": [
                    "!sawFountain",
                    "drunk"
                ],
                "text": "You arrive to the fountain. The water smells nice but you're still woozy."
            }
        ]
    },
    "11635": {
        "actions": [
            {
                "dest": "13849",
                "label": "Next"
            }
        ],
        "addsFlags": [],
        "id": "11635",
        "label": "Doberman attack",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_fast",
                    "img": "character/doberman/attack.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "Oh no! The doberman lunges at you, takes your egg from your beak, and breaks it between his teeth! "
    },
    "11989": {
        "actions": [
            {
                "dest": "18632",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "11989",
        "label": "Digging through fountain",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/city_fountain.png",
                    "scale": 1.05,
                    "x": 0.505,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/parrot/splashing.png",
                    "scale": 0.315,
                    "x": 0.255,
                    "y": 0.48
                },
                {
                    "angle": -0.76,
                    "img": "prop/splash_1.png",
                    "scale": 0.1,
                    "x": 0.325,
                    "y": 0.31563327580077283
                },
                {
                    "angle": 0,
                    "img": "prop/splash_2.png",
                    "scale": 0.1,
                    "x": 0.39,
                    "y": 0.47144549762423216
                },
                {
                    "angle": 0.545,
                    "img": "prop/splash_3.png",
                    "scale": 0.1,
                    "x": 0.39,
                    "y": 0.545
                },
                {
                    "angle": 2.04,
                    "img": "prop/splash_4.png",
                    "scale": 0.1,
                    "x": 0.205,
                    "y": 0.42
                },
                {
                    "angle": 2.71,
                    "img": "prop/splash_5.png",
                    "scale": 0.1,
                    "x": 0.245,
                    "y": 0.325
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.125,
                    "x": 0.35,
                    "y": 0.385
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You dig through the fountain!"
    },
    "12073": {
        "actions": [
            {
                "dest": "78527",
                "label": "Accept request",
                "needsFlags": [
                    "!haveDogBone"
                ]
            },
            {
                "dest": "62947",
                "label": "\"No thanks\"",
                "needsFlags": [
                    "!beagleRejected",
                    "!haveDogBone"
                ]
            },
            {
                "dest": "62947",
                "label": "Refuse offer again",
                "needsFlags": [
                    "beagleRejected",
                    "!haveDogBone"
                ]
            },
            {
                "dest": "63647",
                "label": "Say \"You're welcome!\"",
                "needsFlags": [
                    "haveDogBone"
                ]
            }
        ],
        "addsFlags": [
            "talkedToBeagle"
        ],
        "id": "12073",
        "label": "Beagle asks for favor",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/beagle/gifted.png",
                    "scale": 0.8,
                    "x": 0.55,
                    "y": 0.7
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The beagle turns to you. \"It's so nice to meet you! Playing was a blast!\" You smile at him. \"By the way, I know this is short notice, but can you bring my girlfriend a gift for me? She works at the hotel near here. It would be a great chance for you to see more of the city.\"",
        "textVariants": [
            {
                "flags": [
                    "beagleRejected"
                ],
                "text": "The beagle turns to you again. \"Hey, I know you said you didn't want to bring my gf a gift, but would you be willing to reconsider? It would really make her day!\""
            },
            {
                "flags": [
                    "haveDogBone"
                ],
                "text": "The beagle turns to you again. \"Thanks so much for agreeing to bring my girlfriend a gift. She really is the sweetest.\""
            }
        ]
    },
    "13097": {
        "actions": [
            {
                "dest": "13631",
                "label": "Wander the city",
                "needsFlags": []
            },
            {
                "dest": "40581",
                "label": "Go in!",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveSeenFlowerShop"
        ],
        "id": "13097",
        "label": "Flower shop exterior",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.25,
                    "x": 0.05,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/flowerShop.png",
                    "scale": 1.05,
                    "x": 0.5,
                    "y": 0.55
                },
                {
                    "angle": 0,
                    "img": "prop/sunflowers.png",
                    "scale": 0.2,
                    "x": 0.9,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.12,
                    "x": 0.11532884775633567,
                    "y": 0.615
                },
                {
                    "angle": -0.63,
                    "img": "character/rat/rat_3.png",
                    "needsFlags": [
                        "drunk",
                        "haveRatVision"
                    ],
                    "scale": 0.1,
                    "x": 0.41962877191528813,
                    "y": 0.9414897753894047
                },
                {
                    "angle": -0.755,
                    "img": "character/rat/rat_3.png",
                    "needsFlags": [
                        "drunk",
                        "haveRatVision"
                    ],
                    "scale": 0.1,
                    "x": 0.42,
                    "y": 0.1
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.115,
                    "x": 0.66,
                    "y": 0.81
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You arrive to the flower shop! It seems welcoming.",
        "textVariants": [
            {
                "flags": [
                    "haveSeenFlowerShop"
                ],
                "text": "You're back at the flower shop!"
            }
        ]
    },
    "13631": {
        "actions": [
            {
                "dest": "27595",
                "label": "Go to hotel",
                "needsFlags": []
            },
            {
                "dest": "85550",
                "label": "Go to dog park",
                "needsFlags": []
            },
            {
                "dest": "61921",
                "label": "Go to bar",
                "needsFlags": []
            },
            {
                "dest": "13097",
                "label": "Go to flower shop",
                "needsFlags": []
            },
            {
                "dest": "10255",
                "label": "Visit city fountain",
                "needsFlags": []
            },
            {
                "dest": "99585",
                "label": "Visit therapy mouse",
                "needsFlags": [
                    "haveMetTherapyMouse"
                ]
            }
        ],
        "addsFlags": [
            "haveSeenCity"
        ],
        "id": "13631",
        "label": "City Hub",
        "scene": {
            "actors": [],
            "bg": "bg/city.png"
        },
        "text": "You wander the city and wonder what you should do. There are really only a few options...",
        "textVariants": [
            {
                "flags": [
                    "haveSeenCity"
                ],
                "text": "You wander the city again and think about what you should do next. "
            }
        ]
    },
    "13817": {
        "actions": [
            {
                "dest": "23991",
                "label": "Inspect Keycard",
                "needsFlags": []
            },
            {
                "dest": "56699",
                "label": "Say \"Thanks!\"",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveKeycard"
        ],
        "id": "13817",
        "label": "Receive Hamster Gift",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "flipped": false,
                    "img": "character/hamster/neutral.png",
                    "scale": 0.78,
                    "x": 0.49,
                    "y": 0.725
                },
                {
                    "angle": 1.21,
                    "animation": "hop_slow",
                    "img": "prop/hotelKeyCard.png",
                    "scale": 0.5,
                    "x": 0.64,
                    "y": 0.9
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "\"It's a keycard to our pool area!\" she says. \"Please enjoy a free swim in our hot tub.\""
    },
    "13849": {
        "actions": [
            {
                "dest": "51350",
                "label": "Next"
            }
        ],
        "addsFlags": [],
        "id": "13849",
        "label": "Shock",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "character/parrot/shocked.png",
                    "scale": 0.5,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You feel shock and horror!"
    },
    "14923": {
        "actions": [
            {
                "dest": "20907",
                "label": "Back to the animals",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "talkedToKoala3",
            "talkedToKoala3"
        ],
        "id": "14923",
        "label": "Koala Cult Talk 3 ",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "spin_fast",
                    "img": "character/koala/talking.png",
                    "scale": 1.15,
                    "x": 0.5,
                    "y": 0.5744793845602532
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "He continues, with increased pitch and fervor: \n\"Out in the mindless void the daemon bore me\nPast the bright clusters of dimensioned space,\nTill neither time nor matter stretched before me,\nBut only Chaos, without form or place.\"\nYou decide it's time to leave."
    },
    "16163": {
        "actions": [
            {
                "dest": "18822",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "meetBear"
        ],
        "id": "16163",
        "label": "Parrot says thanks to bear",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/backWingsSpread.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.86,
                    "x": 0.515,
                    "y": 0.52
                },
                {
                    "angle": 0,
                    "img": "character/parrot/back.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.785,
                    "x": 0.4724080673554427,
                    "y": 0.5935892429645868
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.225,
                    "x": 0.4475303429860865,
                    "y": 0.16100141979995175
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"Thanks so much!\" you squawk at him. \"You're welcome!\" the panda says.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "\"Thanks so much,\" you manage to squawk at him."
            }
        ]
    },
    "17556": {
        "actions": [
            {
                "dest": "20907",
                "label": "Return to other animals",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "17556",
        "label": "Koala Follow Up",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/koala/talking.png",
                    "scale": 0.445,
                    "x": 0.74,
                    "y": 0.815
                },
                {
                    "angle": 0,
                    "img": "character/parrot/back.png",
                    "scale": 0.5,
                    "x": 0.155,
                    "y": 0.875
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You are terrified of this koala but something possesses you to reinitiate a conversation. He sounds different now, with a smooth, silky voice. \"Hey, what's up?\" You are at a loss for words."
    },
    "18632": {
        "actions": [
            {
                "dest": "10255",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveGlasses"
        ],
        "id": "18632",
        "label": "Fountain Dig Result",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/city_fountain.png",
                    "scale": 1.05,
                    "x": 0.505,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/parrot/shocked.png",
                    "needsFlags": [
                        "haveGlasses"
                    ],
                    "scale": 0.14,
                    "x": 0.285,
                    "y": 0.435
                },
                {
                    "angle": 0,
                    "img": "character/parrot/cool.png",
                    "needsFlags": [
                        "!haveGlasses"
                    ],
                    "scale": 0.27,
                    "x": 0.25,
                    "y": 0.66
                },
                {
                    "angle": 0,
                    "img": "text/soCool.png",
                    "needsFlags": [
                        "!haveGlasses",
                        "!drunk"
                    ],
                    "scale": 0.16,
                    "x": 0.375,
                    "y": 0.695
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.17,
                    "x": 0.31,
                    "y": 0.38
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You found a cool pair of sunglasses! You put them on briefly and then put them away in your plumage.",
        "textVariants": [
            {
                "flags": [
                    "haveGlasses"
                ],
                "text": "You get soaked and don't end up finding anything."
            }
        ]
    },
    "18822": {
        "actions": [
            {
                "dest": "82006",
                "label": "Wander the city again",
                "needsFlags": [
                    "!haveMetTherapyMouse"
                ]
            },
            {
                "dest": "13631",
                "label": "Wander the city again",
                "needsFlags": [
                    "haveMetTherapyMouse"
                ]
            },
            {
                "dest": "65138",
                "label": "Ask for a drink",
                "needsFlags": [
                    "!hasDrink"
                ]
            },
            {
                "dest": "65138",
                "label": "Ask for another drink",
                "needsFlags": [
                    "hasDrink"
                ]
            },
            {
                "dest": "47626",
                "label": "Use their bathroom",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "meetBear"
        ],
        "id": "18822",
        "label": "Bar Hub",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.35,
                    "x": 0.1,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "img": "character/bear/neutral.png",
                    "scale": 0.5,
                    "x": 0.75,
                    "y": 0.25
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/barCounter.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.6,
                    "x": 0.6,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.14,
                    "y": 0.575
                },
                {
                    "angle": 0,
                    "img": "setting/barCounter.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.62,
                    "x": 0.62,
                    "y": 0.71
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "You go inside and encounter some sort of weird panda. ",
        "textVariants": [
            {
                "flags": [
                    "drunk",
                    "meetBear"
                ],
                "text": "The panda looks at you and wonders if you'd like anything else. He looks mildly concerned for you."
            },
            {
                "flags": [
                    "meetBear"
                ],
                "text": "The panda looks at you and wonders if you'd like anything else."
            },
            {
                "flags": [
                    "!meetBear",
                    "drunk"
                ],
                "text": "You go inside and encounter some sort of weird panda. You feel like things are moving more than they should."
            }
        ]
    },
    "18968": {
        "actions": [
            {
                "dest": "47389",
                "label": "Next. No other options.",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "18968",
        "label": "Volcano gets rocks",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "setting/volcano/opening.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/parrot/throwing.png",
                    "scale": 0.25,
                    "x": 0.1,
                    "y": 0.6021070859995121
                },
                {
                    "angle": 0,
                    "img": "prop/jungleRocks.png",
                    "scale": 0.1,
                    "x": 0.25,
                    "y": 0.4923805290438986
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You launch the rocks into the volcano! They land into the lava and the ground begins to shake!"
    },
    "19418": {
        "actions": [
            {
                "dest": "9785",
                "label": "Follow the rats",
                "needsFlags": []
            },
            {
                "dest": "18822",
                "label": "Leave the Bathroom",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveRatVision"
        ],
        "id": "19418",
        "label": "rat vision discovered",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "flipped": true,
                    "img": "prop/toilet.png",
                    "scale": 0.69,
                    "x": 0.26,
                    "y": 0.5146708692031643
                },
                {
                    "angle": 0,
                    "img": "character/parrot/cool.png",
                    "scale": 0.33,
                    "x": 0.28,
                    "y": 0.39606551592520745
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/bathroom_counter.png",
                    "scale": 0.795,
                    "x": 0.72,
                    "y": 0.375
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "scale": 0.17,
                    "x": 0.875,
                    "y": 0.64
                },
                {
                    "angle": -0.62,
                    "animation": "hop_slow",
                    "img": "character/rat/rat_3.png",
                    "scale": 0.2,
                    "x": 0.4,
                    "y": 0.84
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You put on the glasses. Your mind feels like it has opened up! You suddenly see multiple rats! Guess you now have rat vision."
    },
    "20907": {
        "actions": [
            {
                "dest": "87811",
                "label": "Play with the jaguar",
                "needsFlags": [
                    "!playedWithJaguar"
                ]
            },
            {
                "dest": "78752",
                "label": "Play with the small man",
                "needsFlags": []
            },
            {
                "dest": "48268",
                "label": "Play with the koala",
                "needsFlags": [
                    "!playedWithKoala"
                ]
            },
            {
                "dest": "64647",
                "label": "Talk to the koala",
                "needsFlags": [
                    "!talkedToKoala"
                ]
            },
            {
                "dest": "2739",
                "label": "Talk to the koala again",
                "needsFlags": [
                    "talkedToKoala",
                    "!talkedToKoala2"
                ]
            },
            {
                "dest": "14923",
                "label": "Talk to the koala again",
                "needsFlags": [
                    "talkedToKoala2",
                    "!talkedToKoala3"
                ]
            },
            {
                "dest": "17556",
                "label": "Talk to the koala again",
                "needsFlags": [
                    "talkedToKoala3"
                ]
            },
            {
                "dest": "90619",
                "label": "Wander the jungle some more",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "20907",
        "label": "Jungle animals encounter",
        "scene": {
            "actors": [
                {
                    "angle": 0.035,
                    "animation": "hop_slow",
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.235,
                    "x": 0.205,
                    "y": 0.815
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/monkey/neutral.png",
                    "scale": 0.5,
                    "x": 0.8504803802665324,
                    "y": 0.27
                },
                {
                    "angle": 0,
                    "img": "character/koala/neutral.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.35,
                    "x": 0.2,
                    "y": 0.33024762083858294
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "needsFlags": [
                        "!playedWithJaguar",
                        "!drunk"
                    ],
                    "scale": 0.35,
                    "x": 0.67,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.155,
                    "x": 0.43,
                    "y": 0.885
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/rat/rat_2.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.145,
                    "x": 0.93,
                    "y": 0.365
                },
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "character/koala/neutral.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.355,
                    "x": 0.23,
                    "y": 0.31
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.165,
                    "x": 0.29,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "needsFlags": [
                        "drunk",
                        "!playedWithJaguar"
                    ],
                    "scale": 0.37,
                    "x": 0.655,
                    "y": 0.77
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "needsFlags": [
                        "drunk",
                        "!playedWithJaguar"
                    ],
                    "scale": 0.39,
                    "x": 0.685,
                    "y": 0.74
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "What will you do with these guys?"
    },
    "22555": {
        "actions": [
            {
                "dest": "40581",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveLilac",
            "haveFlower"
        ],
        "id": "22555",
        "label": "You take lilac",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/happy2.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.5,
                    "x": 0.3,
                    "y": 0.6898671123379214
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.505,
                    "x": 0.195,
                    "y": 0.685
                },
                {
                    "angle": 0.51,
                    "img": "prop/lilac.png",
                    "scale": 0.35,
                    "x": 0.25,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "img": "character/possum/neutral.png",
                    "scale": 0.5,
                    "x": 0.75,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "scale": 0.225,
                    "x": 0.28,
                    "y": 0.33
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You take a lilac. It smells wonderful and you feel confident about your selection!",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You take a lilac. It smells wonderful, but the smell is a little hard on your stomach."
            }
        ]
    },
    "22841": {
        "actions": [
            {
                "dest": "59840",
                "label": "Back to Hotel Lobby",
                "needsFlags": []
            },
            {
                "dest": "79680",
                "label": "Go into the pool",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "22841",
        "label": "Hotel pool",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/hotel/hotTub.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.2,
                    "x": 0.15,
                    "y": 0.6686595920676749
                },
                {
                    "angle": 0,
                    "img": "character/egg/neutral.png",
                    "scale": 0.1,
                    "x": 0.05,
                    "y": 0.7224330936908226
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.25,
                    "y": 0.53
                },
                {
                    "angle": 0,
                    "img": "character/parrot/neutral.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.22,
                    "x": 0.155,
                    "y": 0.665
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You find a wonderful little hot tub. You feel sleepy."
    },
    "23253": {
        "actions": [
            {
                "dest": "37515",
                "label": "Time to leave. You go back to where you came from.",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "23253",
        "label": "Cult masks on",
        "scene": {
            "actors": [
                {
                    "angle": 0.035,
                    "animation": "still",
                    "img": "prop/sconce.png",
                    "scale": 0.25,
                    "x": 0.845,
                    "y": 0.21597782101531282
                },
                {
                    "angle": 0,
                    "img": "prop/candle_1.png",
                    "scale": 0.12,
                    "x": 0.785,
                    "y": 0.22
                },
                {
                    "angle": 0,
                    "img": "prop/candle_2.png",
                    "scale": 0.11,
                    "x": 0.895,
                    "y": 0.23
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "character/rat/leader_neutral.png",
                    "scale": 0.205,
                    "x": 0.525,
                    "y": 0.53
                },
                {
                    "angle": 0,
                    "flipped": false,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.24,
                    "x": 0.345,
                    "y": 0.485
                },
                {
                    "angle": 0,
                    "flipped": false,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.215,
                    "x": 0.37,
                    "y": 0.655
                },
                {
                    "angle": -0.035,
                    "flipped": false,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.22,
                    "x": 0.415,
                    "y": 0.42
                },
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.325,
                    "x": 0.19623846852051263,
                    "y": 0.971976817210723
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "text/cult_writing.png",
                    "scale": 0.105,
                    "x": 0.15,
                    "y": 0.0806238762464404
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "text/cult_logo.png",
                    "scale": 0.15,
                    "x": 0.95,
                    "y": 0.125
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.15,
                    "x": 0.625,
                    "y": 0.415
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.2,
                    "x": 0.685,
                    "y": 0.47
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.26,
                    "x": 0.655,
                    "y": 0.585
                },
                {
                    "angle": 0,
                    "img": "character/rat/back_1.png",
                    "scale": 0.205,
                    "x": 0.5,
                    "y": 0.72
                },
                {
                    "angle": 0,
                    "img": "character/rat/standing.png",
                    "scale": 0.225,
                    "x": 0.525,
                    "y": 0.33
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "prop/sconce.png",
                    "scale": 0.215,
                    "x": 0.14007765787037174,
                    "y": 0.22
                },
                {
                    "angle": 0,
                    "img": "prop/candle_3.png",
                    "scale": 0.115,
                    "x": 0.185,
                    "y": 0.22
                },
                {
                    "angle": 0,
                    "img": "prop/candle_1.png",
                    "scale": 0.125,
                    "x": 0.09,
                    "y": 0.21
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "prop/mask_1.png",
                    "scale": 0.1,
                    "x": 0.515,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "prop/mask_side.png",
                    "scale": 0.1,
                    "x": 0.375,
                    "y": 0.435
                },
                {
                    "angle": 0,
                    "img": "prop/mask_side.png",
                    "scale": 0.1,
                    "x": 0.4,
                    "y": 0.615
                },
                {
                    "angle": 0,
                    "img": "prop/mask_side.png",
                    "scale": 0.1,
                    "x": 0.45,
                    "y": 0.375
                },
                {
                    "angle": 0,
                    "img": "prop/mask_2.png",
                    "scale": 0.1,
                    "x": 0.525,
                    "y": 0.275
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "prop/mask_side.png",
                    "scale": 0.1,
                    "x": 0.665,
                    "y": 0.435
                },
                {
                    "angle": -0.315,
                    "flipped": true,
                    "img": "prop/mask_side.png",
                    "scale": 0.1,
                    "x": 0.63,
                    "y": 0.53
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "prop/mask_side.png",
                    "scale": 0.1,
                    "x": 0.6,
                    "y": 0.4
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "The rats continue chanting loudly, in the most crazed way possible."
    },
    "23888": {
        "actions": [
            {
                "dest": "20907",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "metAnimals"
        ],
        "id": "23888",
        "label": "Meet animals first time",
        "scene": {
            "actors": [
                {
                    "angle": 0.035,
                    "animation": "hop_slow",
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.235,
                    "x": 0.205,
                    "y": 0.815
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/monkey/neutral.png",
                    "scale": 0.5,
                    "x": 0.8504803802665324,
                    "y": 0.27
                },
                {
                    "angle": 0,
                    "img": "character/koala/neutral.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.35,
                    "x": 0.2,
                    "y": 0.33024762083858294
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.35,
                    "x": 0.67,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.135,
                    "x": 0.29,
                    "y": 0.69
                },
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "character/koala/neutral.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.345,
                    "x": 0.21,
                    "y": 0.305
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.335,
                    "x": 0.62,
                    "y": 0.76
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.34,
                    "x": 0.625,
                    "y": 0.795
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You encounter some strange-looking animals! You think they're called a koala, jaguar, and a small man.",
        "textVariants": [
            {
                "flags": [
                    "drunk",
                    "!metAnimals"
                ],
                "text": "You encounter some strange-looking animals! You think they're called a koala, jaguar, and a small man but you can't be too sure."
            }
        ]
    },
    "23991": {
        "actions": [
            {
                "dest": "56699",
                "label": "Say \"Thanks!\"",
                "needsFlags": []
            },
            {
                "dest": "53122",
                "label": "Flip Keycard Over",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "23991",
        "label": "Keycard front",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/hotelKeyCardFront.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The front of the keycard says \"Welcome, Enjoy the Pool\" on it."
    },
    "24072": {
        "actions": [
            {
                "dest": "91404",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "id": "24072",
        "label": "Poison Settles",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/drunk.png",
                    "needsFlags": [],
                    "scale": 0.985,
                    "x": 0.46,
                    "y": 0.5
                },
                {
                    "angle": -0.715,
                    "img": "character/rat/rat_3.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.185,
                    "x": 0.835,
                    "y": 0.93
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "The substance does NOT settle well in your stomach. You regret your life choices."
    },
    "27438": {
        "actions": [],
        "addsFlags": [],
        "endgame": "lose",
        "id": "27438",
        "label": "Volcano Destruction",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "setting/volcano/oozing.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You are covered by magma and ash. There is no escape. Your egg is destroyed along with your hopes and dreams."
    },
    "27595": {
        "actions": [
            {
                "dest": "13631",
                "label": "Wander city instead",
                "needsFlags": []
            },
            {
                "dest": "59840",
                "label": "Go inside",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "27595",
        "label": "Hotel exterior",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/hotel/hotel.png",
                    "scale": 0.82,
                    "x": 0.5,
                    "y": 0.51
                },
                {
                    "angle": 0,
                    "img": "character/parrot/bindle.png",
                    "scale": 0.3,
                    "x": 0.2,
                    "y": 0.7437772492394863
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.26,
                    "y": 0.545
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You made it to the hotel!"
    },
    "28006": {
        "actions": [
            {
                "dest": "59840",
                "label": "Trail Off",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "28006",
        "label": "Embarassed",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_fast",
                    "img": "character/parrot/blush.png",
                    "scale": 0.95,
                    "x": 0.5,
                    "y": 0.5000827459901062
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.23,
                    "x": 0.78,
                    "y": 0.08
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "Poor thing! You seem to have embarassed yourself!"
    },
    "28035": {
        "actions": [
            {
                "dest": "18822",
                "label": "Inspection complete",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "28035",
        "label": "Inspecting Cosmo",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/cosmopolitan.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "That's a good-looking cosmo!"
    },
    "29900": {
        "actions": [
            {
                "dest": "37515",
                "label": "Go back to the fork in the sewer system",
                "needsFlags": []
            },
            {
                "dest": "23253",
                "label": "Continue watching",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "29900",
        "label": "Rat Leader 3 (copy)",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/rat/leader_happy.png",
                    "scale": 1.055,
                    "x": 0.555,
                    "y": 0.575
                },
                {
                    "angle": 0,
                    "img": "prop/mask_1.png",
                    "scale": 0.47,
                    "x": 0.47,
                    "y": 0.365
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "\"Don't we feel so happy? So blessed?\" he screeched! The rats erupted in applause and cheers."
    },
    "31710": {
        "actions": [
            {
                "dest": "85550",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveMetDachshund"
        ],
        "id": "31710",
        "label": "Play with dachshund",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/dogPark.png",
                    "scale": 1.2,
                    "x": 0.55,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/dachshund/playing.png",
                    "scale": 0.25,
                    "x": 0.55,
                    "y": 0.6
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy2.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.25,
                    "x": 0.25,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "img": "character/egg/neutral2.png",
                    "scale": 0.1,
                    "x": 0.25,
                    "y": 0.8802936574460094
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.33,
                    "y": 0.425
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.25,
                    "x": 0.275,
                    "y": 0.6
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You and the dachshund play together for a few minutes. You're surprised he had it in him- he looked pretty old and confused. Now he's huffing and puffing, so you decide to let him rest.",
        "textVariants": []
    },
    "31726": {
        "actions": [
            {
                "dest": "85940",
                "label": "Oh my gosh!"
            }
        ],
        "addsFlags": [],
        "id": "31726",
        "label": "Egg Hatching 1",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/egg/hatch1.png",
                    "scale": 1,
                    "x": 0.5,
                    "y": 0.55
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The small head wrap falls off of your egg and it begins to shake violently! A few cracks begin to form."
    },
    "33614": {
        "actions": [
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "id": "33614",
        "label": "Therapy Mouse Prompts User to explore",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/mouse/hiss.png",
                    "scale": 0.95,
                    "x": 0.41,
                    "y": 0.5
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "The mouse seems a little offended. \"You need to explore the city more! Once you have sufficiently, we'll have more to talk about!\""
    },
    "34620": {
        "actions": [
            {
                "dest": "74372",
                "label": "Back to the volcano",
                "needsFlags": []
            },
            {
                "dest": "35030",
                "label": "Take a bath",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "34620",
        "label": "Hot Spring Bath",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "setting/hotSpring.png",
                    "scale": 0.9,
                    "x": 0.5,
                    "y": 0.5
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You find the hot spring and feel like it's calling to you. You feel very heavy and sleepy."
    },
    "35030": {
        "actions": [
            {
                "dest": "31726",
                "label": "What is your egg doing!"
            }
        ],
        "addsFlags": [],
        "id": "35030",
        "label": "Taking a bath",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/bath.png",
                    "scale": 0.5,
                    "x": 0.3,
                    "y": 0.4
                },
                {
                    "angle": 0,
                    "img": "prop/bathWater.png",
                    "scale": 0.5,
                    "x": 0.5,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/egg/bath.png",
                    "scale": 0.1,
                    "x": 0.45,
                    "y": 0.65
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "This bath is just what you needed! You feel refreshed!"
    },
    "35747": {
        "actions": [
            {
                "dest": "13631",
                "label": "Disembark into the City",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "35747",
        "label": "City Arrival",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "flipped": true,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.1,
                    "x": 0.735,
                    "y": 0.69
                },
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "flipped": true,
                    "img": "setting/bus.png",
                    "scale": 0.49,
                    "x": 0.47,
                    "y": 0.77
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You finally arrive in the city! The options here are endless. Maybe you can make some friends!"
    },
    "37515": {
        "actions": [
            {
                "dest": "75362",
                "label": "Go left",
                "needsFlags": [
                    "!discoverCult"
                ]
            },
            {
                "dest": "95982",
                "label": "Go right",
                "needsFlags": [
                    "!discoverJunglePath"
                ]
            },
            {
                "dest": "23253",
                "label": "Visit rat cult",
                "needsFlags": [
                    "discoverCult"
                ]
            },
            {
                "dest": "95982",
                "label": "Return to jungle",
                "needsFlags": [
                    "discoverJunglePath"
                ]
            }
        ],
        "addsFlags": [],
        "id": "37515",
        "label": "Forked path",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/forked_sewer_tunnel.png",
                    "scale": 1.29,
                    "x": 0.525,
                    "y": 0.51
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "scale": 0.1,
                    "x": 0.485,
                    "y": 0.625
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_2.png",
                    "scale": 0.22,
                    "x": 0.7665477362006303,
                    "y": 0.8663289929383993
                },
                {
                    "angle": -0.535,
                    "animation": "still",
                    "img": "text/cult_logo.png",
                    "scale": 0.1,
                    "x": 0.435,
                    "y": 0.275
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "text/cult_writing.png",
                    "scale": 0.1,
                    "x": 0.2105248203674337,
                    "y": 0.175
                },
                {
                    "angle": -0.935,
                    "img": "character/rat/rat_3.png",
                    "scale": 0.1,
                    "x": 0.6403344116143335,
                    "y": 0.46
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_1.png",
                    "scale": 0.145,
                    "x": 0.32,
                    "y": 0.92
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You follow the sewer system down a ways until you arrive to a fork in your path! You hear faint chanting from the left and jungle sounds to the right."
    },
    "38201": {
        "actions": [],
        "addsFlags": [],
        "endgame": "win",
        "id": "38201",
        "label": "Egg Hatching 4",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/egg/hatch4.png",
                    "scale": 0.5,
                    "x": 0.55,
                    "y": 0.55
                },
                {
                    "angle": 0,
                    "img": "character/egg/hatch4lines.png",
                    "scale": 1,
                    "x": 0.5,
                    "y": 0.45
                },
                {
                    "angle": 1.01,
                    "animation": "spin_fast",
                    "img": "character/egg/hatch4shell.png",
                    "scale": 0.25,
                    "x": 0.25,
                    "y": 0.25
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "A small yellow bird emerges! It doesn't really look like a baby parrot, so you're confused about that, but you still feel a sense of pride and motherhood."
    },
    "40581": {
        "actions": [
            {
                "dest": "5565",
                "label": "Ask the possum \"Are you Jen?\"",
                "needsFlags": [
                    "!askForPossumName"
                ]
            },
            {
                "dest": "86146",
                "label": "Ask if you can buy flowers",
                "needsFlags": [
                    "!haveFlower"
                ]
            },
            {
                "dest": "86146",
                "label": "Ask to purchase more flowers",
                "needsFlags": [
                    "haveFlower"
                ]
            },
            {
                "dest": "13631",
                "label": "Leave the shop",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveBeenInsideFlowerShop"
        ],
        "id": "40581",
        "label": "Flower shop interior",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.39,
                    "x": 0.35,
                    "y": 0.7
                },
                {
                    "angle": 0.11,
                    "animation": "still",
                    "img": "setting/hotel/desk.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.5,
                    "x": 0.75,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "setting/hotel/desk.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.54,
                    "x": 0.755,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "character/possum/neutral.png",
                    "scale": 0.32,
                    "x": 0.865,
                    "y": 0.495
                },
                {
                    "angle": 0,
                    "img": "prop/sunflowers.png",
                    "scale": 0.25,
                    "x": 0.15,
                    "y": 0.3
                },
                {
                    "angle": 0,
                    "img": "prop/sunflowers.png",
                    "scale": 0.25,
                    "x": 0.25,
                    "y": 0.3
                },
                {
                    "angle": 0,
                    "img": "prop/lilac.png",
                    "scale": 0.3,
                    "x": 0.05,
                    "y": 0.3
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_2.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.17,
                    "x": 0.595,
                    "y": 0.58
                },
                {
                    "angle": -0.61,
                    "img": "character/rat/rat_3.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.1,
                    "x": 0.73,
                    "y": 0.585
                },
                {
                    "angle": 0.23,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.16,
                    "x": 0.42,
                    "y": 0.465
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You go into the flower store and are met with fragrances of sunflowers, lilacs, roses, lilies, and many more flowers you can't even think to describe. You see a possum running the shop.",
        "textVariants": [
            {
                "flags": [
                    "askForPossumName",
                    "haveBeenInsideFlowerShop"
                ],
                "text": "You see Pat, not Jen, on the counter. What will you do next?"
            },
            {
                "flags": [
                    "haveBeenInsideFlowerShop"
                ],
                "text": "The flower shop is just as beautiful as the first time you were there. What do you do next?"
            }
        ]
    },
    "43130": {
        "actions": [],
        "addsFlags": [],
        "endgame": "lose",
        "id": "43130",
        "label": "Egg breaks in flower shop",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/parrot/sad.png",
                    "scale": 0.5,
                    "x": 0.25,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/egg/soup.png",
                    "scale": 0.1,
                    "x": 0.6,
                    "y": 0.95
                },
                {
                    "angle": 0,
                    "img": "character/egg/brokenShellRight.png",
                    "scale": 0.1,
                    "x": 0.7,
                    "y": 0.95
                },
                {
                    "angle": 0,
                    "img": "character/egg/brokenShellLeft.png",
                    "scale": 0.1,
                    "x": 0.5,
                    "y": 0.95
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "Your egg smashes against the flower shop floor and breaks! You feel immense sadness."
    },
    "45412": {
        "actions": [
            {
                "dest": "18822",
                "label": "Inspection Complete"
            }
        ],
        "addsFlags": [],
        "id": "45412",
        "label": "Inspecting martini",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/martini.png",
                    "scale": 0.85,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "That's a good-looking martini!"
    },
    "45463": {
        "actions": [
            {
                "dest": "35747",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveHadFirstBusRide"
        ],
        "id": "45463",
        "label": "Bus ride",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.1,
                    "x": 0.26,
                    "y": 0.59
                },
                {
                    "angle": 0.06,
                    "animation": "hop_fast",
                    "img": "setting/bus.png",
                    "scale": 0.48,
                    "x": 0.52,
                    "y": 0.69
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You ride the bus through the jungle and think you hear strange animal screams. You aren't sure who was hollerin'.",
        "textVariants": [
            {
                "flags": [
                    "haveHadFirstBusRide"
                ],
                "text": "You take the bus back to the city!"
            }
        ]
    },
    "46692": {
        "actions": [
            {
                "dest": "9403",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "hasDrink"
        ],
        "id": "46692",
        "label": "bear shakes cosmopolitan",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/bear/shaking.png",
                    "scale": 1,
                    "x": 0.6,
                    "y": 0.5
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"Coming right up!\" The weird panda prepares the cosmopolitan faster than you can process what's happening."
    },
    "47187": {
        "actions": [
            {
                "dest": "24072",
                "label": "Uh oh",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "drunk"
        ],
        "id": "47187",
        "label": "Drink Poison",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/drinking.png",
                    "scale": 0.95,
                    "x": 0.495,
                    "y": 0.53
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.16,
                    "x": 0.875,
                    "y": 0.92
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.175,
                    "x": 0.09211623800840896,
                    "y": 0.925
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_2.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.185,
                    "x": 0.69,
                    "y": 0.9
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You don't know what possessed you to do this, but you toss your head back and drink the substance. It tastes bitter and malty."
    },
    "47389": {
        "actions": [
            {
                "dest": "27438",
                "label": "Oh no",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "47389",
        "label": "Volcano Erruption",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_fast",
                    "img": "setting/volcano/eruption.png",
                    "scale": 1.1,
                    "x": 0.5,
                    "y": 0.5
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "The volcano erupts with the force of a thousand suns!"
    },
    "47586": {
        "actions": [],
        "addsFlags": [],
        "endgame": "win",
        "id": "47586",
        "label": "Hotel Egg Hatching 4",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/egg/hatch4.png",
                    "scale": 0.5,
                    "x": 0.55,
                    "y": 0.55
                },
                {
                    "angle": 0,
                    "img": "character/egg/hatch4lines.png",
                    "scale": 1,
                    "x": 0.5,
                    "y": 0.45
                },
                {
                    "angle": 1.01,
                    "animation": "spin_fast",
                    "img": "character/egg/hatch4shell.png",
                    "scale": 0.25,
                    "x": 0.25,
                    "y": 0.25
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "A tiny bird is where the egg was just a second ago!!! The top of the egg shell goes flying and shatters on the hotel pool's tile wall."
    },
    "47626": {
        "actions": [
            {
                "dest": "19418",
                "label": "Bored, Put on Sunglasses",
                "needsFlags": [
                    "haveGlasses",
                    "!haveRatVision"
                ]
            },
            {
                "dest": "18822",
                "label": "Finish up and Leave Bathroom",
                "needsFlags": []
            },
            {
                "dest": "87223",
                "label": "Finish up and take the Rat Tunnel",
                "needsFlags": [
                    "discoveredHole"
                ]
            },
            {
                "dest": "87223",
                "label": "Finish up and follow the rats",
                "needsFlags": [
                    "haveRatVision",
                    "!discoveredHole"
                ]
            }
        ],
        "addsFlags": [],
        "id": "47626",
        "label": "Inside bathroom",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "flipped": true,
                    "img": "prop/toilet.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.69,
                    "x": 0.26,
                    "y": 0.5146708692031643
                },
                {
                    "angle": 0.025,
                    "flipped": true,
                    "img": "prop/toilet.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.695,
                    "x": 0.265,
                    "y": 0.51
                },
                {
                    "angle": 0,
                    "img": "character/parrot/neutral.png",
                    "scale": 0.385,
                    "x": 0.28,
                    "y": 0.39606551592520745
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/bathroom_counter.png",
                    "scale": 0.795,
                    "x": 0.72,
                    "y": 0.375
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.18,
                    "x": 0.865,
                    "y": 0.66
                },
                {
                    "angle": -0.665,
                    "img": "character/rat/rat_3.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.16,
                    "x": 0.56,
                    "y": 0.92
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.2,
                    "x": 0.435,
                    "y": 0.155
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You settle onto the toilet and go about your business.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You settle onto the toilet and go about your business. You're not feelin so good."
            }
        ]
    },
    "47893": {
        "actions": [
            {
                "dest": "28006",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "triedToBook"
        ],
        "id": "47893",
        "label": "Trying to book",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.5,
                    "x": 0.15,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/hamster/neutral.png",
                    "scale": 0.2,
                    "x": 0.8,
                    "y": 0.35
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/hotel/desk.png",
                    "scale": 0.7,
                    "x": 0.65,
                    "y": 0.6157597293279373
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.185,
                    "x": 0.245,
                    "y": 0.43
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You ask the hamster if you can book a room. She looks miffed and says, \"You're a parrot! You don't have any money! I can't give you a room!\"",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You ask the hamster if you can book a room. She looks concerned and a little sympathetic, \"You don't look so good, but you don't have any money so I can't let you stay here.\""
            }
        ]
    },
    "48059": {
        "actions": [
            {
                "dest": "87790",
                "label": "inspection complete"
            }
        ],
        "addsFlags": [
            "sawEgg"
        ],
        "id": "48059",
        "label": "Egg inspection",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/egg/closeup.png",
                    "scale": 0.9,
                    "x": 0.55,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "prop/sparkle2.png",
                    "scale": 0.2,
                    "x": 0.4,
                    "y": 0.5021982593403244
                },
                {
                    "angle": 0,
                    "img": "prop/sparkle3.png",
                    "scale": 0.15,
                    "x": 0.65,
                    "y": 0.25
                },
                {
                    "angle": 0,
                    "img": "prop/sparkle1.png",
                    "scale": 0.1,
                    "x": 0.55,
                    "y": 0.75
                }
            ],
            "bg": "bg/canopy.png"
        },
        "text": "The egg is somewhat large and has a mottled appearance. The shell is thick and sturdy. Should be easy to travel with!"
    },
    "48268": {
        "actions": [
            {
                "dest": "20907",
                "label": "Back to the animals",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "playedWithKoala"
        ],
        "id": "48268",
        "label": "Play with koala",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/koala/confused.png",
                    "scale": 0.5,
                    "x": 0.65,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/parrot/backWingsSpread.png",
                    "scale": 0.3,
                    "x": 0.35,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.175,
                    "x": 0.34,
                    "y": 0.5
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You approach the koala and try to initiate play. It looks sad and confused. It doesn't know how to play with birds."
    },
    "48799": {
        "actions": [
            {
                "dest": "64563",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "id": "48799",
        "label": "Therapy Mouse's Day",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "character/mouse/neutral.png",
                    "scale": 0.735,
                    "x": 0.54,
                    "y": 0.555
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "\"I'm so glad you asked!\" he squeals. \"My day has been going well. I've found some really good food in various trash cans around the city.\" ",
        "textVariants": [
            {
                "flags": [
                    "discoveredHole"
                ],
                "text": "\"I'm so glad you asked!\" he squeals. \"Well I got up around 6 AM to attend to my cult duties. I've been trying to infiltrate a very lively rat cult that's based in the sewers.\""
            }
        ]
    },
    "49002": {
        "actions": [],
        "addsFlags": [],
        "endgame": "lose",
        "id": "49002",
        "label": "Monkey attack 2",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/monkey/attackWithEgg.png",
                    "scale": 0.75,
                    "x": 0.5,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "character/egg/soup.png",
                    "scale": 0.1,
                    "x": 0.45,
                    "y": 0.9
                },
                {
                    "angle": 0,
                    "img": "character/egg/brokenShellRight.png",
                    "scale": 0.1,
                    "x": 0.55,
                    "y": 0.9
                },
                {
                    "angle": 0,
                    "img": "character/egg/brokenShellLeft.png",
                    "scale": 0.1,
                    "x": 0.35,
                    "y": 0.9
                },
                {
                    "angle": 0.46,
                    "animation": "shake_fast",
                    "img": "text/crack.png",
                    "scale": 0.3,
                    "x": 0.75,
                    "y": 0.85
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/parrot/backWingsSpread.png",
                    "scale": 0.25,
                    "x": 0.15,
                    "y": 0.85
                },
                {
                    "angle": 0.06,
                    "img": "text/exclaim.png",
                    "scale": 0.15,
                    "x": 0.15,
                    "y": 0.65
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "The small man throws your egg onto the jungle floor as hard as it can, and it shatters, along with your hopes and dreams."
    },
    "49719": {
        "actions": [
            {
                "dest": "47586",
                "label": "Oh My!!!",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "49719",
        "label": "Hotel Egg Hatching 3",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/egg/hatch3.png",
                    "scale": 0.7,
                    "x": 0.5,
                    "y": 0.55
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "What's that???"
    },
    "49884": {
        "actions": [
            {
                "dest": "49719",
                "label": "...",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "49884",
        "label": "Hotel Egg Hatching 2",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_fast",
                    "img": "character/egg/hatch2.png",
                    "scale": 0.95,
                    "x": 0.55,
                    "y": 0.4681562441308301
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "It's really getting up to mischief!!"
    },
    "51350": {
        "actions": [],
        "addsFlags": [],
        "endgame": "lose",
        "id": "51350",
        "label": "Mourning",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/sad.png",
                    "scale": 0.5,
                    "x": 0.4,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "character/egg/soup.png",
                    "scale": 0.1,
                    "x": 0.75,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "img": "character/egg/brokenShellLeft.png",
                    "scale": 0.15,
                    "x": 0.65,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "img": "character/egg/brokenShellRight.png",
                    "scale": 0.15,
                    "x": 0.85,
                    "y": 0.65
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "Your egg is broken forever, and you fear you can't move on."
    },
    "53122": {
        "actions": [
            {
                "dest": "56699",
                "label": "Say \"Thanks!\"",
                "needsFlags": []
            },
            {
                "dest": "23991",
                "label": "Flip Keycard Back Over",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "53122",
        "label": "Back of keycard",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/hotelKeyCard.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You flip the keycard over. It has instructions for how to get into the pool area on it."
    },
    "53381": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "53381",
        "label": "Beagle accepts cosmo",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/beagle/gifted.png",
                    "scale": 0.75,
                    "x": 0.4,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "prop/cosmopolitan.png",
                    "scale": 0.5,
                    "x": 0.85,
                    "y": 0.75
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "\"Oh my goodness, thank you so much!\" the beagle exclaims as he takes the cosmopolitan from you. You wonder whether dogs actually drink."
    },
    "53838": {
        "actions": [
            {
                "dest": "75494",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "id": "53838",
        "label": "Therapy Mouse Travel Advice",
        "scene": {
            "actors": [
                {
                    "angle": -0.07,
                    "img": "character/mouse/explaining.png",
                    "scale": 0.235,
                    "x": 0.68,
                    "y": 0.51
                },
                {
                    "angle": 0,
                    "img": "character/parrot/back.png",
                    "scale": 0.5,
                    "x": 0.235,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.17,
                    "x": 0.34,
                    "y": 0.365
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "He opens his small mouth again. \"Digging through the city fountain always makes me happy. How could you be bored with that option?\" He seems a little too simple for you. ",
        "textVariants": [
            {
                "flags": [
                    "haveGlasses",
                    "!haveRatVision"
                ],
                "text": "Therapy mouse opens his small mouth to speak again. \"I sense you have found sunglasses,\" he says, having a strange sixth sense. "
            },
            {
                "flags": [
                    "haveGlasses",
                    "haveRatVision"
                ],
                "text": "He opens his mouth to speak. \"I sense you have discovered the ways of the rats. I'm surprised you're still bored. You can try looking for the owner of those sunglasses.\""
            }
        ]
    },
    "56065": {
        "actions": [
            {
                "dest": "40581",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveDaffodil",
            "haveFlower"
        ],
        "id": "56065",
        "label": "You take daffodil",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
                    "needsFlags": [],
                    "scale": 0.4,
                    "x": 0.25,
                    "y": 0.7
                },
                {
                    "angle": -0.89,
                    "img": "prop/daffodil.png",
                    "scale": 0.3,
                    "x": 0.2,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "character/possum/neutral.png",
                    "scale": 0.5,
                    "x": 0.65,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.2,
                    "x": 0.335,
                    "y": 0.42
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You take a daffodil. The daffodil smells amazing and you feel good with your choice.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You take a daffodil. The daffodil smells nice."
            }
        ]
    },
    "56143": {
        "actions": [
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "56143",
        "label": "Therapy mouse scolds ",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/mouse/explaining.png",
                    "scale": 0.885,
                    "x": 0.5666143813116338,
                    "y": 0.535
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "\"Oh no, I'm sorry to hear that,\" the mouse says. \"Make sure you're getting plenty of rest and staying social.\"",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "\"It seems you're a bit intoxicated. I suspect you drank something you shouldn't have,\" the mouse scolds."
            }
        ]
    },
    "56699": {
        "actions": [
            {
                "dest": "59840",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "56699",
        "label": "Thanking Hamster",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/hamster/happy.png",
                    "scale": 1.13,
                    "x": 0.58,
                    "y": 0.635
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The hamster smiles. \"Anytime, buddy!\" "
    },
    "57590": {
        "actions": [
            {
                "dest": "20907",
                "label": "Back to Animals",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "57590",
        "label": "Done with Jaguar",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/parrot/throwing.png",
                    "scale": 0.3,
                    "x": 0.28,
                    "y": 0.68
                },
                {
                    "angle": 2.655,
                    "img": "character/egg/neutral.png",
                    "scale": 0.15,
                    "x": 0.115,
                    "y": 0.845
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "flipped": false,
                    "img": "character/jaguar/neutral.png",
                    "scale": 0.445,
                    "x": 0.795,
                    "y": 0.335
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.175,
                    "x": 0.36,
                    "y": 0.45
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "The jaguar leaves to go take a nap. You're pooped!"
    },
    "58259": {
        "actions": [
            {
                "dest": "45412",
                "label": "Inspect martini",
                "needsFlags": []
            },
            {
                "dest": "16163",
                "label": "Thank him",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveMartini"
        ],
        "id": "58259",
        "label": "Bear pours martini",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.4,
                    "x": 0.1,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "img": "setting/barCounter.png",
                    "scale": 0.6,
                    "x": 0.5738327421943588,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/bear/fillingMartini.png",
                    "scale": 0.5,
                    "x": 0.55,
                    "y": 0.25
                },
                {
                    "angle": 0,
                    "img": "prop/martini.png",
                    "scale": 0.1,
                    "x": 0.65,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.08,
                    "y": 0.5937436697826981
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "The strange panda carefully poured the martini into the glass. Gotta be careful when everything is constantly shaking. \"There ya go, hope your friend likes it!\""
    },
    "59840": {
        "actions": [
            {
                "dest": "47893",
                "label": "Ask to book your stay",
                "needsFlags": [
                    "!triedToBook"
                ]
            },
            {
                "dest": "82129",
                "label": "Ask her, \"Are you the beagle's girlfriend?\"",
                "needsFlags": [
                    "talkedToBeagle",
                    "!askedGFQuestion"
                ]
            },
            {
                "dest": "22841",
                "label": "Go to Hotel Pool",
                "needsFlags": [
                    "haveKeycard"
                ]
            },
            {
                "dest": "95956",
                "label": "Give her the dog bone from the beagle",
                "needsFlags": [
                    "askedGFQuestion",
                    "!haveGivenBone",
                    "talkedToBeagle",
                    "haveDogBone"
                ]
            },
            {
                "dest": "13631",
                "label": "Exit Hotel",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveSeenHotel"
        ],
        "id": "59840",
        "label": "Inside hotel",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.5,
                    "x": 0.1,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/hamster/neutral.png",
                    "scale": 0.2,
                    "x": 0.65,
                    "y": 0.25
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/hotel/desk.png",
                    "scale": 0.65,
                    "x": 0.55,
                    "y": 0.4915090109536069
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.215,
                    "x": 0.22,
                    "y": 0.45
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You enter the hotel and find a hamster behind the desk.",
        "textVariants": [
            {
                "flags": [
                    "askedGFQuestion",
                    "haveSeenHotel"
                ],
                "text": "You see the beagle's girlfriend behind the desk. What will you do next?"
            },
            {
                "flags": [
                    "haveSeenHotel"
                ],
                "text": "You see a hamster behind the desk. What will you do next?"
            }
        ]
    },
    "61921": {
        "actions": [
            {
                "dest": "82006",
                "label": "Wander city",
                "needsFlags": []
            },
            {
                "dest": "18822",
                "label": "Go inside",
                "needsFlags": []
            },
            {
                "dest": "91404",
                "label": "Explore back alley",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveSeenBar"
        ],
        "id": "61921",
        "label": "Bar Exterior",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.3,
                    "x": 0.05,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/pub.png",
                    "scale": 1,
                    "x": 0.55,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.045,
                    "y": 0.66
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You arrived to the bar! This place seems a little shady.",
        "textVariants": [
            {
                "flags": [
                    "drunk",
                    "haveSeenBar"
                ],
                "text": "You arrived to the bar! This place still seems shady. You also feel woozy."
            },
            {
                "flags": [
                    "haveSeenBar"
                ],
                "text": "You arrived to the bar! This place still seems shady."
            }
        ]
    },
    "62947": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "beagleRejected"
        ],
        "id": "62947",
        "label": "Rejected Beagle",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/beagle/sad.png",
                    "scale": 0.96,
                    "x": 0.59,
                    "y": 0.67
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You decline the beagle's request. He looks a little dejected."
    },
    "63647": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to dog park",
                "needsFlags": []
            }
        ],
        "id": "63647",
        "label": "Bird says you're welcome",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/parrot/happy2.png",
                    "scale": 0.38,
                    "x": 0.27,
                    "y": 0.57
                },
                {
                    "angle": 0,
                    "img": "character/beagle/neutral.png",
                    "scale": 0.5,
                    "x": 0.705,
                    "y": 0.555
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "\"You're very welcome!\" you say to the beagle."
    },
    "64042": {
        "actions": [
            {
                "dest": "90619",
                "label": "Back to jungle hub",
                "needsFlags": []
            }
        ],
        "id": "64042",
        "label": "",
        "scene": {
            "actors": [],
            "bg": "bg/shop.png"
        },
        "text": "Kava bar will be here in next update."
    },
    "64563": {
        "actions": [
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "id": "64563",
        "label": "Therapy Mouse's Day 2",
        "scene": {
            "actors": [
                {
                    "angle": -0.125,
                    "img": "character/mouse/explaining.png",
                    "scale": 1.52,
                    "x": 0.5737720617455232,
                    "y": 0.76
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "\"I've also have been noticing a lot of rats around lately. They always know what's up.\"",
        "textVariants": [
            {
                "flags": [
                    "discoveredHole"
                ],
                "text": "\"t's a difficult task- rats are very attuned to whether you're a mouse or rat.\" You blink at him. You aren't quite sure if you know the difference between a rat and a mouse."
            }
        ]
    },
    "64647": {
        "actions": [
            {
                "dest": "2739",
                "label": "Say \"Sure, what did you want to tell me?\"",
                "needsFlags": []
            },
            {
                "dest": "20907",
                "label": "Say \"No Thanks\"",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "talkedToKoala"
        ],
        "id": "64647",
        "label": "Koala Cult Talk",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/koala/talking.png",
                    "scale": 0.75,
                    "x": 0.5,
                    "y": 0.7
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You decide to see what the koala has to say. It opens its mouth and speaks in a high, raspy voice. \"Greetings! I haven't seen you around this part of the jungle. Would you care to hear about our savior, Azathoth?\" You feel a bit flustered and awkward."
    },
    "64950": {
        "actions": [
            {
                "dest": "90619",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "64950",
        "label": "Discover jungle path",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/flying.png",
                    "scale": 0.325,
                    "x": 0.455,
                    "y": 0.48
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "Wow! You've arrived back to the jungle!"
    },
    "64965": {
        "actions": [
            {
                "dest": "47187",
                "label": "Drink it",
                "needsFlags": []
            },
            {
                "dest": "91404",
                "label": "But it back down",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "64965",
        "label": "Bottle of poison",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/poisonBottle.png",
                    "scale": 1.07,
                    "x": 0.5,
                    "y": 0.51
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You pick up one of the bottles and look at it closely. It appears to maybe be an alcoholic beverage? You're a bird so you can't read."
    },
    "65138": {
        "actions": [
            {
                "dest": "94709",
                "label": "Agree to his terms",
                "needsFlags": [
                    "!termsAgreedTo"
                ]
            },
            {
                "dest": "18822",
                "label": "Refuse his terms",
                "needsFlags": [
                    "!termsAgreedTo"
                ]
            },
            {
                "dest": "91471",
                "label": "Martini",
                "needsFlags": [
                    "termsAgreedTo"
                ]
            },
            {
                "dest": "46692",
                "label": "Cosmopolitan",
                "needsFlags": [
                    "termsAgreedTo"
                ]
            }
        ],
        "addsFlags": [],
        "id": "65138",
        "label": "Bear responds to drink request",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.35,
                    "x": 0.15,
                    "y": 0.7819893087087724
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/barCounter.png",
                    "scale": 0.55,
                    "x": 0.6,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "img": "character/bear/neutral.png",
                    "scale": 0.5,
                    "x": 0.7,
                    "y": 0.2
                },
                {
                    "angle": 0.48,
                    "animation": "hop_slow",
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.195,
                    "y": 0.555
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"You're a bird! You're not supposed to drink!\" the weird panda says to you. \"But I can give you a drink as long as you promise you're giving it to someone else who is of drinking age.\"",
        "textVariants": [
            {
                "flags": [
                    "termsAgreedTo"
                ],
                "text": "Sure thing! What can I get you?"
            }
        ]
    },
    "69396": {
        "actions": [
            {
                "dest": "99585",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveMetTherapyMouse"
        ],
        "id": "69396",
        "label": "Meet therapy mouse",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/mouse/neutral.png",
                    "scale": 1.03,
                    "x": 0.535,
                    "y": 0.505
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You look down and behold a small mouse on the ground. \"IIIII'm therapy mouse,\" he starts in a small voice. \"I hang  around outside this bar and check on people as they leave because some people really need it.\"",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You look down and behold a small mouse on the ground. \"IIIII'm therapy mouse,\" he starts in a small voice. \"I hang around outside this bar and check on people as they leave because some people really need it.\" His eyes narrow. \"That includes you too, it seems.\""
            }
        ]
    },
    "69799": {
        "actions": [
            {
                "dest": "85914",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "69799",
        "label": "Rat Leader 2",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "character/rat/leader_talking.png",
                    "scale": 1.055,
                    "x": 0.555,
                    "y": 0.575
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "\"I have received a download from a great high spirit. It is of greatest importance that we spread the news: We must love others, nurture others, and forgive others.\" "
    },
    "71284": {
        "actions": [
            {
                "dest": "87790",
                "label": "Take a Deep Breath",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "71284",
        "label": "Nest Opening Scene",
        "scene": {
            "actors": [
                {
                    "angle": 0.06,
                    "img": "character/parrot/happy.png",
                    "scale": 0.4,
                    "x": 0.15,
                    "y": 0.4
                },
                {
                    "angle": 0,
                    "img": "character/egg/neutral2.png",
                    "scale": 0.1,
                    "x": 0.3,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/nest.png",
                    "scale": 0.55,
                    "x": 0.5,
                    "y": 0.7
                }
            ],
            "bg": "bg/canopy.png"
        },
        "text": "You wake up and it's a bright, beautiful day! You find an egg next to you and you aren't sure where it came from. You must take it on today's journey but be careful! You only get one."
    },
    "73855": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "73855",
        "label": "Beagle accepts martini",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/beagle/gifted.png",
                    "scale": 0.75,
                    "x": 0.3,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/martini.png",
                    "scale": 0.5,
                    "x": 0.75,
                    "y": 0.75
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "\"Oh my goodness, thank you so much!\" the beagle exclaims as he takes the martini from you. You wonder whether dogs actually drink."
    },
    "74372": {
        "actions": [
            {
                "dest": "84301",
                "label": "Look for rocks to make a sacrifice",
                "needsFlags": [
                    "canThrowRocks"
                ]
            },
            {
                "dest": "34620",
                "label": "Cool off in a hot spring",
                "needsFlags": []
            },
            {
                "dest": "90619",
                "label": "Back to the Jungle",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "74372",
        "label": "Volcano visit",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "setting/volcano/smoking.png",
                    "scale": 0.95,
                    "x": 0.65,
                    "y": 0.5596831039663354
                },
                {
                    "angle": 0,
                    "img": "character/parrot/bindle.png",
                    "scale": 0.15,
                    "x": 0.4,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.445,
                    "y": 0.63
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You've reached the volcano. You can't get the koala's words out of your head and you wonder about the nature of existence.",
        "textVariants": [
            {
                "flags": [
                    "!canThrowRocks"
                ],
                "text": "You've reached the volcano! There isn't much to do here."
            }
        ]
    },
    "75362": {
        "actions": [
            {
                "dest": "7769",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "discoverCult"
        ],
        "id": "75362",
        "label": "Cult opening scene",
        "scene": {
            "actors": [
                {
                    "angle": 0.035,
                    "animation": "still",
                    "img": "prop/sconce.png",
                    "scale": 0.25,
                    "x": 0.845,
                    "y": 0.21597782101531282
                },
                {
                    "angle": 0,
                    "img": "prop/candle_1.png",
                    "scale": 0.12,
                    "x": 0.785,
                    "y": 0.22
                },
                {
                    "angle": 0,
                    "img": "prop/candle_2.png",
                    "scale": 0.11,
                    "x": 0.895,
                    "y": 0.23
                },
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/rat/leader_neutral.png",
                    "scale": 0.185,
                    "x": 0.525,
                    "y": 0.53
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.2,
                    "x": 0.345,
                    "y": 0.485
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.215,
                    "x": 0.37,
                    "y": 0.655
                },
                {
                    "angle": -0.035,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.175,
                    "x": 0.415,
                    "y": 0.42
                },
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.325,
                    "x": 0.19623846852051263,
                    "y": 0.971976817210723
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "text/cult_writing.png",
                    "scale": 0.105,
                    "x": 0.15,
                    "y": 0.0806238762464404
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "text/cult_logo.png",
                    "scale": 0.15,
                    "x": 0.95,
                    "y": 0.125
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.15,
                    "x": 0.625,
                    "y": 0.415
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.2,
                    "x": 0.685,
                    "y": 0.47
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_side.png",
                    "scale": 0.25,
                    "x": 0.655,
                    "y": 0.585
                },
                {
                    "angle": 0,
                    "img": "character/rat/back_1.png",
                    "scale": 0.215,
                    "x": 0.5,
                    "y": 0.72
                },
                {
                    "angle": 0,
                    "img": "character/rat/standing.png",
                    "scale": 0.1,
                    "x": 0.52,
                    "y": 0.365
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "prop/sconce.png",
                    "scale": 0.215,
                    "x": 0.14007765787037174,
                    "y": 0.22
                },
                {
                    "angle": 0,
                    "img": "prop/candle_3.png",
                    "scale": 0.115,
                    "x": 0.185,
                    "y": 0.22
                },
                {
                    "angle": 0,
                    "img": "prop/candle_1.png",
                    "scale": 0.125,
                    "x": 0.09,
                    "y": 0.21
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You arrive to the strangest thing you've seen yet. A small rat, shrouded in a strange scarf, is surrounded by chanting rats. You can't quite make out what they're saying so you get closer."
    },
    "75494": {
        "actions": [
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": [
                    "haveGlasses",
                    "!haveRatVision"
                ]
            },
            {
                "dest": "84892",
                "label": "Next",
                "needsFlags": [
                    "haveRatVision",
                    "haveGlasses"
                ]
            },
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": [
                    "!haveRatVision",
                    "!haveGlasses"
                ]
            }
        ],
        "id": "75494",
        "label": "Therapy Mouse Travel Advice 2",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/mouse/explaining.png",
                    "scale": 0.99,
                    "x": 0.6,
                    "y": 0.53
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "\"Well,\" he interrupts your thoughts. Perhaps he saw you looking bored and disappointed. \"There are also several lively cults around these parts. They're always looking for new members.\" This comment seems very strange to you.",
        "textVariants": [
            {
                "flags": [
                    "haveGlasses",
                    "!haveRatVision"
                ],
                "text": "\"Once you get the opportunity, you should put them on. I promise you will be bored no longer.\" He seems a little sinister. You have no idea what he means."
            },
            {
                "flags": [
                    "haveRatVision",
                    "haveGlasses"
                ],
                "text": "\"...Whoever it is will have mysteries of the universe to tell you about. They far exceed my simple mouse brain.\" "
            }
        ]
    },
    "75760": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "75760",
        "label": "Dachshund rejects cosmo",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/dachshund/gifted.png",
                    "scale": 0.65,
                    "x": 0.4,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "prop/cosmopolitan.png",
                    "scale": 0.5,
                    "x": 0.85,
                    "y": 0.75
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The dachshund looks sad and confused. \"I'm a dog, I don't drink.\" You feel a little awkward."
    },
    "78527": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveDogBone"
        ],
        "id": "78527",
        "label": "Dog Bone Acquired",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/bonePresent.png",
                    "scale": 0.8,
                    "x": 0.5,
                    "y": 0.55
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The beagle says, \"Excellent! Please bring her this dog bone, it's her favorite!\" You take the present."
    },
    "78752": {
        "actions": [
            {
                "dest": "49002",
                "label": "Next"
            }
        ],
        "addsFlags": [],
        "id": "78752",
        "label": "Monkey attack 1",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/monkey/attack.png",
                    "scale": 0.9,
                    "x": 0.6,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "animation": "shake_fast",
                    "img": "character/parrot/back.png",
                    "scale": 0.25,
                    "x": 0.15,
                    "y": 0.836200118627116
                },
                {
                    "angle": 0,
                    "img": "text/exclaim.png",
                    "scale": 0.2,
                    "x": 0.15,
                    "y": 0.5682415188024507
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You wander to the small man and attempt to play with it. It screams out an ear-splitting sound and steals your egg!"
    },
    "79680": {
        "actions": [
            {
                "dest": "4443",
                "label": "What is your egg doing!",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "79680",
        "label": "Hotel bath",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/bath.png",
                    "scale": 0.5,
                    "x": 0.3,
                    "y": 0.4
                },
                {
                    "angle": 0,
                    "img": "prop/bathWater.png",
                    "scale": 0.5,
                    "x": 0.5,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/egg/bath.png",
                    "scale": 0.1,
                    "x": 0.45,
                    "y": 0.65
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You and your egg sink into the warm water and rest. It feels amazing!"
    },
    "82006": {
        "actions": [
            {
                "dest": "69396",
                "label": "Inspect",
                "needsFlags": []
            },
            {
                "dest": "13631",
                "label": "Shrug it off and wander the city",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "!haveMetTherapyMouse"
        ],
        "id": "82006",
        "label": "Kick therapy mouse",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/backWingsSpread.png",
                    "scale": 0.5,
                    "x": 0.315,
                    "y": 0.73
                },
                {
                    "angle": 0,
                    "animation": "spin_fast",
                    "img": "character/mouse/kicked.png",
                    "scale": 0.1,
                    "x": 0.66,
                    "y": 0.505
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.19,
                    "x": 0.325,
                    "y": 0.395
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "Oh wow what was that! You kicked something on your way out of the bar!",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "Oh wow what was that! You kicked something on your way out of the bar! Or did you just imagine it?"
            }
        ]
    },
    "82129": {
        "actions": [
            {
                "dest": "59840",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "askedGFQuestion"
        ],
        "id": "82129",
        "label": "Ask hamster for info",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.5,
                    "x": 0.1,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "character/hamster/neutral.png",
                    "scale": 0.25,
                    "x": 0.75,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/hotel/desk.png",
                    "scale": 0.65,
                    "x": 0.6,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.185,
                    "x": 0.23,
                    "y": 0.465
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You screw up the courage to ask a somewhat embarrassing question. \"Are you the beagle's girlfriend?\" The hamster smiles and says, \"Oh yes!\" You are shocked. \"Then how do you guys-\" you stop yourself. There's an awkward pause.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You screw up the courage to ask a somewhat embarrassing question. \"Are you the beagle's girlfriend?\" The hamster smiles and says, \"Oh yes!\" You are shocked. \"Then how do you guys-\" you're slurring a little and you trail off."
            }
        ]
    },
    "84301": {
        "actions": [
            {
                "dest": "18968",
                "label": "Throw them in! Complete the sacrifice!",
                "needsFlags": []
            },
            {
                "dest": "74372",
                "label": "Put the rocks down and step Away From The Edge",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "84301",
        "label": "Rock Pile",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/jungleRocks.png",
                    "scale": 0.65,
                    "x": 0.5,
                    "y": 0.6
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You manage to locate some rocks and you pick them up. The volcano is smoking and you second-guess whether it's a good idea to throw them in."
    },
    "84892": {
        "actions": [
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "kavaBarOpen"
        ],
        "id": "84892",
        "label": "Kava Bar Opening Tag",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "character/parrot/neutral.png",
                    "scale": 0.5,
                    "x": 0.41,
                    "y": 0.595
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You feel something calling to you from the jungle and know that you must go back there."
    },
    "85368": {
        "actions": [
            {
                "dest": "12073",
                "label": "Talk to beagle",
                "needsFlags": [
                    "!talkedToBeagle"
                ]
            },
            {
                "dest": "85550",
                "label": "Next",
                "needsFlags": []
            },
            {
                "dest": "12073",
                "label": "Talk to beagle again",
                "needsFlags": [
                    "talkedToBeagle"
                ]
            }
        ],
        "addsFlags": [
            "haveMetBeagle"
        ],
        "id": "85368",
        "label": "Playing with beagle",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/dogPark.png",
                    "scale": 1.25,
                    "x": 0.5,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy2.png",
                    "needsFlags": [
                        "!drunk"
                    ],
                    "scale": 0.2,
                    "x": 0.3,
                    "y": 0.6
                },
                {
                    "angle": 0,
                    "img": "character/egg/neutral2.png",
                    "scale": 0.1,
                    "x": 0.2,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "character/beagle/playing.png",
                    "scale": 0.3,
                    "x": 0.45,
                    "y": 0.55
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.325,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "character/parrot/neutral.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.155,
                    "x": 0.305,
                    "y": 0.595
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You and the beagle have a wonderful time playing together!",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "The beagle is a lot of fun to be around. You do your best to play but you're a bit uncoordinated."
            }
        ]
    },
    "85550": {
        "actions": [
            {
                "dest": "85368",
                "label": "Play with beagle",
                "needsFlags": []
            },
            {
                "dest": "31710",
                "label": "Play with dachshund",
                "needsFlags": []
            },
            {
                "dest": "11635",
                "label": "Play with doberman",
                "needsFlags": []
            },
            {
                "dest": "1826",
                "label": "Offer dachshund martini",
                "needsFlags": [
                    "haveMetDachshund",
                    "haveMartini"
                ]
            },
            {
                "dest": "75760",
                "label": "Offer dachshund cosmo",
                "needsFlags": [
                    "haveMetDachshund",
                    "haveCosmo"
                ]
            },
            {
                "dest": "73855",
                "label": "Offer beagle a martini",
                "needsFlags": [
                    "haveMartini",
                    "haveMetBeagle"
                ]
            },
            {
                "dest": "53381",
                "label": "Offer beagle a cosmo",
                "needsFlags": [
                    "haveCosmo",
                    "haveMetBeagle"
                ]
            },
            {
                "dest": "13631",
                "label": "Return to wandering city",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveBeenToDogPark"
        ],
        "id": "85550",
        "label": "Dog Park",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/dogPark.png",
                    "scale": 1.05,
                    "x": 0.5,
                    "y": 0.48829693637298377
                },
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.2,
                    "x": 0.2061067679975821,
                    "y": 0.7864465120197012
                },
                {
                    "angle": 0,
                    "img": "character/doberman/neutral.png",
                    "scale": 0.5,
                    "x": 0.7,
                    "y": 0.5539293602867958
                },
                {
                    "angle": 0,
                    "img": "character/dachshund/neutral.png",
                    "scale": 0.15,
                    "x": 0.35,
                    "y": 0.2602888007370219
                },
                {
                    "angle": 0,
                    "img": "character/beagle/neutral.png",
                    "scale": 0.2,
                    "x": 0.4,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.215,
                    "y": 0.625
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You seem to have found some dogs at the dog park! The dachshund and beagle seem friendly enough, but you get a shiver down your spine when you see the doberman.",
        "textVariants": [
            {
                "flags": [
                    "haveBeenToDogPark"
                ],
                "text": "The day is young! What will you do at the dog park next?"
            }
        ]
    },
    "85914": {
        "actions": [
            {
                "dest": "29900",
                "label": "What is happening",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "85914",
        "label": "Rat Leader 3",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/rat/leader_talking.png",
                    "scale": 1.055,
                    "x": 0.555,
                    "y": 0.575
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "prop/mask_1.png",
                    "scale": 0.27,
                    "x": 0.705,
                    "y": 0.435
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "\"Now rise with me!!!! Put on your masks of the spirit!!!!\""
    },
    "85940": {
        "actions": [
            {
                "dest": "2839",
                "label": "Next"
            }
        ],
        "addsFlags": [],
        "id": "85940",
        "label": "Egg Hatching 2",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_fast",
                    "img": "character/egg/hatch2.png",
                    "scale": 0.95,
                    "x": 0.55,
                    "y": 0.4681562441308301
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "The cracks begin to spread!"
    },
    "86146": {
        "actions": [
            {
                "dest": "91030",
                "label": "Sunflowers",
                "needsFlags": []
            },
            {
                "dest": "22555",
                "label": "Lilac",
                "needsFlags": []
            },
            {
                "dest": "56065",
                "label": "Daffodil",
                "needsFlags": []
            },
            {
                "dest": "40581",
                "label": "Change your mind",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "86146",
        "label": "Flower Purchase",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "prop/sunflowers.png",
                    "scale": 0.5,
                    "x": 0.2,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "prop/lilac.png",
                    "scale": 0.6,
                    "x": 0.45,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "prop/daffodil.png",
                    "scale": 0.5,
                    "x": 0.75,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_2.png",
                    "needsFlags": [
                        "haveRatVision"
                    ],
                    "scale": 0.165,
                    "x": 0.925,
                    "y": 0.8315672297093334
                },
                {
                    "angle": 0.465,
                    "animation": "wobble_fast",
                    "flipped": true,
                    "img": "character/possum/talking.png",
                    "needsFlags": [
                        "haveFlower"
                    ],
                    "scale": 0.53,
                    "x": 1,
                    "y": 1
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "\"Sure,\" the possum says, \"I have sunflowers, lilacs, and daffodils in stock. Which will it be?\" You look them over hard.",
        "textVariants": [
            {
                "flags": [
                    "haveFlower"
                ],
                "text": "\"Gettin greedy,\" the possum teases with a laugh, \"which additional flower would you like?\""
            },
            {
                "flags": [
                    "haveFlower",
                    "askForPossumName"
                ],
                "text": "\"Gettin greedy,\" Pat teases with a laugh, \"which additional flower would you like?\""
            },
            {
                "flags": [
                    "askForPossumName"
                ],
                "text": "\"Sure,\" Pat says, \"I have sunflowers, lilacs, and daffodils in stock. Which will it be?\" You look them over hard."
            }
        ]
    },
    "87223": {
        "actions": [
            {
                "dest": "37515",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "discoveredHole"
        ],
        "id": "87223",
        "label": "Hole travel",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/rat/rat_in_tunnel.png",
                    "scale": 0.985,
                    "x": 0.495,
                    "y": 0.54
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You follow the rats through the hole!"
    },
    "87790": {
        "actions": [
            {
                "dest": "48059",
                "label": "Inspect Egg",
                "needsFlags": [
                    "!sawEgg"
                ]
            },
            {
                "dest": "90619",
                "label": "Climb Down Tree",
                "needsFlags": []
            }
        ],
        "addsFlags": [],
        "id": "87790",
        "label": "resting in nest",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "setting/nest.png",
                    "scale": 0.6,
                    "x": 0.5,
                    "y": 0.55
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
                    "scale": 0.25,
                    "x": 0.2,
                    "y": 0.4
                },
                {
                    "angle": 0,
                    "img": "character/egg/medium.png",
                    "scale": 0.1,
                    "x": 0.35,
                    "y": 0.45
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.18,
                    "x": 0.265,
                    "y": 0.19
                }
            ],
            "bg": "bg/canopy.png"
        },
        "text": "You settle into the nest with your egg and take a short nap. "
    },
    "87811": {
        "actions": [
            {
                "dest": "57590",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "playedWithJaguar"
        ],
        "id": "87811",
        "label": "Playing with jaguar",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/jaguar/playing.png",
                    "scale": 0.9,
                    "x": 0.7,
                    "y": 0.5
                },
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
                    "scale": 0.5,
                    "x": 0.25,
                    "y": 0.7
                },
                {
                    "angle": 0,
                    "img": "character/egg/neutral.png",
                    "scale": 0.1,
                    "x": 0.35,
                    "y": 0.9
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.21,
                    "x": 0.405,
                    "y": 0.44
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "The jaguar is really just kind of a large house cat- you play with it and have a nice time.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "The jaguar is really just kind of a large house cat- you play with it and have a nice time despite feeling a bit nauseous."
            }
        ]
    },
    "90619": {
        "actions": [
            {
                "dest": "20907",
                "label": "Visit animals again",
                "needsFlags": [
                    "metAnimals"
                ]
            },
            {
                "dest": "74372",
                "label": "Go to volcano",
                "needsFlags": []
            },
            {
                "dest": "87790",
                "label": "Return to the nest",
                "needsFlags": []
            },
            {
                "dest": "23888",
                "label": "Look for animals",
                "needsFlags": [
                    "!metAnimals"
                ]
            },
            {
                "dest": "45463",
                "label": "Go to city",
                "needsFlags": []
            },
            {
                "dest": "64042",
                "label": "Go to kava bar",
                "needsFlags": [
                    "kavaBarOpen"
                ]
            }
        ],
        "addsFlags": [],
        "id": "90619",
        "label": "Jungle Hub",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/bindle.png",
                    "scale": 0.5,
                    "x": 0.4,
                    "y": 0.6
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.225,
                    "x": 0.58,
                    "y": 0.31
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_1.png",
                    "needsFlags": [
                        "haveRatVision",
                        "drunk"
                    ],
                    "scale": 0.22,
                    "x": 0.845,
                    "y": 0.9
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "prop/mask_side.png",
                    "needsFlags": [
                        "drunk",
                        "haveRatVision"
                    ],
                    "scale": 0.115,
                    "x": 0.8,
                    "y": 0.845
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You wander the jungle and wonder where you should go.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "You wander the jungle and wonder where you should go. You feel a little disoriented."
            }
        ]
    },
    "91030": {
        "actions": [
            {
                "dest": "43130",
                "label": "Oh no!",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveSunflowers",
            "haveFlower"
        ],
        "id": "91030",
        "label": "Sunflower sneeze",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/parrot/sneeze.png",
                    "scale": 0.5,
                    "x": 0.25,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "prop/pollenFlower1.png",
                    "scale": 0.2,
                    "x": 0.5,
                    "y": 0.65
                },
                {
                    "angle": 0,
                    "animation": "spin_slow",
                    "img": "prop/pollenFlower2.png",
                    "scale": 0.25,
                    "x": 0.75,
                    "y": 0.7
                },
                {
                    "angle": 1.01,
                    "animation": "spin_fast",
                    "img": "character/egg/neutral3.png",
                    "scale": 0.1,
                    "x": 0.55,
                    "y": 0.48
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You take the sunflowers. The possum doesn't seem to care about you paying so you start to head out the door. All of a sudden, your nose tickles and you sneeze! Your egg goes flying!"
    },
    "91404": {
        "actions": [
            {
                "dest": "64965",
                "label": "Pick up one of the bottles",
                "needsFlags": []
            },
            {
                "dest": "61921",
                "label": "Leave the back alley",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveSeenBackAlley"
        ],
        "id": "91404",
        "label": "Bar back alley",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/backWingsSpread.png",
                    "scale": 0.5,
                    "x": 0.25,
                    "y": 0.735
                },
                {
                    "angle": -1.535,
                    "img": "prop/poisonBottle.png",
                    "scale": 0.1,
                    "x": 0.945,
                    "y": 0.9
                },
                {
                    "angle": 1.715,
                    "img": "prop/poisonBottle.png",
                    "scale": 0.1,
                    "x": 0.05,
                    "y": 0.935
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.325,
                    "y": 0.56
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You find a spooky alley behind the bar. It gives you the creeps. You hear faint chanting and drumming but don't see anything other than mysterious bottles strewn about.",
        "textVariants": [
            {
                "flags": [
                    "haveRatVision",
                    "!haveSeenBackAlley"
                ],
                "text": "You find a spooky alley behind the bar and you behold a bizarre scene. Rats seem to have formed a drum circle and are chanting in a crazed way."
            },
            {
                "flags": [
                    "haveSeenBackAlley"
                ],
                "text": "The back alley looks spookier by the minute. What do you do?"
            }
        ]
    },
    "91471": {
        "actions": [
            {
                "dest": "58259",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "hasDrink"
        ],
        "id": "91471",
        "label": "Bear shakes martini",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.45,
                    "x": 0.1,
                    "y": 0.75
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "setting/barCounter.png",
                    "scale": 0.5,
                    "x": 0.55,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "animation": "hop_fast",
                    "img": "character/bear/shaking.png",
                    "scale": 0.5,
                    "x": 0.7,
                    "y": 0.35
                },
                {
                    "angle": 0.325,
                    "animation": "hop_slow",
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.09,
                    "y": 0.555
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"Coming right up!\" the strange panda says as he works furiously to make it.",
        "textVariants": [
            {
                "flags": [
                    "drunk"
                ],
                "text": "\"Coming right up!\" the strange panda says as he works furiously to make it. Is the room spinning?"
            }
        ]
    },
    "94275": {
        "actions": [
            {
                "dest": "10255",
                "label": "Shame on you!",
                "needsFlags": [
                    "!drunk"
                ]
            },
            {
                "dest": "5936",
                "label": "Ruh roh",
                "needsFlags": [
                    "drunk"
                ]
            }
        ],
        "addsFlags": [
            "hasClimbedFountain"
        ],
        "id": "94275",
        "label": "Climbing Fountain",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/city_fountain.png",
                    "scale": 1.05,
                    "x": 0.505,
                    "y": 0.5
                },
                {
                    "angle": -0.295,
                    "animation": "wobble_fast",
                    "img": "character/parrot/flying.png",
                    "needsFlags": [
                        "!hasClimbedFountain",
                        "!drunk"
                    ],
                    "scale": 0.16,
                    "x": 0.495,
                    "y": 0.23
                },
                {
                    "angle": 0,
                    "animation": "zoom_fast",
                    "img": "character/parrot/backWingsSpread.png",
                    "needsFlags": [
                        "hasClimbedFountain",
                        "!drunk"
                    ],
                    "scale": 0.155,
                    "x": 0.63,
                    "y": 0.085
                },
                {
                    "angle": 2.75,
                    "img": "character/egg/neutral.png",
                    "needsFlags": [
                        "hasClimbedFountain",
                        "!drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.095,
                    "y": 0.905
                },
                {
                    "angle": -2.4,
                    "animation": "spin_fast",
                    "img": "character/parrot/flying.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.11,
                    "x": 0.715,
                    "y": 0.195
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You climb the fountain and almost slip! It's extremely slick, you should be MUCH more careful when you're carrying your egg!",
        "textVariants": [
            {
                "flags": [
                    "hasClimbedFountain"
                ],
                "text": "This time, you carefully put your egg on the ground ahead of time. However, the fountain is still slippery and you're really putting yourself at risk!"
            },
            {
                "flags": [
                    "drunk"
                ],
                "text": "You climb the fountain and slip!"
            }
        ]
    },
    "94630": {
        "actions": [
            {
                "dest": "13631",
                "label": "Return to wandering the city",
                "needsFlags": []
            },
            {
                "dest": "48799",
                "label": "Ask therapy mouse about his day",
                "needsFlags": []
            },
            {
                "dest": "53838",
                "label": "Ask him about what there is to do",
                "needsFlags": []
            },
            {
                "dest": "33614",
                "label": "Complain to him that he hasn't offered new ideas for a while",
                "needsFlags": []
            }
        ],
        "id": "94630",
        "label": "Therapy Mouse Hub",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/mouse/neutral.png",
                    "scale": 2,
                    "x": 0.49,
                    "y": 0.965
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "There seems to be a pause in your conversation. You feel the mouse watching you closely."
    },
    "94709": {
        "actions": [
            {
                "dest": "91471",
                "label": "Martini",
                "needsFlags": []
            },
            {
                "dest": "46692",
                "label": "Cosmopolitan",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "termsAgreedTo"
        ],
        "id": "94709",
        "label": "Bear offers drinks",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.45,
                    "x": 0.1,
                    "y": 0.7301802155435473
                },
                {
                    "angle": 0,
                    "img": "character/bear/neutral.png",
                    "scale": 0.5,
                    "x": 0.7,
                    "y": 0.25
                },
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/barCounter.png",
                    "scale": 0.65,
                    "x": 0.55,
                    "y": 0.7115674718410626
                },
                {
                    "angle": 0,
                    "animation": "hop_slow",
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.1,
                    "x": 0.155,
                    "y": 0.435
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"Sure thing!\" the strange panda says. \"Would you like a martini or a cosmopolitan?\" "
    },
    "95956": {
        "actions": [
            {
                "dest": "13817",
                "label": "Accept Gift",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "haveGivenBone"
        ],
        "id": "95956",
        "label": "Gift Hamster",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/hamster/neutral.png",
                    "scale": 0.45,
                    "x": 0.5,
                    "y": 0.5682735794913
                },
                {
                    "angle": 0.31,
                    "img": "prop/bonePresent.png",
                    "scale": 0.9,
                    "x": 0.5,
                    "y": 0.6183196847164483
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "\"I have something for you!\" you say as you present the beagle's dog bone gift to the hamster. It almost makes you laugh cause she's so much smaller than the bone. She squeals with excitement. \"I love these things! They aren't really part of my natural diet but that doesn't matter to me. For your generosity, I have a gift for YOU!\""
    },
    "95982": {
        "actions": [
            {
                "dest": "64950",
                "label": "Follow the tunnel",
                "needsFlags": []
            }
        ],
        "addsFlags": [
            "discoverJunglePath"
        ],
        "id": "95982",
        "label": "Right Tunnel",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/sewer_system_tunnel.png",
                    "scale": 1.05,
                    "x": 0.55,
                    "y": 0.57
                },
                {
                    "angle": 0.04,
                    "animation": "hop_slow",
                    "flipped": false,
                    "img": "character/rat/rat_1.png",
                    "scale": 0.15,
                    "x": 0.65,
                    "y": 0.7069580646524997
                },
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "flipped": true,
                    "img": "character/rat/rat_1.png",
                    "scale": 0.1,
                    "x": 0.54,
                    "y": 0.385
                },
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "character/rat/rat_2.png",
                    "scale": 0.18,
                    "x": 0.66,
                    "y": 0.84
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_2.png",
                    "scale": 0.145,
                    "x": 0.355,
                    "y": 0.7559195178358672
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/rat/rat_2.png",
                    "scale": 0.15,
                    "x": 0.415,
                    "y": 0.53
                },
                {
                    "angle": 0,
                    "img": "character/rat/rat_3.png",
                    "scale": 0.155,
                    "x": 0.31,
                    "y": 0.585
                },
                {
                    "angle": -0.92,
                    "flipped": false,
                    "img": "character/rat/rat_3.png",
                    "scale": 0.1,
                    "x": 0.67,
                    "y": 0.35
                },
                {
                    "angle": 0,
                    "img": "character/parrot/bindle.png",
                    "scale": 0.22,
                    "x": 0.4,
                    "y": 0.87
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You turn right and follow the rats down the tunnel."
    },
    "96204": {
        "actions": [
            {
                "dest": "94630",
                "label": "Next",
                "needsFlags": []
            }
        ],
        "id": "96204",
        "label": "Therapy Mouse Glad",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/mouse/neutral.png",
                    "scale": 0.88,
                    "x": 0.495,
                    "y": 0.57
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "\"I'm so glad to hear it!\" he says. "
    },
    "99585": {
        "actions": [
            {
                "dest": "56143",
                "label": "\"I haven't been feeling so good.\"",
                "needsFlags": [
                    "drunk"
                ]
            },
            {
                "dest": "96204",
                "label": "\"I'm doing great!\"",
                "needsFlags": []
            },
            {
                "dest": "53838",
                "label": "\"I'm a little bored, there isn't much to do.\"",
                "needsFlags": []
            }
        ],
        "id": "99585",
        "label": "Therapy Mouse 1",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/back.png",
                    "scale": 0.5,
                    "x": 0.205,
                    "y": 0.73
                },
                {
                    "angle": 0,
                    "img": "character/mouse/neutral.png",
                    "scale": 0.18,
                    "x": 0.54,
                    "y": 0.605
                },
                {
                    "angle": 0,
                    "img": "prop/drunk_bubbles.png",
                    "needsFlags": [
                        "drunk"
                    ],
                    "scale": 0.195,
                    "x": 0.32,
                    "y": 0.38
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "Therapy mouse looks closely at you. \"So how have you been doing, parrot? Are you enjoying the city?\""
    }
};
