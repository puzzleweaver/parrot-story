<script setup lang="ts">
import { computed } from 'vue';
import { GameState } from '../game/game';
import SceneDisplay from './SceneDisplay.vue';
import type { Action } from '../game/action';

const props = defineProps<{
    gameState: GameState,
    doAction: (action: Action) => void,
    debug?: boolean,
}>();
const node = computed(() => props.gameState.node);
</script>

<template>
    <div class="display">
        <p>
            <SceneDisplay :scene="node.scene" :debug="debug" />
        </p>

        <p>
            {{ node.text }}
        </p>

        <p>
            <button v-for="action in node.actions" @click="doAction(action)">
                {{ action.label }}
            </button>
        </p>
    </div>
</template>