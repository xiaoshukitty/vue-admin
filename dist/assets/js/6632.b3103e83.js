"use strict";(self.webpackChunkvue_test=self.webpackChunkvue_test||[]).push([[6632],{86632:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});e(57658);var i={name:"Emotion",data:function(){return{Show:!1,EmotionList:["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"]}},methods:{ClickEmoticon:function(t){var s=this;s.Show=!1,s.$emit("AppendInputValue","[["+s.EmotionList[t]+"]]")},OpenEmotion:function(t){this.Show=t}}},n=e(43736),o={components:{Emotion:(0,n.Z)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.Show?e("div",{staticClass:"EmoticonListCover",on:{click:function(s){return t.OpenEmotion(!1)}}},[e("div",{staticClass:"EmoticonList"},t._l(t.EmotionList,(function(s,i){return e("div",{key:i,staticClass:"PicItem",on:{click:function(s){return t.ClickEmoticon(i)}}},[e("img",{attrs:{src:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/"+i+".gif"}})])})),0)]):t._e()}),[],!1,null,"f04adf2c",null).exports},data(){return{msg:"",isEmoji:!1,emoji:"",username:"",message:"",messages:[],ws:null,isConnect:!1}},created(){},watch:{messages(){this.$nextTick((()=>{const t=this.$refs.chatContainer;t.scrollTop=t.scrollHeight}))}},mounted(){},methods:{openSocket(){this.connectWebSocket()},closeSocket(){this.ws.close(),this.isConnect=!1},connectWebSocket(){this.ws=new WebSocket("ws://localhost:3000"),this.ws.onmessage=this.onMessage,this.ws.onclose=this.onClose,this.ws.onopen=this.onOpen,this.isConnect=!0},onMessage(t){const s=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"];this.messages.push(JSON.parse(t.data)),this.messages.forEach((t=>{if(this.containsNestedBrackets(t.chatMsg)){const e=t.chatMsg;let i=this.splitByNestedBrackets(e),n=s.findIndex((t=>t==this.takeValue(e)));for(let t=0;t<i.length;t++)this.containsNestedBrackets(i[t])?i[t]="<img src='https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/"+n+".gif' />":i[t]="<span>"+i[t]+"</span>";t.chatMsg=i}}))},onClose(){},onOpen(){},sendMsg(){if(!this.isConnect)return this.$message.warning("WebSocket 连接已关闭,请重新连接...");if(""==this.msg)return void this.$message.error("消息不能为空");let t={userId:"234567",chatMsg:this.msg,type:"my",timestamp:(new Date).getTime()};this.ws.send(JSON.stringify(t)),this.msg=""},OpenEmotions:function(){this.isEmoji=!this.isEmoji,this.isEmoji?this.$refs.EmotionB.OpenEmotion(!0):this.$refs.EmotionB.OpenEmotion(!1)},AppendMessageText:function(t){this.isEmoji=!1,this.msg+=t,this.$refs.iptFocus.focus()},splitByNestedBrackets(t){return t.split(/(\[\[.*?\]\])/).filter(Boolean)},containsNestedBrackets(t){return/\[\[.*?\]\]/.test(t)},takeValue(t){let s;return t.match(/\[\[(.*?)\]\]/g).map((t=>{s=t.replace(/^\[\[|\]\]$/g,"")})),s}},destroyed(){this.onClose()}},a=(0,n.Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"chatWebSocket"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h3",{staticStyle:{margin:"0 auto"}},[t._v("WebSocket 聊天室：")])]),e("div",{staticClass:"chat"},[e("div",{staticClass:"openSocket"},[t.isConnect?e("el-button",{attrs:{type:"danger"},on:{click:t.closeSocket}},[t._v("断开链接")]):e("el-button",{attrs:{type:"primary"},on:{click:t.openSocket}},[t._v("开启连接")])],1),e("div",{staticClass:"wrapper"},[e("div",{ref:"chatContainer",staticClass:"conversation"},[e("div",{staticClass:"conversation-start"},[e("span",[t._v("Today, 5:38 PM")])]),t._l(t.messages,(function(s,i){return e("div",{key:i},["you"!==s.type?e("div",{staticClass:"bubble you"},t._l(s.chatMsg,(function(s,i){return e("span",{key:i},[e("div",{domProps:{innerHTML:t._s(s)}})])})),0):e("div",{staticClass:"bubble me"},t._l(s.chatMsg,(function(s,i){return e("span",{key:i},[e("div",{domProps:{innerHTML:t._s(s)}})])})),0)])}))],2),e("div",{staticClass:"write"},[e("a",{staticClass:"write-link attach",attrs:{href:"javascript:;"}}),e("el-input",{ref:"iptFocus",staticClass:"msg-ipt",attrs:{type:"text",placeholder:"请输入内容"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg.apply(null,arguments)}},model:{value:t.msg,callback:function(s){t.msg=s},expression:"msg"}}),e("a",{staticClass:"write-link smiley",attrs:{href:"javascript:;"},on:{click:t.OpenEmotions}}),e("a",{staticClass:"write-link send",attrs:{href:"javascript:;"},on:{click:t.sendMsg}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isEmoji,expression:"isEmoji"}],staticClass:"emoji"},[e("Emotion",{ref:"EmotionB",on:{AppendInputValue:t.AppendMessageText}})],1)])])])],1)}),[],!1,null,"39ba9f1e",null),c=a.exports}}]);