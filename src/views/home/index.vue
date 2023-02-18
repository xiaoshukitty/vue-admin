<template>
  <div class="container">
    <div class="search_list">
      <el-input placeholder="请输入要搜索的内容" v-model="ipt" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <div class="max_height" v-if="operationList.length > 0">
      <el-button class="m5" type="primary" v-for="(item, index) in operationList" :key="index"
        @click="skip(item, index)">{{
          item.name }}</el-button>
    </div>
    <el-empty v-else image="https://img.fphdcdn.com/member/2023-02-17QzWz4neFMa.png" description="爱情是没有结果的哦！"></el-empty>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ipt: '',
      operationList: [
        { name: '验证码', path: 'verificationCode' },
        { name: '地图', path: 'elMap' },
        { name: 'QQ地图', path: 'qqMap' },
        { name: '原生拖拽', path: 'drag' },
        { name: 'vuedraggable拖拽', path: 'vuedraggable' },
        { name: '树形', path: 'tree' },
        { name: '虚拟列表(固定高度)', path: 'virtual' },
        { name: '虚拟列表(不固定高度)', path: 'virtualList' },
        { name: 'canvas绘图,生成二维码海报', path: 'canvas' },
        { name: '图片预览(js)', path: 'imgPreview' },
        { name: '打印', path: 'print' },
        { name: '复制', path: 'copy' },
        { name: '条形码', path: 'barCode' },
        { name: 'vuex', path: 'vuex' },
        { name: '常用表格-copy', path: 'tableSearch' },

        { name: 'test', path: 'test' },
      ],
    }
  },
  created() {

  },
  watch: {
    ipt() {
      this.search()
    },
  },
  methods: {
    search() {
      if (this.ipt == '') {
        this.operationList = [
          { name: '验证码', path: 'verificationCode' },
          { name: '地图', path: 'elMap' },
          { name: 'QQ地图', path: 'qqMap' },
          { name: '原生拖拽', path: 'drag' },
          { name: 'vuedraggable拖拽', path: 'vuedraggable' },
          { name: '树形', path: 'tree' },
          { name: '虚拟列表(固定高度)', path: 'virtual' },
          { name: '虚拟列表(不固定高度)', path: 'virtualList' },
          { name: 'canvas绘图,生成二维码海报', path: 'canvas' },
          { name: '图片预览(js)', path: 'imgPreview' },
          { name: '打印', path: 'print' },
          { name: '复制', path: 'copy' },
          { name: '条形码', path: 'barCode' },
          { name: 'vuex', path: 'vuex' },
          { name: '常用表格-copy', path: 'tableSearch' },
        ]
      } else {
        let newList = JSON.parse(JSON.stringify(this.operationList))
        this.operationList = newList.filter((item, index) => {
          return item.name.indexOf(this.ipt) != -1;
        })
      }
    },
    skip(item, index) {
      this.$router.push(item.path)
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: 100px 200px;

  .search_list {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    /deep/ .el-input-group {
      width: 300px !important;
    }
  }

  .max_height {
    max-height: 350px;
    overflow: scroll;

    .m5 {
      margin: 5px;
    }
  }

}
</style>
