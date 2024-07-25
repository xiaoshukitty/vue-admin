<template>
    <div class="scroll-wrapper">
        <div class="text-container"
            :style="{ 'animation-duration': duration + 's', 'color': fontSizeColor, }">
            <div class="scroll-text">{{ message }}</div>
            <!-- 如果需要循环滚动，可以复制p标签内容 -->
            <!-- <p>{{ message }}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'HorizontalScroll',
    props: {
        message: String,
        duration: {
            type: Number,
            default: 10, // 默认滚动时间为10秒
        },
        fontSizeColor: {
            type: String,
            default: '#409eff' // 默认字体颜色为白色
        },
    },
};
</script>

<style lang="less" scoped>
.scroll-wrapper {
    overflow: hidden;
    white-space: nowrap;
}

.text-container {
    display: inline-block;
    animation-name: scroll;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: 1s;

    /* 延迟开始滚动 */
    .scroll-text {
        padding-left: 10%;
    }

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes scroll {
    0% {
        transform: translate3d(0%, 10, 0);
    }

    100% {
        transform: translate3d(-100%, 0, 0);
    }
}
</style>