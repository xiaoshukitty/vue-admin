<template>
  <div class="mistake">
    <transition name="show-unlock">
      <div class="mistake_info">
        <h2>抱歉</h2>
        <h3>当前页面不存在。</h3>
        <div>请检查您输入的网址是否正确，或点击下面的按钮返回首页。</div>
        <el-button type="primary" @click="goToHome">返回首页</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.mistake {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/404.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -20%;
  position: relative;

  .mistake_info {
    position: absolute;
    right: 0;
    top: 30%;
    animation: unlock-in .8s linear;


    .el-button {
      margin-top: 40px;
    }
  }
}

@keyframes unlock-in {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>