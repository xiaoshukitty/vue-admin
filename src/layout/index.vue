<template>
    <div class="home_page">
        <div class="left" ref="menuGuide">
            <div>
                <div v-if="!isCollapse">{{ $t('headerList.UserName') }}</div>
                <img v-else class="left_img" src="@/assets/images/avatar1.jpg" alt="">
            </div>
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" unique-opened :collapse="isCollapse"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                <template v-for="item in $t('routerNavigation')">
                    <el-submenu :index="item.id" v-if="item.children">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.name }}</span>
                        </template>
                        <div v-for="child in item.children" :key="child.id">
                            <el-menu-item v-if="item.children" @click="handleSelect(child)" :index="child.router">
                                {{ child.name }}
                            </el-menu-item>
                        </div>
                    </el-submenu>
                    <el-menu-item :index="item.router" v-else @click="handleSelect(item)">
                        <i :class="item.icon"></i>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="right">
            <!-- header头部 -->
            <div>
                <div class="head">
                    <div class="head_left">
                        <div class="take_back header_hover" @click="takeBack" ref="takeBackGuide">
                            <img src="@/assets/images/take_back.png" alt="">
                        </div>
                        <div style="color: #999;">
                            {{ text }}
                        </div>
                    </div>
                    <div class="header">
                        <div class="" ref="elSelectGuide">
                            <el-select ref="elSelect" style="width: 220px;" :value="valueTitle">
                                <el-option :value="valueTitle" :label="valueTitle" class="options">
                                    <el-tree id="tree-option" ref="selectTree" :data="options" :props="props"
                                        :node-key="props.value" :default-expanded-keys="defaultExpandedKey"
                                        @node-click="handleNodeClick" :highlight-current="true" accordion>
                                    </el-tree>
                                </el-option>
                            </el-select>
                        </div>
                        <div class="header_hover" ref="lockScreenGuide">
                            <el-tooltip class="item" effect="dark" :content="$t('headerList.LockScreen')"
                                placement="bottom">
                                <el-button icon="el-icon-lock" size="small" circle @click="lockScreen"></el-button>
                            </el-tooltip>
                        </div>
                        <div class="header_hover" ref="refreshGuide">
                            <el-tooltip class="item" effect="dark" :content="$t('headerList.Refresh')"
                                placement="bottom">
                                <el-button icon="el-icon-refresh-right" size="small" circle
                                    @click="updateRefsh"></el-button>
                            </el-tooltip>
                        </div>
                        <div class="header_hover location" ref="notificationGuide">
                            <el-popover placement="bottom" width="300" trigger="hover" ref="popover">
                                <el-tabs v-model="activeName">
                                    <el-tab-pane label="通知" name="inform">
                                        <div class="informs">
                                            <div class="informs_box" v-for="(item, index) in informsList" :key="index">
                                                <img :src="item.pic" alt="">
                                                <div>{{ item.name }}：</div>
                                                <div class="githubSkip" @click="githubSkip">点我</div>
                                            </div>
                                            <el-empty v-if="informsList.length == 0" description="描述文字"></el-empty>
                                        </div>
                                        <el-button icon="el-icon-circle-close"
                                            @click="clearInfo('informsList')">清空消息</el-button>
                                    </el-tab-pane>
                                    <el-tab-pane label="邮件" name="email">
                                        <div class="informs">
                                            <div class="informs_box" v-for="(item, index) in emailList" :key="index">
                                                <img :src="item.pic" alt="">
                                                <div>{{ item.name }}：</div>
                                            </div>
                                            <el-empty v-if="emailList.length == 0" description="描述文字"></el-empty>
                                        </div>
                                        <el-button icon="el-icon-circle-close"
                                            @click="clearInfo('emailList')">清空消息</el-button>
                                    </el-tab-pane>
                                </el-tabs>
                                <el-button icon="el-icon-bell" size="small" circle @click="inform" slot="reference">
                                </el-button>
                                <div class="circle" slot="reference" v-if="informsList.length != 0">{{
                    informsList.length }}
                                </div>
                            </el-popover>
                        </div>
                        <div ref="i18nGuide">
                            <I18nComponents :status="'hover'" />
                        </div>
                        <div class="full_screen header_hover" ref="fullScreenGuide"
                            @click="fullScreenShow ? toggleFullScreen() : exitFullscreen()">
                            <el-tooltip class="item" effect="dark"
                                :content="fullScreenShow ? $t('headerList.name') : $t('headerList.ExitFullScreen')"
                                placement="bottom">
                                <el-button icon="el-icon-full-screen" size="small" circle></el-button>
                            </el-tooltip>
                        </div>
                        <div class="avatar header_hover">
                            <el-popover placement="bottom" width="150" trigger="hover" v-model="visiblePopover">
                                <div class="avatar_select">
                                    <div v-for="(item, index) in $t('avatarList')" :key="index" @click="open">{{
                    item.value
                }}</div>
                                </div>
                                <div style="display: flex;" slot="reference">
                                    <img class="header_img round" :src="profilePhoto" alt="">
                                    <span style="font-size: 14px; margin-left: 5px; color: #606266;">{{
                    $t('headerList.UserName') }}</span>
                                </div>
                            </el-popover>
                        </div>
                    </div>
                </div>
                <div class="recordRouteList">
                    <!-- 路由块 -->
                    <div v-for="(item, index) in recordRouteList" :key="item.id"
                        :class="['tag', activeIndexRoute == item.id ? 'active' : '']" @click="routerSkip(item)">
                        <i v-if="activeIndexRoute == item.id" class="el-icon-star-on"></i>
                        <span>{{ item.name }}</span>
                        <i v-if="item.id != 0" class="el-icon-close" @click.stop="closeRoute(item)"></i>
                    </div>
                </div>
            </div>

            <div class="marin">

                <router-view v-if="flag" />
            </div>
        </div>

    </div>
</template>

<script>

import intro from 'intro.js';
import 'intro.js/minified/introjs.min.css';
import Cookies from "js-cookie";
import I18nComponents from '@/components/i18nComponents'
import { searchTree, searchTreeCertain } from '@/utils'
import { informsList, emailList } from '@/utils/falseData'
import { logout } from '@/server/common'
import { mapGetters, mapState } from 'vuex'
import { flattTree } from '@/utils/index'

export default {
    name: 'HomePage',
    components: {
        I18nComponents,
    },
    data() {
        return {
            isCollapse: false,
            activeIndex: this.$route.path,
            langName: '简体中文',
            visiblePopover: false,
            fullScreenShow: true,
            flag: true,
            profilePhoto: this.$store.state.profilePhoto,
            routerList: {},
            recordRouteList: [],
            activeIndexRoute: '0', //记录当前路由块的id
            activeItem: {},
            options: this.$t('routerNavigation'),
            valueTitle: '',
            valueId: '',
            props: {
                value: 'id',             // ID字段名
                label: 'name',         // 显示名称
                children: 'children'
            },
            defaultExpandedKey: [],//默认展开
            activeName: 'inform',
            informsList,
            emailList
        }
    },
    created() {

        this.$eventBus.$on('guide', this.guideProcedure); //引导页步骤
        this.$eventBus.$on('langEdit', this.langEditClick); //引导页步骤
        this.recordRouteList = this.$t('routerChunkI18n')
        console.log('this.recordRouteList----', this.recordRouteList);
        history.pushState(null, null, document.URL);
        window.addEventListener("popstate", function () {
            history.pushState(null, null, document.URL);
        });
        let routerGather = searchTreeCertain(this.$t('routerNavigation'), this.$route.path)
        this.routerPush(routerGather)
        this.isCollapse = localStorage.getItem('ISCOLLAPSE') == 'CLOSE' ? true : false;
    },
    mounted() {

    },
    watch: {
        getRefsh(newValue, OldValue) {
            //点击刷新组件销毁
            this.flag = false;
            // nextTick 响应式数据发生变化之后，获取更新之后的 dom。不要用延迟器不靠谱
            this.$nextTick(() => {
                this.flag = true;
            })
        },
        //监听 头像 是否变化
        getProfilePhoto(newValue, OldValue) {
            this.profilePhoto = newValue;
        },
        //监听 token 是否过期
        getTokenInvalidation(newValue, OldValue) {
            if (newValue) {
                this.tokenExpired();
            }
        },
    },
    computed: {
        ...mapGetters(['getRefsh', 'getProfilePhoto', 'getTokenInvalidation']),
        text() {
            return searchTree(this.$t('routerNavigation'), this.activeIndex)
        }
    },
    methods: {
        // token过期跳转
        tokenExpired() {
            this.$alert(this.$t('headerList.TokenExpired'), this.$t('headerList.Reminder'), {
                confirmButtonText: this.$t('headerList.Ok'),
                showClose: false,
                type: 'warning'
            }).then(() => {
                this.$store.commit('updateTokenInvalidation', {
                    isTokenInvalidation: false
                });

                sessionStorage.removeItem('TOKEN');
                localStorage.removeItem('USERINFO');
                sessionStorage.removeItem("TOKENINFO")
                sessionStorage.clear();
                this.$store.commit('setToken', {
                    token: ''
                })
                setTimeout(() => {
                    this.$router.push({ path: '/login', query: { redirect: this.$route.path } })
                    this.$notify({
                        title: this.$t('headerList.HasSuccessfullyExited'),
                        type: 'success'
                    });
                }, 1000)

            }).catch(() => {
            });
        },
        //横向导航设置
        langEditClick(lang) {
            if (this.recordRouteList[0].id != 0) {
                this.recordRouteList[0].push({
                    name: '首页',
                    path: 'home',
                    id: '0',
                    router: '/home',
                    icon: 'el-icon-monitor',
                })
            }
            const langData = flattTree(JSON.parse(JSON.stringify(this.$t('routerNavigation'))))
            for (let i = 0; i < langData.length; i++) {
                for (let j = 0; j < this.recordRouteList.length; j++) {
                    if (this.recordRouteList[j].id == langData[i].id) {
                        this.recordRouteList[j] = langData[i]
                    }
                }
            }
            this.options = this.$t('routerNavigation');
            let routerGather = langData.filter(item => {
                return item.id == this.valueId
            })
            this.valueTitle = routerGather[0].name;
        },

        //引导页
        guideProcedure(data) {
            intro()
                .setOptions({
                    steps: [{
                        title: this.$t('guide.Welcome'),
                        intro: this.$t('guide.GoToTheBootPage'),
                    },
                    {
                        title: this.$t('guide.Menu'),
                        element: this.$refs.elSelectGuide,
                        intro: this.$t('guide.QuickMenuSwitch'),
                    },
                    {
                        title: this.$t('guide.LockScreen'),
                        element: this.$refs.lockScreenGuide,
                        intro: this.$t('guide.TapTheLockScreenWhenYouLeave'),
                    },
                    {
                        title: this.$t('guide.Refresh'),
                        element: this.$refs.refreshGuide,
                        intro: this.$t('guide.RefreshIntroduce'),
                    },
                    {
                        title: this.$t('guide.Notification'),
                        element: this.$refs.notificationGuide,
                        intro: this.$t('guide.NotificationIntroduce'),
                    },
                    {
                        title: this.$t('guide.Language'),
                        element: this.$refs.i18nGuide,
                        intro: this.$t('guide.LanguageIntroduce'),
                    },
                    {
                        title: this.$t('guide.FullScreen'),
                        element: this.$refs.fullScreenGuide,
                        intro: this.$t('guide.FullScreenIntroduce'),
                    },
                    {
                        title: this.$t('guide.Minification'),
                        element: this.$refs.takeBackGuide,
                        intro: this.$t('guide.MinificationIntroduce'),
                    },
                    {
                        title: this.$t('guide.RouteMenu'),
                        element: this.$refs.menuGuide,
                        intro: this.$t('guide.RouteMenuIntroduce'),
                    },
                    ]
                })
                .start();
        },
        githubSkip() {
            window.open('https://github.com/xiaoshukitty/vue_test', '_blank');
        },
        //清空通知
        clearInfo(val) {
            if (val == 'informsList') {
                this.informsList = []
            } else {
                this.emailList = []
            }
            setTimeout(() => {
                this.$refs.popover.doClose()
            }, 500);
        },
        //el-tree 切换点击
        handleNodeClick(node) {
            if (node.children) {
                return
            }
            this.valueTitle = node.name;
            this.valueId = node.id;
            this.$router.push({ path: node.router })
            this.activeIndex = node.router;
            setTimeout(() => {
                this.$refs.elSelect.blur()
                this.routerPush(node)
            }, 50)


        },
        // 横向点击跳转路由
        routerSkip(val) {
            this.routerSkipChunk(val, 'flag');
        },
        // 删除指定横向路由块
        closeRoute(val) {
            let list
            this.recordRouteList.forEach(item => {
                if (item.id == this.activeIndexRoute) {
                    list = item
                }
            })
            let flag = this.recordRouteList.indexOf(list);
            let delFlag = this.recordRouteList.indexOf(val);

            let copyRecordRoute = JSON.parse(JSON.stringify(this.recordRouteList))
            this.recordRouteList = copyRecordRoute.filter(item => {
                return item.id != val.id
            })
            if (flag == delFlag || flag == -1) {
                let Obj = this.recordRouteList[this.recordRouteList.length - 1];
                this.activeIndexRoute = this.recordRouteList[this.recordRouteList.length - 1].id;
                this.routerSkipChunk(Obj)
            }
        },
        //路由块跳转方法
        routerSkipChunk(val, flag) {
            console.log('val', val);
            if (val.id == this.activeIndexRoute && flag == 'flag') {
                return
            }
            this.$router.push(val.router)
            this.activeIndexRoute = val.id;
            this.activeIndex = val.router;
            this.activeItem = val;
            this.changeTree(val);
        },
        deWeight(arr, newArr) {
            for (let i = 0; i <= arr.length; i++) {
                if (JSON.stringify(arr[i]) == JSON.stringify(newArr)) {
                    return -1
                }
            }
            return 1
        },
        //记录路由块
        routerPush(newValue) {
            console.log('newValue---', newValue);
            let flag = this.deWeight(this.recordRouteList, newValue)
            this.activeItem = newValue;
            this.activeIndexRoute = newValue.id;
            if (flag == 1) {
                this.recordRouteList.push(newValue)
            }
            this.changeTree(newValue);
        },
        //路由切换
        handleSelect(item) {
            console.log('---...', item.router);
            if (item.router == this.activeIndex) {
                return
            }
            this.activeIndex = item.router;
            this.routerPush(item)
        },
        //树形默认展示切换展示
        changeTree(newValue) {
            this.$nextTick(() => {
                // console.log('现在的节点',newValue.id);
                // console.log('上次的节点',this.defaultExpandedKey);

                //关闭 accordion 出现的多次节点展开问题
                if (this.defaultExpandedKey.length != 0) {
                    this.$refs.selectTree.store.nodesMap[this.defaultExpandedKey].expanded = false;
                }


                this.$refs.selectTree.setCurrentKey(newValue.id);
                this.$refs.selectTree.setCheckedKeys([newValue.id]);
                this.defaultExpandedKey = [newValue.id.charAt(0)];
                this.valueTitle = newValue.name;
                this.valueId = newValue.id;
            });
        },
        takeBack() {
            if (this.isCollapse) {
                this.isCollapse = false;
                localStorage.setItem('ISCOLLAPSE', 'OPEN')
            } else {
                this.isCollapse = true;
                localStorage.setItem('ISCOLLAPSE', 'CLOSE')
            }
            return
            this.isCollapse = !this.isCollapse;
        },
        //刷新
        updateRefsh() {
            let flag = this.$store.state.refsh;
            flag = !flag
            this.$store.commit('updateRefsh', {
                refsh: flag
            })
        },
        //锁屏
        lockScreen() {
            this.showUnlock = true;
            Cookies.set("last_page_lockscreen", this.$route.path); // 本地存储锁屏之前打开的页面以便解锁后打开
            setTimeout(() => {
                this.$router.push({
                    name: "lockscreen"
                });
            }, 800);
            Cookies.set("locking", "1");
        },
        //通知
        inform() {
            console.log('点击了通知');
        },
        //全屏
        toggleFullScreen() {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            this.fullScreenShow = false;
        },
        exitFullscreen() {
            if (document.exitFullscreen)
                document.exitFullscreen()
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen()
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen()
            this.fullScreenShow = true;
        },
        //退出登录
        open() {
            this.$confirm(this.$t('headerList.ConfirmToExitTheSystem') + '?', this.$t('headerList.Reminder'), {
                confirmButtonText: this.$t('headerList.Ok'),
                cancelButtonText: this.$t('headerList.Cancel'),
                showClose: false,
                type: 'warning'
            }).then(() => {
                this.logOut();
            }).catch(() => {
            });
        },
        async logOut() {
            let params = {
                token: sessionStorage.getItem('TOKEN')
            }

            // 打包的时候放开，删除假的 token
            // sessionStorage.removeItem("TOKEN")
            // setTimeout(() => {
            //     this.$router.push({ path: '/login', query: { redirect: this.$route.path } })
            //     this.$notify({
            //         title: this.$t('headerList.HasSuccessfullyExited'),
            //         type: 'success'
            //     });
            // }, 1000)
            // return


            const reslut = await logout(params)
            if (reslut.code == 200) {
                sessionStorage.removeItem('TOKEN');
                localStorage.removeItem('USERINFO');
                sessionStorage.removeItem("TOKENINFO")
                sessionStorage.clear();
                this.$store.commit('setToken', {
                    token: ''
                })
                setTimeout(() => {
                    this.$router.push({ path: '/login', query: { redirect: this.$route.path } })
                    this.$notify({
                        title: this.$t('headerList.HasSuccessfullyExited'),
                        type: 'success'
                    });
                }, 1000)
            } else {
                if (reslut.code == 401) {
                    this.$notify({
                        title: this.$t('headerList.NoTokenProvided'),
                        type: 'warning'
                    });
                } else if (reslut.code == 403) {
                    this.$notify({
                        title: this.$t('headerList.TokenAuthenticationFailed'),
                        type: 'warning'
                    });
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.home_page {
    display: flex;
    // height: calc(100vh - 100px) !important;
    height: 100vh !important;

    .left {
        /*设置动画过渡 和<el-menu>内部的一样 */
        transition: 0.3s ease-in;

        .left_img {
            width: 30px;
            height: 30px;
            margin-top: 10px;
            border-radius: 50%;
        }

        >div {
            // width: 100%;
            height: 50px;
            background-color: rgb(84, 92, 100);
            line-height: 50px;
            text-align: center;
            color: #fff;
            font-size: 32px;
            font-weight: 700;
        }

        .el-menu {
            border-right: none;
            overflow-y: auto;
            height: calc(100vh - 50px) !important;
        }
    }

    .right {
        // width: calc(100% - 200px);
        width: 100%;

        .head {
            box-sizing: border-box;
            height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            background-color: #fff !important;

            .head_left {
                display: flex;
                align-items: center;

                .take_back {
                    height: 50px;
                    margin-right: 10px;

                    img {
                        width: 30px;
                        margin: 10px;
                    }
                }
            }

            .header {
                display: flex;
                justify-content: flex-end;
                height: 50px;
                line-height: 50px;
                padding-right: 50px;


                >div {
                    padding: 0 10px;
                }


                .round {
                    border-radius: 50%;
                }

                .header_img {
                    width: 30px;
                    height: 30px;
                    margin-top: 10px;
                }

                .location {
                    position: relative;

                    .circle {
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 20px;
                        background-color: red;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
        }

        .marin {
            height: calc(100vh - 100px);
            overflow: auto;
        }

    }
}

.avatar_select {
    cursor: pointer;
}

.header_hover:hover {
    background-color: #f6f6f6 !important;
    cursor: pointer;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.recordRouteList {
    box-sizing: border-box;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
    overflow-x: scroll;


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

.el-tabs {
    .informs {
        height: 350px;
        overflow-y: auto;

        .informs_box {
            padding: 10px;
            display: flex;
            align-items: center;

            img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
                border-radius: 50%;
            }

            .githubSkip {
                color: #99afe1;
                cursor: pointer;
            }
        }

        .informs_box:hover {
            background-color: #eee;
            border-radius: 5px;
        }

    }

    .el-button {
        border: none;
        margin-left: 50%;
        transform: translateX(-50%);
    }

    .el-button:hover {
        background-color: #f5fcfa !important;
    }
}
</style>
<style>
.el-select-dropdown__item.selected {
    height: auto !important;
    background-color: #Fff !important;
}

.el-tree-node__content {
    height: 30px;
}
</style>