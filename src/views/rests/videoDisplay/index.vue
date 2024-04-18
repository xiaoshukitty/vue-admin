<template>
    <div class="videoDisplay">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.VideoDisplay') }}</span>
            </div>
            <div class="video_box">
                <!-- <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :options="playerOptions"
                    @ready="handleReady" @start="handleStart" @play="handlePlay" @pause="handlePause"
                    @ended="handleEnded" @error="handleError" @timeupdate="handleTimeUpdate"
                    @volumechange="handleVolumeChange"></video-player> -->
                <!-- <video class="aspect-video w-full" :src="mvUrl" autoplay controls/> -->
                <div id="dplayer" class="video-player"></div>
                <div class="video_introduce">
                    <el-button class="video_download" type="primary" plain
                        @click="videoDownload(playerOptions)">{{ $t('headerList.Download') }}</el-button>
                </div>
            </div>

        </el-card>
    </div>
</template>

<script>
import { getVideoArrayBuffer } from '@/utils/index';

// 插件地址：https://dplayer.diygod.dev/
import DPlayer from 'dplayer';
export default {
    data() {
        return {
            // mvUrl:require('@/assets/video/dance.mp4')
        }
    },
    computed: {
        playerOptions() {
            const playerOptionsObj = {
                // 视频 url
                sources: [{
                    src: require('@/assets/video/dance.mp4'),
                    type: 'video/mp4'
                }],
                // 其他设置项
                autoplay: true,//视频将在加载完成后自动播放
                controls: true,//将显示控制条（播放/暂停、音量、进度条等控件）
                poster: '',//设置视频封面
                playbackRates: [0.5, 1, 1.5, 2], //倍数
                language: 'zh-CN', // 语言
                aspectRatio: '16:9',// 比例
                muted: true,//设置为true时，视频将被静音播放,开启才会自动播放，浏览器限制不能开启声音自动播放
                loop: false,// 是否重新播放
                fluid: true, // 流体布局，根据容器大小自动调整尺寸
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                },
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            }
            return playerOptionsObj
        },
    },
    mounted() {
        const dp = new DPlayer({
            container: document.getElementById('dplayer'),
            autoplay: false,//视频自动播放
            theme: '#FADFA3',//主题色
            loop: false,//视频循环播放
            lang: 'zh-cn',//可选值: 'en', 'zh-cn', 'zh-tw'
            screenshot: true,//开启截图，如果开启，视频和视频封面需要允许跨域
            hotkey: true,//开启热键，支持快进、快退、音量控制、播放暂停
            preload: 'auto',//视频预加载，可选值: 'none', 'metadata', 'auto'
            logo: require('@/assets/images/avatar1.jpg'), //视频logo图
            volume: 0.7, //默认音量
            mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
            // 视频信息 设置
            video: {
                url: require('@/assets/video/dance.mp4'), //视频链接
                pic:require('@/assets/images/avatar1.jpg'),//视频封面
            },

            // 外挂字幕 设置
            subtitle: {
                url: '', //字幕链接
                type: 'webvtt',//'webvtt'	字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
                fontSize: '25px',//字幕字号
                bottom: '10%',//字幕距离播放器底部的距离，取值形如: '10px' '10%'
                color: '#b7daff',//字幕颜色
            },

            // 显示弹幕 设置
            // danmaku: { 
            // id: '9E2E3368B56CDBB4',
            // api: 'https://api.prprpr.me/dplayer/',
            // token: 'tokendemo',
            // maximum: 1000,
            // addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
            // user: 'DIYgod',
            // bottom: '15%',
            // unlimited: true,
            // speedRate: 0.5,
            // },

            // 自定义右键菜单 设置
            // contextmenu: [
            // {
            //     text: 'custom1',
            //     link: 'https://github.com/DIYgod/DPlayer',
            // },
            // {
            //     text: 'custom2',
            //     click: (player) => {
            //         console.log(player);
            //     },
            // },
            // ],

            // 自定义进度条提示点 设置
            highlight: [
                {
                    time: 20,
                    text: '这是第 20 秒',
                },
                {
                    time: 120,
                    text: '这是 2 分钟',
                },
            ],
        });
        // 通过 ref 访问 videoPlayer 组件实例
        // this.$refs.videoPlayer.player.load()
        // this.$refs.videoPlayer.player.play()
    },
    methods: {
        // 视频下载
        videoDownload({ sources }) {
            const { src } = sources[0];
            getVideoArrayBuffer(src, 'downloadTest')
        },
        //视频播放器准备好时触发
        handleReady(player) {
            console.log('视频播放器准备好时触发', player);
        },
        //视频开始播放时触发
        handleStart() {
            console.log('视频开始播放时触发');
        },
        //视频播放时触发
        handlePlay() {
            console.log('视频播放时触发');
        },
        //视频暂停时触发
        handlePause() {
            console.log('视频已暂停');
        },
        //视频播放结束时触发
        handleEnded() {
            console.log('视频播放结束');
        },
        //视频出错时触发
        handleError(e) {
            console.log('视频出错', e);
        },
        //视频播放时间更新时触发
        handleTimeUpdate(currentTime) {
            console.log('当前播放时间:', currentTime);
        },
        //视频音量变化时触发
        handleVolumeChange() {
            console.log('视频音量变化时触发');
        },
    }
}
</script>

<style lang="less" scoped>
.videoDisplay {
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

        .video_box {
            display: flex;
            height: calc(100vh - 240px);
            .video-player {
                // width: calc(100% / 1.3);
                width: 70%;
            }

            .video_introduce {
                width: 30%;
                text-align: left;
                margin: 20px;

                .video_download {}

                .video_minification {}
            }
        }

    }
}

::v-deep .dplayer-video {
    height: calc(100vh - 240px);
}
</style>