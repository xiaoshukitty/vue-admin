<template>
    <div class="home_page">
        <div class="left">
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
            <div class="head">
                <div class="head_left">
                    <div class="take_back header_hover" @click="takeBack">
                        <img src="@/assets/images/take_back.png" alt="">
                    </div>
                    <div style="color: #999;">
                        {{ text }}
                    </div>
                </div>
                <div class="header">
                    <I18nComponents :status="'hover'" />
                    <div class="full_screen header_hover" @click="fullScreenShow ? toggleFullScreen() : exitFullscreen()">
                        <el-tooltip class="item" effect="dark"
                            :content="fullScreenShow ? $t('headerList.name') : $t('headerList.ExitFullScreen')"
                            placement="bottom">
                            <img v-if="fullScreenShow" class="header_img" src="@/assets/images/fullScreen.png" alt="">
                            <img v-else class="header_img" src="@/assets/images/exit_full_screen.png" alt="">
                        </el-tooltip>
                    </div>
                    <div class="avatar header_hover">
                        <el-popover placement="bottom" width="167" trigger="click" v-model="visiblePopover">
                            <div class="avatar_select">
                                <div v-for="(item, index) in $t('avatarList')" :key="index" @click="open">{{ item.value
                                }}</div>
                            </div>
                            <img class="header_img round" src="@/assets/images/avatar1.jpg" alt="" slot="reference">
                        </el-popover>
                    </div>
                </div>
            </div>
            <div class="marin">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import I18nComponents from '@/components/i18nComponents'
import { searchTree } from '@/utils'
import { logout } from '@/server/common'
export default {
    components: {
        I18nComponents
    },
    data() {
        return {
            isCollapse: false,
            activeIndex: '/children',
            langName: '简体中文',
            visiblePopover: false,
            fullScreenShow: true,
        }
    },
    created() {
        history.pushState(null, null, document.URL);
        window.addEventListener("popstate", function () {
            history.pushState(null, null, document.URL);
        });
    },
    computed: {
        text() {
            return searchTree(this.$t('routerNavigation'), this.activeIndex)
        }
    },
    methods: {
        handleSelect(item) {
            console.log(item);
            if (item.router == this.activeIndex) {
                return
            }
            this.activeIndex = item.router;
            console.log(this.activeIndex);
        },
        takeBack() {
            this.isCollapse = !this.isCollapse;
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
                type: 'warning'
            }).then(() => {
                this.logOut();
            }).catch(() => {
            });
        },
        async logOut() {
            let params = {
                token: localStorage.getItem('TOKEN')
            }
            const reslut = await logout(params)
            if (reslut.code == 200) {
                localStorage.removeItem('TOKEN');
                localStorage.removeItem('USERINFO');
                sessionStorage.clear();
                this.$store.commit('setToken', {
                    token: ''
                })
                setTimeout(() => {
                    this.$router.push('./')
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
    height: calc(100vh - 50px) !important;

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
        width: 100%;

        .head {
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
                padding-right: 100px;


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
            }
        }

        .marin {
            height: calc(100vh - 50px);
            overflow: auto;
        }

    }
}

.header_hover:hover {
    background-color: #f6f6f6 !important;
    cursor: pointer;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>