<template>
    <div class="seamless_rolling">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.SeamlessRolling') }}</span>
            </div>
            <div>
                <el-table style="width: 100%" class="hiddenBody">
                    <el-table-column label="时间" type="date" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column label="姓名" prop="name" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column label="地址" prop="address" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column label="操作" :show-overflow-tooltip="true"></el-table-column>
                </el-table>
                <vue-seamless-scroll :data="tableData" :class-option="defaultOption" class="seamless_scroll">
                    <el-table :data="tableData" style="width: 100%" :show-header="false">
                        <el-table-column label="时间" prop="date" :show-overflow-tooltip="true"></el-table-column>
                        <el-table-column label="姓名" prop="name" :show-overflow-tooltip="true"></el-table-column>
                        <el-table-column label="地址" prop="address" :show-overflow-tooltip="true"></el-table-column>
                        <el-table-column label="操作" :show-overflow-tooltip="true">
                            <template slot-scope="{row}">
                                <el-button type="primary" @click="operation(row)">主要按钮</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </vue-seamless-scroll>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    computed: {
        defaultOption() {
            return {
                step: 0.5, // 数值越大速度滚动越快
                limitMoveNum: 2, // 开始无缝滚动的数据量 
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
                autoPlay:true, //是否开启自动滚动
            }
        }
    },
    methods: {
        operation(e) {
            console.log('e---', e);
        }
    }
}
</script>

<style lang="less" scoped>
.seamless_rolling {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 140px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

        // 隐藏第一个表格表体
        .hiddenBody {
            ::v-deep .is-scrolling-none {
                display: none;
            }
        }

        .seamless_scroll {
            height: 300px;
            overflow: hidden;
        }
    }

    /deep/ .el-table__row:nth-child(2n) {
        background-color: yellowgreen;
    }
}
</style>