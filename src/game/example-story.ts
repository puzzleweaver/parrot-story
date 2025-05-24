import { Actor } from "./actor";
import { Scene } from "./scene";
import { StoryNode } from "./story-node";

export const scenes = {
    "Test scenee?": new Scene({
        label: "Test scenee?",
        bg: "bg/jungle.png",
        actors: [
            new Actor({
                x: 0.65,
                y: 0.6692176096824687,
                img: "prop/pollenFlower1.png",
                scale: 0.35,
                angle: 0,
            }),
            new Actor({
                x: 0.85,
                y: 0.38533063022109204,
                img: "prop/pollenFlower2.png",
                scale: 0.5,
                angle: 0,
            }),
        ],
    }),
};

export const exampleNode = new StoryNode({
    scene: scenes["Test scenee?"],
    text: "This is hard :((",
    actions: [],
});