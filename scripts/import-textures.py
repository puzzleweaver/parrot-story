import json
from typing import Callable
from file import File;

files = File.getNames("public/images")
def pathWords(file):
    return file.split("/")[2:]

def addToTree(tree: dict, file: str, getLeaf: Callable[[str], str]):
    current = tree
    words = pathWords(file)
    for word in words:
        # file
        if word == words[-1]:
            if word.split(".")[-1] == "png":
                current[word.replace(".png", "")] = getLeaf("/".join(words))
            break

        # folder
        if not word in current: current[word] = {}
        current = current[word]
def createTree(getLeaf: Callable[[str], str]):
    tree = {}
    for file in files:
        addToTree(tree, file, getLeaf)
    return tree

valueTree = createTree(lambda name: name)
typeTree = createTree(lambda _: "[T]")

def toTypescript(data):
    return json.dumps(data, indent=4)

source = f"""
export type AssetTree<T> = {toTypescript(typeTree).replace('"[T]"', 'T')};

export const assetTree: AssetTree<string> = {toTypescript(valueTree)};
"""

outpath = "src/pixi/pixi-assets.ts"
File.writeText(outpath, source)
print("-"*80 + f"\n{source}\n" + "-"*80 + f"\nWrote to '{outpath}'")
