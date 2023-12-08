<template>
    <div class="echarts">
        <el-card class="map">
            <div slot="header" class="clearfix">
                <span>{{ $t('titleI18n.ChinaMap') }}</span>
            </div>
            <ChinaMap></ChinaMap>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('titleI18n.LineChart') }}</span>
            </div>
            <EchartsLine></EchartsLine>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('titleI18n.ColumnDiagram') }}</span>
            </div>
            <EchartsBar></EchartsBar>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('titleI18n.Pie') }}</span>
            </div>
            <EchartsPie></EchartsPie>
        </el-card>
        <div style="height: 20px;  width: 100%;"></div>
    </div>
</template>

<script>
import EchartsLine from './components/EchartsLine.vue'
import EchartsBar from './components/EchartsBar.vue';
import EchartsPie from './components/EchartsPie.vue';
import ChinaMap from './components/ChinaMap.vue';
export default {
    components: {
        EchartsLine,
        EchartsBar,
        EchartsPie,
        ChinaMap
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
            echartsStats: 'line',
            componentsList: [
                {
                    name: EchartsLine,
                    title: '1'
                }, {
                    name: EchartsBar,
                    title: '2'
                }, {
                    name: EchartsPie,
                    title: '3'
                }
            ]
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
    padding: 20px 20px 0;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 140px);

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 32%;
        height: 450px;
        margin-bottom: 20px;
    }

    .box-card:nth-child(3n) {
        margin-left: 20px;
        margin-right: 20px;
    }
    .map{
        width: calc(96% + 40px);
        margin-bottom: 20px;
    }
}
</style>