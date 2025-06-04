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
    <br>
    <span v-if="incomingOptions.length === 0" style="color: red">(none)</span>
    <span>
        <button style="margin: 5px; display: inline-flex; flex-direction: row" v-for="option in incomingOptions"
            @click="props.goToScreen(option.screenId)">
            <SceneDisplay style="width: 4em" :scene="tree[option.screenId].scene" :animate="false" :low-res="true" />
            <div>
                Selected "{{ tree[option.screenId].actions[option.actionIndex].label }}"
                <br>
                From Screen "{{ tree[option.screenId].label }}"
            </div>
        </button>
    </span>
</template>