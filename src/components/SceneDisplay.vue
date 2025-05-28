<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { type Scene } from '../game/scene';
import { SceneRenderer } from '../game/scene-renderer';

const props = defineProps<{
    scene: Scene,
    animate: boolean,
}>();

var renderer: SceneRenderer | undefined = undefined;

const canvasId = computed(() => JSON.stringify(props.scene.actors));

const canvasSrc = ref("");

const getCanvas = (): HTMLCanvasElement => {
    return document.getElementById(canvasId.value) as HTMLCanvasElement;
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
    if (props.animate) {
        interval = setInterval(() => render(), 1000 / 60);
        onUnmounted(() => {
            clearInterval(interval);
        });
    } else {
        render();
    }
});

if (!props.animate) watch(props, render);

</script>

<template>
    <div class="canvas-container">
        <canvas style="width:0px; height: 0px" width=900 height=600 :id="canvasId"></canvas>
        <img style="width: 100%; height: 100%" :src="canvasSrc" />
    </div>
</template>