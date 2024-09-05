<template>
    <div class="scrollText">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.ScrollText') }}</span>
            </div>
            <div class="scroll-top"
                :style="{ 'background-color': backgroundColor, 'border': borderColor, 'background-color': backgroundColor }">
                <div class="scroll-icon">
                    <i class="el-icon-bell" :style="{ 'color': fontSizeColor }"></i>
                </div>
                <div class="scroll-hide">
                    <div class="headers-middle">
                        <ScrollTextComponent :message="message" :duration="duration" :fontSizeColor="fontSizeColor"
                            :borderColor="borderColor" :backgroundColor="backgroundColor" />
                    </div>
                </div>
            </div>
            <div class="theme mt20">
                <div>主题配置</div>
                <el-radio-group v-model="tabPosition" style="margin-top: 15px;" @input="tabClick">
                    <el-radio-button label="primary">默认</el-radio-button>
                    <el-radio-button label="success">成功</el-radio-button>
                    <el-radio-button label="warning">警告</el-radio-button>
                    <el-radio-button label="danger">危险</el-radio-button>
                    <el-radio-button label="info">信息</el-radio-button>
                </el-radio-group>
            </div>
            <div class="mt20">
                <div>滚动时长配置（s）</div>
                <el-input-number v-model="duration" label="描述文字" style="margin-top: 15px;"></el-input-number>
            </div>
        </el-card>

    </div>
</template>

<script>
import ScrollTextComponent from "./components/ScrollTextComponent";
export default {
    data() {
        return {
            message: '1vue内容横向循环滚动_vue文字横向滚动公告2vue内容横向循环滚动_vue文字横向滚动公告3vue内容横向循环滚动_vue文字横向滚动公告4vue内容横向循环滚动_vue文字横向滚动公告',
            duration: 10,
            tabPosition: 'primary',
            fontSizeColor: '#409eff',
            borderColor: '1px solid  #409eff',
            backgroundColor: '#ecf5ff',
        }
    },
    components: {
        ScrollTextComponent
    },
    methods: {
        tabClick(e) {
            switch (e) {
                case 'primary':
                    this.fontSizeColor = '#409eff';
                    this.borderColor = '1px solid  #409eff';
                    this.backgroundColor = '#ecf5ff';
                    break;
                case 'success':
                    this.fontSizeColor = '#67c23a';
                    this.borderColor = '1px solid  #67c23a';
                    this.backgroundColor = '#f0f9eb';
                    break;
                case 'warning':
                    this.fontSizeColor = '#e6a23c';
                    this.borderColor = '1px solid  #e6a23c';
                    this.backgroundColor = '#fdf6ec';
                    break;
                case 'danger':
                    this.fontSizeColor = '#f56c6c';
                    this.borderColor = '1px solid  #f56c6c';
                    this.backgroundColor = '#fef0f0';
                    break;
                case 'info':
                    this.fontSizeColor = '#909399';
                    this.borderColor = '1px solid  #909399';
                    this.backgroundColor = '#f4f4f5';
            }
        },
    }
}
</script>

<style lang="less" scoped>
.scrollText {
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

        .scroll-top {
            width: 100%;
            height: 40px;
            border-radius: 10px;
            display: flex;
            overflow: hidden;


            .scroll-icon {
                width: 50px;
                height: 40px;

                i {
                    font-size: 25px;
                    line-height: 40px;
                    margin-left: 10px;
                }
            }

            .scroll-hide {
                overflow: hidden;
                // padding: 0 20px;
                width: calc(100% - 50px);

                .headers-middle {
                    height: 40px;
                    line-height: 40px;
                }
            }
        }

        .theme {
            margin-top: 20px;
        }

    }

    .mt20 {
        margin-top: 20px;
    }
}
</style>