"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[328],{22328:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuedraggable"},[n("div",{staticClass:"container"},[n("draggable",{staticClass:"list-group",attrs:{list:e.arrList,disabled:!e.enabled,"ghost-class":"ghost",move:e.checkMove},on:{start:e.onStart,end:e.onEnd}},e._l(e.arrList,(function(t){return n("div",{key:t.key,staticClass:"box"},[e._v(" "+e._s(t.item)+" ")])})),0)],1)])},a=[],r=n(9980),i=n.n(r),o={data(){return{enabled:!0,arrList:[{item:"第一块",key:"1"},{item:"第二块",key:"2"},{item:"第三块",key:"3"},{item:"第四块",key:"4"},{item:"第五块",key:"5"}]}},components:{draggable:i()},mounted(){},methods:{checkMove:function(e){window.console.log("Future index: "+e.draggedContext.futureIndex)},onStart(){},onEnd(){let e=this;console.log(e.arrList)}}},l=o,u=n(43736),c=(0,u.Z)(l,s,a,!1,null,null,null),d=c.exports}}]);