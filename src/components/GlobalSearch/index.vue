<template>
    <div class="global">
        <el-dialog :visible.sync="dialogVisible" width="30%" :show-close="false">
            <div class="globalSearch">
                <div class="search">
                    <el-input ref="search" placeholder="搜索文档" prefix-icon="el-icon-search" v-model="search" clearable>
                    </el-input>
                </div>
                <div class="content">
                    <ul class="search_list" v-if="operationList.length > 0">
                        <li class="search_item" v-for="(item, index) in operationList" :key="index"
                            @click="skipTo(item)">
                            <div style="display: flex; align-items: center;">
                                <i class="el-icon-document-checked fs18"></i>
                                <div class="ml8">{{ item.name }}</div>
                            </div>
                            <div class="skip">
                                <i class="el-icon-back fs18 mt2"></i>
                            </div>
                        </li>
                    </ul>
                    <ul class="search_list" v-if="searchHistory.length > 0">
                        <div class="search_history">搜索历史</div>
                        <li class="search_item" v-for="(item, index) in searchHistory" :key="index"
                            @click="skipTo(item, '2')">
                            <div style="display: flex; align-items: center;">
                                <i class="el-icon-refresh-left fs18" style="margin-top: 3px;"></i>
                                <div class="ml8">{{ item.name }}</div>
                            </div>
                            <div class="skip_history">
                                <i class="el-icon-star-off fs18 mt2 round" @click.stop="collectHistory(item)"></i>
                                <i style="margin-top: 2px; margin-left: 5px;" class="el-icon-close fs18 mt2 round"
                                    @click.stop="closeHistory(item)"></i>
                            </div>
                        </li>
                    </ul>
                    <ul class="search_list" v-if="collect.length > 0">
                        <div class="search_history">收藏</div>
                        <li class="search_item" v-for="(item, index) in collect" :key="index"
                            @click="skipTo(item, '2')">
                            <div style="display: flex; align-items: center;">
                                <i class="el-icon-star-off fs18" style="margin-top: 3px;"></i>
                                <div class="ml8">{{ item.name }}</div>
                            </div>
                            <div class="skip_history">
                                <i style="margin-top: 2px; margin-left: 5px;" class="el-icon-close fs18 mt2 round"
                                    @click.stop="closeCollectHistory(item)"></i>
                            </div>
                        </li>
                    </ul>
                    <div class="empty" v-if="isFlag">没有搜索历史</div>
                </div>
            </div>
            <div class="footer">
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { flattTree, antiShake } from '@/utils/index'
export default {
    props: {
        isSearch: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            search: '',
            operationList: [],
            searchHistory: [],//搜索历史
            collect: [],//收藏
            // isFlag: true,
        }
    },
    computed: {
        dialogVisible: {
            get() {
                return this.isSearch;
            },
            set(val) {
                this.$emit('update:visible', val);
            }
        },
        isFlag() {
            if (this.operationList.length == 0 && this.searchHistory.length == 0 && this.collect.length == 0) {
                return true;
            }
        }

    },
    watch: {
        //监听是否打开，自动聚焦
        dialogVisible(newValue, oldValue) {
            if (newValue) {
                this.$nextTick(() => {
                    this.$refs.search.focus();
                    this.search = '';
                })
            }
        },
        //监听输入框值的变化
        search() {
            this.replace();
        },
        searchHistory() {

        },


    },
    created() {
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        this.collect = JSON.parse(localStorage.getItem('collect')) || [];
    },
    mounted() {

    },
    methods: {
        //搜索防抖
        replace: antiShake(function () {
            this.globalSearch()
        }, 300),
        globalSearch() {
            const langData = flattTree(JSON.parse(JSON.stringify(this.$t('routerNavigation'))));
            if (this.search == '') {
                this.operationList = [];
                return
            }
            this.operationList = langData.filter(item => {
                return item.name.indexOf(this.search) != -1;
            })
        },
        skipTo(val, num) {
            if (!num) {
                let valCopy = val;
                valCopy.identification = true;
                let array = this.searchHistory.findIndex(item => item.id == valCopy.id);
                if (array == '-1') {
                    this.searchHistory.push(valCopy);
                    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
                }
            }
            this.$emit('update:skipTo', val)
        },
        //删除历史记录
        closeHistory(val) {
            let historyCoppy = JSON.parse(localStorage.getItem('searchHistory'));
            let copy = historyCoppy.filter(item => {
                return item.id != val.id;
            });
            localStorage.setItem('searchHistory', JSON.stringify(copy));
            this.searchHistory = copy;
            // if (this.searchHistory.length == 0) {
            //     this.isFlag = true;
            // }
        },
        //收藏历史记录
        collectHistory(val) {
            this.searchHistory = this.searchHistory.filter(item => item.id != val.id)
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
            let array = this.collect.findIndex(item => item.id == val.id);
            if (array == '-1') {
                this.collect.push(val);
                localStorage.setItem('collect', JSON.stringify(this.collect))
            }
            // if (this.collect.length > 0) {
            //     this.isFlag = false;
            // }
            console.log('this.collect---', this.collect);
        },
        //删除收藏记录
        closeCollectHistory(val) {
            let collectCopy = JSON.parse(localStorage.getItem('collect'));
            let copy = collectCopy.filter(item => {
                return item.id != val.id;
            });
            localStorage.setItem('collect', JSON.stringify(copy));
            this.collect = copy;
            // if (this.collect.length < 0) {
            //     this.isFlag = true;
            // }
        }
    }

}
</script>

<style lang="less" scoped>
.global {
    .globalSearch {
        padding: 30px 20px 0;

        .search {}

        .content {
            .search_list {
                margin-top: 20px;

                .search_history {
                    margin: 7px 0;
                    color: #409eff;
                }

                .search_item {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    margin-bottom: 5px;
                    background-color: #fff;
                    border-radius: 4px;
                    box-shadow: 0 1px 3px 0 #d4d9e1;
                    padding-left: 10px;
                    padding-right: 10px;
                    justify-content: space-between;
                    cursor: pointer;

                    .fs18 {
                        font-size: 18px;
                    }

                    .ml8 {
                        margin-left: 8px;
                    }

                    .mt2 {
                        margin-top: 2px;
                    }

                    .skip {
                        display: none;
                    }
                }

                .search_item:hover {
                    background-color: #409eff;
                }

                .search_item:hover .fs18 {
                    color: #fff;
                }

                .search_item:hover .ml8 {
                    color: #fff;
                }

                .search_item:hover .skip {
                    display: block;
                }

                .round:hover {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, .2);
                    transition: background-color .1s ease-in;
                }
            }

            .empty {
                height: 80px;
                text-align: center;
                line-height: 80px;
                color: #909399;
                font-size: 16px;
            }
        }
    }

    .footer {
        height: 44px;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, .12);

    }

    ::v-deep .el-dialog__wrapper {
        background-color: rgba(255, 255, 255, 0.5) !important;
    }

    ::v-deep .el-dialog__header {
        padding: 0 !important;
    }

    ::v-deep .el-dialog {
        border-radius: 8px;
        background: #fafafa;
    }

    ::v-deep .el-dialog__body {
        padding: 0 !important;
    }
}

ul {
    list-style: none;
    padding: 0 !important;
}
</style>