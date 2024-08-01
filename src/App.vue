<template>
  <div id="app" onselectstart="return false;">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>


<script>

export default {
  mounted() {

    let that = this;
    document.addEventListener('visibilitychange', function () {
      if (document[state] === 'hidden') {
        console.log('已离开当前页面')
      } else if (document[state] === 'visible') {
        console.log('123213123123')
        that.$notify({
          title: '尊敬的小小舒，欢迎回来',
          // message: '右下角弹出的消息',
          position: 'bottom-right',
          type: 'success'
        });
      }
    });
    setTimeout(() => {
      // 移除 Loading 效果
      const appContainer = document.querySelector('#app');
      const loadingContainer = document.querySelector('#loading-mask');
      loadingContainer && appContainer.removeChild(loadingContainer);
    }, 1000)
  },
}
</script>

<style lang="less">
body {
  margin: 0;
}

/** 去掉页面滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}


//滚动条外观设置
//滚动条背景宽度
// ::-webkit-scrollbar{
//     width: 10px;
// }
// //滚动条背景色
// ::-webkit-scrollbar-track{
//     background-color: $base-menu-background;
// }
// //滚动条样式
// ::-webkit-scrollbar-thumb{
//     width: 10px;
//     background-color: yellow;
//     border-radius: 10px;
// }</style>
