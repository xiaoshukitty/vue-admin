<template>
    <div class="EchartsComponents">
        <div id="echart"></div>
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
            var myChart = echarts.init(document.getElementById('echart'));
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: ' ',
                    subtext: ' ',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: [
                        'rose1',
                        'rose2',
                        'rose3',
                        'rose4',
                        'rose5',
                        'rose6',
                        'rose7',
                        'rose8'
                    ]
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
                        name: 'Radius Mode',
                        type: 'pie',
                        radius: [20, 140],
                        center: ['25%', '50%'],
                        roseType: 'radius',
                        itemStyle: {
                            borderRadius: 5
                        },
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: [
                            { value: 40, name: 'rose 1' },
                            { value: 33, name: 'rose 2' },
                            { value: 28, name: 'rose 3' },
                            { value: 22, name: 'rose 4' },
                            { value: 20, name: 'rose 5' },
                            { value: 15, name: 'rose 6' },
                            { value: 12, name: 'rose 7' },
                            { value: 10, name: 'rose 8' }
                        ]
                    },
                    {
                        name: 'Area Mode',
                        type: 'pie',
                        radius: [20, 140],
                        center: ['75%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        data: [
                            { value: 30, name: 'rose 1' },
                            { value: 28, name: 'rose 2' },
                            { value: 26, name: 'rose 3' },
                            { value: 24, name: 'rose 4' },
                            { value: 22, name: 'rose 5' },
                            { value: 20, name: 'rose 6' },
                            { value: 18, name: 'rose 7' },
                            { value: 16, name: 'rose 8' }
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
    width: 900px;
    height: 400px;
    margin: 0px 30px;

    div {
        width: 100%;
        height: 100%;
    }
}
</style>
