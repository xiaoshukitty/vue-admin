<template>
  <div id="particles"></div>
</template>

<script>

export default {
  mounted() {
    let particlesJson = require('../../utils/particles.json')
    particlesJS('particles', particlesJson,);
    console.log('测试-----测试');
  }
}
</script>

<style lang="less" scoped>
#particles {
  position: absolute;
  width: calc(100% - 200px);
  height:calc(100vh - 100px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>