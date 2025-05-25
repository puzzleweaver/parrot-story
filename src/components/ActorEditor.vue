<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { animationStyles, type Actor, type AnimationStyle } from '../game/actor';
import { AssetList } from "../game/asset";

const props = defineProps<{
    index: number,
    actor: Actor,
    setActor: (newActor: Actor) => void,
    removeActor: () => void,
}>();

const actor = ref(props.actor);
watch(actor, () => props.setActor(actor.value));

const x: Ref<string> = ref("" + props.actor.x);
watch(x, () => actor.value = { ...actor.value, x: parseFloat(x.value) });

const y: Ref<string> = ref("" + props.actor.y);
watch(y, () => {
    actor.value = { ...actor.value, y: parseFloat(y.value) };
});

const scale: Ref<string> = ref("" + props.actor.scale);
watch(scale, () => actor.value = { ...actor.value, scale: parseFloat(scale.value) });

const angle: Ref<string> = ref("" + props.actor.angle);
watch(angle, () => actor.value = { ...actor.value, angle: parseFloat(angle.value) });

const img: Ref<string> = ref(props.actor.img);
watch(img, () => actor.value = { ...actor.value, img: img.value });

const animation: Ref<AnimationStyle | undefined> = ref(props.actor.animation);
watch(animation, () => actor.value = { ...actor.value, animation: animation.value });
</script>

<template>
    <div style="background-color: #eee; display: inline-block">
        Actor {{ index + 1 }}
        <button style="float: right" @click="removeActor">X</button>
        <img :src="`/src/assets/images/${img}`"
            style="background-color: white; height: 2rem; width: auto; vertical-align: text-bottom" />
        <hr>
        <!-- <input v-model="img" list="asset-list">
        <button @click="submitImage">submit</button>
        <button @click="resetImage">reset</button> -->
        <select v-model="img">
            <option v-for="asset in AssetList" :value="asset">{{ asset }}</option>
        </select>
        <br>

        <div style="display: inline-flex; flex-direction: column">
            <span>
                x: <input v-model="x" type="range" min="0" max="1" step="0.05" />
            </span>
            <span>
                y: <input v-model="y" type="range" min="0" max="1" step="0.05" />
            </span>
            <span>
                scale: <input v-model="scale" type="range" min="0.1" max="2.0" step="0.05" />
            </span>
            <span>
                angle: <input v-model="angle" type="range" min="-3.14" max="3.14" step="0.05" />
            </span>
            <span>
                animate:
                <select v-model="actor.animation">
                    <option v-for="style in animationStyles" :value="style">{{ style.toUpperCase() }}</option>
                </select>
            </span>
        </div>
    </div>
</template>
