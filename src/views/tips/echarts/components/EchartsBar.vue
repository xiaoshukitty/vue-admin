<template>
    <div class="EchartsComponents">
        <div id="echart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: "EchartsBar",
    data() {
        return {
        }
    },
    mounted() {
        this.lintFigure()
    },
    methods: {
        lintFigure() {
            var myChart = echarts.init(document.getElementById('echart'));
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
                        data: [
                            120,
                            {
                                value: 200,
                                itemStyle: {
                                    color: '#a90000'
                                }
                            },
                            150,
                            80,
                            70,
                            110,
                            130
                        ],
                        type: 'bar'
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
