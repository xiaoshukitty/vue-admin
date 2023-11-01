<template>
    <div class="EchartsComponents">
        <div id="echartLine"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: "EchartsLine",
    data() {
        return {
        }
    },
    mounted() {
        this.lintFigure()
    },
    methods: {
        lintFigure() {
            var myChart = echarts.init(document.getElementById('echartLine'));
            // 指定图表的配置项和数据
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
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
