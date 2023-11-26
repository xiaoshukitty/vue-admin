<template>
  <div class="container">
    <div class="header">
      <I18nComponents :status="'hover'" />
      <div class="full_screen header_hover" @click="toggleFullScreen">
        <el-tooltip class="item" effect="dark" :content="$t('headerList.name')" placement="bottom">
          <img class="header_img" src="@/assets/images/fullScreen.png" alt="">
        </el-tooltip>
      </div>
      <div class="avatar header_hover">
        <el-popover placement="bottom" width="167" trigger="click" v-model="visiblePopover">
          <div class="avatar_select">
            <div v-for="(item, index) in $t('avatarList')" :key="index" @click="open">{{ item.value
            }}</div>
          </div>
          <img class="header_img round" src="@/assets/images/avatar1.jpg" alt="" slot="reference">
        </el-popover>
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
import I18nComponents from '@/components/i18nComponents'
export default {
  components: {
    I18nComponents
  },
  data() {
    return {
      ipt: '',
      // operationList,
      langName: '简体中文',
      visiblePopover: false,
    }
  },
  created() {
    //禁止返回登录页面
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
    });


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
      console.log('item', item);
      this.$router.push(item.path)
    },
    _isMobile() {
      if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        console.log('手机端')
      } else {
        console.log('pc端')
      }
    },
    //全屏
    toggleFullScreen() {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    },
    //退出登录
    open() {
      this.$confirm(this.$t('headerList.ConfirmToExitTheSystem') + '?', this.$t('headerList.Reminder'), {
        confirmButtonText: this.$t('headerList.Ok'),
        cancelButtonText: this.$t('headerList.Cancel'),
        type: 'warning'
      }).then(() => {
        this.logOut();
      }).catch(() => {
      });
    },
    logOut() {
      localStorage.clear();
      sessionStorage.clear();
      setTimeout(() => {
        this.$router.push('./')
        this.$message({
          type: 'success',
          message: this.$t('headerList.HasSuccessfullyExited'),
        });
      }, 1000)
    }
  },

}
</script>

<style lang="less" scoped>
.container {

  .header {
    display: flex;
    justify-content: flex-end;
    height: 50px;
    line-height: 50px;
    padding-right: 100px;
    border-bottom: 1px solid #eee;
    background-color: #fff !important;

    >div {
      padding: 0 10px;
    }

    .header_hover:hover {
      background-color: #f6f6f6 !important;
    }

    .round {
      border-radius: 50%;
    }

    .header_img {
      width: 30px;
      height: 30px;
      margin-top: 10px;
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

    /deep/ .el-button {
      padding: 8px 15px;
    }

    .m5 {
      margin: 5px;
    }
  }

}

.avatar_select {
  div {
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  div:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  color: rgba(0, 0, 0, 0.88);
}

.paint {
  color: #1677ff;
  background-color: #e6f4ff;
}

.paint:hover {
  background-color: #bae0ff !important;
}

/deep/ .el-popover {
  padding: 5px !important;
}
</style>
