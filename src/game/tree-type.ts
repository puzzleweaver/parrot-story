import type { Screen } from "./screen";
import { tree } from "./tree";

export type ScreenId = number | string;
export type Tree = { [id: ScreenId]: Screen };

export class TreeUtil {
    static getDownloadLink(tree: Tree) {
        const json = JSON.stringify(tree, null, "\t");

        const file = `import type { Tree } from "./tree-type";
export const tree: Tree = ${json};`;

        return `data:text/plain,${file}`;
    }
}

export const screen0 = tree[0];