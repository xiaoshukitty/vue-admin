"use strict";(self.webpackChunkvue_test=self.webpackChunkvue_test||[]).push([[6377],{12359:function(e,t,n){n.d(t,{Z:function(){return l}});const i=[{name:"全部关闭",icon:"el-icon-close",lable:"close"}],s=[{name:"添加",icon:"el-icon-plus",lable:"add"},{name:"打开",icon:"el-icon-s-finance",lable:"open"}];var u={props:{routerType:{type:String}},data(){return{visible:!1,position:{x:0,y:0},enumList:[]}},watch:{routerType(e,t){this.enumList=(e=>{let t=new Map([["layout",i],["rightMenu",s]]);return t.get(e)||t.get("default")})(e)}},methods:{showMenu(e){e.preventDefault(),this.position={x:e.clientX,y:e.clientY},this.visible=!0},hideMenu(){this.visible=!1},handleClickOutside(e){this.$el.contains(e.target)||this.hideMenu()},handleMenuItemClick(e){this.$emit("menu-item",e),this.hideMenu()}},mounted(){document.addEventListener("click",this.handleClickOutside)},beforeDestroy(){document.removeEventListener("click",this.handleClickOutside)}},l=(0,n(43736).Z)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{staticClass:"context-menu",style:{top:e.position.y+"px",left:e.position.x+"px"}},[n("ul",e._l(e.enumList,(function(t){return n("li",{key:t.value,on:{click:function(n){return e.handleMenuItemClick(t.lable)}}},[n("i",{class:t.icon,staticStyle:{"font-size":"14px","margin-right":"5px",cursor:"pointer"}}),e._v(" "+e._s(t.name)+" ")])})),0)]):e._e()}),[],!1,null,"08b5bf51",null).exports},56377:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i={name:"rightMenu",components:{ContextMenu:n(12359).Z},data(){return{routerType:""}},methods:{showContextMenu(e){this.routerType="rightMenu",e.preventDefault(),this.$refs.contextMenu.showMenu(e)},handleMenuItem(e){this.$message.warning(e)}}},s=(0,n(43736).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"right-menu"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.$t("headerList.RightMenu")))])]),n("div",{staticClass:"right-block",on:{contextmenu:e.showContextMenu}},[e._v(" 右键菜单 ")])]),n("ContextMenu",{ref:"contextMenu",attrs:{routerType:e.routerType},on:{"menu-item":e.handleMenuItem}})],1)}),[],!1,null,"8c5e57ec",null).exports}}]);