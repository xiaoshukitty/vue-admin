"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[373],{62373:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"test"},[e("h1",[t._v(t._s(t.myName))]),e("el-button",{staticClass:"m5",attrs:{type:"primary",size:"small"},on:{click:t.uploadVuex}},[t._v("mutations 修改 vuex 数据")]),e("el-button",{staticClass:"m5",attrs:{type:"primary",size:"small"},on:{click:t.uploadAysncVuex}},[t._v("actions 异步 vuex 数据(静态)")]),e("h1",[t._v(t._s(t.num))]),e("el-button",{staticClass:"m5",attrs:{type:"primary",size:"small"},on:{click:t.updateAdd}},[t._v("持久话存储")])],1)},u=[],n=s(20629),i={data(){return{}},created(){},computed:{...(0,n.rn)(["myName","num"])},methods:{uploadVuex(){this.$store.commit("setMyName",{newName:"xiaoyu"})},uploadAysncVuex(){this.$store.dispatch("setAsyncMyNameStatic",{newName:"xiaohuan"})},...(0,n.OI)(["updateAdd"])}},l=i,c=s(1001),m=(0,c.Z)(l,a,u,!1,null,"0c38ff50",null),r=m.exports}}]);