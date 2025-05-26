<script setup lang="ts">
import type { Screen } from '../game/screen';

defineProps<{
    screen: Screen,
}>();
</script>

<template>
    <span v-if="screen.id === 0" style="color: orange">&#x2605;</span>
    <span v-if="screen.endgame === 'win'" style="color: green">&#x2691;</span>
    <span v-if="screen.endgame === 'lose'" style="color: red">&#x2691;</span>
</template>