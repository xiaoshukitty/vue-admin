<template>
    <div class="chatWebSocket">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3 style="margin: 0 auto;">WebSocket 聊天室：</h3>
            </div>
            <div class="chat">
                <div class="wrapper">
                    <div class="conversation" ref="chatContainer">
                        <div class="conversation-start">
                            <span>Today, 5:38 PM</span>
                        </div>
                        <div v-for="(item, index) in messages" :key="index">
                            <div class="bubble you" v-if="item.type !== 'you'">
                                <span v-for="(msg, i) in item.chatMsg" :key="i">
                                    <div v-html="msg"></div>
                                </span>
                            </div>
                            <div class="bubble me" v-else>
                                <!-- {{ item.chatMsg }} -->
                                <span v-for="(msg, i) in item.chatMsg" :key="i">
                                    <div v-html="msg"></div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="write">
                        <a href="javascript:;" class="write-link attach"></a>
                        <el-input class="msg-ipt" ref="iptFocus" type="text" v-model="msg" placeholder="请输入内容" @keyup.enter.native="sendMsg"/>
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
            username: '',
            message: '',
            messages: [],
            ws: null
        }
    },
    created() {
    },
    watch: {
        messages() {
            this.$nextTick(() => {
                const chatContainer = this.$refs.chatContainer;
                chatContainer.scrollTop = chatContainer.scrollHeight;
            });
        }
    },
    mounted() {
        this.connectWebSocket();
    },
    methods: {
        //连接 webscoket
        connectWebSocket() {
            this.ws = new WebSocket('ws://localhost:3000');
            this.ws.onmessage = this.onMessage;
            this.ws.onclose = this.onClose;
            this.ws.onopen = this.onOpen;
        },
        onMessage(event) {
            const EmotionList = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭',
                '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱',
                '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘',
                '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼',
                '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒',
                '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹',
                '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引',
                '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手',
                '激动', '街舞', '献吻', '左太极', '右太极'
            ]
            this.messages.push(JSON.parse(event.data));
            this.messages.forEach(item => {
                if (this.containsNestedBrackets(item.chatMsg)) {
                    const res = item.chatMsg;
                    let arr = this.splitByNestedBrackets(res);
                    //拿表情在表情库里面的索引
                    let index = EmotionList.findIndex(item => item == this.takeValue(res));
                    for (let i = 0; i < arr.length; i++) {
                        if (this.containsNestedBrackets(arr[i])) {
                            arr[i] = "<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/" + index + ".gif' />"

                        } else {
                            arr[i] = '<span>' + arr[i] + '</span>'
                        }
                    }
                    item.chatMsg = arr
                }
            })
        },
        onClose() {
            console.log('WebSocket 连接已关闭,请重新连接...');
            setTimeout(this.connectWebSocket, 1000);
        },
        onOpen() {
            console.log('WebSocket 连接已建立');
        },
        sendMsg() {
            if (this.msg == '') {
                this.$message.error('消息不能为空');
                return;
            }
            // 发送消息
            let userMsg = {
                userId: '234567',
                chatMsg: this.msg,
                type: 'my',
                timestamp: new Date().getTime()
            }
            this.ws.send(JSON.stringify(userMsg));
            this.msg = '';
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
            this.$refs.iptFocus.focus();
        },
        // 展示的时候正则匹配替换汉字表情为gif动图标签即可。
        // 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + i + '.gif'


        //分割接受到的消息
        splitByNestedBrackets(str) {
            // 使用捕获组匹配 [[...]]
            const regex = /(\[\[.*?\]\])/;
            // 使用正则表达式进行分割
            return str.split(regex).filter(Boolean);
        },
        //判断消息中是否有表情包
        containsNestedBrackets(str) {
            const regex = /\[\[.*?\]\]/;
            return regex.test(str);
        },
        //拿[[]] 中的值
        takeValue(res) {
            // 使用 match 方法来获取所有匹配的内容
            const regex = /\[\[(.*?)\]\]/g;
            const matches = res.match(regex);
            let val;
            matches.map(match => {
                // 使用捕获组 $1 获取 [[...]] 中的内容
                val = match.replace(/^\[\[|\]\]$/g, '')

            });
            return val;
        }
    },
    destroyed() {
        this.onClose();
    },
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