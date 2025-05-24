<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import type { Actor } from '../game/actor';
import { AssetList } from "../game/asset";

const props = defineProps<{
    index: number,
    actor: Actor,
    setActor: (newActor: Actor) => void,
    removeActor: () => void,
}>();

const actor = ref(props.actor);
watch(actor, () => props.setActor(actor.value));

const x: Ref<number> = ref(props.actor.x + 0);
watch(x, () => actor.value = { ...actor.value, x: x.value });

const y: Ref<number> = ref(props.actor.y + 0);
watch(y, () => actor.value = { ...actor.value, y: y.value });

const scale: Ref<number> = ref(props.actor.scale + 0);
watch(scale, () => actor.value = { ...actor.value, scale: scale.value });

const img: Ref<string> = ref("prop/error.png");
const submitImage = () => {
    actor.value = { ...actor.value, img: img.value }
};
</script>

<template>
    <div class="box" style="background-color: white; display: inline-block">
        Actor {{ index }}
        <input v-model="img" list="asset-list"><button @click="submitImage">submit</button>
        <datalist id="asset-list">
            <option v-for="asset in AssetList" :value="asset">{{ asset }}</option>
        </datalist>

        <div>
            position:
            <span style="display: inline-flex; flex-direction: column">
                <input v-model="x" type="range" min="0" max="1" step="0.05" />
                <input v-model="y" type="range" min="0" max="1" step="0.05" />
            </span>
            <br>
            scale:
            <input v-model="scale" type="range" min="0.1" max="2.0" step="0.05" />
            <button @click="removeActor">X</button>
        </div>
    </div>
</template>
