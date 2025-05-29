<script setup lang="ts">
import type { Tree } from '../game/tree-type';


const props = defineProps<{ tree: Tree }>();
const generateGraphText = () => {
    var nodes = "";
    var edges = "";

    const escape = (node: any) => {
        return '"' + `${node}`.replace(/\"/g, "\\\"") + '"';
    }

    for (const node of Object.values(props.tree)) {
        const name = escape(node?.label);

        // graph.node('B', 'Node B')
        const color = node.endgame === undefined ? '' : (
            node.endgame === "win" ? ", color='green'" : ", color='red'"
        );
        nodes += `graph.node(${escape(node.id)}, ${escape(name)}${color})\n`;

        for (const action of node.actions) {
            const nextNode = props.tree[action.dest ?? "BAD"];
            if (action.dest === undefined || nextNode === undefined) continue;
            // graph.edge('A', 'B', 'Edge from A to B')
            edges += `graph.edge(${escape(node.id)}, ${escape(nextNode.id)}, ${escape(action.label)})\n`;
        }
    }

    return `
from graphviz import Digraph
import graphviz

graph = Digraph(comment='Game Tree')
${nodes}
${edges}

graph.render('screen_graph', view=True)
`;
};

const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied it to clipbard :?");
};
</script>

<template>
    <button @click="() => copyText(generateGraphText())">
        Copy Graph Data to Clipboard
    </button>
</template>