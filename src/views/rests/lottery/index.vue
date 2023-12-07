<template>
    <div class="lottery">
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>大转盘</span>
                </div>
                <BigWheelRaffle />
            </el-card>
        </div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>九宫格</span>
                </div>
                <Sudok />
            </el-card>
        </div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>老虎机</span>
                </div>
                <SlotMachine />
            </el-card>
        </div>
    </div>
</template>

<script>
import BigWheelRaffle from '../components/BigWheelRaffle'
import Sudok from '../components/Sudoku'
import SlotMachine from '../components/SlotMachine'
export default {
    components: {
        BigWheelRaffle,
        Sudok,
        SlotMachine
    }
}
</script>


<style lang="less" scoped>
.lottery {
    display: flex;
    padding: 20px;

    div {
        flex: 1;
        padding-right: 20px;
    }

    .el-card {
        height: 500px;
    }
}
</style>