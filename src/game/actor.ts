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

export const animationStyles = ["default", "bob"];
export type AnimationStyle = (typeof animationStyles)[number];

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
        switch (actor.animation) {
            case undefined:
                const period = 500;
                const osc = Date.now() % period < period / 2 ? -0.1 : 0.1;
                return {
                    ...actor,
                    angle: (actor.angle ?? 0) + osc,
                };
            case "spin":
                return {
                    ...actor,
                    angle: 6.283 * Date.now() / 1000,
                };
        }
        return actor;
    }
}