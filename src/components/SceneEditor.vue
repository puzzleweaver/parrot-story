<script setup lang='ts'>
import { ref, watch, type Ref } from 'vue';
import { Scene } from '../game/scene';
import { Assets } from '../game/asset';
import SceneDisplay from './SceneDisplay.vue';
import ActorEditor from './ActorEditor.vue';
import { Actor } from '../game/actor';

const scene: Ref<Scene> = ref(Scene.empty());

const name = ref(scene.value.label);
watch(name, () => scene.value = {
    ...scene.value,
    label: name.value,
});

const background = ref(scene.value.bg);
watch(background, () => scene.value = {
    ...scene.value,
    bg: background.value,
});

const actors = ref(scene.value.actors);
watch(actors, () => scene.value = {
    ...scene.value,
    actors: actors.value,
});

const addActor = () => {
    actors.value = [...actors.value, Actor.empty()];
};

const setActor = (index: number, newActor: Actor) => {
    actors.value[index] = newActor;
    actors.value = [...actors.value];
};
const removeActor = (index: number) => {
    actors.value.splice(index, 1);
    actors.value = [...actors.value];
};

const copyOutput = () => {
    const ts = Scene.toTS(scene.value);
    navigator.clipboard.writeText(`"${name.value}": ${ts}`);
};
</script>

<template>
    <div class="display">
        <div style="width: 300px; height: 200px">
            <SceneDisplay :scene="scene" :debug="true" />
        </div>
        <br>
        <p>
            Name:
            <input v-model="name" />
            <br>
            Background:
            <select v-model="background">
                <option v-for="src in Assets.bg" :value="src">{{ src }}</option>
            </select>
        </p>

        Actors:
        <details style="border: 2px solid black; border-radius: 10px; background-color: #eee">
            <summary>Edit Actors</summary>
            <ActorEditor v-for="index in Object.keys(actors).map(index => parseInt(index))" :index="index"
                :set-actor="(newActor: Actor) => setActor(index, newActor)" :actor="actors[index]"
                :remove-actor="() => removeActor(index)" />
            <button @click="addActor">
                + New Actor
            </button>
        </details>
        <p>
            <button @click="copyOutput">Copy text</button>
        </p>
    </div>
</template>