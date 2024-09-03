<template>
  <div class="tree">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t("headerList.Tree") }}</span>
      </div>
      <div @click="goTo">
        <h2>其他</h2>
      </div>
      <div class="tranferbox">
        <div class="conbox1">
          <div class="titbox">
            <h2>未选择</h2>
          </div>
          <!-- <div class="titbox">
        <el-input size="mini" placeholder="搜索成员、部门" suffix-icon="el-icon-search" v-model="filterText"></el-input>
        </div> -->
          <div class="wordbox">
            <el-tree @check="getData" show-checkbox class="filter-tree" node-key="id" :data="data" :props="defaultProps"
              :filter-node-method="filterNode" ref="tree"></el-tree>
          </div>
        </div>
        <div class="conbox2">
          <div class="titbox">
            <h2>已选择用户（{{ keyarr.length }}）</h2>
          </div>
          <div class="wordbox">
            <ul>
              <li v-for="(item, index) in keyarr" :key="index">
                <div class="inli">
                  <i class="el-icon-s-custom"></i>
                  <span>{{ item.label }}</span>
                  <i class="el-icon-close" @click="removeData(item)"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div @click="click">点击</div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input3: "",
      checkList: [],
      keyarr: [],
      filterText: "",
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              id: 12,
              children: [
                {
                  id: 13,
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              id: 21,
              children: [
                {
                  id: 22,
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              id: 23,
              label: "二级 2-2",
              children: [
                {
                  id: 24,
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          id: 3,
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    goTo() {
      this.$router.push("./about");
    },

    //关键词搜索
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    getData() {
      this.keyarr = [];
      this.checkList = this.$refs.tree.getCheckedNodes();
      console.log(this.checkList);
      if (this.checkList.length != 0) {
        for (var i = 0; i < this.checkList.length; i++) {
          if (!this.checkList[i].children) {
            this.keyarr.push(this.checkList[i]);
            console.log(this.checkList[i]);
          }
          // console.log(this.checkList[i])
        }
      } else {
        this.keyarr = [];
      }
    },
    setCheckedNodes(arr) {
      this.$refs.tree.setCheckedNodes(arr);
    },
    removeData(data) {
      let checklist = this.keyarr;
      console.log(this.keyarr);
      for (var i = 0; i < checklist.length; i++) {
        if (checklist[i].label === data.label) {
          checklist.splice(i, 1);
        }
      }
      console.log(this.keyarr);
      this.keyarr = checklist;
      this.setCheckedNodes(this.keyarr);
    },
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