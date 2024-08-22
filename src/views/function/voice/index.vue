<template>
    <div class="voice">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.SpeechSynthesis') }}</span>
            </div>
            <div class="voice-ipt">
                <div style="margin: 10px;">文本</div>
                <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
                </el-input>
            </div>

            <div class="voice-select">
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">
                    </el-option>
                </el-select>
            </div>

            <div class="voice-controls">
                <el-button type="success" @click="speakClick">{{ isFlag ? '恢复' : '播放' }}</el-button>
                <el-button type="warning" @click="pauseVoicelClick">暂停</el-button>
                <el-button type="info" @click="finishClick">结束</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import { speak, pauseVoice, stopVoice, resumeVoice, changeLanguage } from '@/utils/voicePrompt'
export default {
    data() {
        return {
            textarea: '黄河之水天上来，奔流到海不复回',
            options: [
                //     {
                //     value: '1',
                //     label: 'en-AU'
                // },
                //  {
                //     value: '2',
                //     label: 'en-US'
                // },
                {
                    value: '3',
                    label: 'zh-CN'
                }
            ],
            value: 'zh-CN',
            isFlag: false,
        }
    },
    methods: {
        speakClick() {
            if (!this.isFlag) {
                speak(this.textarea, this.value); //第一个是播放的话，第二个是语言
            } else {
                resumeVoice();
                this.isFlag = false;
            }
        },
        //暂停
        pauseVoicelClick() {
            this.isFlag = true;
            pauseVoice();
        },
        //结束
        finishClick() {
            stopVoice();
        }
    }
}
</script>

<style lang="less" scoped>
.voice {
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

        .voice-ipt {
            width: 400px;
        }

        .voice-controls,
        .voice-select {
            margin: 20px 0;
        }
    }
}

::v-deep.el-select-dropdown__item {
    padding: 0 20px !important;
}
</style>