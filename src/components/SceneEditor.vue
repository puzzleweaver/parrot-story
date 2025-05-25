<script setup lang='ts'>
import { ref, watch } from 'vue';
import { type Scene } from '../game/scene';
import { Assets } from '../game/asset';
import SceneDisplay from './SceneDisplay.vue';
import ActorEditor from './ActorEditor.vue';
import { type Actor, ActorUtil as ActorUtil } from '../game/actor';

const props = defineProps<{
    scene: Scene,
    setScene: (newScene: Scene) => void,
}>();

const background = ref(props.scene.bg);
watch(background, () => props.setScene({
    ...props.scene,
    bg: background.value,
}));

const actors = ref(props.scene.actors);
watch(actors, () => props.setScene({
    ...props.scene,
    actors: actors.value,
}));

const addActor = () => {
    actors.value = [...actors.value, ActorUtil.empty()];
};

const setActor = (index: number, newActor: Actor) => {
    actors.value[index] = newActor;
    actors.value = [...actors.value];
};
const removeActor = (index: number) => {
    actors.value.splice(index, 1);
    actors.value = [...actors.value];
};
</script>

<template>
    <div style="position: fixed; right: 20px; top: 20px; width: 30vw; height: 20vh">
        <SceneDisplay :scene="scene" :debug="true" />
    </div>
    <h3>Edit Scene</h3>
    <div class="display">
        <br>
        <p>
            Background:
            <select v-model="background">
                <option v-for="src in Assets.bg" :value="src">{{ src }}</option>
            </select>
        </p>

        Edit Actors:
        <hr>
        <ActorEditor v-for="index in Object.keys(actors).map(index => parseInt(index))" :index="index"
            :set-actor="(newActor: Actor) => setActor(index, newActor)" :actor="actors[index]"
            :remove-actor="() => removeActor(index)" style="padding: 5px; margin: 10px; border: 1px solid black" />
        <button @click="addActor">
            + New Actor
        </button>
    </div>
</template>