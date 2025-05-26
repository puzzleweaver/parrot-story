<script setup lang="ts">
import { computed } from 'vue';
import { GameState } from '../game/game';
import SceneDisplay from './SceneDisplay.vue';
import { ActionUtil, type Action } from '../game/action';
import EndgameDisplay from './EndgameDisplay.vue';

const props = defineProps<{
    gameState: GameState,
    doAction: (action: Action) => void,
}>();
const node = computed(() => props.gameState.node);
</script>

<template>
    <div class="display">
        <p>
            <SceneDisplay :scene="node.scene" />
        </p>

        <p>
            {{ node.text }}
        </p>

        <p>
            <EndgameDisplay v-if="node.endgame !== undefined" :endgame="node.endgame" />
            <span v-else v-for="action in node.actions">
                <button v-if="ActionUtil.visible(gameState, action)" @click="doAction(action)">
                    {{ action.label }}
                </button>
            </span>
        </p>
    </div>
</template>