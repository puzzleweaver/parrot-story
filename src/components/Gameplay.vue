<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { GameState } from '../game/game';
import NodeDisplay from './NodeDisplay.vue';
import type { Action } from '../game/action';
import { musicByBg } from '../game/asset';

const gameState: Ref<GameState> = ref(GameState.initial());
const doAction = (action: Action) => {
    gameState.value = gameState.value.step(action);
};

const getMusic = (): string | undefined => {
    return musicByBg[gameState.value.node.scene.bg];
}
var currentMusic: string | undefined = undefined;

var bgLoop: HTMLAudioElement | undefined = undefined;
const setMusic = (newMusic: string | undefined) => {
    currentMusic = newMusic;
    if (bgLoop !== undefined) bgLoop.pause();
    console.log(`Playing ${newMusic}`);
    if (currentMusic !== undefined) {
        bgLoop = new Audio(`/sound/bg/${newMusic}`);
        bgLoop.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        bgLoop.play();
    }
}

watch(gameState, () => {
    const nextMusic = getMusic();
    console.log(`Next music is ${nextMusic}`);
    if (nextMusic !== currentMusic)
        setMusic(nextMusic);
});

</script>

<template>
    <!-- {{ gameState.flags }} -->
    <NodeDisplay :game-state="gameState" :do-action="doAction" />

</template>