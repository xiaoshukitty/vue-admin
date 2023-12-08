<template>
    <div class="EchartsComponents">
        <div id="echartPie"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: "EchartsPie",
    data() {
        return {
        }
    },
    mounted() {
        this.pieFigure()
    },
    methods: {
        pieFigure() {
            var myChart = echarts.init(document.getElementById('echartPie'));
            // 指定图表的配置项和数据
            var option = {

                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [10, 100],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [
                            { value: 40, name: 'rose 1' },
                            { value: 38, name: 'rose 2' },
                            { value: 32, name: 'rose 3' },
                            { value: 30, name: 'rose 4' },
                            { value: 28, name: 'rose 5' },
                            { value: 26, name: 'rose 6' },
                            { value: 22, name: 'rose 7' },
                            { value: 18, name: 'rose 8' }
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        },
    }
}
</script>

<style lang="less" scoped>
.EchartsComponents {
    width: 100%;
    height: 350px;

    div {
        width: 100%;
        height: 100%;
    }
}
</style>
