<template>
    <div class="editHeadPortrait">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.UpdateProfilePhoto') }}</span>
            </div>
            <el-row style="padding: 40px;">
                <el-col :span="10">
                    <div class="square">
                        <vueCropper ref="cropper" :img="option.img" :outputSize="option.size"
                            :outputType="option.outputType" :auto-crop="option.autoCrop" @realTime="realTime"
                            :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight"
                            :fixed-box="option.fixedBox" :centerBox="option.centerBox">
                        </vueCropper>
                        <div class="btn">
                            <el-button icon="el-icon-upload">{{ $t('headerList.UploadPictures') }}</el-button>
                            <el-button icon="el-icon-plus" @click="updateSize(1)"></el-button>
                            <el-button icon="el-icon-minus" @click="updateSize(-1)"></el-button>
                            <el-button icon="el-icon-refresh-right" @click="turnRight"></el-button>
                            <el-button icon="el-icon-refresh-left" @click="turnLeft"></el-button>
                            <el-button icon="el-icon-download"></el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="circle">
                        <div class="circle_img">
                            <img :src="showHeadPortrait" />
                        </div>
                        <div class="btn">
                            <el-button type="primary" @click="selectImg">{{ $t('headerList.SelectImage') }}</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
    data() {
        return {
            option: {
                // 需要剪裁的图片
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc03a255b-2dee-4ec6-afd3-9b5ca0af9d55%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704179189&t=a72a2ed0072b536679b7325ed87d3d37',
                size: 1,
                outputType: 'png',
                autoCropWidth: 200, // 默认生成截图框的宽度
                autoCropHeight: 200, // 默认生成截图框的长度
                fixedBox: true,// 是否固定截图框的大小 不允许改变
                autoCrop: true, // 是否默认生成截图框
                centerBox: true,//截图框是否被限制在图片里面

            },
            previews: {}, // 裁剪之后的结果
            showHeadPortrait: '',
        }
    },
    components: {
        VueCropper
    },
    methods: {
        // 裁剪之后的数据
        realTime(data) {
            this.previews = data;
            this.$refs.cropper.getCropData(data => { //获取截图的 base64 数据
                this.showHeadPortrait = data
            });
            this.$refs.cropper.getCropBlob(data => {//获取截图的 blob 数据
                console.log(data)
            })
        },
        //放大和缩小
        updateSize(val) {
            val = val || 1;
            this.$refs.cropper.changeScale(val)
        },
        //左转
        turnLeft() {
            this.$refs.cropper.rotateLeft()
        },
        // 右转
        turnRight() {
            this.$refs.cropper.rotateRight()
        },
        //选择图片
        selectImg() {
            this.$refs.cropper.getCropData(data => {
                localStorage.setItem('PICTURE', data);
                this.$store.commit('updateProfilePhoto', {
                    profilePhoto: data
                })
            });
        },

    }
}
</script>

<style lang="less" scoped>
.editHeadPortrait {
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

        .square {
            width: 500px;
            height: 500px;

            .btn {
                margin-top: 20px;
            }
        }

        .circle {
            .circle_img {
                width: 500px;
                height: 500px;

                img {
                    border-radius: 50%;
                    padding: 100px;
                }
            }

            .btn {
                margin-top: 20px;
                margin-left: 50%;
                transform: translateX(-50%);
            }

        }
    }

    /deep/ .el-input__inner {
        // width: 240px;
    }
}
</style>