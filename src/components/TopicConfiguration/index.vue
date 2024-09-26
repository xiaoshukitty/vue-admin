<template>
    <div class="TopicConfiguration">
        <el-drawer title="主题配置" :visible.sync="themeSwitch" :direction="direction">
            <div class="content">
                <div class="tab-border">
                    <ul class="tab-tilte">
                        <li v-for="(item, index) in tabs" :key="index" :class="{ active: tabIndex == index }"
                            @click="changeTab(index)">
                            <div>{{ item }}</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="content-list" v-if="tabIndex == 1">
                        <div class="content-item" v-for="(item, index) in themelist" :key="index">
                            <div class="content-item-title">{{ item.themeName }}</div>
                            <div class="content-item-switch">
                                <el-switch v-model="item.switchValue" active-color="#41b584" inactive-color="#dcdfe6"
                                    @change="switchChange(item)">
                                </el-switch>
                            </div>
                        </div>
                    </div>
                    <div class="content-list" v-if="tabIndex == 0">
                        <div class="built-theme">
                            <h3>内置主题</h3>
                            <div class="theme-color">
                                <div class="theme-list" v-for="(item, index) in themeColor" :key="index">
                                    <div class="theme-item"
                                        :style="{ border: colorIndex == index ? '1px solid' + ' ' +item.color : '' }"
                                        @click="colorChange(index)">
                                        <div class="theme-item-box" :style="{ background: item.color }"></div>
                                    </div>
                                    <div class="theme-text">{{ item.name }}</div>
                                </div>
                            </div>
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
            }],
            tabs: ['外观', '布局', '功能'],
            tabIndex: 0,
            themeColor: [
                { name: '默认', color: '#006be6' },
                { name: '紫罗兰', color: 'rgb(113, 102, 240)' },
                { name: '樱花粉', color: 'rgb(232, 74, 108)' },
                { name: '柠檬黄', color: 'rgb(239, 189, 72)' },
                { name: '天蓝色', color: 'rgb(78, 105, 253)' },
                { name: '浅绿色', color: 'rgb(11, 208, 146)' },
                { name: '锌色灰', color: 'rgb(63, 63, 70)' },
                { name: '深绿色', color: 'rgb(13, 148, 150)' },
                { name: '深蓝色', color: 'rgb(9, 96, 190)' },
                { name: '橙黄色', color: 'rgb(193, 66, 11)' },
                { name: '玫瑰红', color: 'rgb(187, 27, 27)' },
                { name: '中性色', color: 'rgb(64, 64, 64)' },
                { name: '石板灰', color: 'rgb(52, 66, 86)' },
                { name: '中灰色', color: 'rgb(56, 66, 82)' },
                { name: '自定义', color: 'rgb(223, 223, 223)' },
            ],
            colorIndex: 0,//当前选中颜色
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
        },
        //切换tab
        changeTab(ind) {
            this.tabIndex = ind;
        },
        //切换主题颜色
        colorChange(ind) {
            this.colorIndex = ind;
        }
    }
}
</script>

<style lang="less" scoped>
.TopicConfiguration {
    .content {
        padding: 1.25rem;

        .content-list {
            margin-top: .625rem;

            .content-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 3.125rem;

                .content-item-title {
                    font-size: .875rem;
                    color: #333;
                }

                .content-item-switch {
                    ::v-deep .el-switch__core {
                        width: 2.5rem !important;
                        height: 1.25rem;
                        border-radius: .625rem;
                    }

                    ::v-deep .el-switch__core::after {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }

            .built-theme {
                .theme-color {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    column-gap: .5rem;
                    row-gap: .5rem;
                    cursor: pointer;

                    .theme-list {
                        .theme-item {
                            padding: .8125rem 1.25rem;
                            border: .0625rem solid #e4e4e7;
                            border-radius: .625rem;

                            .theme-item-box {
                                width: 1.25rem;
                                height: 1.25rem;
                                border-radius: .3125rem;
                                margin: auto;
                            }
                        }
                    }

                    .theme-text {
                        text-align: center;
                        margin: .625rem 0;
                    }
                }
            }
        }

        .tab-border {
            background-color: #f4f4f5;
            padding: .3125rem;
            border-radius: .625rem;

            ul li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .tab-tilte {
                display: flex;
            }

            .tab-tilte li {
                flex: 1;
                padding: .5rem;
                text-align: center;
                background-color: #f4f4f5;
                border-radius: .625rem;
                cursor: pointer;
                transition: background-color 0.3s;
                color: #71717a;
                /* 添加过渡效果 */

            }

            /* 点击对应的标题添加对应的背景颜色 */
            .tab-tilte .active {
                background-color: #fff;
                color: #71717a;
                border-radius: .625rem;
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4.375rem;
        background: #fff;
        border-top: .0625rem solid #ccc;

        .footer-btn {
            height: 4.375rem;
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 0 1.25rem;

            ::v-deep .el-button--success {
                background-color: #41b584 !important;
                border-color: #41b584 !important;
            }
        }
    }
}

::v-deep .el-drawer__body {
    border-top: .0625rem solid #ccc;
}
</style>