<template>
    <div class="home_page">
        <div class="left" ref="menuGuide">
            <div>
                <!-- <div v-if="!isCollapse">{{ $t('headerList.UserName') }}</div> -->
                <div v-if="!isCollapse" class="title_name">
                    <span>x</span>
                    <span>i</span>
                    <span>a</span>
                    <span>o</span>
                    <span>s</span>
                    <span>h</span>
                    <span>u</span>
                </div>
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
                                <i v-if="child.icon" :class="child.icon"></i>
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
                        <!-- 全局搜索 -->
                        <div class="header_hover" ref="GlobalSearch">
                            <el-tooltip class="item" effect="dark" :content="$t('headerList.GlobalSearch')"
                                placement="bottom">
                                <el-button icon="el-icon-search" size="small" circle
                                    @click="handleGlobalSearch"></el-button>
                            </el-tooltip>
                        </div>
                        <!-- 锁屏 -->
                        <div class="header_hover" ref="lockScreenGuide">
                            <el-tooltip class="item" effect="dark" :content="$t('headerList.LockScreen')"
                                placement="bottom">
                                <el-button icon="el-icon-lock" size="small" circle @click="lockScreen"></el-button>
                            </el-tooltip>
                        </div>
                        <!-- 刷新 -->
                        <div class="header_hover" ref="refreshGuide">
                            <el-tooltip class="item" effect="dark" :content="$t('headerList.Refresh')"
                                placement="bottom">
                                <el-button icon="el-icon-refresh-right" size="small" circle
                                    @click="updateRefsh"></el-button>
                            </el-tooltip>
                        </div>
                        <!-- 通知 -->
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
                        <!-- 语言切换 -->
                        <div ref="i18nGuide">
                            <I18nComponents :status="'hover'" />
                        </div>
                        <!-- 全屏 -->
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
                    <div class="recordRouterBox">
                        <!-- 路由块 -->
                        <el-scrollbar class="scrollbar" wrap-style="overflow-y:hidden" ref="scrollbarRef">
                            <div style="display: flex">
                                <div v-for="(item, index) in recordRouteList" :key="item.id"
                                    :class="['tag', 'list-item', activeIndexRoute == item.id ? 'active' : '']"
                                    @click="routerSkip(item, index)">
                                    <i style="margin-right: 5px;" :class="item.icon"></i>
                                    <span>{{ item.name }}</span>
                                    <i v-if="item.id != 0" class="el-icon-close close-hover"
                                        @click.stop="closeRoute(item)"></i>
                                </div>
                            </div>
                        </el-scrollbar>
                    </div>
                    <div class="recordBlock">
                        <el-dropdown @command="closeRouterBlock">
                            <i class="el-icon-menu" style="font-size: 25px; margin-top: 14px; cursor: pointer;"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-close" command="close">全部关闭</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>

            </div>

            <div class="marin">

                <router-view v-if="flag" />
            </div>
        </div>
        <GlobalSearch :isSearch="isSearch" @update:visible="updateVisible" @update:skipTo="updateSkipTo"></GlobalSearch>
    </div>
</template>

<script>

import intro from 'intro.js';
import 'intro.js/minified/introjs.min.css';
import Cookies from "js-cookie";
import keymaster from 'keymaster';
import I18nComponents from '@/components/i18nComponents'
import GlobalSearch from '@/components/GlobalSearch'
import { searchTree, searchTreeCertain } from '@/utils'
import { informsList, emailList } from '@/utils/falseData'
import { logout } from '@/server/common'
import { mapGetters, mapState } from 'vuex'
import { flattTree } from '@/utils/index'

export default {
    name: 'HomePage',
    components: {
        I18nComponents,
        GlobalSearch
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
            emailList,
            isSearch: false,
            targetIndex: 1, // 目标元素的索引
        }
    },
    created() {
        this.$eventBus.$on('guide', this.guideProcedure); //引导页步骤
        this.$eventBus.$on('langEdit', this.langEditClick); //引导页步骤
        this.recordRouteList = this.$t('routerChunkI18n')
        // console.log('this.recordRouteList----', this.recordRouteList);
        history.pushState(null, null, document.URL);
        window.addEventListener("popstate", function () {
            history.pushState(null, null, document.URL);
        });
        let routerGather = searchTreeCertain(this.$t('routerNavigation'), this.$route.path)
        this.routerPush(routerGather)
        this.isCollapse = localStorage.getItem('ISCOLLAPSE') == 'CLOSE' ? true : false;
    },
    mounted() {
        //快捷键 command + k 唤起全局搜索
        keymaster('command+k', this.globalSearch);
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

        //全局搜索
        globalSearch() {
            this.isSearch = true;
            return false
        },
        handleGlobalSearch() {
            this.isSearch = true;
            return false
        },
        updateVisible() {
            this.isSearch = false;
        },
        //跳转
        updateSkipTo(val) {
            this.isSearch = false;
            let flag = this.recordRouteList.findIndex(item => item.id == val.id);
            //跳转
            if (flag == '-1') { //判断是否有这一个路由id记录
                this.handleNodeClick(val); //没有就记录id并挑转
            } else {
                //有id 就直接跳转
                this.routerSkip(val)
            }

        },
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
                        title: this.$t('guide.GlobalSearch'),
                        element: this.$refs.GlobalSearch,
                        intro: this.$t('guide.GlobalSearchCommandK'),
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
        //自动滚动
        scrollToItem(index) {
            const itemElement = this.$refs.scrollbarRef.$el.querySelector(`.list-item:nth-child(${index + 1})`)
            if (itemElement) {
                const scrollContainer = this.$refs.scrollbarRef.$el.querySelector('.el-scrollbar__wrap');
                const targetScrollLeft = itemElement.offsetLeft;
                const currentScrollLeft = scrollContainer.scrollLeft;
                const duration = 500; // 动画持续时间，单位毫秒
                const startTime = performance.now();
                const animateScroll = (timestamp) => {
                    const progress = timestamp - startTime;
                    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    const percentage = Math.min(progress / duration, 1);
                    const easedPercentage = easeInOutQuad(percentage);
                    const newScrollLeft = currentScrollLeft + (targetScrollLeft - currentScrollLeft) * easedPercentage;

                    scrollContainer.scrollLeft = newScrollLeft;

                    if (progress < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                };
                requestAnimationFrame(animateScroll);
            }
        },
        //路由动画跳转
        jumpNum(i) {
            let res = this.recordRouteList;
            this.targetIndex = i;
            this.$nextTick(() => {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].id == this.activeIndexRoute) {
                        this.scrollToItem(i)
                    }
                }
            })

        },
        //el-tree 切换点击
        handleNodeClick(node, flag) {
            if (node.children) {
                return
            }
            // console.log('node---', node);
            this.valueTitle = node.name;
            this.valueId = node.id;
            this.$router.push({ path: node.router })
            this.activeIndex = node.router;
            setTimeout(() => {
                this.$refs.elSelect.blur()
                this.routerPush(node, flag)
            }, 50)


        },
        // 横向点击跳转路由
        routerSkip(val, i) {
            this.routerSkipChunk(val, 'flag');
            this.targetIndex = i
            this.scrollToItem(this.targetIndex)
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
        //全部关闭路由导航
        closeRouterBlock(command) {
            console.log('222', this.recordRouteList);
            if (this.recordRouteList.length == 1 && this.recordRouteList[0].id == '0') {
                this.$message.warning('首页不能关闭')
                return
            }
            if (command == 'close') {
                this.recordRouteList = [{
                    name: '首页',
                    path: 'home',
                    id: '0',
                    router: '/home',
                    icon: 'el-icon-monitor',
                }];
                this.activeIndexRoute = '0';
                this.activeIndex = '/home';
                this.$router.push('/home')
            }

        },
        //路由块跳转方法
        routerSkipChunk(val, flag) {
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
        routerPush(newValue, e) {
            // console.log('newValue---', newValue);
            let flag = this.deWeight(this.recordRouteList, newValue)
            this.activeItem = newValue;
            this.activeIndexRoute = newValue.id;
            if (flag == 1) {
                this.recordRouteList.push(newValue);
            }
            //路由动画跳转
            this.jumpNum(this.recordRouteList.length);
            this.changeTree(newValue);
        },
        //路由切换
        handleSelect(item) {
            if (item.router == this.activeIndex) {
                return
            }
            this.activeIndex = item.router;
            this.routerPush(item)
        },
        //树形默认展示切换展示
        changeTree(newValue) {
            // console.log('d', this.recordRouteList);
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
            // console.log('点击了通知');
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
// @import '../styles/global.less';
.home_page {
    display: flex;
    // height: calc(100vh - 100px) !important;
    height: 100vh !important;

    .left {
        /*设置动画过渡 和<el-menu>内部的一样 */
        transition: 0.3s ease-in;

        .title_name span {
            position: relative;
            top: 10px;
            display: inline-block;
            animation: bounce .6s ease infinite alternate;
            font-family: 'Titan One', cursive;
            font-size: 30px;
            color: #FFF;
            text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 5px 0 #CCC,
                0 6px 0 transparent,
                0 7px 0 transparent,
                0 8px 0 transparent,
                0 9px 0 transparent,
                0 10px 10px rgba(0, 0, 0, .4);
        }

        .title_name span:nth-child(2) {
            animation-delay: .1s;
        }

        .title_name span:nth-child(3) {
            animation-delay: .2s;
        }

        .title_name span:nth-child(4) {
            animation-delay: .3s;
        }

        .title_name span:nth-child(5) {
            animation-delay: .4s;
        }

        .title_name span:nth-child(6) {
            animation-delay: .5s;
        }

        .title_name span:nth-child(7) {
            animation-delay: .6s;
        }

        .title_name span:nth-child(8) {
            animation-delay: .7s;
        }

        @keyframes bounce {
            100% {
                top: -20px;
                text-shadow: 0 1px 0 #CCC,
                    0 2px 0 #CCC,
                    0 3px 0 #CCC,
                    0 4px 0 #CCC,
                    0 5px 0 #CCC,
                    0 6px 0 #CCC,
                    0 7px 0 #CCC,
                    0 8px 0 #CCC,
                    0 9px 0 #CCC,
                    0 50px 25px rgba(0, 0, 0, .2);
            }

        }

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
    width: 220px;
    min-height: 400px;
}

.recordRouteList {
    position: relative;
    padding: 0 10px;
    width: calc(100vw - 240px);
    border-bottom: 1px solid #eee;

    .recordRouterBox {
        box-sizing: border-box;
        height: 50px;
        display: flex;
        align-items: center;

        overflow-x: auto;
        /* 使容器横向滚动 */
        white-space: nowrap;
        /* 确保内容不换行 */
        width: calc(100vw - 280px);

        .scrollbar {
            width: calc(100vw - 280px);
            height: 100%;

            /deep/ .is-vertical,
            /deep/ .is-horizontal {
                width: 0 !important;
                top: 0 !important;
            }

            /deep/ .el-scrollbar__wrap--hidden-default {
                display: flex !important;
                align-items: center !important;
            }
        }

        .tag {
            padding: 0 10px;
            cursor: pointer;
            border: 1px solid #dcdfe6;
            color: @head-record-base-color;
            cursor: pointer;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;
            border-radius: 3px;
            background-color: @head-record-base-bgColor;
            font-size: 14px;

            .el-icon-close {
                margin-left: 5px;
            }
        }

        .active {
            background-color: @head-record-base-select-bgColor !important;
            color: @head-record-base-select-color !important;
            border: 1px solid @head-record-base-select-border !important;
        }

        .close-hover {
            width: 14px;
            height: 14px;
            border-radius: 50%;
        }

        .close-hover:hover {
            color: #fff;
            background-color: @head-record-base-close-hover;
        }

    }


    .recordBlock {
        position: absolute;
        right: 10px;
        top: 0;
        width: 60px;
        height: 48px;
        text-align: center;
        line-height: 40px;
        background-color: #fff;
        color: #000;

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