"use strict";(self.webpackChunkvue_test=self.webpackChunkvue_test||[]).push([[285],{10285:function(t,e,i){i.r(e),i.d(e,{default:function(){return n}});var s=i(1026);i(57658);const a=[{value:"1",label:"炒菜"},{value:"2",label:"主食"},{value:"3",label:"汤"},{value:"4",label:"饮料"},{value:"5",label:"火锅"},{value:"6",label:"零食"}];var l={props:{dialogPopUp:{type:Boolean,default:!1},titlePopUp:{type:String,default:""},foodInfo:{type:Object,default:""}},data(){return{form:{name:"",pic:"",price:"",inventory:"",uid:"",id:"",attr:""},foodClassify:a,rules:{name:[{required:!0,message:"请输入菜品名称",trigger:"blur"}],pic:[{required:!0,message:"请输入有效能打开的菜品图片地址",trigger:"blur"}],price:[{required:!0,message:"请输入合理菜品价格",trigger:"blur"}],inventory:[{required:!0,message:"请输入菜品库存",trigger:"blur"}],uid:[{required:!0,message:"请选择商品所属分类",trigger:"change"}]},attrList:[{attrName:""}],attributeCopy:[]}},computed:{dialogVisible:{get(){return this.dialogPopUp},set(t){this.$emit("update:visible",t)}}},created(){},watch:{foodInfo(t,e){const{name:i,food_img:s,price:a,inventory:l,uid:r,id:o,attribute:n}=t;this.form={name:i,pic:s,price:a,inventory:l,uid:1==r?"炒菜":2==r?"主食":3==r?"汤":4==r?"饮料":5==r?"火锅":"零食"},this.attrList=n&&null!=n?n:[{attrName:""}],this.attributeCopy=n,this.id=o},titlePopUp(t,e){"商品编辑"!=t&&this.init()}},methods:{cancelAddFoods(){this.$emit("update:visible",!1)},confirmAddFoods(t){this.$refs[t].validate((t=>{if(!t)return!1;"商品编辑"==this.titlePopUp?this.updataDishes():this.submitFood()}))},async updataDishes(){if(this.attributeCopy&&null!=this.attributeCopy){this.attrList.every((t=>""!=t.attrName))||this.$message({message:"请把规格输入框都输入或者删除！",type:"warning"})}let t={name:this.form.name,food_img:this.form.pic,price:this.form.price,inventory:this.form.inventory,uid:this.form.uid,id:this.id,attribute:JSON.stringify(this.attrList)};200==(await(0,s.D2)(t)).code&&(this.$message({message:"编辑成功",type:"success"}),this.init(),this.$emit("update:visible",!1),this.$emit("update:page"))},async submitFood(){this.attrList.every((t=>""!=t.attrName))||this.$message({message:"请把规格输入框都输入或者删除！",type:"warning"});let t={name:this.form.name,food_img:this.form.pic,price:this.form.price,inventory:this.form.inventory,uid:this.form.uid,attribute:JSON.stringify(this.attrList)};200==(await(0,s.r_)(t)).code&&(this.$message({message:"添加成功",type:"success"}),this.init(),this.$emit("update:visible",!1),this.$emit("update:page"))},init(){this.form={name:"",pic:"",price:"",inventory:"",uid:""}},addAttr(){this.attrList.push({attrName:""})},closeAttr(t){this.attrList.splice(t,1)},handleClose(){this.$emit("update:visible",!1)}},deactivated(){}},r=i(43736),o={data(){return{cuisineIpt:"",loading:!0,dishesList:[],dialogPopUp:!1,titlePopUp:"",foodInfo:{}}},components:{FoodsPopUp:(0,r.Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:t.titlePopUp,visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"conter"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"菜品名称：",prop:"name"}},[i("el-input",{staticClass:"w300",attrs:{placeholder:"请输入菜品名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"菜品图片：",prop:"pic"}},[i("el-input",{staticClass:"w300",attrs:{placeholder:"请输入菜品图片地址"},model:{value:t.form.pic,callback:function(e){t.$set(t.form,"pic",e)},expression:"form.pic"}})],1),i("el-form-item",{attrs:{label:"菜品价格：",prop:"price"}},[i("el-input",{staticClass:"w300",attrs:{placeholder:"请输入菜品价格",type:"number"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),i("el-form-item",{attrs:{label:"库存：",prop:"inventory"}},[i("el-input",{staticClass:"w300",attrs:{placeholder:"请输入菜品库存",type:"number"},model:{value:t.form.inventory,callback:function(e){t.$set(t.form,"inventory",e)},expression:"form.inventory"}})],1),i("el-form-item",{attrs:{label:"规格：",prop:"attr"}},[i("div",{staticClass:"attr"},[t._l(t.attrList,(function(e,s){return i("div",{key:s,staticClass:"attr-conter"},[i("el-input",{staticClass:"w105",attrs:{placeholder:"规格描述"},model:{value:e.attrName,callback:function(i){t.$set(e,"attrName",i)},expression:"item.attrName"}}),i("i",{staticClass:"el-icon-circle-close fs30",on:{click:function(e){return t.closeAttr(s)}}})],1)})),i("div",{staticClass:"icon-add"},[i("i",{staticClass:"el-icon-circle-plus-outline ",on:{click:t.addAttr}})])],2)]),i("el-form-item",{attrs:{label:"所属分类：",prop:"uid"}},[i("el-select",{staticClass:"w300",attrs:{placeholder:"请选择商品所属分类"},model:{value:t.form.uid,callback:function(e){t.$set(t.form,"uid",e)},expression:"form.uid"}},t._l(t.foodClassify,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.cancelAddFoods}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.confirmAddFoods("ruleForm")}}},[t._v("确 定")])],1)])}),[],!1,null,"51766298",null).exports},created(){this.getDishesList()},methods:{search(){this.getDishesList()},async getDishesList(){let t={name:this.cuisineIpt};const{data:e}=await(0,s.GR)(t);try{for(let t=0;t<e.length;t++)""==e[t].price&&(e.splice(t,1),t--);this.dishesList=e}catch(i){throw new Error("No Data")}finally{setTimeout((()=>{this.loading=!1}),1e3)}},addFoods(){this.dialogPopUp=!0,this.titlePopUp="商品添加"},updateVisible(t){this.dialogPopUp=t},updatePage(){this.loading=!0,this.getDishesList()},handleEdit(t){this.foodInfo=t,this.dialogPopUp=!0,this.titlePopUp="商品编辑"},handleDelete(t){const{id:e}=t;this.$confirm("此操作将永久删除该菜品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.delFoods(e)})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},async delFoods(t){this.loading=!0;let e={id:t};200==(await(0,s.Em)(e)).code&&(this.getDishesList(),this.$message({type:"success",message:"删除成功!"}))}},mounted(){}},n=(0,r.Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xcx-menu"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("菜单管理")])]),i("div",{staticClass:"form"},[i("div",{staticClass:"search"},[i("div",{staticClass:"mr10"},[t._v("菜品名称：")]),i("el-input",{staticClass:"w200",attrs:{placeholder:"请输入菜品名称",clearable:""},on:{clear:t.search},model:{value:t.cuisineIpt,callback:function(e){t.cuisineIpt=e},expression:"cuisineIpt"}})],1),i("div",{staticClass:"search-btn"},[i("el-button",{staticClass:"ml30",attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:t.search}},[t._v("搜索")])],1),i("div",{staticClass:"search-btn"},[i("el-button",{staticClass:"ml30",attrs:{type:"primary",plain:""},on:{click:t.addFoods}},[t._v("添加商品")])],1)]),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"food-table"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dishesList,stripe:""}},[i("el-table-column",{attrs:{prop:"id",label:"id",align:"center"}}),i("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center"}}),i("el-table-column",{attrs:{prop:"food_img",label:"商品图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("img",{staticClass:"food-img",attrs:{src:t.row.food_img,alt:""}})]}}])}),i("el-table-column",{attrs:{prop:"price",label:"商品价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.price.toFixed(2)))]),i("span",[t._v("元")])]}}])}),i("el-table-column",{attrs:{prop:"inventory",label:"库存",align:"center"}}),i("el-table-column",{attrs:{prop:"attribute",label:"规格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.attribute&&e.row.attribute.length>0?t._l(e.row.attribute,(function(e,s){return i("span",{key:s},[t._v(t._s(e.attrName)+",")])})):i("span",[t._v("--")])]}}])}),i("el-table-column",{attrs:{prop:"uid",label:"所属分类",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(1==e.row.uid?"炒菜":2==e.row.uid?"主食":3==e.row.uid?"汤":4==e.row.uid?"饮料":5==e.row.uid?"火锅":"零食"))])]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.row)}}},[t._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1)]),i("FoodsPopUp",{attrs:{dialogPopUp:t.dialogPopUp,titlePopUp:t.titlePopUp,foodInfo:t.foodInfo},on:{"update:visible":t.updateVisible,"update:page":t.updatePage}})],1)}),[],!1,null,"ba7a638c",null).exports}}]);