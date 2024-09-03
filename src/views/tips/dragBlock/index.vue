<template>
    <div class="drag_block">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ $t('headerList.VideoDisplay') }}</span>
            </div>
            <div class="content" @dragstart="dragstart" @dragover="dragover" @dragenter="dragenter" @drop="drop">
                <div class="left" data-drop="move">
                    <div draggable="true" data-effect="move" class="item color1">语文</div>
                    <div draggable="true" data-effect="copy" class="item color2">数学</div>
                    <div draggable="true" data-effect="copy" class="item color3">英语</div>
                    <div draggable="true" data-effect="copy" class="item color4">政治</div>
                    <div draggable="true" data-effect="copy" class="item color5">历史</div>
                    <div draggable="true" data-effect="copy" class="item color6">地理</div>
                    <div draggable="true" data-effect="copy" class="item color7">生物</div>
                    <!-- <div class="item data-effect="copy" color1">化学</div>
                    <div class="item color1">物理</div>
                    <div class="item color1">体育</div>
                    <div class="item color1">美术</div>
                    <div class="item color1">音乐</div> -->
                </div>
                <div class="right">
                    <table cellspacing="2">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr class="head_tr">
                                <td></td>
                                <th>星期一</th>
                                <th>星期二</th>
                                <th>星期三</th>
                                <th>星期四</th>
                                <th>星期五</th>
                                <th>星期六</th>
                                <th>星期日</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="body_tr">
                                <th rowspan="4">上午</th>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                            <tr class="body_tr">
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                            <tr class="body_tr">
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                            <tr class="body_tr">
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="margin-top: 30px;">
                        <tbody>
                            <tr class="body_tr">
                                <th rowspan="4">下午</th>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                            <tr class="body_tr">
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                            <tr class="body_tr">
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                            <tr class="body_tr">
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                                <td data-drop="copy"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            source: ''
        }
    },
    methods: {
        //拖拽开始
        dragstart(e) {
            // 拖拽的样式(是否有+号样式,copy , move)
            e.dataTransfer.effectAllowed = e.target.dataset.effect;
            this.source = e.target;
            console.log('拖拽开始', e.target);
        },
        //拖拽放置对应的元素
        dragover(e) {
            e.preventDefault(); //阻止默认行为拖拽到这个上面就会触发 drop 事件
            // console.log('拖拽放置对应的元素', e.target);
        },
        //拖拽进入的元素
        dragenter(e) {
            this.clearStyles();
            const dropNode = this.getDropNode(e.target);
            if (!dropNode) {
                return;
            }
            //拖拽元素的 dataset.effect === 放置元素 dataset.drop
            if (this.source.dataset.effect === dropNode.dataset.drop) {
                dropNode.classList.add('drop-over')
            }

            // console.log('拖拽进入的元素', e.target);
        },
        //拖拽放手触发的时间
        drop(e) {
            this.clearStyles();
            console.log('拖拽放手触发的时间', e.target);
            console.log('this.this.source', this.source);
            //确认放手目标
            const dropNode = this.getDropNode(e.target);
            if (!dropNode) {
                return;
            }
            if (this.source.dataset.effect !== dropNode.dataset.drop) {
                return;
            }
            console.log('222');
            if (dropNode.dataset.drop == 'copy') {
                const cloned = this.source.cloneNode(true);
                cloned.dataset.effect = 'move';
                dropNode.innerHTML = '';
                dropNode.appendChild(cloned);
            } else {
                this.source.remove();
            }
        },
        //判断拖动自身的元素
        getDropNode(node) {
            console.log('node.parenNode', node);
            while (node) {
                if (node.dataset && node.dataset.drop) {
                    return node;
                }
                node = node.parenNode;
            }
        },
        clearStyles() {
            document.querySelectorAll('.drop-over').forEach((node) => {
                node.classList.remove('drop-over')
            })
        }
    }
}
</script>

<style lang="less" scoped>
.drag_block {
    padding: 20px;

    .box-card {
        width: 100%;
        height: calc(100vh - 210px);

        .content {
            display: flex;

            .left {
                width: 100px;
                background-color: #efefef;


            }

            .right {
                background-color: #efefef;
                margin-left: 20px;
                padding: 10px;

                .head_tr {
                    th {
                        width: 120px;
                        height: 40px;
                        border: 1px solid;
                    }
                }

                .body_tr {
                    th {
                        border: 1px solid;
                        writing-mode: vertical-rl;
                        width: 30px;
                    }

                    td {
                        width: 120px;
                        height: 40px;
                        border: 1px solid;
                    }
                }
            }
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }
    }

    .item {
        margin: 10px;
        width: 80px;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }

    .color1 {
        background-color: pink;
    }

    .color2 {
        background-color: greenyellow;
    }

    .color3 {
        background-color: orange;
    }

    .color4 {
        background-color: yellow;
    }

    .color5 {
        background-color: skyblue;
    }

    .color6 {
        background-color: purple;
    }

    .color7 {
        background-color: green;
    }

    .drop-over {
        background-color: silver !important;
    }
}
</style>