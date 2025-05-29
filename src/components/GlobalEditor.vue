<script setup lang="ts">
import { ref, type Ref } from 'vue';

import { ScreenUtil, type Screen } from '../game/screen';
import { tree as oldTree } from '../game/tree';
import SaveButton from './SaveButton.vue';
import ScreenEditor from './ScreenEditor.vue';
import ScreenSymbols from './ScreenSymbols.vue';
import SceneDisplay from './SceneDisplay.vue';
import GraphButton from './GraphButton.vue';

const tree: Ref<{ [key: string]: Screen }> = ref(oldTree);

const selected: Ref<string | number | undefined> = ref(undefined);
const saveScreen = (newNode: Screen) => {
    tree.value[newNode.id] = newNode;
    tree.value = { ...tree.value };
};

const selectIndex = (index?: string | number) => {
    selected.value = index;
    tree.value = { ...tree.value };
    setTimeout(() => window.scrollTo(0, 0), 30);
};

const addNode = () => {
    const newNode = ScreenUtil.empty();
    if (Object.values(tree.value).length === 0) newNode.id = 0;
    tree.value = {
        ...tree.value,
        [newNode.id]: newNode,
    };
};

const removeScene = (index: string | number) => {
    delete tree.value[index];
    tree.value = { ...tree.value };
};
</script>

<template>
    <div v-if="selected !== undefined">
        <ScreenEditor :key="selected" :screen="tree[selected]" :saveScreen="saveScreen" :tree="tree"
            :go-back="() => selectIndex(undefined)" :go-to-screen="(index) => selectIndex(index)" />
    </div>
    <div v-else>
        <div>
            <SaveButton :tree="tree" />
            &nbsp;
            <GraphButton :tree="tree" />
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 5px">
            <div v-for="(node, i) in tree" style="background-color: #eee; padding: 5px">
                <div style="display: flex">
                    <ScreenSymbols :screen="node" />
                    {{ node.label }}
                    <button style="background-color: red; height: 2em" @click="() => removeScene(i)">X</button>
                </div>
                <button @click="() => selectIndex(i)" style="width: 100%">
                    <SceneDisplay :scene="node.scene" :animate="false" :low-res="true" />
                </button>
            </div>
            <button @click="addNode">+ New Scene</button>
        </div>
    </div>
</template>