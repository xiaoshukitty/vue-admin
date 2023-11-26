<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

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
// }

</style>
