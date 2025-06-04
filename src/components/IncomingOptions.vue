<script setup lang="ts">
import { computed } from 'vue';
import type { ScreenId, Tree } from '../game/tree-type';
import type { Screen } from '../game/screen';
import SceneDisplay from './SceneDisplay.vue';

const props = defineProps<{
    tree: Tree,
    screen: Screen,
    goToScreen: (id: ScreenId) => void,
}>();

type IncomingOption = {
    screenId: ScreenId;
    actionIndex: number;
};
const incomingOptions = computed(() => {
    const ids: IncomingOption[] = [];
    for (const screen of Object.values(props.tree)) {
        for (var i = 0; i < screen.actions.length; i++) {
            if (screen.actions[i].dest === props.screen.id) {
                ids.push({
                    screenId: screen.id,
                    actionIndex: i,
                });
            }
        }
    }
    return ids;
});
</script>

<template>
    <span v-if="incomingOptions.length === 0" style="color: red">(none)</span>
    <span>
        <button style="margin: 5px" v-for="option in incomingOptions" @click="props.goToScreen(option.screenId)">
            <SceneDisplay style="width: 5em" :scene="tree[option.screenId].scene" :animate="false" :low-res="true" />
            <div style="font-size: 0.6em">
                {{ tree[option.screenId].label }}:<br>
                {{ tree[option.screenId].actions[option.actionIndex].label }}
            </div>
        </button>
    </span>
</template>