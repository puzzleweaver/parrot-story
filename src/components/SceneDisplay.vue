<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { type Scene } from '../game/scene';
import { SceneRenderer } from '../game/scene-renderer';

const props = defineProps<{
    scene: Scene,
    flags?: string[],
    animate: boolean,
    lowRes: boolean,
}>();

var renderer: SceneRenderer | undefined = undefined;

const canvasId = computed(() => JSON.stringify(props.scene.actors));

const canvasSrc = ref("");

const getCanvas = (): HTMLCanvasElement => {
    return document.getElementById(canvasId.value) as HTMLCanvasElement;
};

var interval: number | undefined = undefined;

const render = () => {
    renderer?.render(props.scene, props.flags).then(() => {
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

const width = computed(() => {
    return props.lowRes ? 90 : 600;
})
const height = computed(() => {
    return props.lowRes ? 60 : 400;
})

</script>

<template>
    <div class="canvas-container">
        <canvas style="width:0px; height: 0px" :width="width" :height="height" :id="canvasId"></canvas>
        <img style="width: 100%; height: 100%" :src="canvasSrc" />
    </div>
</template>