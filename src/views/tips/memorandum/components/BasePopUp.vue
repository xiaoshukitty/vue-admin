<template>
    <el-dialog :title="title" :visible.sync="dialogOrder" width="30%" :append-to-body="true" :close-on-click-modal="true">
        <div class="pop_up">
            <div class="container">
                <div class="w80">请输入时间</div>
                <div>
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期">
                    </el-date-picker>
                </div>
            </div>
            <div class="container">
                <div class="w80">请选择当前天气</div>
                <div style="flex:1">
                    <div class="list">
                        <div v-for="(item, index) in weatherList" :key="index"
                            :class="['item', item.id == ind ? 'selectItem' : '']" @click="selectItem(item)">
                            {{ item.weather }}
                        </div>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="w80">请输入当前内容</div>
                <div style="flex:1">
                    <el-input v-model="form.content" type="textarea" :rows="3" placeholder="请输入当前内容"></el-input>
                </div>
            </div>
            <div class="btn">
                <el-button @click="operationUserInfo" type="primary">{{ isShow ? '添加' : '更新' }}</el-button>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import { addMemoList, updataMemoList } from '@/server/common'
import { weatherList } from '../enumList'
import { timestampConversion } from '@/utils/index'
export default {
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        updataInfoVisible: {
            type: Object,
            default: () => { }
        },
        visibleType: {
            type: String,
            default: ""
        }
    },
    name: 'BasePopUp',
    data() {
        return {
            form: {
                date: "",
                content: ""
            },
            weatherList,
            ind: "-1",
        }
    },
    watch: {
        updataInfoVisible(newValue) {
            console.log(newValue)
            const { create_date, weather, content, id } = newValue;
            this.form = {
                date: new Date(create_date),
                content: content,
                id: id
            }
            this.ind = weatherList.find(item => item.weather == weather).id
        },
        visibleType(newValue) {
            console.log('newValue---', newValue)
            newValue == 'add' ? this.init() : ""
        }
    },
    computed: {
        dialogOrder: {
            get() {
                return this.dialogVisible;
            },
            set(val) {
                this.$emit('update:visible', val);
            }
        },
        isShow() {
            return this.visibleType == 'add' ? true : false
        }
    },
    methods: {
        init() {
            this.form = {
                date: "",
                content: ""
            };
            this.ind = '-1'
        },
        operationUserInfo() {
            this.isShow ? this.addMemorandumInfo() : this.updateMemoInfo();
        },
        async addMemorandumInfo() {
            let aaa = timestampConversion(this.form.date, 1);
            let params = {
                create_date: aaa,
                weather: this.weatherList[Number(this.ind)].weather,
                content: this.form.content,
            }
            const res = await addMemoList(params)
            try {
                this.$message.success('添加备忘录信息成功')
                setTimeout(() => {
                    this.$emit('update:visible', false)
                    this.init();
                }, 500)
            } catch {
                throw new Error("No Data");
            }
        },
        async updateMemoInfo() {
            console.log('更新');
            let aaa = timestampConversion(this.form.date, 1);
            let params = {
                create_date: aaa,
                weather: this.weatherList[Number(this.ind)].weather,
                content: this.form.content,
                id: this.form.id
            }
            const res = await updataMemoList(params)
            try {
                this.$message.success('甜心用户数据成功')
                setTimeout(() => {
                    this.$emit('update:visible', false)
                }, 500)
            } catch {
                throw new Error("No Data");
            }
        },
        selectItem({ id }) {
            this.ind = id;
        },
    }
}
</script>
<style lang="less" scoped>
.pop_up {
    .container {
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        .w80 {
            width: 100px;
            margin-right: 30px;
        }

        .list {
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;

            .item {
                margin: 5px 5px 0 0;
                padding: 10px 20px;
                background-color: #fff;
                border: 1px solid #DCDFE6;
            }

            .selectItem {
                background-color: #409EFF;
                color: #fff;
            }
        }
    }

    .btn {
        margin-top: 20px;
        text-align: right;
    }
}

/deep/ .el-dialog__header {
    background-color: #f7f8fa;
}
</style>