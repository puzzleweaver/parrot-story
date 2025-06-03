<script setup lang="ts">
import { computed } from 'vue';
import { TreeUtil, type Tree } from '../game/tree-type';

const props = defineProps<{
    tree: Tree,
}>();

const treeText = computed(() => TreeUtil.getTreeText(props.tree));
const downloadLink = computed(() => TreeUtil.getDownloadLink(treeText.value));
const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied it to clipbard :?");
};
</script>

<template>
    <a :href="downloadLink" download="tree.ts">
        <button @click="() => copyText(treeText)">SAVE &#x2913;</button>
    </a>
</template>