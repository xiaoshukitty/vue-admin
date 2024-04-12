<template>
    <div class="coyp">
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>可复制</span>
                </div>
                <div>
                    <div>将进酒·君不见</div>
                    <div>君不见，黄河之水天上来，奔流到海不复回。</div>
                    <div>君不见，高堂明镜悲白发，朝如青丝暮成雪。</div>
                    <div>人生得意须尽欢，莫使金樽空对月。</div>
                    <div>天生我材必有用，千金散尽还复来。</div>
                    <div>烹羊宰牛且为乐，会须一饮三百杯。</div>
                    <div>岑夫子，丹丘生，将进酒，杯莫停。</div>
                    <div>与君歌一曲，请君为我倾耳听。</div>
                    <div>钟鼓馔玉不足贵，但愿长醉不愿醒。</div>
                    <div>古来圣贤皆寂寞，惟有饮者留其名。</div>
                    <div>陈王昔时宴平乐，斗酒十千恣欢谑。</div>
                    <div>主人何为言少钱，径须沽取对君酌。</div>
                    <div>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</div>
                </div>
                <el-button type="primary" @click="copy" :data-clipboard-text="copyText" id="copyText">动态复制</el-button>
            </el-card>
        </div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>不可复制</span>
                </div>
                <div>
                    <div>将进酒·君不见</div>
                    <div>君不见，黄河之水天上来，奔流到海不复回。</div>
                    <div>君不见，高堂明镜悲白发，朝如青丝暮成雪。</div>
                    <div>人生得意须尽欢，莫使金樽空对月。</div>
                    <div>天生我材必有用，千金散尽还复来。</div>
                    <div>烹羊宰牛且为乐，会须一饮三百杯。</div>
                    <div>岑夫子，丹丘生，将进酒，杯莫停。</div>
                    <div>与君歌一曲，请君为我倾耳听。</div>
                    <div>钟鼓馔玉不足贵，但愿长醉不愿醒。</div>
                    <div>古来圣贤皆寂寞，惟有饮者留其名。</div>
                    <div>陈王昔时宴平乐，斗酒十千恣欢谑。</div>
                    <div>主人何为言少钱，径须沽取对君酌。</div>
                    <div>五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</div>
                </div>
                <el-button type="primary" @click="noCopy">{{ disabledCopyText }}</el-button>
            </el-card>
        </div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>图片复制(需要点击下面空白处在粘贴)</span>
                </div>
                <div class="editor" ref="editor" contenteditable></div>
                <el-image ref="imagePreview" style="width: 100px; height: 100px;z-index: 999; display: none;" :src="url"
                    :preview-src-list="srcList">
                </el-image>
            </el-card>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            options: "",
            copyText: ` 
            将进酒·君不见
            君不见，黄河之水天上来，奔流到海不复回。
            君不见，高堂明镜悲白发，朝如青丝暮成雪。
            人生得意须尽欢，莫使金樽空对月。
            天生我材必有用，千金散尽还复来。
            烹羊宰牛且为乐，会须一饮三百杯。
            岑夫子，丹丘生，将进酒，杯莫停。
            与君歌一曲，请君为我倾耳听。
            钟鼓馔玉不足贵，但愿长醉不愿醒。
            古来圣贤皆寂寞，惟有饮者留其名。
            陈王昔时宴平乐，斗酒十千恣欢谑。
            主人何为言少钱，径须沽取对君酌。
            五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。`,
            srcList: [],
            // disabledCopyText:'禁止复制',
            disabledCopy: false,//是否禁止复制
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }
    },
    created() {
        //禁止复制代码
        // document.addEventListener('copy', (e) => {
        //     e.preventDefault();
        //     navigator.clipboard.writeText('不准复制👌')
        // })
    },
    computed: {
        disabledCopyText() {
            return this.disabledCopy ? '禁止复制' : '不禁止复制'
        }
    },
    mounted() {
        //复制图片
        const editor = document.querySelector('.editor');
        let imgSrc
        editor.addEventListener('paste', (e) => {
            if (e.clipboardData.files.length > 0) {
                e.preventDefault();
                const file = e.clipboardData.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    console.log('e--', e);
                    imgSrc = e.target.result;
                    img.src = e.target.result;
                    img.style.width = '300px';
                    img.addEventListener('click', (e) => {
                        this.srcList = [];
                        this.$nextTick(() => {
                            this.srcList.push(e.target.currentSrc);
                            this.$refs.imagePreview.clickHandler()
                        })
                    })
                    editor.appendChild(img);
                }
                reader.readAsDataURL(file)
            }
        })

    },
    methods: {
        //可复制
        copy() {
            var clipboard = new this.Clipboard("#copyText");
            clipboard.on("success", function (e) {
                console.info("Action:", e.action);
                console.info("Text:", e.text);
                console.info("Trigger:", e.trigger);
                e.clearSelection();
            });
            clipboard.on("error", (e) => {
                this.popupH = true;
                // 释放内存
                clipboard.destroy();
            });
            this.$message({
                message: "复制成功",
                type: "success",
            });
        },
        //不可复制
        noCopy(e) {
            this.disabledCopy = !this.disabledCopy
            console.log('this.disabledCopy---', this.disabledCopy);
            if (this.disabledCopy) {
                document.addEventListener('copy', (e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('不准复制👌')
                })
            } else {
            }

        },
    },
}
</script>

<style lang="less" scoped>
.coyp {
    display: flex;
    padding: 20px;

    div {
        flex: 1;
        padding-right: 20px;
    }

    .el-card {
        height: 500px;
    }

    .editor {
        height: 300px;
        overflow: scroll;
    }
}
</style>
