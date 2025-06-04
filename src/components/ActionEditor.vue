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
    <div class="row" style="gap: 5px; border: 1px solid black">
        <!-- arrows-->
        <span class="column" style="justify-content: center">
            <button @click="() => switchActions(index, -1)">&#x2191;</button>
            <button @click="() => switchActions(index, 1)">&#x2193;</button>
        </span>

        <span class="column">
            <span class="flag-box">
                Label <input v-model="label" style="display: inline" />
            </span>
            <div class="flag-box">
                Needs Flags
                <FlagListInput :tree="tree" :flags="neededFlags" :set-flags="(newFlags) => neededFlags = newFlags" />
            </div>
        </span>
        <span class="column">
            <div class="flag-box" style="display: flex; flex-direction: row; gap: 10px">

                <span>Outcome
                    <input v-model="destName" list="screen-names" placeholder="enter existing screen label..." />
                    <datalist id="screen-names">
                        <option v-for="name in Object.values(screenNamesById)" :value="name">
                            {{ name }}
                        </option>
                        <option :value="undefined">
                            unchosen (!)
                        </option>
                    </datalist>

                    <div v-if="dest === undefined" style="padding: 5px">
                        <button @click="linkNewScreen" style="width: 100%">
                            Link to New Empty Screen
                        </button>
                    </div>
                    <div v-else style="padding: 5px">
                        <button @click="toDest()"
                            style="display: inline-flex; flex-direction: row; width: 100%; text-align: center">
                            <SceneDisplay style="width: 4em" :scene="tree[dest].scene" :animate="false"
                                :low-res="true" />
                            Screen "{{ tree[dest].label }}"
                        </button>
                        <button style="width: 100%; " @click="linkDuplicate">Duplicate this Screen</button>
                    </div>
                </span>
            </div>
        </span>

    </div>
</template>