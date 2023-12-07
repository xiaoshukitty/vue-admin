<template>
    <div class="test">
        <LuckyWheel ref="myLucky" class="test-myLucky" :width="width" :height="width" :blocks="blocks" :prizes="prizes"
            @end="endCallback" />
        <div class="startbtn" @click="startCallback"></div>
    </div>
</template>
<script>
export default {
    created() {
        this.blocks = [{
            padding: '0.46rem',
            imgs: [{
                src: 'https://img.iwave.net.cn/jeep/51c95637a377c3a12d09abe8b0f975e6.png',
                width: this.width,
                height: this.width,
                rotate: true
            }]
        }]
        const prizes = [
            {
                id: 1,
                icon: "https://img.iwave.net.cn/bmw/b365029b17e0e1fc972b52080f58cc80.png",
                title: "iphone15 Pro"
            },
            {
                id: 2,
                icon: "https://img.iwave.net.cn/bmw/bbb9c678305a2f55ce7b285561744596.png",
                title: "普通红包"
            },
            {
                id: 3,
                icon: "https://img.iwave.net.cn/bmw/9b03fe2dcbb6be8c02ac63ff0927c92f.png",
                title: "5元话费券"
            },
            {
                id: 4,
                icon: "https://img.iwave.net.cn/bmw/7cffe2c789279a83ef577283535a2c1b.png",
                title: "每日红包"
            },
            {
                id: 5,
                icon: "https://img.iwave.net.cn/bmw/a3731dd942951974b9be1da171735d82.png",
                title: "幸运红包"
            },
            {
                id: 6,
                icon: "https://img.iwave.net.cn/bmw/dc3c6e7624f6b8291c82a36b552785f6.png",
                title: "10元话费券"
            },
            {
                id: 7,
                icon: "https://img.iwave.net.cn/bmw/a6b978fd0064a45ebcd6b649d49714ea.png",
                title: "惊喜福袋"
            },
            {
                id: 8,
                icon: "https://img.iwave.net.cn/bmw/873a940855c837b4d6622fe8da442b8b.png",
                title: "谢谢参与"
            }
        ]
        this.prizes = prizes.map(item => ({
            fonts: [{ text: item.title, top: '0.4rem', fontColor: '#FF7002', fontSize: '0.8rem', fontWeight: 600, wordWrap: false, lineHeight: '0.8rem' }],
            imgs: [{ src: item.icon, top: '3rem', width: '3rem', height: '3rem' }]
        }))
    },
    methods: {
        startCallback() {
            console.log('#@@@@@')
            // 调用抽奖组件的play方法开始游戏
            this.$refs.myLucky.play()
            // 模拟调用接口异步抽奖
            setTimeout(() => {
                // 假设后端返回的中奖索引是0
                const index = 0
                // 调用stop停止旋转并传递中奖索引
                this.$refs.myLucky.stop(index)
            }, 3000)
        },
        // 抽奖结束会触发end回调
        endCallback(prize) {
            console.log(prize);
            this.$notify({
                title: '提示',
                message: `恭喜你抽中${prize.fonts[0].text} 🎉🎉🎉`,
            });
            console.log(prize)
        },
    },
    computed: {
        width() {
            return '24rem'
        }
    }
}
</script>
<style lang="less" scoped>
// @keyframes rotato {
//     0% {
//         transform: rotate(0deg);
//     }

//     100% {
//         transform: rotate(360deg);
//     }
// }

.test {
    position: relative;

    &-myLucky {
        animation: rotato 20s linear infinite forwards;
    }

    .startbtn {
        position: absolute;
        background: url('https://img.iwave.net.cn/jeep/8e38bb871f79ef8950da8697603cde94.png');
        width: 114px;
        height: 114px;
        background-size: 100%;
        top: 128px;
        left: 136px;
        z-index: 100;
    }
}
</style>
  