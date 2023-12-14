<template>
  <div class="notepad">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t('headerList.Share') }}</span>
      </div>
      <div>
        <el-calendar v-model="value">
        </el-calendar>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style lang="less" scoped>
.notepad {
  padding: 20px;

  .box-card {
    width: 100%;
    height: calc(100vh - 140px);

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }

  }
}
</style>