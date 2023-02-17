<template>
    <VirtualListComponents :listData="data" :estimatedItemSize="100" v-slot="slotProps">
        <VirtualListComponentsItem :item="slotProps.item" />
    </VirtualListComponents>
</template>

<script>
import VirtualListComponents from '../../components/VirtualListComponents/VirtualListComponents.vue'
import VirtualListComponentsItem from '../../components/VirtualListComponents/VirtualListComponentsItem.vue'

import faker from 'faker';

let data = [];
for (let id = 0; id < 1000; id++) {
    data.push({
        id,
        value: faker.lorem.sentences() // 长文本
    })
}

export default {
    name: 'app',
    data() {
        return {
            data
        };
    },
    components: {
        VirtualListComponents,
        VirtualListComponentsItem
    }
}
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
