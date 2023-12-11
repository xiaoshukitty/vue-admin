<template>
    <transition name="show-lockscreen">
        <div :class="cartoon ? 'lockscreen' : 'lockscreen add_carton'" :style="{ 'backgroundImage': 'url(' + bgImg + ')' }">
            <Unlock ref="unlock" :show-unlock="showUnlock" @on-unlock="handleUnlock" @wallpaperCutImg="wallpaperCutImg">
            </Unlock>
        </div>
    </transition>
</template>

<script>
import Unlock from './components/Unlock.vue'
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            showUnlock: false,
            bgImg: require('@/assets/images/bg.jpg'),
            cartoon: true
        }
    },
    components: {
        Unlock
    },
    mounted() {
        this.showUnlock = true;
        let num = localStorage.getItem('WallpaperImgNum')
        if (num) {
            this.bgImg = this.$refs.unlock.images[num == 0 ? num : num - 1]
        }

    },
    methods: {
        handleUnlock() {
            this.showUnlock = false;
            this.$router.push({
                path: Cookies.get('last_page_lockscreen') // 解锁之后跳转到锁屏之前的页面
            });
            
        },
        //切换图片
        async wallpaperCutImg(img) {
            this.cartoon = false;
            setTimeout(()=>{
                this.cartoon = true;
            },500)
            await this.preloadImage(img);
            this.bgImg = img;
        },
        //解决图片切换闪屏问题
        preloadImage(src) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(src);
                img.src = src;
            });
        }
    }
}
</script>

<style lang="less" scoped>
.lockscreen {
    width: 100%;
    height: 100vh;
    // background-image: url('@/assets/images/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.add_carton {
    transition: all 1s;
}
</style>
