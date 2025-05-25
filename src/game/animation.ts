
export type Animation = {
    period: number,
    magnitude: number,
    curve: AnimationCurve,
    style: AnimationStyle,
};

export type AnimationCurve = "smooth" | "square";
export type AnimationStyle = "x" | "y" | "angle" | "scale";

export class AnimationUtil {
    static getValue(animation: Animation) {
        const time = Date.now();
        const period = animation.period;

        var value = 0;
        switch (animation.curve) {
            case "smooth": return Math.sin(time * 6.283 / period,);
            case "square": return time % period < period / 2 ? 0 : 1;
        }
        return value * animation.magnitude;
    }
}