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
}>();

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
    dest.value = newScreen.id;
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
        <button v-if="dest === undefined" @click="linkNewScreen">
            or Create New Screen ->
        </button>
        <button v-else @click="toDest()">
            Screen "{{ tree[dest].label }}"
            <SceneDisplay :scene="tree[dest].scene" />
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