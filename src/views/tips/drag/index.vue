<template>
  <div class="drag">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t('headerList.Drag') }}</span>
      </div>
      <div class="container">
        <div v-for="(item, index) in arrList" :key="index" draggable="true" @dragstart="drag($event, index)"
          @drop="drop($event, index)" @dragover="allowDrop($event)">
          {{ item.item }}
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      arrList: [{ item: '第一块' }, { item: '第二块' }, { item: '第三块' }, { item: '第四块' }, { item: '第五块' }]
    }
  },
  methods: {
    drag(event, index) {
      // console.log('event', event);
      // console.log('index', index);
      event.dataTransfer.setData("index", index);
    },
    drop(event, index) {
      let slet = this;
      event.preventDefault();
      let startIndex = parseInt(event.dataTransfer.getData("index"));
      let currentIndex = parseInt(index);
      console.log("选中的方块的位置---开始", startIndex);
      console.log("放在方块的位置---结束", currentIndex);

      if (startIndex - currentIndex > 0) { // 移动的位置在当前位置的上方
        console.log('11111');
        slet.arrList.splice(currentIndex, 0, slet.arrList[startIndex]);
        slet.arrList.splice(startIndex + 1, 1)
      } else if (startIndex - currentIndex < 0) {// 移动的位置在当前位置的下方
        console.log('2222');
        slet.arrList.splice(currentIndex + 1, 0, slet.arrList[startIndex]);
        slet.arrList.splice(startIndex, 1);
      } else {
        console.log("什么也不用做");
      }
      let parentdata = slet.arrList;
      console.log('parentdata:', parentdata);
    },
    allowDrop(event) {
      event.preventDefault();
    },
  }
}
</script>

<style lang="less" scoped>
.drag {
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

      div {
        width: 100%;
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
</style>