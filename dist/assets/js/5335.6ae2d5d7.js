"use strict";(self.webpackChunkvue_test=self.webpackChunkvue_test||[]).push([[5335],{5335:function(e,t,s){s.r(t),s.d(t,{default:function(){return n}});var i=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"server-img"},[t("img",{attrs:{src:s(4777),alt:""}})])}],r=(s(57658),s(8433)),a=s(31955),l={data(){return{serverIpt:"",isShow:!1,dialogVisible:!0}},created(){},methods:{async verify(){if(this.serverIpt)try{await r.Z.post(this.serverIpt+"/memo/getMemoList");this.isShow=!1,setTimeout((()=>{a.Z.set("serverShow","1"),this.$router.push({path:a.Z.get("last_page_linkedServer")})}),1e3)}catch(e){this.isShow=!0}else this.$message.warning("请输入API地址")},goToGithub(){window.open("https://github.com/xiaoshukitty/vue-admin","_blank")}}},n=(0,s(43736).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"linkdServer"},[e._m(0),s("div",{staticClass:"server-title"},[e._v(" 欢迎体验 VUE-ADMIN ")]),e.isShow?s("div",{staticClass:"server-tips"},[s("el-alert",{attrs:{title:"地址请求失败，请检查后重试！",type:"error"}})],1):e._e(),s("div",{staticClass:"server-ipt"},[s("el-input",{attrs:{placeholder:"http://127.0.0.1:3000"},model:{value:e.serverIpt,callback:function(t){e.serverIpt=t},expression:"serverIpt"}},[s("template",{slot:"prepend"},[e._v("API地址")]),s("el-button",{attrs:{slot:"append"},on:{click:e.verify},slot:"append"},[e._v("确定")])],2)],1),s("div",{staticClass:"server-text"},[e._v(" 如何搭建？"),s("span",{on:{click:function(t){e.dialogVisible=!0}}},[e._v(" VUE-ADMIN-API 文档")])]),s("el-dialog",{attrs:{title:"链接服务",visible:e.dialogVisible,width:"42%","show-close":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",{staticClass:"link-server-dialog"},[s("div",[e._v(" 1：下载项目 "),s("span",{on:{click:e.goToGithub}},[e._v("地址跳转链接")])]),s("div",[e._v(" 2：进入 node_server 目录、执行 npm install 安装依赖、执行 nodemon app.js 启动服务器 ")]),s("div",[e._v(" 3：输入启动地址（参考：http://localhost:3000） 到API地址输入框中、点击确定按钮 ")]),s("div",[e._v(" 4：如果API地址输入框中输入地址后，出现地址请求失败，请检查后重试！ ")]),s("div",[e._v(" 5：如果API地址输入框中输入地址后，出现地址请求成功，则解锁成功！则返回到对应的页面 ")])])])],1)}),i,!1,null,"2026faf4",null).exports},4777:function(e,t,s){e.exports=s.p+"assets/img/server.92984840.png"}}]);