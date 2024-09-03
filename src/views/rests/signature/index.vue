<template>
    <div class="slider_verification">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.Signature') }}</span>
            </div>
            <canvas width="600" height="400" id="canvas" style="margin: 20px;display: block;border: 1px solid #ccc;"
                @mousemove="xie" @mousedown="startXie" @mouseup="endXie"></canvas>
            <el-dialog :visible.sync="open" width="600px" :show-close="false">
                <img :src="imgURLs" id='ylimg' width="400" height="400" />
            </el-dialog>
            <div class="btn">
                <el-button @click="clearContext">{{ $t('headerList.Eliminate') }}</el-button>
                <!-- <el-button @click="preview">预览</el-button> -->
                <el-button @click="downloadIamge">{{ $t('headerList.Download') }}</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import { downloadIamgeFun, } from '@/utils'
export default {
    data() {
        return {
            xieState: false,//是否处于书写状态
            canvas: null,
            context: null,
            xieX: 0,
            xieY: 0,
            open: false,
            imgURLs: '',//预览图片
        }
    },
    methods: {
        startXie(e) {
            this.xieState = true
            this.canvas = document.getElementById('canvas')
            this.context = this.canvas.getContext('2d')
            this.xieX = e.pageX - 260
            this.xieY = e.pageY - 222
        },
        xie(e) {
            if (!this.xieState)
                return
            if (this.context != null) {
                let x = e.pageX - 260
                let y = e.pageY - 222
                this.context.beginPath()
                this.context.moveTo(this.xieX, this.xieY);
                this.context.lineTo(x, y);
                this.context.stroke();
                this.xieX = x
                this.xieY = y
            }
        },
        endXie() {
            this.xieState = false
        },
        clearContext() {
            this.context.clearRect(0, 0, 600, 400)
        },
        preview() {
            this.open = true
            if (this.canvas == null)
                this.canvas = document.getElementById('canvas')
            this.imgURLs = this.canvas.toDataURL('image/png')
        },
        // 下载图片
        downloadIamge() {
            this.canvas = document.getElementById('canvas')
            this.imgURLs = this.canvas.toDataURL('image/png')
            console.log(this.imgURLs);
            var fileName = new Date().getTime() + ".png";
            downloadIamgeFun(this.imgURLs, fileName);
        },
    }
}
</script>
<style lang="less" scoped>
.slider_verification {
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

    .btn {
        padding: 0 20px;
    }
}
</style>