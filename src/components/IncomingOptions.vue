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
    Options that point here:
    <span v-if="incomingOptions.length === 0" style="color: red">(none)</span>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr);">
        <button v-for="option in incomingOptions" @click="props.goToScreen(option.screenId)">
            <SceneDisplay :scene="tree[option.screenId].scene" />
            Selected<br>
            "{{ tree[option.screenId].actions[option.actionIndex].label }}"<br>
            From Screen<br>
            "{{ tree[option.screenId].label }}"
        </button>
    </div>
</template>