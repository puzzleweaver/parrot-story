import { Container, Graphics, Text } from "pixi.js";

// text wrap function. Regex magic from stack overflow lmao
const wrap = (text: string, maxLength: number): string => {
    const words = text.split(" ");
    const lines = [words[0]]
    var currentLine = 0;
    for (const word of words.slice(1)) {
        if (lines[currentLine].length + (word.length + 1) >= maxLength) {
            currentLine++;
            lines.push(word);
        } else {
            lines[currentLine] += " " + word;
        }
    }
    return lines.join("\n");
}
export class ParrotText extends Container {

    constructor({ label, x, y, width, height, wrapLength, onclick }: {
        label: string,
        x: number,
        y: number,
        width: number,
        height: number,
        onclick: undefined | (() => void),
        wrapLength: number,
    }) {
        super();

        label = wrap(label, wrapLength);
        const lineCount = label.split("\n").length;
        console.log(`line count ${lineCount} -> font size ${height / 2 / lineCount}`);

        const padding = 10, margin = 10;
        const text = new Text({
            text: label,
            style: {
                fontFamily: 'Arial',
                fontSize: height / 2 / lineCount,
                fill: 0x112233,
                align: 'center',
            }
        });
        text.anchor.set(0.5);
        text.position.set(x, y);
        text.scale.set(
            Math.min(
                (width - padding * 2 - margin * 2) / text.width,
                (height - padding * 2 - margin * 2) / text.height,
            ),
        );
        text.zIndex = 2;

        const rect = new Graphics();
        rect.strokeStyle = { width: 3, color: "#ffffffaa" };
        rect.roundRect(
            text.position.x - text.width / 2 - padding,
            text.position.y - text.height / 2 - padding,
            text.width + padding * 2,
            text.height + padding * 2,
            10,
        ).fill("#ffffff88").stroke();
        rect.zIndex = 1;
        if (onclick !== undefined) {
            rect.eventMode = 'static';
            rect.cursor = 'pointer';
            rect.on("mouseup", onclick);
        }

        this.addChild(rect);
        this.addChild(text);
    }

}