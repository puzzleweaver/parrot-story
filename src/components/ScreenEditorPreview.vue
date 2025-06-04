<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import { ScreenUtil, type Screen } from '../game/screen';
import SceneDisplay from './SceneDisplay.vue';
import { FlagUtil } from '../game/flag';
import { ActionUtil, type Action } from '../game/action';
import type { ScreenId, Tree } from '../game/tree-type';
import IncomingOptions from './IncomingOptions.vue';

const props = defineProps<{
    goToScreen: (id: ScreenId) => void,
    screen: Screen,
    tree: Tree,
}>();

const flags = computed(() => {
    const ret = FlagUtil.collapse(
        ScreenUtil.getAllFlags(props.screen),
    );
    ret.forEach(flag => {
        stateFlags.value[flag] ??= false;
    });
    return ret;
});

const stateFlags: Ref<{ [key: string]: boolean }> = ref({});
const stateFlagsList = computed(() => {
    const ret = [];
    for (const flag of Object.keys(stateFlags.value))
        if (stateFlags.value[flag] === true) ret.push(flag);
    return ret;
});

const isVisible = (action: Action) => {
    return ActionUtil.visible(stateFlagsList.value, action);
};
</script>

<template>
    <IncomingOptions :screen="props.screen" :tree="tree" :go-to-screen="props.goToScreen" />
    <div style="width: 100%; background-color: #eee; padding: 5px">
        <span class="flag-box" v-for="flag in flags">
            <input type="checkbox" v-model="stateFlags[flag]" /> {{ flag }}
        </span>
        <div class="flag-box" style="text-align: center" v-if="flags.length === 0">(doesn't depend on any flags)</div>
    </div>
    <div style="padding: 5px; background-color: #ccc">
        <SceneDisplay :flags="stateFlagsList" :scene="screen.scene" :animate="true" :low-res="false" />
        {{ ScreenUtil.getText(screen, stateFlagsList) }}
        <div>
            <span v-for="action in screen.actions">
                <button style="margin: 5px" v-if="isVisible(action) && action.dest !== undefined"
                    @click="goToScreen(action.dest)">
                    <SceneDisplay style="width: 5em; height: 3em" :scene="tree[action.dest].scene" :animate="true"
                        :lowRes="false" />
                    {{ action.label }}
                </button>
            </span>
        </div>
    </div>
    <div style="height: 200px"></div>
</template>