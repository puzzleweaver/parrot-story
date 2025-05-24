<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { Scene } from '../game/scene';
import { SceneRenderer } from '../game/scene-renderer';

const props = defineProps<{
    scene: Scene,
    debug?: boolean
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
    renderer = new SceneRenderer({ canvas, debug: props.debug ?? false });
    interval = setInterval(() => render(), 100);
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