<template>
    <div class="chatWebSocket">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3 style="margin: 0 auto;">WebSocket 聊天室：</h3>
            </div>
            <div class="chat">
                <div class="wrapper">
                    <div class="conversation">
                        <div class="conversation-start">
                            <span>Today, 5:38 PM</span>
                        </div>
                        <div class="bubble you">
                            喂，能听到我说话吗?
                        </div>
                        <div class="bubble you">
                            你吃饭了吗?
                        </div>
                        <div class="bubble me">
                            嗯，我在吃东西。
                        </div>
                        <div class="bubble me">
                            你呢?
                        </div>
                        <div class="bubble you">
                            我在想你。
                        </div>
                        <div class="bubble you">
                            你有没有发现，我好像有点喜欢上你了。
                        </div>
                        <div class="bubble me">
                            ...
                        </div>
                        <div class="bubble me">
                            嗯，我在吃东西。
                        </div>
                        <div class="bubble me">
                            你呢?
                        </div>
                        <div class="bubble you">
                            我在想你。
                        </div>
                        <div class="bubble you">
                            你有没有发现，我好像有点喜欢上你了<img :src="'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + '1' + '.gif'" alt="">
                        </div>
                        <div class="bubble me">
                            ...
                        </div>
                    </div>
                    <div class="write">
                        <a href="javascript:;" class="write-link attach"></a>
                        <el-input class="msg-ipt" type="text" v-model="msg" placeholder="请输入内容" />
                        <a href="javascript:;" class="write-link smiley" @click="OpenEmotions"></a>
                        <a href="javascript:;" class="write-link send" @click="sendMsg"></a>
                    </div>
                    <div class="emoji" v-show="isEmoji">
                        <Emotion ref="EmotionB" @AppendInputValue="AppendMessageText" />
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import Emotion from '@/components/Emotion/index.vue'
export default {
    components: {
        Emotion
    },
    data() {
        return {
            msg: '',
            isEmoji: false,
            emoji: '',
        }
    },
    methods: {
        sendMsg() {
            console.log('发送消息：', this.msg);
        },
        // 打开表情包弹框
        OpenEmotions: function () {
            this.isEmoji = !this.isEmoji;
            if (this.isEmoji) {
                this.$refs.EmotionB.OpenEmotion(true);
            } else {
                this.$refs.EmotionB.OpenEmotion(false);
            }

        },
        //表情选中后追加在input
        AppendMessageText: function (EmotionChinese) {
            this.isEmoji = false;
            this.msg += EmotionChinese;
        }
        // 展示的时候正则匹配替换汉字表情为gif动图标签即可。
        // 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + i + '.gif'
    }
}
</script>

<style lang="less" scoped>
.emoji {
    padding: 8px 0;
    position: absolute;
    bottom: 72px;
    left: calc(44.5% - 20px);
    height: 17vh;
    width: 55.5%;
    background-color: var(--white);
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid var(--light);
    z-index: 1000;
}

.chatWebSocket {
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

        .chat {
            position: relative;
            top: 0;
            left: 0;
            height: 100%;

            .wrapper {
                position: relative;
                left: 50%;
                width: 50%;
                height: calc(100vh - 250px);
                background-color: #fff;
                transform: translateX(-50%);
                border: 1px solid var(--light);

                .conversation {
                    height: calc(100% - 100px);
                    padding: 0 35px;
                    overflow: hidden;
                    overflow-y: scroll;

                    .conversation-start {
                        position: relative;
                        width: 100%;
                        margin: 27px 0;
                        text-align: center;

                        span {
                            font-size: 14px;
                            display: inline-block;
                            color: var(--grey);

                            &:before,
                            &:after {
                                position: absolute;
                                top: 10px;
                                display: inline-block;
                                width: 30%;
                                height: 1px;
                                content: '';
                                background-color: var(--light);
                            }

                            &:before {
                                left: 0;
                            }

                            &:after {
                                right: 0;
                            }
                        }
                    }

                    .bubble {
                        font-size: 16px;
                        position: relative;
                        display: inline-block;
                        clear: both;
                        margin-bottom: 8px;
                        padding: 13px 14px;
                        vertical-align: top;
                        border-radius: 5px;
                        display: flex;
                        align-items: center;

                        &:before {
                            position: absolute;
                            top: 19px;
                            display: block;
                            width: 8px;
                            height: 6px;
                            content: '\00a0';
                            transform: rotate(29deg) skew(-35deg);
                        }

                        &.you {
                            float: left;
                            color: var(--white);
                            background-color: var(--blue);
                            align-self: flex-start;
                            animation-name: slideFromLeft;

                            &:before {
                                left: -3px;
                                background-color: var(--blue);
                            }
                        }

                        &.me {
                            float: right;
                            color: var(--dark);
                            background-color: #eceff1;
                            align-self: flex-end;
                            animation-name: slideFromRight;

                            &:before {
                                right: -3px;
                                background-color: #eceff1;
                            }
                        }
                    }
                }


                .write {
                    position: absolute;
                    bottom: 29px;
                    left: 30px;
                    height: 42px;
                    padding-left: 8px;
                    border: 1px solid var(--light);
                    background-color: #eceff1;
                    width: calc(100% - 58px);
                    border-radius: 5px;

                    input {
                        font-size: 16px;
                        float: left;
                        width: calc(100% - 110px);
                        height: 40px;
                        padding: 0 10px;
                        color: var(--dark);
                        border: 0;
                        outline: none;
                        background-color: #eceff1;
                        @include font;
                    }

                    .msg-ipt {
                        float: left;
                        height: 42px;
                        width: calc(100% - 90px);

                        /deep/ .el-input__inner {
                            height: 42px !important;
                            border: none;
                            background-color: #eceff1 !important;

                        }
                    }

                    .write-link {
                        &.attach {
                            &:before {
                                display: inline-block;
                                float: left;
                                width: 20px;
                                height: 42px;
                                content: '';
                                background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png');
                                background-repeat: no-repeat;
                                background-position: center;
                            }
                        }

                        &.smiley {
                            &:before {
                                display: inline-block;
                                float: left;
                                width: 20px;
                                height: 42px;
                                content: '';
                                background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png');
                                background-repeat: no-repeat;
                                background-position: center;
                            }
                        }

                        &.send {
                            &:before {
                                display: inline-block;
                                float: left;
                                width: 20px;
                                height: 42px;
                                margin-left: 11px;
                                content: '';
                                background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png');
                                background-repeat: no-repeat;
                                background-position: center;
                            }
                        }
                    }
                }

            }
        }

    }

    @keyframes slideFromLeft {
        0% {
            margin-left: -200px;
            opacity: 0;
        }

        100% {
            margin-left: 0;
            opacity: 1;
        }
    }

    @-webkit-keyframes slideFromLeft {
        0% {
            margin-left: -200px;
            opacity: 0;
        }

        100% {
            margin-left: 0;
            opacity: 1;
        }
    }

    @keyframes slideFromRight {
        0% {
            margin-right: -200px;
            opacity: 0;
        }

        100% {
            margin-right: 0;
            opacity: 1;
        }
    }

    @-webkit-keyframes slideFromRight {
        0% {
            margin-right: -200px;
            opacity: 0;
        }

        100% {
            margin-right: 0;
            opacity: 1;
        }
    }
}
</style>