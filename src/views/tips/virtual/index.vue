<template>
    <div id="app">
        <VirtualComponents :listData="data" :itemSize="100" />
    </div>
</template>

<script>
import VirtualComponents from "@/components/virtualComponents/VirtualComponents.vue";

let d = [];
for (let i = 0; i < 1000; i++) {
    d.push({ id: i, value: i });
}

export default {
    name: "App",
    data() {
        return {
            data: d,
        };
    },
    components: {
        VirtualComponents,
    },
};
</script>

<style>
html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
}

#app {
    height: 100%;
}
</style>
