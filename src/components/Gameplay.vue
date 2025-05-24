<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { GameState } from '../game/game';
import StoryDisplay from './StoryDisplay.vue';
import type { Action } from '../game/action';

const gameState: Ref<GameState> = ref(GameState.initial());
const doAction = (action: Action) => {
    gameState.value = gameState.value.step(action);
};
</script>

<template>
    <StoryDisplay :game-state="gameState" :do-action="doAction" />
</template>