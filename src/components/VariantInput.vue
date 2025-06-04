<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FlaggedText } from '../game/screen';
import FlagListInput from './FlagListInput.vue';
import type { Tree } from '../game/tree-type';

const props = defineProps<{
    tree: Tree,
    variant: FlaggedText,
    setVariant: (newVariant: FlaggedText) => void,
    removeVariant: () => void,
    switchVariants: (offset: number) => void,
}>();

const flags = ref(props.variant.flags);
watch(flags, () => {
    props.setVariant({ ...props.variant, flags: flags.value });
});

const text = ref(props.variant.text);
watch(text, () => {
    props.setVariant({ ...props.variant, text: text.value });
});
</script>

<template>
    <div class="row" style="padding: 10px; margin: 10px; border: 1px solid black; gap: 5px">

        <span class="column" style="justify-content: center">
            <button @click="() => switchVariants(-1)">&#x2191;</button>
            <button @click="() => switchVariants(1)">&#x2193;</button>
        </span>
        <span class="flag-box" style="width: 40vw">
            <textarea v-model="variant.text" rows="3" />
        </span>
        <span class="flag-box">
            Needs Flags
            <FlagListInput :tree="tree" :flags="variant.flags" :set-flags="(newFlags) => variant.flags = newFlags" />
        </span>
        <span>
            <button class="angry" @click="removeVariant">X</button>
        </span>
    </div>
</template>