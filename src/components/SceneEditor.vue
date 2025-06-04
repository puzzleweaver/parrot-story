<script setup lang='ts'>
import { ref, watch } from 'vue';
import { type Scene } from '../game/scene';
import { Assets } from '../game/generated_asset';
import ActorEditor from './ActorEditor.vue';
import { type Actor, ActorUtil as ActorUtil } from '../game/actor';
import type { Tree } from '../game/tree-type';

const props = defineProps<{
    tree: Tree,
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
const switchActors = (index: number, offset: number) => {
    if (index + offset < 0 || index + offset >= actors.value.length) {
        console.log("Can't switch ${index} and ${index + offset}.");
        return;
    }
    const newActors = [...actors.value];
    newActors[index] = actors.value[index + offset];
    newActors[index + offset] = actors.value[index];
    actors.value = newActors;
};
</script>

<template>
    <div>
        Background:
        <select v-model="background">
            <option v-for="src in Assets.bg" :value="src">{{ src }}</option>
        </select>
    </div>
    <p>

        Edit Actors<br>
        <span>
            <ActorEditor v-for="index in Object.keys(actors).map(index => parseInt(index))" :index="index"
                :set-actor="(newActor: Actor) => setActor(index, newActor)" :actor="actors[index]"
                :remove-actor="removeActor" :switch-actors="switchActors" :tree="tree"
                style="padding: 5px; margin: 10px; border: 1px solid black" />
            <button @click="addActor" style="width: 100%">
                + New Actor
            </button>
        </span>
    </p>
</template>