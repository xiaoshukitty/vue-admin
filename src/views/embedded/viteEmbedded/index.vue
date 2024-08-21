<template>
    <div class="vite">
        <iframe :src="iframeUrl" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iframeUrl: 'https://cn.vitejs.dev/', // 你想要嵌入的网页URL
        };
    },
};
</script>

<style lang="less" scoped>
.vite{
    height: 100vh;
}
</style>