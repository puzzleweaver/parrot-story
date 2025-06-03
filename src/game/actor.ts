import { Assets } from "./asset";

export type Actor = {
    x: number;
    y: number;
    img: string;
    scale: number;
    angle: number;
    animation?: AnimationStyle;
    flipped?: boolean;
};

const urlParams = new URLSearchParams(window.location.search);
const FREEZE = urlParams.get('freeze') !== null;
var unfreeze = false;
if (FREEZE) {
    document.addEventListener('keydown', (e) => {
        if (e.key === "p") unfreeze = true;
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === "p") unfreeze = false;
    });
}

export const animationStyles = [
    "still",
    undefined,
    "wobble_fast",
    "hop_slow",
    "hop_fast",
    "shake_slow",
    "shake_fast",
    "spin_slow",
    "spin_fast",
    "zoom_slow",
    "zoom_fast",
];
export type AnimationStyle = (typeof animationStyles)[number];

const getOsc = (period: number, amount: number): number => {
    return (Date.now() % period < period / 2 ? -0.5 : 0.5) * amount;
};

export class ActorUtil {
    static empty(): Actor {
        return {
            x: Math.random(),
            y: Math.random(),
            scale: 0.5,
            angle: 0.0,
            img: Assets.character.parrot["in-transit"],
        };
    }

    static animated(actor: Actor): Actor {
        if (FREEZE && !unfreeze) return actor;
        switch (actor.animation) {
            case undefined: // default "back and forth" rotation thing
                return {
                    ...actor,
                    angle: (actor.angle ?? 0) + getOsc(500, 0.1),
                };
            case "wobble_fast": // faster default
                return {
                    ...actor,
                    angle: (actor.angle ?? 0) + getOsc(159, 0.1),
                };
            case "still": return actor;
            case "hop_slow":
                return {
                    ...actor,
                    y: actor.y + getOsc(497, 0.02),
                };
            case "hop_fast":
                return {
                    ...actor,
                    y: actor.y + getOsc(157, 0.05),
                };
            case "shake_slow":
                return {
                    ...actor,
                    x: actor.x + getOsc(510, 0.02),
                };
            case "shake_fast":
                return {
                    ...actor,
                    x: actor.x + getOsc(160, 0.02),
                };
            case "zoom_slow":
                return {
                    ...actor,
                    scale: actor.scale * (1 + getOsc(510, 0.03)),
                };
            case "zoom_fast":
                return {
                    ...actor,
                    scale: actor.scale * (1 + getOsc(160, 0.03)),
                };
            case "spin_fast":
                return {
                    ...actor,
                    angle: (9 * Date.now() / 1000) % 6.283,
                };
            case "spin_slow":
                return {
                    ...actor,
                    angle: (1 * Date.now() / 1000) % 6.283,
                };
        }
        return actor;
    }
}