<script setup lang="ts">
import { computed } from 'vue';
import type { Tree } from '../game/tree-type';
import { ScreenUtil, type Screen } from '../game/screen';

const props = defineProps<{ screen: Screen, tree: Tree }>();

const isUnreachable = computed(() => {
    if (props.screen.id === 0) return false;
    const incomingScreens = ScreenUtil.getIncomingScreens(props.screen, props.tree);
    return incomingScreens.length === 0;
});

const isLeaf = computed(() => {
    return props.screen.endgame === undefined && props.screen.actions.length === 0;
});

const incoming = computed(() => {
    return ScreenUtil.getIncomingScreens(props.screen, props.tree).length;
});
const outgoing = computed(() => props.screen.actions.length);

</script>

<template>
    <div class="good" v-if="screen.id === 0" style="color: green">START &#x2605;</div>
    <div class="good" v-if="screen.endgame === 'win'">GOOD END &#x2691;</div>
    <div class="good" v-if="screen.endgame === 'lose'">BAD END &#x2691;</div>
    <div class="severe" v-if="isUnreachable">
        *unreachable
    </div>
    <div class="severe" v-if="isLeaf">
        *no options
    </div>
    <div class="hint">
        {{ incoming }} &#x2192; {{ outgoing }}
    </div>

    <!-- <div class="minor" v-if="excessIncoming">
        lots pointing here...
    </div>
    <div class="minor" v-if="excessOutgoing">
        lots of options...
    </div> -->
</template>

<style scoped>
.severe {
    color: red;
}

.hint {
    color: rgba(0, 0, 0, 0.2);
}

.good {
    color: green;
}

.minor {
    color: orange;
}
</style>