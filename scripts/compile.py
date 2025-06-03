
import json
from file import File

dirs = File.getDirectories("public/images")

def getWords(path):
    return path.split("/")[2:]

assetTree = {}
assetList = []
for directory in dirs:
    words = getWords(directory)
    # print(words)

    names = [
        getWords(file)[-1]
        for file in File.getNames(directory)
    ]

    cur = assetTree
    for word in words:
        if word not in cur:
            cur[word] = {}
        cur = cur[word]
    for name in names:
        if not File.exists(f"{directory}/{name}"):
            continue
        cleanedName = name.replace(".png", "").replace(".gif", "")
        src = "/".join(words + [name])
        try: 
            cur[cleanedName] = src
        except:
            print(f"issue putting {src} into tree as {cleanedName}... ({cur})")
        assetList.append(src)

treeJson = json.dumps(assetTree)
listJson = json.dumps(assetList)

fileContents = f"""
export const Assets = {treeJson};
export const AssetList: string[] = {listJson};
"""

File.writeText("src/game/generated_asset.ts", fileContents)
print("Updated src/game/generated_asset.ts.")