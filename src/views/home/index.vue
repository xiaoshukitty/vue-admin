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
import { operationList } from '@/utils/routerList'
export default {
  data() {
    return {
      ipt: '',
      operationList,
    }
  },
  created() {
    var resizeTimer = null;
    window.addEventListener('resize', function () {
      let clientWidth = document.documentElement.clientWidth
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        console.log(clientWidth);
        if (clientWidth < 750) {
          console.log('进入了移动端')
        } else {
          console.log('不在移动端');
        }
      }, 100);
    })
  },
  watch: {
    ipt() {
      // this.search()
      this.antiShake(this.search, 500)
    },
  },
  methods: {
    antiShake(fn, wait) {
      let timeOut = null;
      if (timeOut) clearTimeout(timeOut)
      timeOut = setTimeout(fn, wait)
    },
    search() {
      if (this.ipt == '') {
        this.operationList = operationList;
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
    _isMobile() {
      if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        console.log('手机端')
      } else {
        console.log('pc端')
      }
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
