<script setup lang="ts">
import { computed } from 'vue';
import { TreeUtil, type Tree } from '../game/tree-type';

const props = defineProps<{
    tree: Tree,
}>();

const downloadLink = computed(() => TreeUtil.getDownloadLink(props.tree));
</script>

<template>
    <a :href="downloadLink" style="float: right" download="tree.ts">
        <button>SAVE &#x2913;</button>
    </a>
</template>