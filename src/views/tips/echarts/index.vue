<template>
    <div class="echarts">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.label" :name="item.name">
            </el-tab-pane>
            <EchartsLine v-if="echartsStats == 'line'" />
            <EchartsBar v-else-if="echartsStats == 'bar'" />
            <EchartsPie v-else />
        </el-tabs>
    </div>
</template>

<script>
import EchartsLine from './components/EchartsLine.vue'
import EchartsBar from './components/EchartsBar.vue';
import EchartsPie from './components/EchartsPie.vue';
export default {
    components: {
        EchartsLine,
        EchartsBar,
        EchartsPie
    },
    data() {
        return {
            tabsList: [{
                name: 'line',
                label: "折线图",
            }, {
                name: 'bar',
                label: "柱状图",
            }, {
                name: 'pie',
                label: "饼图 ",
            }],
            activeName: 'line',
            echartsStats: 'line'
        }
    },
    methods: {
        handleClick(tab, event) {
            let { index } = tab;
            const getEchartsStatsList = (index) => {
                let echartsStatsList = new Map([
                    ['0', 'line'],
                    ['1', 'bar'],
                    ['2', 'pie'],
                    ['default', 'line']
                ])
                return echartsStatsList.get(index) || echartsStatsList.get('default')
            }
            this.echartsStats = getEchartsStatsList(index);
        }
    }
}
</script>

<style lang="less" scoped>
.echarts {
    padding: 20px 50px;
}
</style>