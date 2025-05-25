<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import type { StoryNode } from '../game/story-node';
import SceneDisplay from './SceneDisplay.vue';
import SceneEditor from './SceneEditor.vue';
import type { Scene } from '../game/scene';
import { ActionUtil, type Action } from '../game/action';
import ActionEditor from './ActionEditor.vue';
import type { Tree } from '../game/tree-type';

const props = defineProps<{
    node: StoryNode
    setNode: (newNode: StoryNode) => void,
    tree: Tree,
}>();

const text: Ref<string> = ref(props.node.text);
watch(text, () => {
    props.setNode({
        ...props.node,
        text: text.value,
    });
})

const label: Ref<string> = ref(props.node.label);
watch(label, () => {
    props.setNode({
        ...props.node,
        label: label.value,
    });
})

const setScene = (newScene: Scene) => {
    props.setNode({
        ...props.node,
        scene: newScene,
    });
};

const setAction = (i: number, newAction: Action) => {
    props.node.actions[i] = newAction;
    props.setNode({ ...props.node });
};

const addAction = () => {
    props.setNode({
        ...props.node,
        actions: [...props.node.actions, ActionUtil.empty()],
    })
};

const editingScene = ref(false);
</script>

<template>
    <div v-if="!editingScene">
        <h2>Edit Story Node</h2>
        <sub style="float: right">id: {{ node.id }}</sub>
        <p style="background-color: #eee; padding: 10px; margin: 5px">
            Label: <input v-model="label" />
            <br>
            <sub>(the user does not see this! it's just for finding/linking story nodes as a developer!!)</sub>
        </p>
        <p style="display: inline-flex; gap: 10px">
            <span style="width: 60vw; padding: 10px; background-color: #eee">
                Narration:
                <textarea v-model="text" rows="10" />
            </span>
            <button @click="editingScene = true" style="width: 25vw">
                Click to edit scene.
                <div style="display: block">
                    <SceneDisplay :scene="node.scene" />
                </div>
            </button>
        </p>

        <br>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px">
            <ActionEditor v-for="(action, i) in node.actions" :action="action"
                :set-action="(newAction) => setAction(i, newAction)" :tree="props.tree"
                style="background-color: #eee; padding: 5px; margin: 5px" />
            <button @click="addAction">+ New Action</button>
        </div>
    </div>
    <div v-else>
        <button @click="editingScene = false">Back to editing Node</button>
        <SceneEditor :scene="node.scene" :set-scene="setScene" />
    </div>
    <div style="height: 200px"></div>
</template>