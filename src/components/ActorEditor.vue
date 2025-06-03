<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { animationStyles, type Actor, type AnimationStyle } from '../game/actor';
import { AssetList } from "../game/generated_asset";

const props = defineProps<{
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

watch(props, setFromProps);
setFromProps();
</script>

<template>
    <div style="background-color: #eee; display: inline-block">
        Actor {{ index + 1 }}
        <img :src="`/images/${img}`"
            style="background-color: white; height: 2rem; width: auto; vertical-align: text-bottom" />
        <br>

        <div style="text-align: center">
            <button @click="() => switchActors(index, -1)">&lt;</button>
            &nbsp;
            <button @click="() => removeActor(index)">X</button>
            &nbsp;
            <button @click="() => switchActors(index, 1)">&gt;</button>
        </div>

        <input v-model="img" list="asset-list" />
        <input type="checkbox" v-model="flipped" /> flipped
        <datalist id="asset-list">
            <option v-for="asset in AssetList" :value="asset" />
        </datalist>
        <br>

        <div style="display: inline-flex; flex-direction: column">
            <span>
                x: <input v-model="x" type="range" min="0" max="1" step="0.005" />
            </span>
            <span>
                y: <input v-model="y" type="range" min="0" max="1" step="0.005" />
            </span>
            <span>
                scale: <input v-model="scale" type="range" min="0.1" max="2.0" step="0.005" />
            </span>
            <span>
                angle: <input v-model="angle" type="range" min="-3.14" max="3.14" step="0.005" />
            </span>
            <span>
                animate:
                <select v-model="actor.animation">
                    <option v-for="style in animationStyles" :value="style">{{ style ?? "wobble_slow" }}</option>
                </select>
            </span>
        </div>
    </div>
</template>
