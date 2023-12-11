
<template>
    <transition name="show-unlock">
        <div class="unlock_bg" v-if="showUnlock">
            <div class="unlock_img">
                <img src="@/assets/images/avatar1.jpg" alt="">
            </div>
            <div class="unlock_icon">
                <i class="el-icon-lock"></i>
            </div>
            <div class="unlock_text">
                <span>{{ $t('headerList.LockedScreen') }}</span>
            </div>
            <div class="unlock_ipt">
                <el-input ref="ipt" :placeholder="$t('headerList.PleaseEnterTheScreenLockPassword')" type="password"
                    v-model="unlockPassword" class="input-with-select" size="medium">
                    <el-button slot="append" icon="el-icon-lock" @click="handleUnlock">{{ $t('headerList.Unlock')
                    }}</el-button>
                </el-input>
            </div>
            <div class="passShow">
                {{ $t('loginI18n.PassWord') }}:123456
            </div>
            <div class="unlock_wallpaper" @click="wallpaperCut">
                {{ $t('headerList.SwitchWallpaper') }}
            </div>
        </div>
    </transition>
</template>
 
<script>
import Cookies from "js-cookie"

export default {
    name: "Unlock",
    data() {
        return {
            check: null,
            unlockPassword: '123456',
            images: [],
            num: localStorage.getItem('WallpaperImgNum') || 0,
        };
    },
    props: {
        showUnlock: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        const context = require.context('@/assets/images/lockScreenWallpaper', false, /\.(png|jpe?g|gif|svg)$/);
        this.images = context.keys().map(context);
        this.$nextTick(() => {
            this.$refs.ipt.focus();
        })
    },
    methods: {
        // 解锁
        handleUnlock() {
            if (this.unlockPassword == "") {
                this.$notify({
                    title: this.$t('headerList.TheScreenLockPasswordCannotBeEmpty'),
                    type: 'warning'
                });
                return;
            }
            if (this.unlockPassword != '123456') {
                this.$notify({
                    title: this.$t('headerList.PasswordError'),
                    type: 'error'
                });
                return;
            }
            this.unlock();
        },
        unlock() {
            this.unlockPassword = "";
            Cookies.set("locking", "0");
            this.$emit("on-unlock");
        },
        //切换壁纸
        wallpaperCut() {
            this.$emit('wallpaperCutImg', this.images[this.num])
            this.num++
            if (this.num == 13) {
                this.num = 0
            }
            localStorage.setItem('WallpaperImgNum', this.num)
        }
    }
};
</script>

<style lang="less" scoped>
.unlock_bg {
    position: absolute;
    width: 450px;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: center center;
    z-index: 10;
    border-radius: 20px;
    background-color: hsla(0, 0%, 100%, .5);
    padding: 40px 20px;

    .unlock_img {
        width: 150px;
        height: 150px;
        margin-left: 150px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .unlock_icon {
        font-size: 50px;
        text-align: center;
        margin: 20px 0 10px;
    }

    .unlock_text {
        font-size: 20px;
        text-align: center;
    }

    .unlock_ipt {
        margin: 20px 50px 0;

        /deep/ .el-input-group__append,
        .el-input-group__prepend {
            background-color: #5c87ec !important;
        }

        /deep/ .el-button {
            color: #fff;
        }

        /deep/ .el-input {
            width: 350px !important;
        }

        /deep/ .el-input--medium .el-input__inner {
            height: 42px !important;
            line-height: 42px !important;
        }
    }

    .passShow {
        text-align: center;
        margin-bottom: 20px;
        font-size: 13px;
        color: #e3e3e3;
        margin-top: 5px;
    }

    .unlock_wallpaper {
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }


}

@keyframes unlock-in {
    0% {
        transform: scale(0);
    }

    80% {
        transform: scale(0);
    }

    88% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes unlock-out {
    0% {
        transform: scale(1);
    }

    60% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(0);
    }
}

.show-unlock-enter-active {
    animation: unlock-in 1.4s ease;
}

.show-unlock-leave-to {
    opacity: 0;
}

.show-unlock-leave-active {
    transition: opacity .2s;
}
</style>
 