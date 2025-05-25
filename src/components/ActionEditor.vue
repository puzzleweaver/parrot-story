<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';
import type { Action } from '../game/action';
import type { Tree } from '../game/tree-type';

const props = defineProps<{
    action: Action,
    setAction: (newAction: Action) => void,
    tree: Tree,
}>();

const label: Ref<string> = ref(props.action.label);
watch(label, () => {
    props.setAction({
        ...props.action,
        label: label.value,
    });
});

const dest: Ref<string> = ref(props.action.dest);
watch(dest, () => {
    props.setAction({
        ...props.action,
        dest: dest.value,
    });
});

const nodeIds = computed(() => Object.keys(props.tree));
</script>

<template>
    <div style="margin: 5px; padding: 5px">
        Label: <input v-model="label" />
        Other thing: <input v-model="dest" list="dest-list" />
        <datalist id="dest-list">
            <option v-for="nodeId in nodeIds" :value="nodeId">
                {{ tree[nodeId].label }}
            </option>
        </datalist>
    </div>
</template>