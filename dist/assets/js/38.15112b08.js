"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[38],{2038:function(t,i,e){e.r(i),e.d(i,{default:function(){return v}});var s=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("div",[t._v("123")]),i("VirtualComponents",{attrs:{listData:t.data,itemSize:100}})],1)},n=[],l=(e(57658),function(){var t=this,i=t._self._c;return i("div",{ref:"list",staticClass:"infinite-list-container",on:{scroll:function(i){return t.scrollEvent(i)}}},[i("div",{staticClass:"infinite-list-phantom",style:{height:t.listHeight+"px"}}),i("div",{staticClass:"infinite-list",style:{transform:t.getTransform}},t._l(t.visibleData,(function(e){return i("div",{key:e.id,ref:"items",refInFor:!0,staticClass:"infinite-list-item",style:{height:t.itemSize+"px",lineHeight:t.itemSize+"px"}},[t._v(" "+t._s(e.value)+" ")])})),0)])}),r=[],a={name:"VirtualList",props:{listData:{type:Array,default:()=>[]},itemSize:{type:Number,default:200}},computed:{listHeight(){return this.listData.length*this.itemSize},visibleCount(){return Math.ceil(this.screenHeight/this.itemSize)},getTransform(){return`translate3d(0,${this.startOffset}px,0)`},visibleData(){return this.listData.slice(this.start,Math.min(this.end,this.listData.length))}},mounted(){this.screenHeight=this.$el.clientHeight,this.start=0,this.end=this.start+this.visibleCount},data(){return{screenHeight:0,startOffset:0,start:0,end:null}},methods:{scrollEvent(){let t=this.$refs.list.scrollTop;console.log(t),this.start=Math.floor(t/this.itemSize),this.end=this.start+this.visibleCount,console.log("开始索引",this.start),console.log("结束索引",this.end),this.startOffset=t-t%this.itemSize}}},h=a,o=e(1001),u=(0,o.Z)(h,l,r,!1,null,null,null),f=u.exports;let c=[];for(let g=0;g<1e3;g++)c.push({id:g,value:g});var d={name:"App",data(){return{data:c}},components:{VirtualComponents:f}},m=d,p=(0,o.Z)(m,s,n,!1,null,null,null),v=p.exports}}]);