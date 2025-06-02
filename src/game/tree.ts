import type { Tree } from "./tree-type";
export const tree: Tree = {
	"0": {
		"id": 0,
		"label": "Beginning of Game",
		"text": "This is the story of a parrot and its egg.",
		"scene": {
			"bg": "bg/canopy.png",
			"actors": [
				{
					"x": 0.2,
					"y": 0.35,
					"scale": 0.5,
					"angle": 0,
					"img": "text/title/a.png"
				},
				{
					"x": 0.65,
					"y": 0.25,
					"scale": 0.5,
					"angle": 0,
					"img": "text/title/parrot.png"
				},
				{
					"x": 0.45,
					"y": 0.8,
					"scale": 0.65,
					"angle": 0,
					"img": "text/title/story.png"
				}
			]
		},
		"actions": [
			{
				"dest": "71284",
				"label": "Let's go!"
			}
		]
	},
	"1826": {
		"id": "1826",
		"label": "Dachshund rejects martini",
		"text": "The dachshund looks sad and confused. \"I'm a dog, I don't drink.\" You feel a little awkward.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.4,
					"y": 0.75,
					"scale": 0.65,
					"angle": 0,
					"img": "character/dachshund/gifted.png",
					"animation": "still"
				},
				{
					"x": 0.8,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/martini.png"
				}
			]
		},
		"actions": [
			{
				"dest": "85368",
				"label": "play with beagle"
			},
			{
				"dest": "12073",
				"label": "talk to beagle",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "13631",
				"label": "return to wandering city"
			}
		]
	},
	"2739": {
		"id": "2739",
		"label": "Koala Cult Talk 2",
		"text": "The koala continues, \"Well you see, it rules over everything! You will be in its favor if you perform our sacred ritual. Go to the volcano, and throw rocks into it as an offering.\" You don't know what to make of this, but this animal seems a bit crazed.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.4920037464042546,
					"y": 0.7,
					"scale": 0.8,
					"angle": 0,
					"img": "character/koala/surprised.png",
					"animation": "spin_slow"
				}
			]
		},
		"actions": [
			{
				"dest": "14923",
				"label": "Continue talking to koala"
			},
			{
				"dest": "90619",
				"label": "Wander jungle to get away from this conversation"
			}
		]
	},
	"2839": {
		"id": "2839",
		"label": "Egg Hatching 3",
		"text": "The shell begins to open, and you can see part of a small creature.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.55,
					"scale": 0.7,
					"angle": 0,
					"img": "character/egg/hatch3.png",
					"animation": "hop_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "38201",
				"label": "Next"
			}
		]
	},
	"5565": {
		"id": "5565",
		"label": "Possum Offended",
		"text": "The possum comes over to you and spreads its mouth in offense. \"No, I'm Pat! Why does everyone keep calling me Jen?\" Your face feels hot. You aren't sure what you were thinking.",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.73,
					"y": 0.71,
					"scale": 0.45,
					"angle": 0,
					"img": "character/possum/talking.png",
					"flipped": true
				},
				{
					"x": 0.215,
					"y": 0.7,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/blush.png",
					"flipped": false
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Leave the store! You're so embarassed!"
			},
			{
				"dest": "86146",
				"label": "Shake it off and ask to purchase flowers.",
				"needsFlags": [
					"!hasFlower"
				]
			},
			{
				"dest": "86146",
				"label": "Shake it off and ask to purchase more flowers.",
				"needsFlags": [
					"hasFlower"
				]
			}
		]
	},
	"9403": {
		"id": "9403",
		"label": "bear pours cosmo",
		"text": "The strange panda pours the cosmopolitan drink carefully. \"Hope your friend enjoys!\"",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.8,
					"scale": 0.35,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.55,
					"y": 0.7,
					"scale": 0.6,
					"angle": 0,
					"img": "setting/barCounter.png",
					"animation": "still"
				},
				{
					"x": 0.75,
					"y": 0.45,
					"scale": 0.2,
					"angle": 0,
					"img": "character/bear/fillingCosmoDrink.png"
				},
				{
					"x": 0.65,
					"y": 0.25,
					"scale": 0.4,
					"angle": 0,
					"img": "character/bear/fillingCosmo.png"
				}
			]
		},
		"actions": [
			{
				"dest": "28035",
				"label": "inspect drink"
			},
			{
				"dest": "65138",
				"label": "ask for another drink"
			},
			{
				"dest": "13631",
				"label": "wander city"
			}
		]
	},
	"9785": {
		"id": "9785",
		"label": "Discover hole",
		"text": "The rats lead you to the corner of the bathroom where there's a hole in the wall! It's just big enough for you to fit through!",
		"scene": {
			"bg": "bg/gray.png",
			"actors": [
				{
					"x": 0.525,
					"y": 0.79,
					"scale": 0.58,
					"angle": 0,
					"img": "setting/hole_in_wall.png"
				},
				{
					"x": 0.77,
					"y": 0.99,
					"scale": 0.5,
					"angle": -0.55,
					"img": "character/rat/rat_2.png"
				},
				{
					"x": 0.265,
					"y": 0.955,
					"scale": 0.36,
					"angle": 0,
					"img": "character/rat/rat_1.png",
					"flipped": true
				}
			]
		},
		"actions": [
			{
				"dest": "87223",
				"label": "Follow the rats through the hole",
				"addsFlags": [
					"holeDiscovered"
				]
			},
			{
				"dest": "13631",
				"label": "Return to wandering the city"
			}
		]
	},
	"10255": {
		"id": "10255",
		"label": "City Fountain Arrival",
		"text": "You arrive to the fountain! You love the smell of the water.",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.505,
					"y": 0.5,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/city_fountain.png",
					"animation": "still"
				},
				{
					"x": 0.105,
					"y": 0.815,
					"scale": 0.245,
					"angle": 0,
					"img": "character/parrot/bindle.png",
					"animation": "shake_slow"
				}
			]
		},
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
		]
	},
	"11635": {
		"id": "11635",
		"label": "Doberman attack",
		"text": "Oh no! The doberman lunges at you, takes your egg from your beak, and breaks it between his teeth! ",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "character/doberman/attack.png",
					"animation": "shake_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "13849",
				"label": "Next"
			}
		]
	},
	"11938": {
		"id": "11938",
		"label": "Hotel pool 2",
		"text": "",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.45,
					"scale": 1,
					"angle": 0,
					"img": "setting/hotel/hotTub.png"
				},
				{
					"x": 0.15,
					"y": 0.6686595920676749,
					"scale": 0.2,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.05,
					"y": 0.7224330936908226,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral.png"
				}
			]
		},
		"actions": []
	},
	"11989": {
		"id": "11989",
		"label": "Digging through fountain",
		"text": "You dig through the fountain!",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.505,
					"y": 0.5,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/city_fountain.png",
					"animation": "still"
				},
				{
					"x": 0.255,
					"y": 0.48,
					"scale": 0.315,
					"angle": 0,
					"img": "character/parrot/splashing.png"
				},
				{
					"x": 0.325,
					"y": 0.31563327580077283,
					"scale": 0.1,
					"angle": -0.76,
					"img": "prop/splash_1.png"
				},
				{
					"x": 0.39,
					"y": 0.47144549762423216,
					"scale": 0.1,
					"angle": 0,
					"img": "prop/splash_2.png"
				},
				{
					"x": 0.39,
					"y": 0.545,
					"scale": 0.1,
					"angle": 0.545,
					"img": "prop/splash_3.png"
				},
				{
					"x": 0.205,
					"y": 0.42,
					"scale": 0.1,
					"angle": 2.04,
					"img": "prop/splash_4.png"
				},
				{
					"x": 0.245,
					"y": 0.325,
					"scale": 0.1,
					"angle": 2.71,
					"img": "prop/splash_5.png"
				}
			]
		},
		"actions": [
			{
				"dest": "18632",
				"label": "Next",
				"needsFlags": [
					"hasGlasses"
				]
			},
			{
				"dest": "91498",
				"label": "Next",
				"needsFlags": [
					"!hasGlasses"
				],
				"addsFlags": [
					"hasGlasses"
				]
			}
		]
	},
	"12073": {
		"id": "12073",
		"label": "Beagle asks for favor",
		"text": "The beagle turns to you. \"By the way, I know this is short notice, but can you bring my girlfriend a gift for me? She works at the hotel near here. It would be a great chance for you to see more of the city.\"",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.7,
					"scale": 0.8,
					"angle": 0,
					"img": "character/beagle/gifted.png"
				}
			]
		},
		"actions": [
			{
				"label": "Accept request",
				"dest": "78527",
				"addsFlags": [
					"youHaveDogBone"
				]
			},
			{
				"label": "\"No thanks\"",
				"dest": "62947"
			}
		]
	},
	"13097": {
		"id": "13097",
		"label": "Flower shop exterior",
		"text": "You have arrived to the flower shop! It seems welcoming.",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.05,
					"y": 0.8,
					"scale": 0.25,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.5,
					"y": 0.55,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/flowerShop.png",
					"animation": "still"
				},
				{
					"x": 0.9,
					"y": 0.7,
					"scale": 0.2,
					"angle": 0,
					"img": "prop/sunflowers.png"
				}
			]
		},
		"actions": [
			{
				"dest": "40581",
				"label": "Go in!"
			},
			{
				"dest": "13631",
				"label": "Wander city"
			}
		]
	},
	"13631": {
		"id": "13631",
		"label": "What to do screen",
		"text": "You wander the city and think about what you should do next. There are really only a few options...",
		"scene": {
			"bg": "bg/city.png",
			"actors": []
		},
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
		]
	},
	"13849": {
		"id": "13849",
		"label": "Shock",
		"text": "You feel shock and horror!",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/shocked.png",
					"animation": "spin_slow"
				}
			]
		},
		"actions": [
			{
				"dest": "51350",
				"label": "Next"
			}
		]
	},
	"14923": {
		"id": "14923",
		"label": "Koala Cult Talk 3 ",
		"text": "He continues, with increased pitch and fervor: \n\"Out in the mindless void the daemon bore me\nPast the bright clusters of dimensioned space,\nTill neither time nor matter stretched before me,\nBut only Chaos, without form or place.\"\nYou decide it's time to leave.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.5744793845602532,
					"scale": 1.15,
					"angle": 0,
					"img": "character/koala/talking.png",
					"animation": "spin_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "74372",
				"label": "Go to the volcano"
			},
			{
				"dest": "45463",
				"label": "Go to the city"
			}
		]
	},
	"17469": {
		"id": "17469",
		"label": "Hotel pool 2",
		"text": "",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.45,
					"scale": 1,
					"angle": 0,
					"img": "setting/hotel/hotTub.png"
				},
				{
					"x": 0.15,
					"y": 0.6686595920676749,
					"scale": 0.2,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.05,
					"y": 0.7224330936908226,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral.png"
				}
			]
		},
		"actions": []
	},
	"18632": {
		"id": "18632",
		"label": "Nothing found in fountain 2",
		"text": "You get soaked and don't end up finding anything.",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.505,
					"y": 0.5,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/city_fountain.png",
					"animation": "still"
				},
				{
					"x": 0.285,
					"y": 0.435,
					"scale": 0.14,
					"angle": 0,
					"img": "character/parrot/shocked.png"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Return to wandering city"
			}
		]
	},
	"18822": {
		"id": "18822",
		"label": "Inside bar",
		"text": "You go inside and encounter some sort of weird panda. ",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.8,
					"scale": 0.35,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.75,
					"y": 0.25,
					"scale": 0.5,
					"angle": 0,
					"img": "character/bear/neutral.png"
				},
				{
					"x": 0.6,
					"y": 0.65,
					"scale": 0.6,
					"angle": 0,
					"img": "setting/barCounter.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "65138",
				"label": "Ask for a drink"
			},
			{
				"label": "Leave"
			},
			{
				"dest": "47626",
				"label": "Use their bathroom"
			}
		]
	},
	"18968": {
		"id": "18968",
		"label": "Volcano gets rocks",
		"text": "You launch the rocks into the volcano! They land into the lava and the ground begins to shake!",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "setting/volcano/opening.png",
					"animation": "shake_slow"
				},
				{
					"x": 0.1,
					"y": 0.6021070859995121,
					"scale": 0.25,
					"angle": 0,
					"img": "character/parrot/throwing.png"
				},
				{
					"x": 0.25,
					"y": 0.4923805290438986,
					"scale": 0.1,
					"angle": 0,
					"img": "prop/jungleRocks.png"
				}
			]
		},
		"actions": [
			{
				"dest": "47389",
				"label": "Next. No other options."
			}
		]
	},
	"19418": {
		"id": "19418",
		"label": "rat vision discovered",
		"text": "You put on the glasses. Your mind feels like it has opened up! You suddenly see multiple rats! Guess you now have rat vision.",
		"scene": {
			"bg": "bg/gray.png",
			"actors": [
				{
					"x": 0.26,
					"y": 0.5146708692031643,
					"scale": 0.69,
					"angle": 0,
					"img": "prop/toilet.png",
					"flipped": true,
					"animation": "still"
				},
				{
					"x": 0.28,
					"y": 0.39606551592520745,
					"scale": 0.33,
					"angle": 0,
					"img": "character/parrot/cool.png"
				},
				{
					"x": 0.72,
					"y": 0.375,
					"scale": 0.795,
					"angle": 0,
					"img": "setting/bathroom_counter.png",
					"animation": "still"
				},
				{
					"x": 0.875,
					"y": 0.64,
					"scale": 0.17,
					"angle": 0,
					"img": "character/rat/rat_1.png"
				},
				{
					"x": 0.4,
					"y": 0.84,
					"scale": 0.2,
					"angle": -0.62,
					"img": "character/rat/rat_3.png",
					"animation": "hop_slow"
				}
			]
		},
		"actions": [
			{
				"dest": "9785",
				"label": "Follow the rats"
			},
			{
				"dest": "13631",
				"label": "Go back to wandering the city"
			}
		]
	},
	"20907": {
		"id": "20907",
		"label": "Jungle animals encounter",
		"text": "You encounter some strange-looking animals! You think they're called a koala, jaguar, and a small man.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.8504803802665324,
					"y": 0.3369383488267934,
					"scale": 0.5,
					"angle": 0,
					"img": "character/monkey/neutral.png"
				},
				{
					"x": 0.2,
					"y": 0.33024762083858294,
					"scale": 0.35,
					"angle": 0,
					"img": "character/koala/neutral.png"
				},
				{
					"x": 0.35,
					"y": 0.75,
					"scale": 0.35,
					"angle": 0,
					"img": "character/jaguar/neutral.png"
				}
			]
		},
		"actions": [
			{
				"label": "Play with the jaguar",
				"dest": "87811"
			},
			{
				"dest": "78752",
				"label": "Play with the small man"
			},
			{
				"label": "Play with the koala",
				"dest": "48268"
			},
			{
				"label": "Talk to the koala",
				"dest": "64647",
				"addsFlags": [
					"koalaHasTalked"
				],
				"needsFlags": [
					"!koalaHasTalked"
				]
			},
			{
				"dest": "90619",
				"label": "Wander the jungle some more"
			}
		]
	},
	"22555": {
		"id": "22555",
		"label": "You take lilac",
		"text": "You take a lilac. The possum doesn't seem to care about you paying so you head out the door.",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.3,
					"y": 0.6898671123379214,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/happy2.png"
				},
				{
					"x": 0.25,
					"y": 0.65,
					"scale": 0.35,
					"angle": 0.51,
					"img": "prop/lilac.png"
				},
				{
					"x": 0.75,
					"y": 0.7,
					"scale": 0.5,
					"angle": 0,
					"img": "character/possum/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Next"
			}
		]
	},
	"22841": {
		"id": "22841",
		"label": "Hotel pool",
		"text": "You find a wonderful little hot tub. You feel sleepy.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.45,
					"scale": 1,
					"angle": 0,
					"img": "setting/hotel/hotTub.png",
					"animation": "still"
				},
				{
					"x": 0.15,
					"y": 0.6686595920676749,
					"scale": 0.2,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.05,
					"y": 0.7224330936908226,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Leave hotel instead"
			},
			{
				"dest": "79680",
				"label": "Go into the pool"
			}
		]
	},
	"23429": {
		"id": "23429",
		"label": "Beagle gets cosmo",
		"text": "\"Oh my goodness, thank you so much!!\" the beagle exclaims.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.3665063915257799,
					"y": 0.75,
					"scale": 0.6,
					"angle": 0,
					"img": "character/beagle/gifted.png"
				},
				{
					"x": 0.75,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/cosmopolitan.png"
				}
			]
		},
		"actions": [
			{
				"label": "Continue conversing",
				"dest": "12073",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "31710",
				"label": "Play with dachshund"
			},
			{
				"dest": "13631",
				"label": "Return to wandering city"
			}
		]
	},
	"23991": {
		"id": "23991",
		"label": "Keycard front",
		"text": "\"It's a keycard to our pool area!\" she says. \"Please enjoy a free swim in our hot tub.\"",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "prop/hotelKeyCardFront.png"
				}
			]
		},
		"actions": [
			{
				"dest": "53122",
				"label": "inspect back of keycard",
				"needsFlags": [
					"youHaveKeycard"
				]
			},
			{
				"dest": "22841",
				"label": "go to pool area",
				"needsFlags": [
					"youHaveKeycard"
				]
			},
			{
				"dest": "13631",
				"label": "leave and wander city again"
			}
		]
	},
	"27438": {
		"id": "27438",
		"label": "Volcano Destruction",
		"text": "You are covered by magma and ash. There is no escape. Your egg is destroyed along with your hopes and dreams.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "setting/volcano/oozing.png",
					"animation": "shake_slow"
				}
			]
		},
		"actions": [],
		"endgame": "lose"
	},
	"27595": {
		"id": "27595",
		"label": "Hotel exterior",
		"text": "You made it to the hotel!",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.51,
					"scale": 0.82,
					"angle": 0,
					"img": "setting/hotel.png",
					"animation": "still"
				},
				{
					"x": 0.2,
					"y": 0.7437772492394863,
					"scale": 0.3,
					"angle": 0,
					"img": "character/parrot/bindle.png"
				}
			]
		},
		"actions": [
			{
				"dest": "59840",
				"label": "Go inside"
			},
			{
				"dest": "13631",
				"label": "Wander city instead"
			}
		]
	},
	"28006": {
		"id": "28006",
		"label": "Embarrased",
		"text": "Poor thing! You seem to have embarassed yourself!",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.5000827459901062,
					"scale": 0.95,
					"angle": 0,
					"img": "character/parrot/blush.png",
					"animation": "shake_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Leave and wander city"
			},
			{
				"dest": "82129",
				"label": "Ask if she's the beagle's girlfriend",
				"needsFlags": [
					"youHaveTalkedToBeagle",
					"!askGFQuestion"
				],
				"addsFlags": [
					"askGFQuestion"
				]
			}
		]
	},
	"28035": {
		"id": "28035",
		"label": "New Screen",
		"text": "That's a good-looking cosmo!",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "prop/cosmopolitan.png"
				}
			]
		},
		"actions": [
			{
				"dest": "65138",
				"label": "ask for another drink"
			},
			{
				"dest": "13631",
				"label": "wander city"
			}
		]
	},
	"30550": {
		"id": "30550",
		"label": "New Screen",
		"text": "lorem ipsum dolor sit amet and so on and so forth...",
		"scene": {
			"bg": "bg/shop.png",
			"actors": []
		},
		"actions": []
	},
	"31710": {
		"id": "31710",
		"label": "Play with dachshund",
		"text": "You and the dachshund play together for a few minutes. You're surprised he had it in him- he looked pretty old and confused. Now he's huffing and puffing, so you decide to let him rest.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1.2,
					"angle": 0,
					"img": "setting/dogPark.png",
					"animation": "still"
				},
				{
					"x": 0.55,
					"y": 0.6,
					"scale": 0.25,
					"angle": 0,
					"img": "character/dachshund/playing.png"
				},
				{
					"x": 0.25,
					"y": 0.65,
					"scale": 0.25,
					"angle": 0,
					"img": "character/parrot/happy2.png"
				},
				{
					"x": 0.25,
					"y": 0.8802936574460094,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral2.png"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "wander city"
			},
			{
				"label": "talk to beagle",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"dest": "12073",
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "1826",
				"label": "give dachshund martini",
				"needsFlags": [
					"youHaveMartini"
				]
			},
			{
				"dest": "75760",
				"label": "give dachshund cosmopolitan",
				"needsFlags": [
					"youHaveCosmo"
				]
			}
		]
	},
	"31726": {
		"id": "31726",
		"label": "Egg Hatching 1",
		"text": "The small head wrap falls off of your egg and it begins to shake violently! A few cracks begin to form.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.55,
					"scale": 1,
					"angle": 0,
					"img": "character/egg/hatch1.png",
					"animation": "shake_slow"
				}
			]
		},
		"actions": [
			{
				"dest": "85940",
				"label": "Oh my gosh!"
			}
		]
	},
	"34620": {
		"id": "34620",
		"label": "Hot Spring Bath",
		"text": "You find the hot spring and feel like it's calling to you. You feel very heavy and sleepy.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.5,
					"scale": 0.9,
					"angle": 0,
					"img": "setting/hotSpring.png"
				}
			]
		},
		"actions": [
			{
				"dest": "45463",
				"label": "Snap out of it and go to the city"
			},
			{
				"dest": "35030",
				"label": "Take a bath"
			}
		]
	},
	"34854": {
		"id": "34854",
		"label": "New Screen 2",
		"text": "",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.505,
					"y": 0.5,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/city_fountain.png"
				},
				{
					"x": 0.105,
					"y": 0.815,
					"scale": 0.245,
					"angle": 0,
					"img": "character/parrot/bindle.png",
					"animation": "shake_slow"
				}
			]
		},
		"actions": []
	},
	"35030": {
		"id": "35030",
		"label": "Taking a bath",
		"text": "This bath is just what you needed! You feel refreshed!",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.3,
					"y": 0.4,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/bath.png"
				},
				{
					"x": 0.5,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/bathWater.png"
				},
				{
					"x": 0.45,
					"y": 0.65,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/bath.png"
				}
			]
		},
		"actions": [
			{
				"dest": "31726",
				"label": "What is your egg doing!"
			}
		]
	},
	"35160": {
		"id": "35160",
		"label": "Hotel pool 2",
		"text": "",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.45,
					"scale": 1,
					"angle": 0,
					"img": "setting/hotel/hotTub.png"
				},
				{
					"x": 0.15,
					"y": 0.6686595920676749,
					"scale": 0.2,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.05,
					"y": 0.7224330936908226,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral.png"
				}
			]
		},
		"actions": []
	},
	"35747": {
		"id": "35747",
		"label": "City Arrival",
		"text": "You finally arrive in the city! The options here are endless. Maybe you can make some friends!",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.335,
					"y": 0.85,
					"scale": 0.3,
					"angle": 0,
					"img": "setting/bus.png",
					"animation": "shake_slow",
					"flipped": true
				}
			]
		},
		"actions": [
			{
				"dest": "85550",
				"label": "Go to dog park"
			},
			{
				"dest": "61921",
				"label": "Go to bar"
			},
			{
				"dest": "27595",
				"label": "Go to hotel"
			},
			{
				"dest": "13097",
				"label": "Go to flower shop"
			},
			{
				"dest": "10255",
				"label": "Visit city square fountain"
			}
		]
	},
	"38201": {
		"id": "38201",
		"label": "Egg Hatching 4",
		"text": "A small yellow bird emerges! It doesn't really look like a baby parrot, so you're confused about that, but you still feel a sense of pride and motherhood.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.55,
					"scale": 0.5,
					"angle": 0,
					"img": "character/egg/hatch4.png"
				},
				{
					"x": 0.5,
					"y": 0.45,
					"scale": 1,
					"angle": 0,
					"img": "character/egg/hatch4lines.png"
				},
				{
					"x": 0.25,
					"y": 0.25,
					"scale": 0.25,
					"angle": 1.01,
					"img": "character/egg/hatch4shell.png",
					"animation": "spin_fast"
				}
			]
		},
		"actions": [],
		"endgame": "win"
	},
	"40581": {
		"id": "40581",
		"label": "Flower shop interior",
		"text": "You go into the flower store and are met with fragrances of sunflowers, lilacs, roses, lilies, and many more flowers you can't even think to describe. You see a possum running the shop.",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.35,
					"y": 0.7,
					"scale": 0.39,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.75,
					"y": 0.7,
					"scale": 0.5,
					"angle": 0.11,
					"img": "setting/hotel/desk.png",
					"animation": "still"
				},
				{
					"x": 0.865,
					"y": 0.495,
					"scale": 0.32,
					"angle": 0,
					"img": "character/possum/neutral.png"
				},
				{
					"x": 0.15,
					"y": 0.3,
					"scale": 0.25,
					"angle": 0,
					"img": "prop/sunflowers.png"
				},
				{
					"x": 0.25,
					"y": 0.3,
					"scale": 0.25,
					"angle": 0,
					"img": "prop/sunflowers.png"
				},
				{
					"x": 0.05,
					"y": 0.3,
					"scale": 0.3,
					"angle": 0,
					"img": "prop/lilac.png"
				}
			]
		},
		"actions": [
			{
				"dest": "5565",
				"label": "Ask the possum \"Are you Jen?\"",
				"addsFlags": [
					"askForPossumName"
				],
				"needsFlags": [
					"!askForPossumName"
				]
			},
			{
				"label": "Ask if you can buy flowers",
				"dest": "86146"
			},
			{
				"dest": "13631",
				"label": "Leave the shop"
			}
		]
	},
	"43130": {
		"id": "43130",
		"label": "Egg breaks in flower shop",
		"text": "Your egg smashes against the flower shop floor and breaks! You feel immense sadness.",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.25,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/sad.png",
					"animation": "still"
				},
				{
					"x": 0.6,
					"y": 0.95,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/soup.png"
				},
				{
					"x": 0.7,
					"y": 0.95,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/brokenShellRight.png"
				},
				{
					"x": 0.5,
					"y": 0.95,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/brokenShellLeft.png"
				}
			]
		},
		"actions": [],
		"endgame": "lose"
	},
	"45412": {
		"id": "45412",
		"label": "Inspecting martini",
		"text": "That's a good-looking martini!",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 0.85,
					"angle": 0,
					"img": "prop/martini.png"
				}
			]
		},
		"actions": [
			{
				"dest": "65138",
				"label": "ask for another drink"
			},
			{
				"dest": "13631",
				"label": "wander city"
			}
		]
	},
	"45463": {
		"id": "45463",
		"label": "Bus ride",
		"text": "You ride the bus through the jungle and think you hear strange animal screams. You aren't sure who was hollerin'.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.45,
					"y": 0.8,
					"scale": 0.3,
					"angle": 0.06,
					"img": "setting/bus.png",
					"animation": "hop_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "35747",
				"label": "Next"
			}
		]
	},
	"46692": {
		"id": "46692",
		"label": "bear shakes cosmopolitan",
		"text": "\"Coming right up!\" The weird panda prepares the cosmopolitan faster than you can process what's happening.",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.6,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "character/bear/shaking.png",
					"animation": "hop_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "9403",
				"label": "Next",
				"addsFlags": [
					"youHaveCosmo"
				]
			}
		]
	},
	"47389": {
		"id": "47389",
		"label": "Volcano Erruption",
		"text": "The volcano erupts with the force of a thousand suns!",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.5,
					"scale": 1.1,
					"angle": 0,
					"img": "setting/volcano/eruption.png",
					"animation": "shake_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "27438",
				"label": "Oh no"
			}
		]
	},
	"47626": {
		"id": "47626",
		"label": "Inside bathroom",
		"text": "You settle onto the toilet and go about your business.",
		"scene": {
			"bg": "bg/gray.png",
			"actors": [
				{
					"x": 0.26,
					"y": 0.5146708692031643,
					"scale": 0.69,
					"angle": 0,
					"img": "prop/toilet.png",
					"flipped": true,
					"animation": "still"
				},
				{
					"x": 0.28,
					"y": 0.39606551592520745,
					"scale": 0.385,
					"angle": 0,
					"img": "character/parrot/neutral.png"
				},
				{
					"x": 0.72,
					"y": 0.375,
					"scale": 0.795,
					"angle": 0,
					"img": "setting/bathroom_counter.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "19418",
				"label": "You are bored so you put on the sunglasses you found",
				"needsFlags": [
					"hasGlasses",
					"!hasRatVision"
				],
				"addsFlags": [
					"hasRatVision"
				]
			},
			{
				"dest": "13631",
				"label": "Finish up and go back to wandering the city",
				"needsFlags": [
					""
				]
			},
			{
				"dest": "87223",
				"label": "Finish up your business and then take the rat tunnel back to the jungle",
				"needsFlags": [
					"holeDiscovered"
				]
			}
		]
	},
	"47893": {
		"id": "47893",
		"label": "Trying to book",
		"text": "You ask the hamster if you can book a room. She looks miffed and says, \"You're a parrot, you don't have any money.\"",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.15,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.8,
					"y": 0.35,
					"scale": 0.2,
					"angle": 0,
					"img": "character/hamster/neutral.png"
				},
				{
					"x": 0.65,
					"y": 0.6157597293279373,
					"scale": 0.7,
					"angle": 0,
					"img": "setting/hotel/desk.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "28006",
				"label": "Next"
			}
		]
	},
	"48059": {
		"id": "48059",
		"label": "Egg inspection",
		"text": "The egg is somewhat large and has a mottled appearance. The shell is thick and sturdy. Should be easy to travel with!",
		"scene": {
			"bg": "bg/canopy.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 0.9,
					"angle": 0,
					"img": "character/egg/closeup.png"
				},
				{
					"x": 0.4,
					"y": 0.5021982593403244,
					"scale": 0.2,
					"angle": 0,
					"img": "prop/sparkle2.png"
				},
				{
					"x": 0.65,
					"y": 0.25,
					"scale": 0.15,
					"angle": 0,
					"img": "prop/sparkle3.png"
				},
				{
					"x": 0.55,
					"y": 0.75,
					"scale": 0.1,
					"angle": 0,
					"img": "prop/sparkle1.png"
				}
			]
		},
		"actions": [
			{
				"label": "climb down tree",
				"dest": "90619"
			}
		]
	},
	"48268": {
		"id": "48268",
		"label": "Play with koala",
		"text": "You approach the koala and try to initiate play. It looks sad and confused. It doesn't know how to play with birds.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.65,
					"y": 0.5,
					"scale": 0.5,
					"angle": 0,
					"img": "character/koala/confused.png"
				},
				{
					"x": 0.35,
					"y": 0.7,
					"scale": 0.3,
					"angle": 0,
					"img": "character/parrot/backWingsSpread.png"
				}
			]
		},
		"actions": [
			{
				"dest": "64647",
				"label": "Talk to it instead"
			},
			{
				"dest": "87811",
				"label": "Play with the jaguar"
			},
			{
				"dest": "78752",
				"label": "Play with monkey"
			},
			{
				"dest": "90619",
				"label": "Continue wandering forest"
			}
		]
	},
	"49002": {
		"id": "49002",
		"label": "Monkey attack 2",
		"text": "The small man throws your egg onto the jungle floor as hard as it can, and it shatters, along with your hopes and dreams.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.45,
					"scale": 0.75,
					"angle": 0,
					"img": "character/monkey/attackWithEgg.png"
				},
				{
					"x": 0.45,
					"y": 0.9,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/soup.png"
				},
				{
					"x": 0.55,
					"y": 0.9,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/brokenShellRight.png"
				},
				{
					"x": 0.35,
					"y": 0.9,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/brokenShellLeft.png"
				},
				{
					"x": 0.75,
					"y": 0.85,
					"scale": 0.3,
					"angle": 0.46,
					"img": "text/crack.png"
				},
				{
					"x": 0.15,
					"y": 0.85,
					"scale": 0.25,
					"angle": 0,
					"img": "character/parrot/backWingsSpread.png"
				},
				{
					"x": 0.15,
					"y": 0.65,
					"scale": 0.15,
					"angle": 0.06,
					"img": "text/exclaim.png"
				}
			]
		},
		"actions": [],
		"endgame": "lose"
	},
	"51350": {
		"id": "51350",
		"label": "Mourning",
		"text": "Your egg is broken forever, and you fear you can't move on.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.4,
					"y": 0.45,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/sad.png"
				},
				{
					"x": 0.75,
					"y": 0.65,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/soup.png"
				},
				{
					"x": 0.65,
					"y": 0.65,
					"scale": 0.15,
					"angle": 0,
					"img": "character/egg/brokenShellLeft.png"
				},
				{
					"x": 0.85,
					"y": 0.65,
					"scale": 0.15,
					"angle": 0,
					"img": "character/egg/brokenShellRight.png"
				}
			]
		},
		"actions": [],
		"endgame": "lose"
	},
	"51829": {
		"id": "51829",
		"label": "Inside flower shop",
		"text": "You walk up to the counter to find a small animal. ",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.2886990416966655,
					"y": 0.5557797267123598,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				}
			]
		},
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
		]
	},
	"53122": {
		"id": "53122",
		"label": "Back of keycard",
		"text": "You flip the keycard over and find instructions for how to get into the pool area.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "prop/hotelKeyCard.png"
				}
			]
		},
		"actions": [
			{
				"dest": "22841",
				"label": "go to pool area",
				"needsFlags": [
					"youHaveKeycard"
				]
			},
			{
				"dest": "13631",
				"label": "leave and wander city"
			}
		]
	},
	"53381": {
		"id": "53381",
		"label": "Beagle accepts cosmo",
		"text": "\"Oh my goodness, thank you so much!\" the beagle exclaims as he takes the cosmopolitan from you. You wonder whether dogs actually drink.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.4,
					"y": 0.75,
					"scale": 0.75,
					"angle": 0,
					"img": "character/beagle/gifted.png"
				},
				{
					"x": 0.85,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/cosmopolitan.png"
				}
			]
		},
		"actions": [
			{
				"dest": "12073",
				"label": "Continue conversing",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "31710",
				"label": "Play with dachshund"
			},
			{
				"dest": "13631",
				"label": "wander city "
			}
		]
	},
	"55660": {
		"id": "55660",
		"label": "Volcano visit no rocks",
		"text": "You arrive to the volcano. There isn't much to do here. The only thing you can think of is to visit the hot spring here.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.8,
					"scale": 0.15,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 0.85,
					"angle": 0,
					"img": "setting/volcano/opening.png",
					"animation": "shake_slow"
				}
			]
		},
		"actions": [
			{
				"dest": "34620",
				"label": "Go to hot spring"
			},
			{
				"dest": "90619",
				"label": "wander jungle some more"
			}
		]
	},
	"56065": {
		"id": "56065",
		"label": "You take daffodil",
		"text": "You take a daffodil. The possum doesn't seem to care about you paying so you head out the door.",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.25,
					"y": 0.7,
					"scale": 0.4,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.2,
					"y": 0.7,
					"scale": 0.3,
					"angle": -0.89,
					"img": "prop/daffodil.png"
				},
				{
					"x": 0.65,
					"y": 0.65,
					"scale": 0.5,
					"angle": 0,
					"img": "character/possum/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Next"
			}
		]
	},
	"57590": {
		"id": "57590",
		"label": "Jungle Encounter 2",
		"text": "The jaguar leaves to go take a nap. Your attention turns towards the koala- It seems like it has a story to tell! What do you do?",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.15,
					"y": 0.8,
					"scale": 0.3,
					"angle": 0,
					"img": "character/parrot/neutral.png"
				},
				{
					"x": 0.8,
					"y": 0.3,
					"scale": 0.5,
					"angle": 0,
					"img": "character/monkey/neutral.png"
				},
				{
					"x": 0.25,
					"y": 0.3,
					"scale": 0.5,
					"angle": 0,
					"img": "character/koala/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "64647",
				"label": "Talk to the koala"
			},
			{
				"dest": "90619",
				"label": "Wander jungle"
			}
		]
	},
	"58259": {
		"id": "58259",
		"label": "Bear pours martini",
		"text": "The strange panda carefully poured the martini into the glass. Gotta be careful when everything is constantly shaking. \"There ya go, hope your friend likes it!\"",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.8,
					"scale": 0.4,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.5738327421943588,
					"y": 0.75,
					"scale": 0.6,
					"angle": 0,
					"img": "setting/barCounter.png"
				},
				{
					"x": 0.55,
					"y": 0.25,
					"scale": 0.5,
					"angle": 0,
					"img": "character/bear/fillingMartini.png"
				},
				{
					"x": 0.65,
					"y": 0.45,
					"scale": 0.1,
					"angle": 0,
					"img": "prop/martini.png"
				}
			]
		},
		"actions": [
			{
				"dest": "65138",
				"label": "ask for another drink"
			},
			{
				"dest": "13631",
				"label": "leave bar"
			},
			{
				"dest": "45412",
				"label": "inspect martini"
			}
		]
	},
	"59840": {
		"id": "59840",
		"label": "Inside hotel",
		"text": "You found a hamster behind the desk.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.65,
					"y": 0.25,
					"scale": 0.2,
					"angle": 0,
					"img": "character/hamster/neutral.png"
				},
				{
					"x": 0.55,
					"y": 0.4915090109536069,
					"scale": 0.65,
					"angle": 0,
					"img": "setting/hotel/desk.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"label": "Ask to book your stay",
				"dest": "47893",
				"addsFlags": [
					"triedToBook"
				],
				"needsFlags": [
					"!triedToBook"
				]
			},
			{
				"dest": "82129",
				"label": "Ask her, \"Are you the beagle's girlfriend?\"",
				"needsFlags": [
					"youHaveTalkedToBeagle",
					"!askGFQuestion"
				],
				"addsFlags": [
					"askGFQuestion"
				]
			},
			{
				"dest": "13631",
				"label": "Go back to the city"
			}
		]
	},
	"61921": {
		"id": "61921",
		"label": "Arrive at bar",
		"text": "You arrived to the bar! This place seems a little shady.",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.05,
					"y": 0.8,
					"scale": 0.3,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.55,
					"y": 0.5,
					"scale": 1,
					"angle": 0,
					"img": "setting/pub.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "18822",
				"label": "Go in"
			},
			{
				"dest": "13631",
				"label": "Wander city instead"
			}
		]
	},
	"62947": {
		"id": "62947",
		"label": "Rejected Beagle",
		"text": "You decline the beagle's request. He looks a little dejected.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.59,
					"y": 0.67,
					"scale": 0.96,
					"angle": 0,
					"img": "character/beagle/sad.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "31710",
				"label": "Play with dachshund instead"
			},
			{
				"dest": "13631",
				"label": "Wander the city"
			}
		]
	},
	"64647": {
		"id": "64647",
		"label": "Koala Cult Talk",
		"text": "You decide to see what the koala has to say. It opens its mouth and speaks in a high, raspy voice. \"Greetings! I haven't seen you around this part of the jungle. Would you care to hear about our savior, Azathoth?\" You feel a bit flustered and awkward.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.7,
					"scale": 0.75,
					"angle": 0,
					"img": "character/koala/talking.png"
				}
			]
		},
		"actions": [
			{
				"dest": "2739",
				"label": "\"Sure, what did you want to tell me?\"",
				"addsFlags": [
					"canThrowRocks"
				]
			},
			{
				"dest": "87811",
				"label": "Say \"no thanks\" and play with jaguar instead"
			},
			{
				"dest": "90619",
				"label": "Say \"no thanks\" and return to wandering jungle"
			}
		]
	},
	"65138": {
		"id": "65138",
		"label": "Bird refused a drink",
		"text": "\"You're a bird! You're not supposed to drink!\" the weird panda says to you. \"But I can give you a drink as long as you promise you're giving it to someone else who is of drinking age.\"",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.15,
					"y": 0.7819893087087724,
					"scale": 0.35,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.6,
					"y": 0.65,
					"scale": 0.55,
					"angle": 0,
					"img": "setting/barCounter.png",
					"animation": "still"
				},
				{
					"x": 0.7,
					"y": 0.2,
					"scale": 0.5,
					"angle": 0,
					"img": "character/bear/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "94709",
				"label": "agree to his terms"
			},
			{
				"dest": "13631",
				"label": "refuse his terms and leave bar"
			}
		]
	},
	"67187": {
		"id": "67187",
		"label": "Beagle close-up",
		"text": "The beagle opens his mouth and you're shocked that he can speak! \"Hey there! Welcome to the dog park! Would you care to play together?\"",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5316176674905796,
					"y": 0.5,
					"scale": 0.5,
					"angle": 0,
					"img": "character/beagle/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "52652",
				"label": "\"Sure!\""
			},
			{
				"label": "\"No thanks, that's a little weird. I just met you.\"",
				"dest": "62947"
			}
		]
	},
	"71284": {
		"id": "71284",
		"label": "Nest Opening Scene",
		"text": "You wake up and it's a bright, beautiful day! You find an egg next to you and you aren't sure where it came from. You must take it on today's journey but be careful! You only get one.",
		"scene": {
			"bg": "bg/canopy.png",
			"actors": [
				{
					"x": 0.15,
					"y": 0.4,
					"scale": 0.4,
					"angle": 0.06,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.3,
					"y": 0.5,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral2.png"
				},
				{
					"x": 0.5,
					"y": 0.7,
					"scale": 0.55,
					"angle": 0,
					"img": "setting/nest.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "48059",
				"label": "Inspect egg",
				"addsFlags": [
					"sawEgg"
				],
				"needsFlags": [
					"!sawEgg"
				]
			},
			{
				"label": "Climb down tree",
				"dest": "90619",
				"needsFlags": [
					""
				]
			}
		]
	},
	"73855": {
		"id": "73855",
		"label": "Beagle accepts martini",
		"text": "\"Oh my goodness, thank you so much!\" the beagle exclaims as he takes the martini from you. You wonder whether dogs actually drink.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.3,
					"y": 0.7,
					"scale": 0.75,
					"angle": 0,
					"img": "character/beagle/gifted.png"
				},
				{
					"x": 0.75,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/martini.png"
				}
			]
		},
		"actions": [
			{
				"dest": "12073",
				"label": "continue conversing",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "31710",
				"label": "play with dachshund"
			},
			{
				"dest": "13631",
				"label": "wander city"
			}
		]
	},
	"74372": {
		"id": "74372",
		"label": "Volcano visit after cult talk",
		"text": "You've reached the volcano. You can't get the koala's words out of your head and you wonder about the nature of existence.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.65,
					"y": 0.5596831039663354,
					"scale": 0.95,
					"angle": 0,
					"img": "setting/volcano/smoking.png"
				},
				{
					"x": 0.4,
					"y": 0.75,
					"scale": 0.15,
					"angle": 0,
					"img": "character/parrot/bindle.png"
				}
			]
		},
		"actions": [
			{
				"label": "Look for rocks to make a sacrifice",
				"dest": "84301"
			},
			{
				"dest": "34620",
				"label": "Cool off in a hot spring"
			},
			{
				"dest": "45463",
				"label": "Go to the city"
			}
		]
	},
	"75760": {
		"id": "75760",
		"label": "Dachshund rejects cosmo",
		"text": "The dachshund looks sad and confused. \"I'm a dog, I don't drink.\" You feel a little awkward.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.4,
					"y": 0.75,
					"scale": 0.65,
					"angle": 0,
					"img": "character/dachshund/gifted.png",
					"animation": "still"
				},
				{
					"x": 0.85,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/cosmopolitan.png"
				}
			]
		},
		"actions": [
			{
				"dest": "85368",
				"label": "play with beagle"
			},
			{
				"dest": "12073",
				"label": "talk to beagle",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "13631",
				"label": "return to wandering city"
			}
		]
	},
	"77524": {
		"id": "77524",
		"label": "New Screen",
		"text": "lorem ipsum dolor sit amet and so on and so forth...",
		"scene": {
			"bg": "bg/shop.png",
			"actors": []
		},
		"actions": []
	},
	"78527": {
		"id": "78527",
		"label": "Dog Bone Acquired",
		"text": "The beagle says, \"Excellent! Please bring her this dog bone, it's her favorite!\" You take the present.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.55,
					"scale": 0.8,
					"angle": 0,
					"img": "prop/bonePresent.png"
				}
			]
		},
		"actions": [
			{
				"label": "Wander the city",
				"dest": "13631"
			},
			{
				"label": "Go to hotel",
				"needsFlags": [
					""
				],
				"dest": "27595"
			}
		]
	},
	"78752": {
		"id": "78752",
		"label": "Monkey attack 1",
		"text": "You wander to the small man and attempt to play with it. It screams out an ear-splitting sound and steals your egg!",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.6,
					"y": 0.5,
					"scale": 0.9,
					"angle": 0,
					"img": "character/monkey/attack.png"
				},
				{
					"x": 0.15,
					"y": 0.836200118627116,
					"scale": 0.25,
					"angle": 0,
					"img": "character/parrot/back.png"
				},
				{
					"x": 0.15,
					"y": 0.5682415188024507,
					"scale": 0.2,
					"angle": 0,
					"img": "text/exclaim.png"
				}
			]
		},
		"actions": [
			{
				"dest": "49002",
				"label": "Next"
			}
		]
	},
	"79680": {
		"id": "79680",
		"label": "Hotel bath",
		"text": "You and your egg sink into the warm water and rest. It feels amazing!",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.3,
					"y": 0.4,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/bath.png"
				},
				{
					"x": 0.5,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/bathWater.png"
				},
				{
					"x": 0.45,
					"y": 0.65,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/bath.png"
				}
			]
		},
		"actions": [
			{
				"dest": "31726",
				"label": "What is your egg doing!"
			}
		]
	},
	"82129": {
		"id": "82129",
		"label": "Ask hamster for info",
		"text": "You screw up the courage to ask a somewhat embarrassing question. \"Are you the beagle's girlfriend?\" The hamster smiles and says, \"Oh yes!\" You are shocked. \"Then how do you guys-\" you stop yourself. There's an awkward pause.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.75,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.75,
					"y": 0.45,
					"scale": 0.25,
					"angle": 0,
					"img": "character/hamster/neutral.png"
				},
				{
					"x": 0.6,
					"y": 0.7,
					"scale": 0.65,
					"angle": 0,
					"img": "setting/hotel/desk.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"dest": "95956",
				"label": "Give her the beagle's gift",
				"needsFlags": [
					"youHaveDogBone"
				],
				"addsFlags": [
					""
				]
			},
			{
				"dest": "13631",
				"label": "Leave immediately, you're too embarrassed!"
			}
		]
	},
	"84301": {
		"id": "84301",
		"label": "Rock Pile",
		"text": "You manage to locate some rocks and you pick them up. The volcano is smoking and you second-guess whether it's a good idea to throw them in.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.6,
					"scale": 0.65,
					"angle": 0,
					"img": "prop/jungleRocks.png"
				}
			]
		},
		"actions": [
			{
				"dest": "18968",
				"label": "Throw them in! Complete the sacrifice!"
			},
			{
				"dest": "34620",
				"label": "Set the rocks down and cool off in the hot spring"
			},
			{
				"dest": "45463",
				"label": "Set the rocks down and go to the city"
			}
		]
	},
	"85368": {
		"id": "85368",
		"label": "Playing with beagle",
		"text": "You and the beagle have a wonderful time playing together!",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.5,
					"scale": 1.25,
					"angle": 0,
					"img": "setting/dogPark.png",
					"animation": "still"
				},
				{
					"x": 0.3,
					"y": 0.6,
					"scale": 0.2,
					"angle": 0,
					"img": "character/parrot/happy2.png"
				},
				{
					"x": 0.2,
					"y": 0.7,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral2.png"
				},
				{
					"x": 0.45,
					"y": 0.55,
					"scale": 0.3,
					"angle": 0,
					"img": "character/beagle/playing.png"
				}
			]
		},
		"actions": [
			{
				"label": "Talk to beagle",
				"dest": "12073",
				"needsFlags": [
					"!youHaveTalkedToBeagle"
				],
				"addsFlags": [
					"youHaveTalkedToBeagle"
				]
			},
			{
				"dest": "31710",
				"label": "Play with dachshund"
			},
			{
				"dest": "13631",
				"label": "return to wandering city"
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
			}
		]
	},
	"85550": {
		"id": "85550",
		"label": "Dog Park",
		"text": "You seem to have found some dogs at the dog park! The dachshund and beagle seem friendly enough, but you get a shiver down your spine when you see the doberman.",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.48829693637298377,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/dogPark.png",
					"animation": "still"
				},
				{
					"x": 0.2061067679975821,
					"y": 0.7864465120197012,
					"scale": 0.2,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.7,
					"y": 0.5539293602867958,
					"scale": 0.5,
					"angle": 0,
					"img": "character/doberman/neutral.png"
				},
				{
					"x": 0.35,
					"y": 0.2602888007370219,
					"scale": 0.15,
					"angle": 0,
					"img": "character/dachshund/neutral.png"
				},
				{
					"x": 0.4,
					"y": 0.75,
					"scale": 0.2,
					"angle": 0,
					"img": "character/beagle/neutral.png"
				}
			]
		},
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
		]
	},
	"85940": {
		"id": "85940",
		"label": "Egg Hatching 2",
		"text": "The cracks begin to spread!",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.4681562441308301,
					"scale": 0.95,
					"angle": 0,
					"img": "character/egg/hatch2.png",
					"animation": "shake_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "2839",
				"label": "Next"
			}
		]
	},
	"86146": {
		"id": "86146",
		"label": "Flower Purchase",
		"text": "\"Sure,\" the possum says, \"I have sunflowers, lilacs, and daffodils in stock. Which will it be?\" You look them over hard.",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.2,
					"y": 0.45,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/sunflowers.png"
				},
				{
					"x": 0.45,
					"y": 0.45,
					"scale": 0.6,
					"angle": 0,
					"img": "prop/lilac.png"
				},
				{
					"x": 0.75,
					"y": 0.45,
					"scale": 0.5,
					"angle": 0,
					"img": "prop/daffodil.png"
				}
			]
		},
		"actions": [
			{
				"dest": "91030",
				"label": "Sunflowers",
				"addsFlags": [
					"hasSunflowers",
					"hasFlower"
				]
			},
			{
				"dest": "22555",
				"label": "Lilac",
				"addsFlags": [
					"hasLilac",
					"hasFlower"
				]
			},
			{
				"dest": "56065",
				"label": "Daffodil",
				"addsFlags": [
					"hasDaffodil",
					"hasFlower"
				]
			}
		]
	},
	"87223": {
		"id": "87223",
		"label": "Hole travel",
		"text": "You follow the rats through the hole!",
		"scene": {
			"bg": "bg/gray.png",
			"actors": [
				{
					"x": 0.495,
					"y": 0.54,
					"scale": 0.985,
					"angle": 0,
					"img": "character/rat/rat_in_tunnel.png"
				}
			]
		},
		"actions": [
			{
				"dest": "95982",
				"label": "Next"
			}
		]
	},
	"87790": {
		"id": "87790",
		"label": "resting in nest",
		"text": "You settle into the nest with your egg and take a short nap. ",
		"scene": {
			"bg": "bg/canopy.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.55,
					"scale": 0.6,
					"angle": 0,
					"img": "setting/nest.png"
				},
				{
					"x": 0.2,
					"y": 0.4,
					"scale": 0.25,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.35,
					"y": 0.45,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/medium.png"
				}
			]
		},
		"actions": [
			{
				"dest": "48059",
				"label": "inspect egg"
			},
			{
				"dest": "90619",
				"label": "climb down tree"
			}
		]
	},
	"87811": {
		"id": "87811",
		"label": "Playing with jaguar",
		"text": "The jaguar is really just kind of a large house cat- you play with it and have a nice time.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.7,
					"y": 0.5,
					"scale": 0.9,
					"angle": 0,
					"img": "character/jaguar/playing.png"
				},
				{
					"x": 0.25,
					"y": 0.7,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/happy.png"
				},
				{
					"x": 0.35,
					"y": 0.9,
					"scale": 0.1,
					"angle": 0,
					"img": "character/egg/neutral.png"
				}
			]
		},
		"actions": [
			{
				"dest": "57590",
				"label": "Next"
			}
		]
	},
	"90619": {
		"id": "90619",
		"label": "Jungle Hub",
		"text": "You wander the jungle and wonder where you should go.",
		"scene": {
			"bg": "bg/jungle.png",
			"actors": [
				{
					"x": 0.4,
					"y": 0.6,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/bindle.png"
				}
			]
		},
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
		]
	},
	"91030": {
		"id": "91030",
		"label": "Sunflower sneeze",
		"text": "You take the sunflowers. The possum doesn't seem to care about you paying so you start to head out the door. All of a sudden, your nose tickles and you sneeze! Your egg goes flying!",
		"scene": {
			"bg": "bg/flower-shop.png",
			"actors": [
				{
					"x": 0.25,
					"y": 0.65,
					"scale": 0.5,
					"angle": 0,
					"img": "character/parrot/sneeze.png",
					"animation": "shake_slow"
				},
				{
					"x": 0.5,
					"y": 0.65,
					"scale": 0.2,
					"angle": 0,
					"img": "prop/pollenFlower1.png",
					"animation": "spin_slow"
				},
				{
					"x": 0.75,
					"y": 0.7,
					"scale": 0.25,
					"angle": 0,
					"img": "prop/pollenFlower2.png",
					"animation": "spin_slow"
				},
				{
					"x": 0.55,
					"y": 0.48,
					"scale": 0.1,
					"angle": 1.01,
					"img": "character/egg/neutral3.png",
					"animation": "spin_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "43130",
				"label": "Oh no!"
			}
		]
	},
	"91471": {
		"id": "91471",
		"label": "Bear shakes martini",
		"text": "\"Coming right up!\" the strange panda says as he works furiously to make it. ",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.75,
					"scale": 0.45,
					"angle": 0,
					"img": "character/parrot/in-transit.png",
					"animation": "still"
				},
				{
					"x": 0.55,
					"y": 0.8,
					"scale": 0.5,
					"angle": 0,
					"img": "setting/barCounter.png",
					"animation": "hop_fast"
				},
				{
					"x": 0.7,
					"y": 0.35,
					"scale": 0.5,
					"angle": 0,
					"img": "character/bear/shaking.png",
					"animation": "hop_fast"
				}
			]
		},
		"actions": [
			{
				"dest": "58259",
				"label": "Next"
			}
		]
	},
	"91498": {
		"id": "91498",
		"label": "Find sunglasses",
		"text": "You found a pair of sunglasses in the bottom of the fountain! You wear them briefly and then put them inside of your feathers to save for later.",
		"scene": {
			"bg": "bg/city.png",
			"actors": [
				{
					"x": 0.505,
					"y": 0.5,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/city_fountain.png",
					"animation": "still"
				},
				{
					"x": 0.255,
					"y": 0.615,
					"scale": 0.315,
					"angle": 0,
					"img": "character/parrot/cool.png"
				},
				{
					"x": 0.405,
					"y": 0.75,
					"scale": 0.18,
					"angle": 0,
					"img": "text/soCool.png"
				}
			]
		},
		"actions": [
			{
				"dest": "13631",
				"label": "Wander city some more"
			}
		]
	},
	"94709": {
		"id": "94709",
		"label": "Bear offers drinks",
		"text": "\"That's great!\" the strange panda says. \"Would you like a martini or a cosmopolitan?\" ",
		"scene": {
			"bg": "bg/bar.png",
			"actors": [
				{
					"x": 0.1,
					"y": 0.7301802155435473,
					"scale": 0.45,
					"angle": 0,
					"img": "character/parrot/in-transit.png"
				},
				{
					"x": 0.7,
					"y": 0.25,
					"scale": 0.5,
					"angle": 0,
					"img": "character/bear/neutral.png"
				},
				{
					"x": 0.55,
					"y": 0.7115674718410626,
					"scale": 0.65,
					"angle": 0,
					"img": "setting/barCounter.png",
					"animation": "still"
				}
			]
		},
		"actions": [
			{
				"label": "Martini",
				"dest": "91471"
			},
			{
				"label": "Cosmopolitan",
				"dest": "46692"
			}
		]
	},
	"95956": {
		"id": "95956",
		"label": "Gift Hamster",
		"text": "\"I have something for you!\" you say as you present the beagle's dog bone gift to the hamster. It almost makes you laugh cause she's so much smaller than the bone. She squeals with excitement. \"I love things! They aren't really part of my natural diet but that doesn't matter to me. For your generosity, I have a gift for YOU!\"",
		"scene": {
			"bg": "bg/shop.png",
			"actors": [
				{
					"x": 0.5,
					"y": 0.5682735794913,
					"scale": 0.45,
					"angle": 0,
					"img": "character/hamster/neutral.png"
				},
				{
					"x": 0.5,
					"y": 0.6183196847164483,
					"scale": 0.9,
					"angle": 0.31,
					"img": "prop/bonePresent.png"
				}
			]
		},
		"actions": [
			{
				"dest": "23991",
				"label": "accept gift",
				"addsFlags": [
					"youHaveKeycard"
				]
			}
		]
	},
	"95982": {
		"id": "95982",
		"label": "New Screen",
		"text": "You arrive in a sewer system tunnel! You hear jungle sounds from the other end and there's only one way to go.",
		"scene": {
			"bg": "bg/gray.png",
			"actors": [
				{
					"x": 0.55,
					"y": 0.57,
					"scale": 1.05,
					"angle": 0,
					"img": "setting/sewer_system_tunnel.png",
					"animation": "still"
				},
				{
					"x": 0.65,
					"y": 0.7069580646524997,
					"scale": 0.15,
					"angle": 0.04,
					"img": "character/rat/rat_1.png",
					"flipped": false,
					"animation": "hop_slow"
				},
				{
					"x": 0.54,
					"y": 0.385,
					"scale": 0.1,
					"angle": 0,
					"img": "character/rat/rat_1.png",
					"flipped": true,
					"animation": "shake_slow"
				},
				{
					"x": 0.66,
					"y": 0.84,
					"scale": 0.18,
					"angle": 0,
					"img": "character/rat/rat_2.png",
					"animation": "shake_slow"
				},
				{
					"x": 0.355,
					"y": 0.7559195178358672,
					"scale": 0.145,
					"angle": 0,
					"img": "character/rat/rat_2.png",
					"flipped": true
				},
				{
					"x": 0.415,
					"y": 0.53,
					"scale": 0.15,
					"angle": 0,
					"img": "character/rat/rat_2.png",
					"flipped": true
				},
				{
					"x": 0.31,
					"y": 0.585,
					"scale": 0.155,
					"angle": 0,
					"img": "character/rat/rat_3.png"
				},
				{
					"x": 0.67,
					"y": 0.35,
					"scale": 0.1,
					"angle": -0.92,
					"img": "character/rat/rat_3.png",
					"flipped": false
				},
				{
					"x": 0.4,
					"y": 0.87,
					"scale": 0.22,
					"angle": 0,
					"img": "character/parrot/bindle.png"
				}
			]
		},
		"actions": [
			{
				"dest": "90619",
				"label": "Follow the tunnel"
			}
		]
	}
};