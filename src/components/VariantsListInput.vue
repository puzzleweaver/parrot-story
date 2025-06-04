<script setup lang="ts">
import type { FlaggedText } from '../game/screen';
import type { Tree } from '../game/tree-type';
import VariantInput from './VariantInput.vue';

const props = defineProps<{
    tree: Tree,
    variants: FlaggedText[],
    setVariants: (newVariants: FlaggedText[]) => void,
}>();

const setVariant = (newVariant: FlaggedText, index: number) => {
    const newList = [...props.variants];
    newList[index] = newVariant;
    props.setVariants(newList);
};

const removeVariant = (index: number) => {
    const newList = [...props.variants];
    newList.splice(index, 1);
    props.setVariants(newList);
};

const addVariant = () => {
    props.setVariants([
        ...props.variants,
        {
            "text": "...",
            "flags": [],
        },
    ]);
};

const switchVariants = (index: number, offset: number) => {
    const newIndex = index + offset;
    if (newIndex < 0 || newIndex >= (props.variants?.length ?? 0)) {
        alert("Can't do that");
    }
    const oldVariants = props.variants ?? [];
    const newVariants = [...oldVariants];
    newVariants[index] = oldVariants[newIndex];
    newVariants[newIndex] = oldVariants[index];
    props.setVariants(newVariants);
};
</script>

<template>
    <div class="column">
        <VariantInput :tree="tree" class="row" v-for="(variant, i) in variants" :variant="variant"
            :set-variant="(newVariant) => setVariant(newVariant, i)" :remove-variant="() => removeVariant(i)"
            :switch-variants="(offset) => switchVariants(i, offset)" />
        <button @click="addVariant" style="flex-grow: 1">+ New Narration Variant</button>
    </div>
</template>