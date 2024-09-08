<template>
    <div class="imgPreview">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.ImgPreview') }}</span>
            </div>
            <img class="img-preview" :alt="imgURL" :src="imgURL" @click="showImagePreview" />
        </el-card>
    </div>
</template>

<script>
export default {
    name: "imgPreview",
    data() {
        return {
            imgURL: require('@/assets/images/lockScreenWallpaper/75.jpeg')
        }
    },
    created() {

    },
    methods: {
        showImagePreview() {
            const image = new Image(); //创建一个图片对象
            image.src = this.imgURL; // 预加载第一张图片

            image.onload = () => {
                // 图片加载完成后的操作
                // 创建弹出层
                const previewContainer = document.createElement('div'); //创建div
                previewContainer.style.position = 'fixed';
                previewContainer.style.top = 0;
                previewContainer.style.bottom = 0;
                previewContainer.style.left = 0;
                previewContainer.style.right = 0;
                previewContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
                previewContainer.style.display = 'flex';
                previewContainer.style.justifyContent = 'center';
                previewContainer.style.alignItems = 'center';
                document.body.appendChild(previewContainer); //添加到body 上面去

                // 创建div
                const imgContainer = document.createElement('div');
                imgContainer.style.width = '100%';
                imgContainer.style.display = 'flex';
                imgContainer.style.flexDirection = 'column';
                imgContainer.style.alignItems = 'center';
                previewContainer.appendChild(imgContainer); //添加到 previewContainer 上去

                // 在弹出层中添加图片
                const previewImage = document.createElement('img'); //创建图片
                previewImage.src = this.imgURL; //图片地址设置 
                previewImage.style.maxWidth = '65%';
                previewImage.style.maxHeight = '65%';
                imgContainer.appendChild(previewImage); //添加到 previewContainer 上去
                previewImage.addEventListener('click',(event)=>{
                    event.stopPropagation(); //阻止事件继续冒泡
                })


                //创建按钮div
                const btnContainer = document.createElement('div');
                btnContainer.style.display = 'flex';
                btnContainer.style.marginTop = '20px';
                btnContainer.style.zIndex = 9999;
                imgContainer.appendChild(btnContainer); //添加到 previewContainer 上去


                //创建变大数据
                const grow = document.createElement('div');
                alikeStyle(grow, 'red', '放大');
                btnContainer.appendChild(grow);
                grow.addEventListener('click', (event) => {
                    event.stopPropagation(); //阻止事件继续冒泡
                    previewImage.style.maxWidth = '80%';
                    previewImage.style.maxHeight = '80%';
                })



                // 左旋转
                const leftRotate = document.createElement('div');
                alikeStyle(leftRotate, 'blue', '左旋转');
                btnContainer.appendChild(leftRotate);
                leftRotate.addEventListener('click', (event) => {
                    event.stopPropagation(); //阻止事件继续冒泡
                    previewImage.style.transform = 'rotate(-90deg)';
                })

                // 右旋转
                const rightRotate = document.createElement('div');
                alikeStyle(rightRotate, 'yellowgreen', '右旋转');
                btnContainer.appendChild(rightRotate);
                rightRotate.addEventListener('click', (event) => {
                    event.stopPropagation(); //阻止事件继续冒泡
                    previewImage.style.transform = 'rotate(90deg)';
                })


                // 创建缩小数据
                const lessen = document.createElement('div');
                alikeStyle(lessen, 'green', '缩小');
                btnContainer.appendChild(lessen);
                lessen.addEventListener('click', (event) => {
                    event.stopPropagation(); //阻止事件继续冒泡
                    previewImage.style.maxWidth = '50%';
                    previewImage.style.maxHeight = '50%';
                })

                //创建复原
                const recover = document.createElement('div');
                alikeStyle(recover, 'purple', '复原');
                btnContainer.appendChild(recover);
                recover.addEventListener('click', (event) => {
                    event.stopPropagation(); //阻止事件继续冒泡
                    previewImage.style.maxWidth = '65%';
                    previewImage.style.maxHeight = '65%';
                    previewImage.style.transform = 'rotate(0deg)';
                })

                //共同样式
                function alikeStyle(el, color, text) {
                    el.style.width = '100px';
                    el.style.lineHeight = '40px';
                    el.style.textAlign = 'center';
                    el.style.height = '40px';
                    el.style.color = '#fff',
                        el.style.cursor = 'pointer';
                    el.style.backgroundColor = color;
                    el.innerHTML = text;
                }

                // 点击弹出层，关闭预览
                previewContainer.addEventListener('click', () => {
                    document.body.removeChild(previewContainer);
                });
            };
        }
    },
}
</script>

<style lang="less" scoped>
.imgPreview {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 210px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }

        .m5 {
            margin: 5px;
        }

        .img-preview {
            width: 400px;
        }
    }

}
</style>