<template>
    <div class="test">
        <el-upload class="upload-demo" :action="actionUrl" ref="upload" :on-preview="handlePreview" multiple :limit="1"
            :on-exceed="handleExceed" :http-request="handleFileUpload" list-type="picture-card" :headers="headerConfig">
            <i class="el-icon-plus"></i>
        </el-upload>
    </div>
</template>

<script>
import { updatePic } from '@/server/common'

import axios from "axios";
export default {
    data() {
        return {
            actionUrl: "http://localhost:3000//pictures/update",
            headerConfig: { "Content-Type": "multipart/form-data" },
        }
    },
    created() {
    },
    methods: {
        // 处理预览操作
        handlePreview(file) {
            console.log(file);
        },
        // 处理超出图片个数操作
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        // 使用的是multer中间件，所以需要传递formdata格式的数据
        // const formData = new FormData();
        //     // 找到需要传递的文件
        //     const file = this.$refs.upload.uploadFiles;
        //     // 设置请求头

        //     // 遍历 添加文件信息
        //     // 注意：添加的字段名，需要与后端一样 "file"

        //     file.forEach((item) => {
        //         formData.append("file", item.raw);
        //     });
        //     axios.post("/pictures/update", formData,).then((res) => {
        //         console.log('res---', res);
        //     })
        // 处理文件上传操作
        async handleFileUpload() {
            // const file = this.$refs.upload.uploadFiles[0].raw;
            const file = this.$refs.upload.uploadFiles;

            console.log('file---,', file);
            let formData = new FormData();
            // formData.append("file", file);
            file.forEach((item) => {
                formData.append("file", item.raw);
            });
            let httpUrl = 'http://localhost:3000/pictures/update'
            const headerConfig = {
                headers: { "Content-Type": "multipart/form-data" },
            };
            // axios.post(httpUrl, formData, headerConfig).then((res) => {
            //     console.log('res000', res);
            // });
            let { data: res } = await axios
                .post(httpUrl, formData, headerConfig)
                .then((res) => {
                    if (res.data.code === 200) {
                    }
                });

        }
    },
}
</script>

<style lang="less" scoped>
.test {
    padding: 30px;

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>