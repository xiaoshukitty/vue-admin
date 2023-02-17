<template>
  <div class="container">
    <el-button class="m5" type="primary" @click="$router.push('/verificationCode')">验证码</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/elMap')">地图</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/qqMap')">QQ地图</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/drag')">原生拖拽</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/vuedraggable')">vuedraggable拖拽</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/tree')">树形</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/virtual')">虚拟列表(固定高度)</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/virtualList')">虚拟列表(不固定高度)</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/canvas')">canvas绘图,生成二维码海报</el-button>
    <el-button class="m5" type="primary" @click="$router.push('/imgPreview')">图片预览(js)</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.container {
  padding: 100px 200px;

  .m5 {
    margin: 5px;
  }
}
</style>