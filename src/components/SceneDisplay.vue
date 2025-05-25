<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { type Scene } from '../game/scene';
import { SceneRenderer } from '../game/scene-renderer';

const props = defineProps<{
    scene: Scene
}>();

var renderer: SceneRenderer | undefined = undefined;

const canvasSrc = ref("");

const getCanvas = (): HTMLCanvasElement => {
    return document.getElementById("scene-canvas") as HTMLCanvasElement;
};

var interval: number | undefined = undefined;

const render = () => {
    renderer?.render(props.scene).then(() => {
        canvasSrc.value = renderer?.canvas.toDataURL("png") ?? "";
    });
}

onMounted(() => {
    const canvas = getCanvas();
    renderer = new SceneRenderer({ canvas });
    interval = setInterval(() => render(), 1000 / 60);
});
onUnmounted(() => {
    clearInterval(interval);
});

</script>

<template>
    <div class="canvas-container">
        <canvas style="width:0px; height: 0px" width=900 height=600 id="scene-canvas"></canvas>
        <img style="width: 100%; height: 100%" :src="canvasSrc" />
    </div>
</template>