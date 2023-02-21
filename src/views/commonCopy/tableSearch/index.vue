<template>
    <div class="table_search">
        <div class="serach_title">
            <div class="search_box">
                <div class="search_flex">
                    <div class="w100">输入框:</div>
                    <div>
                        <el-input v-model="form.input" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="search_flex">
                    <div class="w100">下拉选择框:</div>
                    <div>
                        <el-select v-model="form.choiceBox" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="search_flex">
                    <div class="w100">级联选择器:</div>
                    <div>
                        <el-cascader v-model="form.cascadeSelector" :options="options1"></el-cascader>
                    </div>
                </div>
                <div class="search_flex">
                    <div class="w100">时间选择器:</div>
                    <div>
                        <el-time-select v-model="form.timeSelector" :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }" placeholder="选择时间">
                        </el-time-select>
                    </div>
                </div>
                <div class="search_flex">
                    <div class="w100">日期选择器:</div>
                    <div>
                        <el-date-picker v-model="form.dateSelector" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </div>
                <div class="search_flex">
                    <div class="w120">日期时间选择器:</div>
                    <div>
                        <el-date-picker v-model="form.dateTimeSelector" type="datetime" placeholder="选择日期时间">
                        </el-date-picker>
                    </div>
                </div>
            </div>
        </div>
        <div class="table" v-loading="dataLoading">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="日期" align="center">
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center">
                </el-table-column>
                <el-table-column prop="address" label="地址" align="center">
                </el-table-column>
            </el-table>
        </div>
        <div class="pages">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]" :page-size="pageInfo.pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="pageInfo.total">
            </el-pagination>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            form: {
                input: '',
                choiceBox: '',
                cascadeSelector: '',
                timeSelector: '',
                dateSelector: '',
                dateTimeSelector: '',

            },
            currentPage: 1,
            pageInfo: {
                pageSize: 10,
                page: 1,
                total: null
            },
            dataLoading:true,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            options1: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, {
                        value: 'fankui',
                        label: '反馈'
                    }, {
                        value: 'xiaolv',
                        label: '效率'
                    }, {
                        value: 'kekong',
                        label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                }]
            }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                    }, {
                        value: 'color',
                        label: 'Color 色彩'
                    }, {
                        value: 'typography',
                        label: 'Typography 字体'
                    }, {
                        value: 'icon',
                        label: 'Icon 图标'
                    }, {
                        value: 'button',
                        label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    }, {
                        value: 'input',
                        label: 'Input 输入框'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    }, {
                        value: 'select',
                        label: 'Select 选择器'
                    }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    }, {
                        value: 'switch',
                        label: 'Switch 开关'
                    }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    }, {
                        value: 'upload',
                        label: 'Upload 上传'
                    }, {
                        value: 'rate',
                        label: 'Rate 评分'
                    }, {
                        value: 'form',
                        label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table 表格'
                    }, {
                        value: 'tag',
                        label: 'Tag 标签'
                    }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                    }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    }, {
                        value: 'badge',
                        label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                    }, {
                        value: 'loading',
                        label: 'Loading 加载'
                    }, {
                        value: 'message',
                        label: 'Message 消息提示'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    }, {
                        value: 'notification',
                        label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    }, {
                        value: 'card',
                        label: 'Card 卡片'
                    }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }]
                }]
            }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],

        }
    },
    created() {

    },
    mounted(){
        setTimeout(()=>{
            this.dataLoading=false;
        },3000)
    },
    methods: {
        handleSizeChange(newPageSize) {
            this.pageInfo.pageSize = newPageSize;
        },
        handleCurrentChange(newPage) {
            this.pageInfo.page = newPage;
        }
    },
}
</script>
  
<style lang="less" scoped>
.table_search {
    padding: 30px;

    .serach_title {
        margin-top: 20px;

        .search_box {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .search_flex {
                display: flex;
                align-items: center;
                margin: 0 30px 30px 0;

                .w100 {
                    width: 100px;
                }

                .w120 {
                    width: 120px;
                }
            }
        }
    }

    .table {
        margin-top: 20px;
    }
    .pages{
        margin-top: 20px;
        text-align: center;
    }
}
</style>
  