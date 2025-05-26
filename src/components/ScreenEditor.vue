<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { type Screen } from '../game/screen';
import SceneEditor from './SceneEditor.vue';
import type { Scene } from '../game/scene';
import { ActionUtil, type Action } from '../game/action';
import ActionEditor from './ActionEditor.vue';
import { type ScreenId, type Tree } from '../game/tree-type';
import SaveButton from './SaveButton.vue';
import IncomingOptions from './IncomingOptions.vue';
import ScreenSymbols from './ScreenSymbols.vue';

const props = defineProps<{
    screen: Screen
    saveScreen: (newNode: Screen) => void,
    goToScreen: (id: ScreenId) => void,
    tree: Tree,
    goBack: () => void,
}>();

const text: Ref<string> = ref(props.screen.text);
watch(text, () => {
    props.saveScreen({
        ...props.screen,
        text: text.value,
    });
})

const label: Ref<string> = ref(props.screen.label);
watch(label, () => {
    props.saveScreen({
        ...props.screen,
        label: label.value,
    });
})


const endgame: Ref<"win" | "lose" | undefined> = ref(props.screen.endgame);
watch(endgame, () => {
    props.saveScreen({
        ...props.screen,
        endgame: endgame.value,
    });
})

const setScene = (newScene: Scene) => {
    props.saveScreen({
        ...props.screen,
        scene: newScene,
    });
};

const setAction = (i: number, newAction: Action) => {
    props.screen.actions[i] = newAction;
    props.saveScreen({
        ...props.screen,
        actions: [...props.screen.actions],
    });
};

const removeAction = (index: number) => {
    const newActions = [];
    for (var i = 0; i < props.screen.actions.length; i++) {
        if (i === index) continue;
        newActions.push(props.screen.actions[i]);
    }
    props.saveScreen({
        ...props.screen,
        actions: newActions,
    });
};

const addAction = () => {
    props.saveScreen({
        ...props.screen,
        actions: [...props.screen.actions, ActionUtil.empty()],
    })
};

</script>

<template>
    <p style="width: 60vw"><button @click="() => props.goBack()">Back to Global Editor</button>
        &nbsp;
        <SaveButton :tree="tree" />
        <sub style="float: right">screen id: {{ screen.id }}...</sub>
    </p>

    <p style="background-color: #eee; padding: 10px; margin: 5px; width: 60vw">
        <IncomingOptions :screen="props.screen" :tree="tree" :go-to-screen="props.goToScreen" />
    </p>

    <p style="background-color: #eee; padding: 10px; margin: 5px; width: 60vw">
        <ScreenSymbols :screen="props.screen" />
        Label&nbsp;<input v-model="label" />
        <br>
        <sub>(the user does not see this! it's just for finding/linking story nodes as a developer!!)</sub>
    </p>
    <p>
        Endgame <select v-model="endgame">
            <option :value="undefined">none</option>
            <option value="win">Win</option>
            <option value="lose">Lose</option>
        </select>
    </p>
    <p style="display: inline-flex; gap: 10px">
        <span style="width: 60vw; padding: 10px; background-color: #eee">
            Narration:
            <textarea v-model="text" rows="10" />
        </span>
    </p>

    <SceneEditor :scene="screen.scene" :set-scene="setScene" />

    <br>

    Edit Options
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px">
        <ActionEditor v-for="(action, i) in screen.actions" :action="action"
            :set-action="(newAction) => setAction(i, newAction)" :remove-action="removeAction" :tree="tree"
            style="background-color: #eee; padding: 5px; margin: 5px" :index="i" :saveScreen="saveScreen"
            :go-to-screen="props.goToScreen" />
        <button @click="addAction">+ New Option</button>
    </div>
    <div style="height: 200px"></div>
</template>