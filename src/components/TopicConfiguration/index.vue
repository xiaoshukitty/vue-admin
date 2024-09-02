<template>
    <div class="TopicConfiguration">
        <el-drawer title="主题配置" :visible.sync="themeSwitch" :direction="direction">
            <div class="content">
                <div class="content-list">
                    <div class="content-item" v-for="(item, index) in themelist" :key="index">
                        <div class="content-item-title">{{ item.themeName }}</div>
                        <div class="content-item-switch">
                            <el-switch v-model="item.switchValue" active-color="#41b584" inactive-color="#dcdfe6"
                                @change="switchChange(item)">
                            </el-switch>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="footer-btn">
                    <el-button type="success" @click="save">保存</el-button>
                    <el-button>恢复默认</el-button>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { setLocalStorage } from '@/utils/storage'
export default {
    props: {
        drawer: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        themeSwitch: {
            get() {
                return this.drawer
            },
            set(val) {
                this.$emit('update:drawer', val)
            }
        },
        ...mapGetters(['getThemeDataStore']),
    },
    watch: {
        getThemeDataStore(newVal, oldVal) {
            // setLocalStorage('ThemeStore', newVal)
        }
    },
    data() {
        return {
            direction: 'rtl',
            value: false,
            themelist: [{
                themeName: '导航',
                switchValue: false,
                refValue: 'elSelectGuide',
            }, {
                themeName: '搜索',
                switchValue: false,
                refValue: 'GlobalSearch',
            }, {
                themeName: '锁屏',
                switchValue: false,
                refValue: 'lockScreenGuide',
            }, {
                themeName: '刷新',
                switchValue: false,
                refValue: 'refreshGuide',
            }, {
                themeName: '消息',
                switchValue: false,
                refValue: 'notificationGuide',
            }, {
                themeName: '语言',
                switchValue: false,
                refValue: 'i18nGuide',
            }, {
                themeName: '全屏',
                switchValue: false,
                refValue: 'fullScreenGuide',
            }]
        }
    },
    mounted() {
        let mapThemelist = this.$store.state.themeDataStore;

        for (let i = 0; i < this.themelist.length; i++) {
            for (let j = 0; j < mapThemelist.length; j++) {
                if (this.themelist[i].refValue === mapThemelist[j]) {
                    this.themelist[i].switchValue = true;
                }
            }
        };
        // let setVal = ['elSelectGuide', 'GlobalSearch', 'lockScreenGuide', 'refreshGuide', 'notificationGuide', 'i18nGuide', 'fullScreenGuide']
        // setLocalStorage('ThemeStore', setVal)
    },
    methods: {
        ...mapMutations(['updateThemeDataStore']),
        switchChange(item) {
            let mapThemelist = this.$store.state.themeDataStore;
            let isShow = mapThemelist.indexOf(item.refValue);
            if (item.switchValue) {
                if (isShow === -1) {
                    mapThemelist.push(item.refValue);
                    this.updateThemeDataStore(mapThemelist);
                }
            } else {
                if (isShow !== -1) {
                    mapThemelist.splice(isShow, 1);
                    this.updateThemeDataStore(mapThemelist);
                }
            }
        },
        //关闭
        save() {
            this.$emit('update:drawer', false)
        }
    }
}
</script>

<style lang="less" scoped>
.TopicConfiguration {
    .content {
        padding: 20px;

        .content-list {
            .content-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 50px;

                .content-item-title {
                    font-size: 14px;
                    color: #333;
                }

                .content-item-switch {
                    ::v-deep .el-switch__core {
                        width: 40px !important;
                        height: 20px;
                        border-radius: 10px;
                    }

                    ::v-deep .el-switch__core::after {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: #fff;
        border-top: 1px solid #ccc;

        .footer-btn {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 0 20px;

            ::v-deep .el-button--success {
                background-color: #41b584 !important;
                border-color: #41b584 !important;
            }
        }
    }
}
</style>