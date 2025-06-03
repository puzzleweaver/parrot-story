<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';

import { ScreenUtil, type Screen } from '../game/screen';
import { tree as oldTree } from '../game/tree';
import SaveButton from './SaveButton.vue';
import ScreenEditor from './ScreenEditor.vue';
import SceneDisplay from './SceneDisplay.vue';
import GraphButton from './GraphButton.vue';
import GlobalScreenWarnings from './GlobalScreenWarnings.vue';
import type { Tree } from '../game/tree-type';

const tree: Ref<{ [key: string]: Screen }> = ref(oldTree);

const selected: Ref<string | number | undefined> = ref(undefined);
const saveScreen = (newNode: Screen) => {
    tree.value[newNode.id] = newNode;
    tree.value = { ...tree.value };
};

const selectIndex = (index?: string | number) => {
    selected.value = index;
    setTimeout(() => window.scrollTo(0, 0), 30);
    searchTerm.value = "";
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

const searchTerm = ref("");
const filteredTree: ComputedRef<Tree> = computed(() => {
    return Object.keys(tree.value)
        .filter(
            (id) => tree.value[id].label.toLowerCase().includes(
                searchTerm.value.toLowerCase()
            ),
        )
        .reduce(
            (total, id) => ({
                ...total,
                [id]: tree.value[id],
            }),
            {},
        );
});

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
            &nbsp; <input v-model="searchTerm" />
        </div>
        <div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 10px">
            <div v-for="(node, id) in filteredTree" style="background-color: #eee; padding: 5px">
                <SceneDisplay :scene="node.scene" :animate="false" :low-res="true" />
                <button @click="() => selectIndex(id)">View</button>
                <button class="angry-button" style="width: 2em; float: right" @click="() => removeScene(id)">X</button>
                <div style="display: flex; color: black">
                    {{ node.label }}
                </div>
                <GlobalScreenWarnings :tree="tree" :screen="node" />
            </div>
            <button @click="addNode">+ New Scene</button>
        </div>
    </div>
</template>

<style scoped>
.sceneDisplayButton {
    width: 100%;
}

.angry-button {
    background-color: red;
    border-color: red;
}

.angry-button:hover {
    background-color: #f66;
    border-color: #f66;
}
</style>