"use strict";(self.webpackChunkvue_test=self.webpackChunkvue_test||[]).push([[7727],{7727:function(r,s,e){e.r(s),e.d(s,{default:function(){return o}});var t=e(1026),a={data(){return{userForm:{username:JSON.parse(localStorage.getItem("USERINFO")).username,confirmPassword:"",password:""},rules:{password:[{validator:(r,s,e)=>{""===s?e(new Error("请输入密码")):(""!==this.userForm.confirmPassword&&this.$refs.userForm.validateField("confirmPassword"),e())},trigger:"blur"}],confirmPassword:[{validator:(r,s,e)=>{""===s?e(new Error("请再次输入密码")):s!==this.userForm.password?e(new Error("两次输入密码不一致!")):e()},trigger:"blur"}]}}},methods:{edit(r){this.$refs[r].validate((r=>{if(!r)return!1;this.updatePassword()}))},async updatePassword(){let r={username:this.userForm.username,password:this.userForm.password};200==(await(0,t.gQ)(r)).code&&(this.$notify({title:this.$t("headerList.PasswordChangedSuccessfully"),type:"success"}),this.reset())},reset(){this.userForm={username:JSON.parse(localStorage.getItem("USERINFO")).username,confirmPassword:"",password:""}}}},o=(0,e(43736).Z)(a,(function(){var r=this,s=r.$createElement,e=r._self._c||s;return e("div",{staticClass:"setting"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[r._v(r._s(r.$t("headerList.UpdatePassword")))])]),e("el-form",{ref:"userForm",staticStyle:{width:"480px"},attrs:{model:r.userForm,rules:r.rules,"label-width":"180px"}},[e("el-form-item",{attrs:{label:r.$t("loginI18n.UserName")+":",prop:"username"}},[e("el-input",{attrs:{disabled:""},model:{value:r.userForm.username,callback:function(s){r.$set(r.userForm,"username",s)},expression:"userForm.username"}})],1),e("el-form-item",{attrs:{label:r.$t("loginI18n.PassWord")+":",prop:"password"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:r.userForm.password,callback:function(s){r.$set(r.userForm,"password",s)},expression:"userForm.password"}})],1),e("el-form-item",{attrs:{label:r.$t("signInI18n.ConfirmPassword")+":",prop:"confirmPassword"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:r.userForm.confirmPassword,callback:function(s){r.$set(r.userForm,"confirmPassword",s)},expression:"userForm.confirmPassword"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(s){return r.edit("userForm")}}},[r._v(r._s(r.$t("headerList.Update")))])],1)],1)],1)],1)}),[],!1,null,"40587f14",null).exports}}]);