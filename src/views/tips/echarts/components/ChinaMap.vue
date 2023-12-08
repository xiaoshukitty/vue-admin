<template>
    <div class="ChinaMap">
        <div id="ChinaMap"></div>
    </div>
</template>

<script>
import ChinaMap from '@/assets/json/ChinaMap.json'
import * as echarts from 'echarts';
export default {
    mounted() {
        let myCharts = echarts.init(document.getElementById("ChinaMap"));
        //注册的是 中国地图,只能包括geo组件还在map图表类型的时候才可以使用
        //地图：世界地图，中国，省份，市区地图
        echarts.registerMap("china", ChinaMap);
        myCharts.setOption({
            // backgroundColor: "rgb(121,145,200)",
            backgroundColor: "#fff",
            geo: {
                map: 'china',
                aspectScale: 0.75, //地图的长宽比
                zoom: 1.1, //图层
                itemStyle: { //阴影图层
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#09132c'
                                },
                                {
                                    offset: 1,
                                    color: '#274d68'
                                }
                            ],
                            globalCoord: true
                        },
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 10,
                        shadowOffsetY: 11
                    },
                },
                region: [{
                    name: '南海诸岛',
                    itemStyle: {
                        opacity: 0
                    }
                }]
            },
            series: [
                //配置地图相关的数据参数
                {
                    type: 'map',
                    label: {
                        normal: {
                            show: true, //显示文字
                            textStyle: {
                                color: '#1DE9B6',//文字颜色

                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: 'rgb(183,185,14)' //文字高亮色
                            }
                        }
                    },
                    zoom: 1.1,
                    map: 'china',
                    itemStyle: {
                        normal: {
                            backgroundColor: 'rgb(147,235,248)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [  //渐变
                                    {
                                        offset: 0,
                                        color: 'rgb(31,54,150)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgb(89,128,142)'
                                    }
                                ],
                                globalCoord: true
                            }
                        },
                        emphasis: {    //高亮效果
                            areaColor: 'rgb(46,229,206)',
                            borderWidth: 0.1
                        }
                    }
                }
            ]
        });
    },

}
</script>

<style lang="less" scoped>
.ChinaMap {
    width: 100%;
    height: 600px;

    div {
        width: 100%;
        height: 100%;
    }
}
</style>