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

export const animationStyles = ["default", "spin", "bob"];
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

    static indexColor(index: number): string {
        return [
            "red",
            "green",
            "blue",
            "magenta",
            "yellow",
            "cyan",
            "brown",
            "white",
        ][index];
    }
}