<template>
  <div class="tree">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t("headerList.Tree") }}</span>
      </div>
      <TreeTransfer ref="treeTransfer" :datas="data" :defaultProps="defaultProps"></TreeTransfer>
    </el-card>
  </div>
</template>
<script>
import TreeTransfer from './components/TreeTransfer'
export default {
  data() {
    return {
      data: [{
        id: 1,
        name: '一级 1',
        parameterInfoList: [{
          id: 4,
          name: '二级 1-1',
        }]
      }, {
        id: 2,
        name: '一级 2',
        parameterInfoList: [{
          id: 5,
          name: '二级 2-1'
        }, {
          id: 6,
          name: '二级 2-2'
        }]
      }, {
        id: 3,
        name: '一级 3',
        parameterInfoList: [{
          id: 7,
          name: '二级 3-1'
        }, {
          id: 8,
          name: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'parameterInfoList',
        label: 'name'
      },
    };
  },
  components: {
    TreeTransfer
  },
};
</script>

<style lang="less" scoped>
.tree {
  padding: 20px;

  .box-card {
    width: 100%;
    height: calc(100vh - 210px);

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }

    .tranferbox {
      display: flex;
    }

    .conbox1 {
      width: 200px;
    }
  }
}
</style>