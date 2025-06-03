<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { TreeUtil, type Tree } from '../game/tree-type';

const props = defineProps<{
    flags: string[],
    setFlags: (newFlags: string[]) => void,
    tree: Tree, // for figuring out what flags are in use already.
}>();

watch(props, () => {
    newFlag.value = "";
});

const removeFlag = (index: number) => {
    const newFlags = [...props.flags];
    newFlags.splice(index, 1);
    props.setFlags(newFlags);
};
const newFlag = ref("");
const addFlag = () => {
    if (newFlag.value === "") return;
    props.setFlags([...props.flags, newFlag.value]);
}

const allFlags = computed(() => TreeUtil.getAllFlags(props.tree));
</script>

<template>
    <div>
        <div v-for="(flag, i) in flags">
            {{ flag }}
            <button @click="removeFlag(i)">x</button>
        </div>
        <div style="display: flex; flex-direction: row; width: 100%">
            <input style="width: 80%" v-model="newFlag" placeholder="enter new flag..." list="all-flags-list"
                v-on:keyup.enter="addFlag" />
            <button @click="addFlag">add</button>
        </div>
    </div>
    <datalist id="all-flags-list">
        <option v-for="flag in allFlags" :value="flag" />
    </datalist>
</template>