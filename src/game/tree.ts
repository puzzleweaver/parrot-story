
import type { Tree } from "./tree-type";
export const tree: Tree = {
    "0": {
        "actions": [
            {
                "addsFlags": [],
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
                "label": "Continue talking to koala"
            },
            {
                "dest": "20907",
                "label": "Wander jungle to get away from this conversation"
            }
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
                "addsFlags": [],
                "dest": "49884",
                "label": "...",
                "needsFlags": []
            }
        ],
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
                "dest": "13097",
                "label": "Leave the store! You're so embarassed!"
            }
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
                    "scale": 0.5,
                    "x": 0.215,
                    "y": 0.7
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "The possum comes over to you and spreads its mouth in offense. \"No, I'm Pat! Why does everyone keep calling me Jen?\" Your face feels hot. You aren't sure what you were thinking."
    },
    "9403": {
        "actions": [
            {
                "dest": "28035",
                "label": "inspect drink"
            },
            {
                "dest": "18822",
                "label": "Say \"Thanks!\""
            }
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
                "addsFlags": [
                    "holeDiscovered"
                ],
                "dest": "87223",
                "label": "Follow the rats through the hole"
            },
            {
                "dest": "18822",
                "label": "Leave the Bathroom"
            }
        ],
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
                "dest": "11989",
                "label": "Dig through the fountain and look for treasure",
                "needsFlags": [
                    "hasGlasses"
                ]
            },
            {
                "dest": "13631",
                "label": "Wander the city again"
            },
            {
                "dest": "11989",
                "label": "Dig through the fountain and look for treasure",
                "needsFlags": [
                    "!hasGlasses"
                ]
            }
        ],
        "id": "10255",
        "label": "City Fountain Arrival",
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
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You arrive to the fountain! You love the smell of the water."
    },
    "11635": {
        "actions": [
            {
                "dest": "13849",
                "label": "Next"
            }
        ],
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
                "needsFlags": [
                    "hasGlasses"
                ]
            },
            {
                "addsFlags": [
                    "hasGlasses"
                ],
                "dest": "91498",
                "label": "Next",
                "needsFlags": [
                    "!hasGlasses"
                ]
            }
        ],
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
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You dig through the fountain!"
    },
    "12073": {
        "actions": [
            {
                "addsFlags": [
                    "youHaveDogBone"
                ],
                "dest": "78527",
                "label": "Accept request"
            },
            {
                "dest": "62947",
                "label": "\"No thanks\""
            }
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
        "text": "The beagle turns to you. \"By the way, I know this is short notice, but can you bring my girlfriend a gift for me? She works at the hotel near here. It would be a great chance for you to see more of the city.\""
    },
    "13097": {
        "actions": [
            {
                "addsFlags": [],
                "dest": "13631",
                "label": "Leave and Wander the City",
                "needsFlags": []
            },
            {
                "addsFlags": [],
                "dest": "40581",
                "label": "Go in!",
                "needsFlags": []
            }
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
                    "animation": "hop_fast",
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
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You're outside the flower shop! It seems welcoming."
    },
    "13631": {
        "actions": [
            {
                "dest": "27595",
                "label": "Go to hotel"
            },
            {
                "dest": "85550",
                "label": "Go to dog park"
            },
            {
                "dest": "61921",
                "label": "Go to bar"
            },
            {
                "dest": "13097",
                "label": "Go to flower shop"
            },
            {
                "dest": "10255",
                "label": "Visit city fountain"
            }
        ],
        "id": "13631",
        "label": "City Hub",
        "scene": {
            "actors": [],
            "bg": "bg/city.png"
        },
        "text": "You wander the city and think about what you should do next. There are really only a few options..."
    },
    "13817": {
        "actions": [
            {
                "dest": "23991",
                "label": "Inspect Keycard"
            },
            {
                "dest": "56699",
                "label": "Say \"Thanks!\""
            }
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
                "label": "Back to the animals"
            }
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
    "18632": {
        "actions": [
            {
                "dest": "10255",
                "label": "Exit the Water"
            }
        ],
        "id": "18632",
        "label": "Nothing found in fountain 2",
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
                    "scale": 0.14,
                    "x": 0.285,
                    "y": 0.435
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You get soaked and don't end up finding anything."
    },
    "18822": {
        "actions": [
            {
                "dest": "65138",
                "label": "Ask for a drink"
            },
            {
                "dest": "47626",
                "label": "Use their bathroom"
            }
        ],
        "id": "18822",
        "label": "Inside bar",
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
                    "scale": 0.6,
                    "x": 0.6,
                    "y": 0.65
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "You go inside and encounter some sort of weird panda. "
    },
    "18968": {
        "actions": [
            {
                "dest": "47389",
                "label": "Next. No other options."
            }
        ],
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
                "label": "Follow the rats"
            },
            {
                "dest": "18822",
                "label": "Leave the Bathroom"
            }
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
                "label": "Play with the jaguar"
            },
            {
                "dest": "78752",
                "label": "Play with the small man"
            },
            {
                "dest": "48268",
                "label": "Play with the koala"
            },
            {
                "addsFlags": [
                    "koalaHasTalked"
                ],
                "dest": "64647",
                "label": "Talk to the koala",
                "needsFlags": [
                    "!koalaHasTalked"
                ]
            },
            {
                "dest": "90619",
                "label": "Wander the jungle some more"
            }
        ],
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
                    "scale": 0.35,
                    "x": 0.2,
                    "y": 0.33024762083858294
                },
                {
                    "angle": 0,
                    "flipped": true,
                    "img": "character/jaguar/neutral.png",
                    "scale": 0.35,
                    "x": 0.67,
                    "y": 0.75
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You encounter some strange-looking animals! You think they're called a koala, jaguar, and a small man."
    },
    "22555": {
        "actions": [
            {
                "dest": "40581",
                "label": "Next"
            }
        ],
        "id": "22555",
        "label": "You take lilac",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/happy2.png",
                    "scale": 0.5,
                    "x": 0.3,
                    "y": 0.6898671123379214
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
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You take a lilac. The possum doesn't seem to care about you paying so you head out the door."
    },
    "22841": {
        "actions": [
            {
                "dest": "59840",
                "label": "Back to Hotel Lobby"
            },
            {
                "dest": "79680",
                "label": "Go into the pool"
            }
        ],
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You find a wonderful little hot tub. You feel sleepy."
    },
    "23991": {
        "actions": [
            {
                "dest": "56699",
                "label": "Say \"Thanks!\""
            },
            {
                "dest": "53122",
                "label": "Flip Keycard Over"
            }
        ],
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
    "27438": {
        "actions": [],
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
                "dest": "59840",
                "label": "Go inside"
            },
            {
                "dest": "13631",
                "label": "Wander city instead"
            }
        ],
        "id": "27595",
        "label": "Hotel exterior",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "still",
                    "img": "setting/hotel.png",
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
                "label": "Trail Off"
            }
        ],
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
                "label": "Inspection Complete"
            }
        ],
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
    "31710": {
        "actions": [
            {
                "addsFlags": [],
                "dest": "1826",
                "label": "give dachshund martini",
                "needsFlags": [
                    "youHaveMartini"
                ]
            },
            {
                "addsFlags": [],
                "dest": "75760",
                "label": "give dachshund cosmopolitan",
                "needsFlags": [
                    "youHaveCosmo"
                ]
            },
            {
                "addsFlags": [],
                "dest": "85550",
                "label": "Back to Dog Park",
                "needsFlags": []
            }
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You and the dachshund play together for a few minutes. You're surprised he had it in him- he looked pretty old and confused. Now he's huffing and puffing, so you decide to let him rest."
    },
    "31726": {
        "actions": [
            {
                "dest": "85940",
                "label": "Oh my gosh!"
            }
        ],
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
    "34620": {
        "actions": [
            {
                "dest": "74372",
                "label": "Back to the volcano"
            },
            {
                "dest": "35030",
                "label": "Take a bath"
            }
        ],
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
                "label": "Disembark into the City"
            }
        ],
        "id": "35747",
        "label": "City Arrival",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "flipped": true,
                    "img": "setting/bus.png",
                    "scale": 0.3,
                    "x": 0.335,
                    "y": 0.85
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You finally arrive in the city! The options here are endless. Maybe you can make some friends!"
    },
    "38201": {
        "actions": [],
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
                "addsFlags": [
                    "askForPossumName"
                ],
                "dest": "5565",
                "label": "Ask the possum \"Are you Jen?\"",
                "needsFlags": [
                    "!askForPossumName"
                ]
            },
            {
                "dest": "86146",
                "label": "Ask if you can buy flowers"
            },
            {
                "dest": "13097",
                "label": "Leave the shop"
            }
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
                    "scale": 0.5,
                    "x": 0.75,
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
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You go into the flower store and are met with fragrances of sunflowers, lilacs, roses, lilies, and many more flowers you can't even think to describe. You see a possum running the shop."
    },
    "43130": {
        "actions": [],
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
                "label": "Next"
            }
        ],
        "id": "45463",
        "label": "Bus ride",
        "scene": {
            "actors": [
                {
                    "angle": 0.06,
                    "animation": "hop_fast",
                    "img": "setting/bus.png",
                    "scale": 0.3,
                    "x": 0.45,
                    "y": 0.8
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You ride the bus through the jungle and think you hear strange animal screams. You aren't sure who was hollerin'."
    },
    "46692": {
        "actions": [
            {
                "addsFlags": [
                    "youHaveCosmo"
                ],
                "dest": "9403",
                "label": "Next"
            }
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
    "47389": {
        "actions": [
            {
                "dest": "27438",
                "label": "Oh no"
            }
        ],
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
                "addsFlags": [
                    "hasRatVision"
                ],
                "dest": "19418",
                "label": "Bored, Put on Sunglasses",
                "needsFlags": [
                    "hasGlasses",
                    "!hasRatVision"
                ]
            },
            {
                "dest": "18822",
                "label": "Finish up and Leave Bathroom",
                "needsFlags": [
                    ""
                ]
            },
            {
                "dest": "87223",
                "label": "Take the Rat Tunnel",
                "needsFlags": [
                    "holeDiscovered"
                ]
            }
        ],
        "id": "47626",
        "label": "Inside bathroom",
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
                }
            ],
            "bg": "bg/gray.png"
        },
        "text": "You settle onto the toilet and go about your business."
    },
    "47893": {
        "actions": [
            {
                "dest": "28006",
                "label": "Next"
            }
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You ask the hamster if you can book a room. She looks miffed and says, \"You're a parrot, you don't have any money.\""
    },
    "48059": {
        "actions": [
            {
                "dest": "87790",
                "label": "inspection complete"
            }
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
                "dest": "64647",
                "label": "Talk to it instead"
            },
            {
                "dest": "20907",
                "label": "Back to the animals"
            }
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
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You approach the koala and try to initiate play. It looks sad and confused. It doesn't know how to play with birds."
    },
    "49002": {
        "actions": [],
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
                "label": "Oh My!!!"
            }
        ],
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
                "label": "..."
            }
        ],
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
    "51829": {
        "actions": [
            {
                "label": "Ask the worker, \"Are you Jen?\""
            },
            {
                "label": "Ask to purchase flowers"
            },
            {
                "label": "Leave flower shop"
            }
        ],
        "id": "51829",
        "label": "Inside flower shop",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.5,
                    "x": 0.2886990416966655,
                    "y": 0.5557797267123598
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You walk up to the counter to find a small animal. "
    },
    "53122": {
        "actions": [
            {
                "dest": "56699",
                "label": "Say \"Thanks!\""
            },
            {
                "dest": "23991",
                "label": "Flip Keycard Back Over"
            }
        ],
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
                "addsFlags": [
                    "youHaveTalkedToBeagle"
                ],
                "dest": "12073",
                "label": "Continue conversing",
                "needsFlags": [
                    "!youHaveTalkedToBeagle"
                ]
            },
            {
                "dest": "85550",
                "label": "Back to Dog Park"
            }
        ],
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
    "55660": {
        "actions": [
            {
                "dest": "34620",
                "label": "Go to hot spring"
            },
            {
                "dest": "90619",
                "label": "wander jungle some more"
            }
        ],
        "id": "55660",
        "label": "Volcano visit no rocks",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/in-transit.png",
                    "scale": 0.15,
                    "x": 0.1,
                    "y": 0.8
                },
                {
                    "angle": 0,
                    "animation": "shake_slow",
                    "img": "setting/volcano/opening.png",
                    "scale": 0.85,
                    "x": 0.55,
                    "y": 0.5
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You arrive to the volcano. There isn't much to do here. The only thing you can think of is to visit the hot spring."
    },
    "56065": {
        "actions": [
            {
                "dest": "40581",
                "label": "Next"
            }
        ],
        "id": "56065",
        "label": "You take daffodil",
        "scene": {
            "actors": [
                {
                    "angle": 0,
                    "img": "character/parrot/happy.png",
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
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "You take a daffodil. The possum doesn't seem to care about you paying so you head out the door."
    },
    "56699": {
        "actions": [
            {
                "dest": "59840",
                "label": "Next"
            }
        ],
        "id": "56699",
        "label": "Thanking Hamster",
        "scene": {
            "actors": [],
            "bg": "bg/shop.png"
        },
        "text": "Anytime, buddy ;)"
    },
    "57590": {
        "actions": [
            {
                "dest": "20907",
                "label": "Back to Animals"
            }
        ],
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
                "label": "inspect martini"
            },
            {
                "dest": "18822",
                "label": "Say \"Thanks\""
            }
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
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "The strange panda carefully poured the martini into the glass. Gotta be careful when everything is constantly shaking. \"There ya go, hope your friend likes it!\""
    },
    "59840": {
        "actions": [
            {
                "addsFlags": [
                    "triedToBook"
                ],
                "dest": "47893",
                "label": "Ask to book your stay",
                "needsFlags": [
                    "!triedToBook"
                ]
            },
            {
                "addsFlags": [
                    "askGFQuestion"
                ],
                "dest": "82129",
                "label": "Ask her, \"Are you the beagle's girlfriend?\"",
                "needsFlags": [
                    "youHaveTalkedToBeagle",
                    "!askGFQuestion"
                ]
            },
            {
                "addsFlags": [],
                "dest": "13631",
                "label": "Go back to the city",
                "needsFlags": []
            },
            {
                "addsFlags": [],
                "dest": "22841",
                "label": "Go to Hotel Pool",
                "needsFlags": [
                    "youHaveKeyCard"
                ]
            }
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You found a hamster behind the desk."
    },
    "61921": {
        "actions": [
            {
                "dest": "18822",
                "label": "Go in"
            },
            {
                "dest": "13631",
                "label": "Wander city instead"
            }
        ],
        "id": "61921",
        "label": "Arrive at bar",
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
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You arrived to the bar! This place seems a little shady."
    },
    "62947": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park"
            }
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
    "64647": {
        "actions": [
            {
                "addsFlags": [
                    "canThrowRocks"
                ],
                "dest": "2739",
                "label": "Say \"Sure, what did you want to tell me?\""
            },
            {
                "dest": "20907",
                "label": "Say \"No Thanks\""
            }
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
    "65138": {
        "actions": [
            {
                "dest": "94709",
                "label": "Agree to his Terms"
            },
            {
                "dest": "18822",
                "label": "Refuse his Terms"
            }
        ],
        "id": "65138",
        "label": "Bird refused a drink",
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
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"You're a bird! You're not supposed to drink!\" the weird panda says to you. \"But I can give you a drink as long as you promise you're giving it to someone else who is of drinking age.\""
    },
    "71284": {
        "actions": [
            {
                "dest": "87790",
                "label": "Take a Deep Breath",
                "needsFlags": [
                    ""
                ]
            }
        ],
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
                "addsFlags": [
                    "youHaveTalkedToBeagle"
                ],
                "dest": "12073",
                "label": "continue conversing",
                "needsFlags": [
                    "!youHaveTalkedToBeagle"
                ]
            },
            {
                "dest": "85550",
                "label": "Back to Dog Park"
            }
        ],
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
                "addsFlags": [],
                "dest": "84301",
                "label": "Look for rocks to make a sacrifice",
                "needsFlags": []
            },
            {
                "addsFlags": [],
                "dest": "34620",
                "label": "Cool off in a hot spring",
                "needsFlags": []
            },
            {
                "addsFlags": [],
                "dest": "90619",
                "label": "Back to the Jungle",
                "needsFlags": []
            }
        ],
        "id": "74372",
        "label": "Volcano visit after cult talk",
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
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You've reached the volcano. You can't get the koala's words out of your head and you wonder about the nature of existence."
    },
    "75760": {
        "actions": [
            {
                "dest": "85550",
                "label": "Back to Dog Park"
            }
        ],
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
                "label": "Back to Dog Park"
            }
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
                "label": "What is your egg doing!"
            }
        ],
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
    "82129": {
        "actions": [
            {
                "dest": "59840",
                "label": "..."
            },
            {
                "addsFlags": [
                    ""
                ],
                "dest": "95956",
                "label": "Give her the beagle's gift",
                "needsFlags": [
                    "youHaveDogBone"
                ]
            }
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You screw up the courage to ask a somewhat embarrassing question. \"Are you the beagle's girlfriend?\" The hamster smiles and says, \"Oh yes!\" You are shocked. \"Then how do you guys-\" you stop yourself. There's an awkward pause."
    },
    "84301": {
        "actions": [
            {
                "dest": "18968",
                "label": "Throw them in! Complete the sacrifice!"
            },
            {
                "dest": "74372",
                "label": "Put the rocks down and step Away From The Edge"
            }
        ],
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
    "85368": {
        "actions": [
            {
                "addsFlags": [
                    "youHaveTalkedToBeagle"
                ],
                "dest": "12073",
                "label": "Talk to beagle",
                "needsFlags": [
                    "!youHaveTalkedToBeagle"
                ]
            },
            {
                "dest": "73855",
                "label": "Give beagle a martini",
                "needsFlags": [
                    "youHaveMartini"
                ]
            },
            {
                "dest": "53381",
                "label": "Give beagle a cosmopolitan",
                "needsFlags": [
                    "youHaveCosmo"
                ]
            },
            {
                "dest": "85550",
                "label": "Return to Dog Park"
            }
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You and the beagle have a wonderful time playing together!"
    },
    "85550": {
        "actions": [
            {
                "dest": "85368",
                "label": "Play with beagle"
            },
            {
                "dest": "31710",
                "label": "Play with dachshund"
            },
            {
                "dest": "11635",
                "label": "Play with doberman"
            },
            {
                "dest": "13631",
                "label": "Return to wandering city"
            }
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
                }
            ],
            "bg": "bg/shop.png"
        },
        "text": "You seem to have found some dogs at the dog park! The dachshund and beagle seem friendly enough, but you get a shiver down your spine when you see the doberman."
    },
    "85940": {
        "actions": [
            {
                "dest": "2839",
                "label": "Next"
            }
        ],
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
                "addsFlags": [
                    "hasSunflowers",
                    "hasFlower"
                ],
                "dest": "91030",
                "label": "Sunflowers"
            },
            {
                "addsFlags": [
                    "hasLilac",
                    "hasFlower"
                ],
                "dest": "22555",
                "label": "Lilac"
            },
            {
                "addsFlags": [
                    "hasDaffodil",
                    "hasFlower"
                ],
                "dest": "56065",
                "label": "Daffodil"
            }
        ],
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
                }
            ],
            "bg": "bg/flower-shop.png"
        },
        "text": "\"Sure,\" the possum says, \"I have sunflowers, lilacs, and daffodils in stock. Which will it be?\" You look them over hard."
    },
    "87223": {
        "actions": [
            {
                "dest": "95982",
                "label": "Next"
            }
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
                "addsFlags": [
                    "sawEgg"
                ],
                "dest": "48059",
                "label": "Inspect Egg",
                "needsFlags": [
                    "!sawEgg"
                ]
            },
            {
                "dest": "90619",
                "label": "Climb Down Tree"
            }
        ],
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
                "label": "Next"
            }
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
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "The jaguar is really just kind of a large house cat- you play with it and have a nice time."
    },
    "90619": {
        "actions": [
            {
                "dest": "20907",
                "label": "Look for animals"
            },
            {
                "dest": "55660",
                "label": "Go to volcano",
                "needsFlags": [
                    "!cultThoughts"
                ]
            },
            {
                "dest": "45463",
                "label": "Go to city"
            },
            {
                "dest": "74372",
                "label": "Go to volcano",
                "needsFlags": [
                    "cultThoughts"
                ]
            },
            {
                "dest": "87790",
                "label": "return to the nest"
            }
        ],
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
                }
            ],
            "bg": "bg/jungle.png"
        },
        "text": "You wander the jungle and wonder where you should go."
    },
    "91030": {
        "actions": [
            {
                "dest": "43130",
                "label": "Oh no!"
            }
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
    "91471": {
        "actions": [
            {
                "dest": "58259",
                "label": "Next"
            }
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
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"Coming right up!\" the strange panda says as he works furiously to make it. "
    },
    "91498": {
        "actions": [
            {
                "dest": "10255",
                "label": "Nice"
            }
        ],
        "id": "91498",
        "label": "Find sunglasses",
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
                    "img": "character/parrot/cool.png",
                    "scale": 0.315,
                    "x": 0.255,
                    "y": 0.615
                },
                {
                    "angle": 0,
                    "img": "text/soCool.png",
                    "scale": 0.18,
                    "x": 0.405,
                    "y": 0.75
                }
            ],
            "bg": "bg/city.png"
        },
        "text": "You found a pair of sunglasses in the bottom of the fountain! You wear them briefly and then put them inside of your feathers to save for later."
    },
    "94709": {
        "actions": [
            {
                "dest": "91471",
                "label": "Martini"
            },
            {
                "dest": "46692",
                "label": "Cosmopolitan"
            }
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
                }
            ],
            "bg": "bg/bar.png"
        },
        "text": "\"That's great!\" the strange panda says. \"Would you like a martini or a cosmopolitan?\" "
    },
    "95956": {
        "actions": [
            {
                "addsFlags": [
                    "youHaveKeycard"
                ],
                "dest": "13817",
                "label": "Accept Gift"
            }
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
        "text": "\"I have something for you!\" you say as you present the beagle's dog bone gift to the hamster. It almost makes you laugh cause she's so much smaller than the bone. She squeals with excitement. \"I love things! They aren't really part of my natural diet but that doesn't matter to me. For your generosity, I have a gift for YOU!\""
    },
    "95982": {
        "actions": [
            {
                "dest": "90619",
                "label": "Follow the tunnel"
            }
        ],
        "id": "95982",
        "label": "Rat Tunnel",
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
        "text": "You arrive in a sewer system tunnel! You hear jungle sounds from the other end and there's only one way to go."
    }
};
