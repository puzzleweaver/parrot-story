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
        {{ index + 1 }} <input v-model="label" style="display: inline; width: 75%" />
        <button @click="() => props.removeAction(props.index)" style="float: right">X</button>
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
        <!-- <div style="display: inline-flex; align-items: center">
            Next Screen
            &nbsp;
            <input v-model="dest" list="dest-list" />
        </div>
        Goes to:
      <div style="width: 33%; background-color: #ddd">
            <SceneDisplay :scene="tree[dest].scene" />
            {{ tree[dest].label }}
        </div>
        <datalist id=" dest-list">
            <option v-for="nodeId in nodeIds" :value="nodeId">
                {{ tree[nodeId].label }}
            </option>
        </datalist> -->
    </div>
</template>