import type { Screen } from "./screen";
import { tree } from "./tree";

export type ScreenId = number | string;
export type Tree = { [id: ScreenId]: Screen };

export class TreeUtil {
    static getDownloadLink(tree: Tree) {
        // const json = JSON.stringify(tree.value);
        const json = JSON.stringify(tree);
        const file = `
            export const tree: Tree = ${json};
        `;
        return `data:text/plain,${file}`;
    }

}

export const screen0 = tree[0];