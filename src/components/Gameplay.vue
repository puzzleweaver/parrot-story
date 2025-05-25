<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { GameState } from '../game/game';
import NodeDisplay from './NodeDisplay.vue';
import type { Action } from '../game/action';

const gameState: Ref<GameState> = ref(GameState.initial());
const doAction = (action: Action) => {
    gameState.value = gameState.value.step(action);
};
</script>

<template>
    <NodeDisplay :game-state="gameState" :do-action="doAction" />
</template>