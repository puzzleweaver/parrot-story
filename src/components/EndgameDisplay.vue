<script setup lang="ts">
defineProps<{
    endgame: "win" | "lose",
}>();
</script>

<template>
    <span v-if="endgame === 'win'">
        🎉 You Win yayyyy 🎉
    </span>

    <span v-if="endgame === 'lose'">
        😹 You Lose :( 🐌
    </span>

    <br>
    <a href="/">
        <button>Play Again</button>
    </a>
</template>