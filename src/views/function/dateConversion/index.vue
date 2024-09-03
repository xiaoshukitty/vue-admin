<template>
    <div class="dateConversion">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.DateConversion') }}</span>
            </div>
            <el-date-picker v-model="value" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
            <div style="margin-top: 20px;">
                <span style="margin-right:40px">{{ text }}</span>
                <el-button type="primary" size="small" @click="checkDate(1)">时间戳</el-button>
                <el-button type="primary" size="small" @click="checkDate(2)">年月日</el-button>
                <el-button type="primary" size="small" @click="checkDate(3)">年月日时分秒</el-button>
                <el-button type="primary" size="small" @click="checkDate(4)">标准时间</el-button>
            </div>
        </el-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            value: new Date(),
            text: ''
        }
    },
    created() {
        this.text = this.value
    },
    watch: {
        value() {
            this.checkDate(3)
        }
    },
    methods: {
        checkDate(val) {
            if (val == 1) {
                this.text = this.getStampDate(this.formatDateTime(this.value, false))
            } else if (val == 2) {
                this.text = this.formatDateTime(this.value, false)
            } else if (val == 3) {
                this.text = this.formatDateTime(this.value, true)
            } else {
                this.text = new Date()
                console.log(this.text);
            }
        },
        // 中国标准时间 转换成 年月日
        formatDateTime(date, isFlag) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            var minute = date.getMinutes();
            minute = minute < 10 ? ('0' + minute) : minute;
            var second = date.getSeconds();
            second = second < 10 ? ('0' + second) : second;
            if (isFlag) {
                return y + '-' + m + '-' + d + '    ' + h + ':' + minute + ':' + second
            } else {
                return y + '-' + m + '-' + d
            }
        },
        // 年月日转化成时间戳
        getStampDate(date) {
            let stamp = new Date(date).getTime() / 1000
            return stamp
        },
        // 时间戳转化成中国标准时间格式
        getSimpleDate(date) {
            let dd = new Date(date)
            return dd
        }

    }

}
</script>

<style lang="less" scoped>
.dateConversion {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 210px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

    }
}
</style>