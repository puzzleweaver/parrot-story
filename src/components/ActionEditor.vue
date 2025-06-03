<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';
import type { Action } from '../game/action';
import type { Tree, ScreenId } from '../game/tree-type';
import { ScreenUtil, type Screen } from '../game/screen';
import SceneDisplay from './SceneDisplay.vue';
import FlagListInput from './FlagListInput.vue';

const props = defineProps<{
    index: number,
    action: Action,
    setAction: (newAction: Action) => void,
    removeAction: (index: number) => void,
    switchActions: (index: number, to: number) => void,
    saveScreen: (screen: Screen) => void,
    goToScreen: (id: ScreenId) => void,
    tree: Tree,
    screen: Screen,
}>();

const setFromProps = () => {
    label.value = props.action.label;
    addedFlags.value = props.action.addsFlags ?? [];
    neededFlags.value = props.action.needsFlags ?? [];
    dest.value = props.action.dest;
    destName.value = getDestName();
};
watch(props, setFromProps);

const label: Ref<string> = ref(props.action.label);
watch(label, () => {
    props.setAction({
        ...props.action,
        label: label.value,
    });
});

const addedFlags: Ref<string[]> = ref(props.action.addsFlags ?? []);
watch(addedFlags, () => {
    props.setAction({
        ...props.action,
        addsFlags: addedFlags.value,
    });
});

const neededFlags: Ref<string[]> = ref(props.action.needsFlags ?? []);
watch(neededFlags, () => {
    props.setAction({
        ...props.action,
        needsFlags: neededFlags.value,
    });
});

const dest: Ref<ScreenId | undefined> = ref(props.action.dest);
watch(dest, () => {
    props.setAction({
        ...props.action,
        dest: dest.value,
    });
});

const getDestName = () => {
    const id = props.action.dest;
    if (id === undefined) return "";
    return props.tree[id]?.label ?? "";
}
const destName: Ref<string> = ref(getDestName());
watch(destName, () => {
    for (const id of Object.keys(screenNamesById.value)) {
        if (screenNamesById.value[id] === destName.value) {
            dest.value = id;
            return;
        }
    }
    dest.value = undefined;
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
    newScreen.label = destName.value;
    props.saveScreen(newScreen);
    setTimeout(() => dest.value = newScreen.id, 100);
};

const linkDuplicate = () => {
    const currentDestScreen = props.tree[dest.value ?? ""];
    if (dest.value === undefined || currentDestScreen === undefined) {
        alert("Broken.");
        return;
    }
    const newScreen: Screen = {
        ...currentDestScreen,
        id: ScreenUtil.newId(),
        text: "",
        actions: [],
    };
    newScreen.label += " (copy)"
    props.saveScreen(newScreen);
    setTimeout(() => dest.value = newScreen.id, 100);
};

const screenNamesById = computed(() => {
    const ret: { [id: string]: string } = {};
    for (const node of Object.values(props.tree)) {
        ret[node.id] = node.label;
    }
    return ret;
});
</script>

<template>
    <div style="border: 1px solid black; width: 20vw">

        <div style="text-align: center">
            {{ index + 1 }}
            <button @click="() => props.switchActions(index, -1)">&lt;</button>
            &nbsp;
            <button @click="() => props.removeAction(index)">X</button>
            &nbsp;
            <button @click="() => props.switchActions(index, 1)">&gt;</button>
        </div>

        <input v-model="label" style="display: inline" />
        Outcome
        <div style="display: flex; flex-direction: row; gap: 10px   ">

            <input v-model="destName" list="screen-names" placeholder="enter existing screen label..." />
            <datalist id="screen-names">
                <option v-for="name in Object.values(screenNamesById)" :value="name">
                    {{ name }}
                </option>
                <option :value="undefined">
                    unchosen (!)
                </option>
            </datalist>
        </div>
        <div v-if="dest === undefined">
            <button @click="linkNewScreen" style="width: 100%">
                Link to New Empty Screen
            </button>
        </div>
        <div v-else>
            <button @click="toDest()" style="width: 100%">
                Screen "{{ tree[dest].label }}"
                <SceneDisplay :scene="tree[dest].scene" :animate="false" :low-res="true" />
            </button>
            <button style="width: 100%" @click="linkDuplicate">Duplicate this Screen</button>
        </div>

        <div style="background-color: #ddd; margin: 5px">
            Sets Flags
            <FlagListInput :tree="tree" :flags="addedFlags" :set-flags="(newFlags) => addedFlags = newFlags" />
        </div>

        <div style="background-color: #ddd; margin: 5px">
            Needs Flags
            <FlagListInput :tree="tree" :flags="neededFlags" :set-flags="(newFlags) => neededFlags = newFlags" />
        </div>

    </div>
</template>