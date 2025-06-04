<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { type FlaggedText, type Screen } from '../game/screen';
import SceneEditor from './SceneEditor.vue';
import type { Scene } from '../game/scene';
import { ActionUtil, type Action } from '../game/action';
import ActionEditor from './ActionEditor.vue';
import { type ScreenId, type Tree } from '../game/tree-type';
import SaveButton from './SaveButton.vue';
import FlagListInput from './FlagListInput.vue';
import ScreenEditorPreview from './ScreenEditorPreview.vue';
import VariantsListInput from './VariantsListInput.vue';

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

const addedFlags: Ref<string[]> = ref(props.screen.addsFlags ?? []);
watch(addedFlags, () => {
    props.saveScreen({
        ...props.screen,
        addsFlags: addedFlags.value,
    });
})

const textVariants: Ref<FlaggedText[]> = ref(props.screen.textVariants ?? []);
watch(textVariants, () => {
    props.saveScreen({
        ...props.screen,
        textVariants: textVariants.value,
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

const switchActions = (index: number, offset: number) => {
    if (index + offset < 0 || index + offset >= props.screen.actions.length) {
        alert("Can't do that.");
        return;
    }
    const newActions = [...props.screen.actions];
    newActions[index] = props.screen.actions[index + offset]
    newActions[index + offset] = props.screen.actions[index];
    props.saveScreen({
        ...props.screen,
        actions: newActions,
    });
};

const addAction = () => {
    props.saveScreen({
        ...props.screen,
        actions: [...props.screen.actions, ActionUtil.empty()],
    });
};

</script>

<template>
    <div style="position: fixed; right: 20px; top: 20px; width: 36vw; height: 100%; overflow: scroll">
        <ScreenEditorPreview :go-to-screen="goToScreen" :tree="tree" :screen="screen" />
    </div>
    <div style="width: 60vw">
        <p>
            <button @click="() => props.goBack()">Back to Global Editor</button>
            &nbsp;
            <SaveButton :tree="tree" />
        </p>

        <p>
            Screen Label&nbsp;<input v-model="label" /> (never shown to user)
            <br>
        </p>
        <p>
        <div class="flag-box">
            Sets Flags
            <FlagListInput :tree="tree" :flags="addedFlags" :set-flags="(newFlags) => addedFlags = newFlags" />
        </div>
        </p>
        <p>
            <span style="width: 60vw">
                Narration
                <textarea v-model="text" rows="3" />
            </span>
            Narration Variants
            <VariantsListInput :tree="tree" :variants="textVariants"
                :set-variants="(newVariants) => textVariants = newVariants" />
        </p>

        <p>
            <SceneEditor :tree="tree" :scene="screen.scene" :set-scene="setScene" />
        </p>

        <p>
            Endgame <select v-model="endgame">
                <option :value="undefined">none</option>
                <option value="win">Win</option>
                <option value="lose">Lose</option>
            </select>
        </p>

        <p v-if="endgame === undefined">
            Edit Actions
            <span>
                <ActionEditor v-for="(action, i) in screen.actions" :action="action"
                    :set-action="(newAction) => setAction(i, newAction)" :remove-action="removeAction"
                    :switch-actions="switchActions" :tree="tree"
                    style="background-color: #eee; padding: 5px; margin: 5px" :index="i" :saveScreen="saveScreen"
                    :go-to-screen="props.goToScreen" :screen="props.screen" />
                <button @click="addAction">+ New Option</button>
            </span>
        </p>
        <div style="height: 200px"></div>
    </div>
</template>

<style scoped>
p {
    background-color: #eee;
    padding: 10px;
    margin: 5px;
}
</style>