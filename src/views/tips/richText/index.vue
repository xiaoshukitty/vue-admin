<template>
    <div class="richText">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.RichText') }}</span>
            </div>
            <div>
                <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
                </quill-editor>
                <div class="quill-editor" v-show="false">
                    <!--商品详情：富文本 图片上传组件辅助，组件内添加v-show=“false”属性，把该组件隐藏起来。-->
                    <el-upload action="c" :auto-upload="true" :show-file-list="false" accept=".jpg,.png,jpeg"
                        class="avatar-uploader" :http-request="uploadPicture.bind()">
                    </el-upload>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
// require styles 引入组件达成富文本的使用
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

// 工具栏
const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
    [{ align: [] }], // 对齐方式-----[{ align: [] }]
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
    [{ direction: "ltl" }], // 文本方向-----[{'direction': 'rtl'}]
    [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
    [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
    [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
    [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
    ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
    ["clean"], // 清除文本格式-----['clean']
    ["link", "image", "video"], // 链接、图片、视频-----['link', 'image', 'video']
];
export default {
    data() {
        return {
            content: "", //商品详情
            editorOption: {
                //商品详情富文本
                modules: {
                    toolbar: {
                        container: toolbarOptions,
                        handlers: {
                            image: function (res) {
                                if (res) {
                                    document.querySelector(".avatar-uploader input").click();
                                }
                            },
                        },
                    },
                },
            },
        }
    },
    components: {
        quillEditor,
    },
    methods: {
        // 富文本上传图片
        uploadPicture(params) {
            console.log("====", params);
        },
        // 商品详情
        onEditorBlur(e) {
            console.log(e, "==1==");
        },
        // 商品详情
        onEditorFocus(e) {
            console.log(e, "==2==");
        },
        // 商品详情
        onEditorReady(e) {
            console.log(e, "==3==");
        },
    }
}
</script>

<style lang="less" scoped>
.richText {
    padding: 20px;


    .box-card {
        width: 100%;
        height: calc(100vh - 140px);

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }
    }
}

/deep/ .ql-editor {
    height: calc(100vh - 290px);
}

/deep/ .ql-tooltip {
    left: 0 !important;
}
</style>