"use strict";(self.webpackChunkvue_test=self.webpackChunkvue_test||[]).push([[9012],{99012:function(t,e,a){a.r(e),a.d(e,{default:function(){return n}});var u={data(){return{options:[{value:"1",label:"Admin"},{value:"2",label:"User"},{value:"3",label:"SuperAdmin"}],authValue:"User",authIndex:1}},computed:{},methods:{...(0,a(20629).OI)(["updateAuthBtn"]),authIndexClick(t,e){this.authIndex=e,this.authValue=t.label;this.updateAuthBtn((t=>{let e=new Map([["1",["btnAuth:user","btnAuth:admin"]],["2",["btnAuth:user"]],["3",["btnAuth:user","btnAuth:admin","btnAuth:del"]],["default",[]]]);return e.get(t)||e.get("default")})(t.value))}}},n=(0,a(43736).Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-auth"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("headerList.BtnAuth")))])]),a("div",{staticClass:"auth-select"},[a("span",[a("span",{staticStyle:{"font-weight":"600",color:"#000"}},[t._v("当前角色：")]),a("span",{staticClass:"role"},[t._v(t._s(t.authValue))])]),a("div",{staticStyle:{margin:"20px 0"}},t._l(t.options,(function(e,u){return a("el-button",{key:e.value,class:["auth-btn",t.authIndex==u?"auth-index":""],attrs:{type:"primary"},on:{click:function(a){return t.authIndexClick(e,u)}}},[t._v(t._s(e.label))])})),1)]),a("div",{staticStyle:{display:"flex"}},[a("el-button",{directives:[{name:"btn-auth",rawName:"v-btn-auth",value:"btnAuth:user",expression:"'btnAuth:user'"}],attrs:{type:"primary"}},[t._v("用户可查看按钮")]),a("el-button",{directives:[{name:"btn-auth",rawName:"v-btn-auth",value:"btnAuth:admin",expression:"'btnAuth:admin'"}],attrs:{type:"primary"}},[t._v("管理员可查看按钮")]),a("el-button",{directives:[{name:"btn-auth",rawName:"v-btn-auth",value:"btnAuth:del",expression:"'btnAuth:del'"}],attrs:{type:"primary"}},[t._v("删除按钮(超级管理员可查看按钮)")])],1)])],1)}),[],!1,null,"406fa28e",null).exports}}]);