"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[233],{60233:function(e,a,l){l.r(a),l.d(a,{default:function(){return n}});var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"table_search"},[a("div",{staticClass:"serach_title"},[a("div",{staticClass:"search_box"},[a("div",{staticClass:"search_flex"},[a("div",{staticClass:"w100"},[e._v("输入框:")]),a("div",[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.form.input,callback:function(a){e.$set(e.form,"input",a)},expression:"form.input"}})],1)]),a("div",{staticClass:"search_flex"},[a("div",{staticClass:"w100"},[e._v("下拉选择框:")]),a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.choiceBox,callback:function(a){e.$set(e.form,"choiceBox",a)},expression:"form.choiceBox"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("div",{staticClass:"search_flex"},[a("div",{staticClass:"w100"},[e._v("级联选择器:")]),a("div",[a("el-cascader",{attrs:{options:e.options1},model:{value:e.form.cascadeSelector,callback:function(a){e.$set(e.form,"cascadeSelector",a)},expression:"form.cascadeSelector"}})],1)]),a("div",{staticClass:"search_flex"},[a("div",{staticClass:"w100"},[e._v("时间选择器:")]),a("div",[a("el-time-select",{attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:"选择时间"},model:{value:e.form.timeSelector,callback:function(a){e.$set(e.form,"timeSelector",a)},expression:"form.timeSelector"}})],1)]),a("div",{staticClass:"search_flex"},[a("div",{staticClass:"w100"},[e._v("日期选择器:")]),a("div",[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.dateSelector,callback:function(a){e.$set(e.form,"dateSelector",a)},expression:"form.dateSelector"}})],1)]),a("div",{staticClass:"search_flex"},[a("div",{staticClass:"w120"},[e._v("日期时间选择器:")]),a("div",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.form.dateTimeSelector,callback:function(a){e.$set(e.form,"dateTimeSelector",a)},expression:"form.dateTimeSelector"}})],1)])])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}})],1)],1),a("div",{staticClass:"pages"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},i=[],o={data(){return{form:{input:"",choiceBox:"",cascadeSelector:"",timeSelector:"",dateSelector:"",dateTimeSelector:""},currentPage:1,pageInfo:{pageSize:10,page:1,total:null},dataLoading:!0,options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],options1:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},created(){},mounted(){setTimeout((()=>{this.dataLoading=!1}),3e3)},methods:{handleSizeChange(e){this.pageInfo.pageSize=e},handleCurrentChange(e){this.pageInfo.page=e}}},s=o,r=l(43736),c=(0,r.Z)(s,t,i,!1,null,"112c74ac",null),n=c.exports}}]);