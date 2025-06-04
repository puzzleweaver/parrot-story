<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { animationStyles, type Actor, type AnimationStyle } from '../game/actor';
import { AssetList } from "../game/generated_asset";
import FlagListInput from './FlagListInput.vue';
import type { Tree } from '../game/tree-type';

const props = defineProps<{
    tree: Tree,
    index: number,
    actor: Actor,
    setActor: (newActor: Actor) => void,
    removeActor: (index: number) => void,
    switchActors: (index: number, offset: number) => void,
}>();

const setFromProps = () => {
    x.value = "" + props.actor.x;
    y.value = "" + props.actor.y;
    flipped.value = props.actor.flipped;
    scale.value = "" + props.actor.scale;
    angle.value = "" + props.actor.angle;
    img.value = props.actor.img;
    animation.value = props.actor.animation;
}

const x: Ref<string> = ref("");
watch(x, () => props.setActor({
    ...props.actor,
    x: parseFloat(x.value),
}));

const y: Ref<string> = ref("");
watch(y, () => {
    props.setActor({
        ...props.actor,
        y: parseFloat(y.value),
    });
});

const scale: Ref<string> = ref("");
watch(scale, () => props.setActor({
    ...props.actor,
    scale: parseFloat(scale.value),
}));

const angle: Ref<string> = ref("");
watch(angle, () => props.setActor({
    ...props.actor,
    angle: parseFloat(angle.value),
}));

const img: Ref<string> = ref(props.actor.img);
watch(img, () => props.setActor({
    ...props.actor,
    img: img.value,
}));

const animation: Ref<AnimationStyle | undefined> = ref(props.actor.animation);
watch(animation, () => props.setActor({
    ...props.actor,
    animation: animation.value,
}));

const flipped: Ref<boolean | undefined> = ref(props.actor.flipped);
watch(flipped, () => props.setActor({
    ...props.actor,
    flipped: flipped.value,
}));

const neededFlags: Ref<string[]> = ref(props.actor.needsFlags ?? []);
watch(neededFlags, () => props.setActor({
    ...props.actor,
    needsFlags: neededFlags.value,
}));

watch(props, setFromProps);
setFromProps();
</script>

<template>
    <div style="background-color: #eee; display: flex; flex-direction: row; gap: 5px">

        <!-- arrows-->
        <span class="column" style="justify-content: center">
            <button @click="() => switchActors(index, -1)">&#x2191;</button>
            <button @click="() => switchActors(index, 1)">&#x2193;</button>
        </span>

        <!-- filename input, flipping, preview-->
        <span class="column flag-box">
            <span class="row">
                Actor {{ index + 1 }}&nbsp;
                <img :src="`/images/${img}`" style="background-color: white; height: 2rem; width: auto" />
                <span>
                    <input type="checkbox" v-model="flipped" /> flip
                </span>
                &nbsp;
                <button @click="() => removeActor(index)" style="width: 2em">X</button>
            </span>

            <input v-model="img" list="asset-list" />
            <span>
            </span>

            <span class="row">
                anim.
                <select v-model="actor.animation">
                    <option v-for="style in animationStyles" :value="style">{{ style ?? "wobble_slow" }}</option>
                </select>
            </span>

            <datalist id="asset-list">
                <option v-for="asset in AssetList" :value="asset" />
            </datalist>
        </span>


        <span class="column flag-box">
            <span class="row">
                x: <input v-model="x" type="range" min="0" max="1" step="0.005" />
            </span>
            <span class="row">
                y: <input v-model="y" type="range" min="0" max="1" step="0.005" />
            </span>
            <span class="row">
                scale: <input v-model="scale" type="range" min="0.1" max="2.0" step="0.005" />
            </span>
            <span class="row">
                angle: <input v-model="angle" type="range" min="-3.14" max="3.14" step="0.005" />
            </span>
        </span>
        <span class="column flag-box">
            Needs Flags
            <FlagListInput :tree="tree" :flags="neededFlags" :set-flags="(newFlags) => neededFlags = newFlags" />
        </span>

    </div>
</template>