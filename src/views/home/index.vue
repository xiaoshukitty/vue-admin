<template>
  <div class="container">
    <div class="language">
      <div class="language_select">
        <el-select v-model="langName" @change="changeLangUage">
          <el-option v-for="(item, index) in languageList" :key="index" :label="item.lanName" :value="item.lanCode">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="search_select">
      <!-- <div class="search_list">
        <el-input placeholder="请输入要搜索的内容" v-model="ipt" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div> -->
      <div class="max_height" v-if="$t('operationList').length > 0">
        <el-button class="m5" type="primary" v-for="(item, index) in $t('operationList')" :key="index"
          @click="skip(item, index)">{{
            item.name }}</el-button>
      </div>
      <el-empty v-else image="https://img.fphdcdn.com/member/2023-02-17QzWz4neFMa.png"
        description="爱情是没有结果的哦！"></el-empty>
    </div>
  </div>
</template>

<script>
// import { operationList } from '@/utils/routerList'
import { antiShake } from '@/utils'
export default {
  data() {
    return {
      ipt: '',
      // operationList,
      languageList: [
        {
          lanCode: 'zh-CN',
          lanName: '简体中文'
        },
        {
          lanCode: 'en-US',
          lanName: 'English',
        }
      ],
      langName: '简体中文',
    }
  },
  created() {
    console.log('测试')
    var resizeTimer = null;
    window.addEventListener('resize', function () {
      let clientWidth = document.documentElement.clientWidth
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        console.log(clientWidth);
        if (clientWidth < 750) {
          // console.log('进入了移动端')
        } else {
          // console.log('不在移动端');
        }
      }, 100);
    })
  },
  watch: {
    ipt() {
      this.replace()
    },
  },
  methods: {
    replace: antiShake(function () {
      this.search()
    }, 300),
    search() {
      console.log('答应了---')
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
    changeLangUage(lang) {
      if (lang == 'zh-CN') {
        this.$i18n.locale = 'zh-CN';
        this.langName = '简体中文';
      } else {
        this.$i18n.locale = 'en-US';
        this.langName = 'English';
      }
    }
  },
}
</script>

<style lang="less" scoped>
.container {
  padding: 50px 0;

  .language {
    display: flex;
    justify-content: flex-end;
    margin: 20px 70px;

    .language_select {
    }
  }

  .search_select {
    padding: 70px 200px;
  }

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
