<template>
  <div class="vuedraggable">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t('headerList.VueDraggabble') }}</span>
      </div>
      <div class="container">
        <draggable :list="arrList" :disabled="!enabled" class="list-group" ghost-class="ghost" :move="checkMove"
          @start="onStart" @end="onEnd">
          <div class="box" v-for="item in arrList" :key="item.key">
            {{ item.item }}
          </div>
        </draggable>
      </div>
    </el-card>

  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      enabled: true,
      arrList: [
        { item: '第一块', key: '1' },
        { item: '第二块', key: '2' },
        { item: '第三块', key: '3' },
        { item: '第四块', key: '4' },
        { item: '第五块', key: '5' }
      ],
    };
  },
  components: {
    draggable
  },
  mounted() {
  },
  methods: {
    checkMove: function (e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    //拖拽开始
    onStart() {
    },
    //拖拽结束事件
    onEnd() {
      let that = this;
      console.log(that.arrList);
    },
  }
};
</script>
<style lang="less">
.vuedraggable {
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

    .container {
      margin: auto;
      width: 400px;

      .ghost {
        opacity: 0.5;
        background: #c8ebfb;
      }

      .list-group {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        width: 300px;

        .box {
          width: 400px;
          height: 140px;
          line-height: 140px;
          background: #d2d2d3;
          text-align: center;
          font-size: 18px;
          color: #ffffff;
          margin-bottom: 10px;
          cursor: move;
        }
      }
    }
  }


}
</style>
