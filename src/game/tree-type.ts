import { ScreenUtil, type Screen } from "./screen";
import { tree } from "./tree";

export type ScreenId = number | string;
export type Tree = { [id: ScreenId]: Screen };

// Gross Shit
const replacer = (_key: any, value: any) =>
    value instanceof Object && !(value instanceof Array) ?
        Object.keys(value)
            .sort()
            .reduce((sorted: any, key: any) => {
                sorted[key] = value[key];
                return sorted
            }, {}) :
        value;

export class TreeUtil {
    static getTreeText(tree: Tree) {
        const json = JSON.stringify(tree, replacer, 4);
        // const json = JSON.stringify(tree, null, 4);
        const content: string = `
import type { Tree } from "./tree-type";
export const tree: Tree = ${json};
`;
        return content;
    }
    static getDownloadLink(content: string) {
        const blob = new Blob([content], { type: "text/plain" });
        return URL.createObjectURL(blob);
    }

    static getAllFlags(tree: Tree) {
        var ret: string[] = [];
        for (const screen of Object.values(tree)) {
            ret = [...ret, ...ScreenUtil.getAllFlags(screen)];
        }
        return [...new Set(ret)];
    }
}

export const screen0 = tree[0];