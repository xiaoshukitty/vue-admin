<template>
    <div class="digitalAnimation">
        <div class="ipt">
            <div class="w180">
                <el-input v-model="startMoeny" placeholder="开始金额" type="number"></el-input>
            </div>
            <div class="line">
                -
            </div>
            <div class="w160">
                <el-input v-model="endMoeny" placeholder="结束金额" type="number"></el-input>
            </div>
            <el-button type="primary" plain @click="initiate">开始</el-button>
            <el-button type="primary" plain @click="clear">清空</el-button>
        </div>
        <div class="show">
            {{ showNumber }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            startMoeny: '',
            endMoeny: '',
            showNumber: '',
        }
    },
    watch: {
        startMoeny(newValue, oladValue) {
            this.showNumber = newValue;
        }
    },
    methods: {
        initiate() {
            this.animations(2000, Number(this.startMoeny), Number(this.endMoeny), (val) => {
                this.showNumber = val.toFixed(2);
            });
        },
        animations(duration, from, to, onProgress) {
            let value = from;
            //速度
            const speed = (to - from) / duration;
            //开始时间
            const start = Date.now();

            //让 value 前进一点
            //目前的点在于 = 起点 + 时间(开始运动到现在的时间) * 速度 
            function _run() {
                //改变 value 的值
                //时间
                const t = Date.now() - start;
                if (t >= duration) {
                    value = to;
                    onProgress(value);
                    return
                }
                value = from + t * speed;
                onProgress(value);
                //注册一下次的改变
                requestAnimationFrame(_run);
            }
            _run();
        },
        //清空
        clear() {
            this.startMoeny = '';
            this.endMoeny = '';
            this.showNumber = '';
        }
    }
}
</script>

<style lang="less" scoped>
.digitalAnimation {
    .ipt {
        display: flex;

        .w160 {
            width: 160px;
        }

        .line {
            line-height: 40px;
            margin: 0 20px;
        }

        .el-button {
            margin-left: 20px;
        }
    }

    .show {
        font-size: 50px;
        margin: 50px;
    }
}
</style>