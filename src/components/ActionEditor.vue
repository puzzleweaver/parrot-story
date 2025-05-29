<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';
import type { Action } from '../game/action';
import type { Tree, ScreenId } from '../game/tree-type';
import { ScreenUtil, type Screen } from '../game/screen';
import SceneDisplay from './SceneDisplay.vue';

const props = defineProps<{
    index: number,
    action: Action,
    setAction: (newAction: Action) => void,
    removeAction: (index: number) => void,
    saveScreen: (screen: Screen) => void,
    goToScreen: (id: ScreenId) => void,
    tree: Tree,
    screen: Screen,
}>();

const setFromProps = () => {
    label.value = props.action.label;
    addedFlags.value = props.action.addsFlags?.join(", ") ?? "";
    neededFlags.value = props.action.needsFlags?.join(", ") ?? "";
    dest.value = props.action.dest;
};
watch(props, setFromProps);

const label: Ref<string> = ref(props.action.label);
watch(label, () => {
    props.setAction({
        ...props.action,
        label: label.value,
    });
});

const addedFlags: Ref<string> = ref(props.action.addsFlags?.join(", ") ?? "");
watch(addedFlags, () => {
    try {
        var newFlags: string[] | undefined = addedFlags.value.split(",").map(flag => flag.trim());
        if (newFlags.length === 0) newFlags = undefined;
        props.setAction({
            ...props.action,
            addsFlags: newFlags,
        })
    } catch {
        // partial input, ignore.
    }
});

const neededFlags: Ref<string> = ref(props.action.needsFlags?.join(", ") ?? "");
watch(neededFlags, () => {
    try {
        var newFlags: string[] | undefined = neededFlags.value.split(",").map(flag => flag.trim());
        if (newFlags.length === 0) newFlags = undefined;
        props.setAction({
            ...props.action,
            needsFlags: newFlags,
        });
    } catch {
        // partial input, ignore.
    }
});

const dest: Ref<ScreenId | undefined> = ref(props.action.dest);
watch(dest, () => {
    props.setAction({
        ...props.action,
        dest: dest.value,
    });
});

const toDest = () => {
    const destId = props.action.dest;
    if (destId === undefined) {
        alert("UH OH!");
        return;
    }
    props.goToScreen(destId);
};

const linkNewScreen = () => {
    const newScreen = ScreenUtil.empty();
    newScreen.label = "New Screen";
    props.saveScreen(newScreen);
    setTimeout(() => dest.value = newScreen.id, 100);
};

const linkDuplicate = () => {
    const newScreen: Screen = {
        ...props.screen,
        id: ScreenUtil.newId(),
        text: "",
        actions: [],
    };
    const words = newScreen.label.split(" ");
    const lastWord = words[words.length - 1];
    const num = parseInt(lastWord);
    if (isNaN(num)) newScreen.label += " 2";
    else newScreen.label = [...words.slice(0, words.length - 1), num + 1].join(" ");
    props.saveScreen(newScreen);
    setTimeout(() => dest.value = newScreen.id, 100);
};

const nodeIds = computed(() => Object.keys(props.tree));
</script>

<template>
    <div style="margin: 5px; padding: 5px; border: 1px solid black">
        <div style="display: flex">
            {{ index + 1 }}
            <input v-model="label" style="display: inline" />
            <button @click="() => props.removeAction(props.index)" style="float: right">X</button>
        </div>

        Outcome
        <select v-model="dest">
            <option v-for="nodeId in nodeIds" :value="nodeId">
                {{ tree[nodeId].label }}
            </option>
            <option :value="undefined">
                unchosen (!)
            </option>
        </select>
        <button style="float: right" @click="dest = undefined"> reset </button>
        <div v-if="dest === undefined">
            <button @click="linkNewScreen">
                Link to New Empty Screen
            </button>
            <button @click="linkDuplicate">
                Link to Duplicate Screen
            </button>
        </div>
        <button v-else @click="toDest()">
            Screen "{{ tree[dest].label }}"
            <SceneDisplay :scene="tree[dest].scene" :animate="false" :low-res="true" />
        </button>

        Flags
        <div style="background-color: #ddd; text-align: center">
            <div style="display: flex">
                Sets: <input v-model="addedFlags" />
            </div>
            <div style="display: flex">
                Needs: <input v-model="neededFlags" />
            </div>
            <!-- Adds {{ props.action.addsFlags }}<br>
            Needs {{ props.action.needsFlags }} -->
        </div>

    </div>
</template>