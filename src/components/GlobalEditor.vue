<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import NodeDisplay from './NodeDisplay.vue';
import NodeEditor from './NodeEditor.vue';

import { GameState } from '../game/game';
import { StoryNodeUtil, type StoryNode } from '../game/story-node';
import { tree as oldTree } from '../game/tree';

const tree: Ref<{ [key: string]: StoryNode }> = ref(oldTree);

const selected: Ref<string | number | undefined> = ref(undefined);
const saveSelectedNode = (newNode: StoryNode) => {
    tree.value[selected.value!] = newNode;
    tree.value = { ...tree.value };
};

const selectIndex = (index?: string | number) => {
    selected.value = index;
};

const addNode = () => {
    const newNode = StoryNodeUtil.empty();
    tree.value = {
        ...tree.value,
        [newNode.id]: newNode,
    };
};

const removeScene = (index: string | number) => {
    delete tree.value[index];
    tree.value = { ...tree.value };
};

const downloadLink = computed(() => {
    // const json = JSON.stringify(tree.value);
    const json = JSON.stringify(tree.value, (_, value) => {
        if (!isNaN(value)) value = Number(value);
        return value;
    });
    const file = ` 
        import type { StoryNode } from "./story-node";
        import type { Tree } from "./tree-type";
        export const nodeId0 = "";
        export const tree: Tree = ${json};
    `;
    return `data:text/plain,${file}`;
});
</script>

<template>
    <div v-if="selected !== undefined">
        <button @click="selectIndex(undefined)">Back to Global Editor</button>
        <NodeEditor :node="tree[selected]" :set-node="saveSelectedNode" :tree="tree" />
    </div>
    <div v-else>
        <div>
            <input placeholder="search? (todo)" />
            <a :href="downloadLink" style="float: right" download="tree.ts"><button>export &#x2913;</button></a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 5px">
            <div v-for="(node, i) in tree" style="background-color: #eee; padding: 5px">
                <div>
                    {{ node.label }}
                    <button style="background-color: red; float: right" @click="() => removeScene(i)">X</button>
                </div>
                <button class="red" @click="() => selectIndex(i)">
                    <NodeDisplay :game-state="new GameState({ node })" :do-action="() => { }" />
                </button>
            </div>
            <button @click="addNode">+ New Scene</button>
        </div>
    </div>
</template>