<template>
    <div class="RecordRoute">
        <!-- <el-tag v-for="(item, index) in recordRoute" :key="item.id" effect="dark">
            <i class="el-icon-star-on"></i>
            <span>{{ item.name }}</span>
        </el-tag> -->
        <div v-for="(item, index) in recordRoute" :key="item.id" :class="['tag', activeIndex == item.id ? 'active' : '']">
            <i v-if="activeIndex == item.id" class="el-icon-star-on"></i>
            <span>{{ item.name }}</span>
            <i v-if="item.id != 0" class="el-icon-close" @click="closeRoute(item)"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecordRoute',
    props: {
        routerList: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            recordRoute: [
                {
                    name: '首页',
                    path: 'module',
                    id: '0',
                    router: '/children',
                    icon: 'el-icon-monitor',
                },
            ],
            activeIndex: 0,
            activeItem: {}
        }
    },
    watch: {
        routerList(newValue, oldValue) {

            let flag = this.deWeight(this.recordRoute, newValue)
            this.activeIndex = newValue.id;
            this.activeItem = newValue;
            if (flag == 1) {
                this.recordRoute.push(newValue)
            }

        },
    },
    methods: {
        closeRoute(val) {
            let flag = this.recordRoute.indexOf(this.activeItem);
            let delFlag = this.recordRoute.indexOf(val);
            let copyRecordRoute = JSON.parse(JSON.stringify(this.recordRoute))
            this.recordRoute = copyRecordRoute.filter(item => {
                return item.id != val.id
            })
           
            console.log(' this.recordRoute---222', this.recordRoute);
            if (flag == delFlag) {
                let Obj = this.recordRoute[this.recordRoute.length - 1];
                this.activeIndex = this.recordRoute[this.recordRoute.length - 1].id;
                this.$emit('updataRouter', Obj)
            }
            console.log(' this.recordRoute---', this.recordRoute);
        },
        deWeight(arr, newArr) {
            for (let i = 0; i <= arr.length; i++) {
                if (JSON.stringify(arr[i]) == JSON.stringify(newArr)) {
                    return -1
                }
            }
            return 1
        },

    }
}
</script>

<style lang="less" scoped>
.RecordRoute {
    box-sizing: border-box;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #eee;

    .tag {
        padding: 0 10px;
        cursor: pointer;
        border: 1px solid #d8dce5;
        color: rgb(153, 153, 153);
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        margin-left: 10px;

        .el-icon-close {
            margin-left: 5px;
        }
    }

    .active {
        background-color: yellowgreen;
        color: #fff;
    }
}
</style>