<template>
    <!-- 自定义树形穿梭框组件、理论上左右均可选择是否为树形结构，目前固定为左侧树形、右侧无层级结构 -->
    <div class="tree-transfer">
        <!-- 穿梭框左侧 -->
        <div class="tree-transfer-left">
            <!-- 左侧采用element-ui的el-tree -->
            <el-tree ref="treeLeft" :data="dataLeft" show-checkbox node-key="id" :props="defaultProps">
            </el-tree>
        </div>
        <!-- 穿梭框中间按钮区域 -->
        <div class="tree-transfer-middle">
            <el-button circle type="info" icon="el-icon-arrow-left" @click="remove"></el-button>
            <el-button circle type="info" icon="el-icon-arrow-right" @click="add"></el-button>
        </div>
        <!-- 穿梭框右侧 -->
        <div class="tree-transfer-right">
            <!-- 右侧直接放置结果 -->
            <!-- 这里也采用tree结构，默认是对数据进行处理使得没有树形结构，也可以选择有树形结构 -->
            <el-tree ref="treeRight" :data="dataRight" show-checkbox node-key="id" :props="defaultProps">
            </el-tree>
        </div>
    </div>
</template>

<script>
export default {
    props: ['datas', 'defaultProps'],
    data() {
        return {
            yuansiData: [],
            dataLeft: [],
            dataRight: []
        }
    },
    mounted() {
        this.dataLeft = this.datas
        this.yuansiData = JSON.parse(JSON.stringify(this.datas))
    },
    methods: {
        add() {
            // 定义一个递归过滤的方法，用来删掉父级中给的元素
            // 获取所有选中的项并且去掉父级
            let list = this.$refs.treeLeft.getCheckedNodes()
            // 走原始数据中删掉已经选择的
            // 1.父级的删除
            const parList = list.filter(item => {
                return item.parameterInfoList
            })
            for (let item1 of parList) {
                let index = this.dataLeft.findIndex(item2 => {
                    return item2.id == item1.id
                })
                if (index >= 0) {
                    this.dataLeft.splice(index, 1)
                }
            }
            // 2.子级的删除
            list = list.filter((item => {
                return !item.parameterInfoList
            }))
            // 这里做了三重循环，如果有可能需要对其进行优化
            for (let item of list) {
                for (let ind in this.dataLeft) {
                    if (this.dataLeft[ind].parameterInfoList.length) {
                        let index = this.dataLeft[ind].parameterInfoList.findIndex(item2 => {
                            return item2.id == item.id
                        })
                        if (index >= 0) {
                            this.dataLeft[ind].parameterInfoList.splice(index, 1)
                        }
                    }
                }
            }
            this.$refs.treeLeft.setCheckedNodes([])
            // 将选择的项添加到右侧
            this.dataRight.push(...list)
        },
        remove() {
            // 从右侧移除时的方法
            // 1.从右侧删除选中的数据
            let list = this.$refs.treeRight.getCheckedNodes()
            for (let item of list) {
                let index = this.dataRight.findIndex(item2 => {
                    return item.id == item2.id
                })
                if (index >= 0) {
                    this.dataRight.splice(index, 1)
                }
            }
            // 2.把右侧删除的数据添加给左侧,但是要注意父级的问题
            this.dataLeft = JSON.parse(JSON.stringify(this.yuansiData))
            for (let index in this.dataLeft) {
                // 如果有子级去删除子级
                for (let item of this.dataRight) {
                    let ind = this.dataLeft[index].parameterInfoList.findIndex(item2 => {
                        return item2.id == item.id
                    })
                    if (ind >= 0) {
                        this.dataLeft[index].parameterInfoList.splice(ind, 1)
                    }
                }
                this.dataLeft = this.dataLeft.filter(item2 => {
                    return item2.parameterInfoList.length != 0
                })
            }
        },
        getResult() {
            return this.dataRight
        }
    }
}
</script>

<style scoped lang="less">
.tree-transfer {
    display: flex;
    min-height: 250px;

    .tree-transfer-left {
        min-width: 200px;
        border: 1px #E5E5E5 solid;
        border-radius: 10px;
        padding: 10px;
    }

    .tree-transfer-middle {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 120px;
    }

    .tree-transfer-right {
        min-width: 200px;
        border: 1px #E5E5E5 solid;
        border-radius: 10px;
        padding: 10px;
    }
}
</style>