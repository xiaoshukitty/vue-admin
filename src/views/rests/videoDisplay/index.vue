<template>
    <div class="videoDisplay">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.VideoDisplay') }}</span>
            </div>
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :options="playerOptions"
                @ready="handleReady" @start="handleStart" @play="handlePlay" @pause="handlePause" @ended="handleEnded"
                @error="handleError" @timeupdate="handleTimeUpdate" @volumechange="handleVolumeChange"></video-player>
                <!-- <video class="aspect-video w-full" :src="mvUrl" autoplay controls/> -->
        </el-card>
    </div>
</template>

<script>
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
        }
    },
    mounted() {

        // 通过 ref 访问 videoPlayer 组件实例
        // this.$refs.videoPlayer.player.load()
        // this.$refs.videoPlayer.player.play()
    },
    methods: {
        //视频播放器准备好时触发
        handleReady(player) {
            console.log('视频播放器准备好时触发',player);
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
        .video-player{
            width: calc(100% / 1.3);
        }

    }
}
</style>