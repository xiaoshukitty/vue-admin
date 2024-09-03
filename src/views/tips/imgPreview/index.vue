<template>
    <div class="imgPreview">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.ImgPreview') }}</span>
            </div>
            <img src="@/assets/logo.png" @click="showImagePreview" />
        </el-card>
    </div>
</template>

<script>
export default {
    name: "imgPreview",
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        showImagePreview() {
            const image = new Image();
            image.src = this.imageUrl;
            image.onload = () => {
                // 创建弹出层
                const previewContainer = document.createElement('div');
                previewContainer.style.position = 'fixed';
                previewContainer.style.top = 0;
                previewContainer.style.bottom = 0;
                previewContainer.style.left = 0;
                previewContainer.style.right = 0;
                previewContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
                previewContainer.style.display = 'flex';
                previewContainer.style.justifyContent = 'center';
                previewContainer.style.alignItems = 'center';
                document.body.appendChild(previewContainer);
                // 在弹出层中添加图片
                const previewImage = document.createElement('img');
                previewImage.src = this.imageUrl;
                previewImage.style.maxWidth = '80%';
                previewImage.style.maxHeight = '80%';
                previewContainer.appendChild(previewImage);
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
    }

}
</style>