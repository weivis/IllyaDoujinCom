(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c2b2526"],{"1c39":function(i,t,e){"use strict";var o=e("afe6"),a=e.n(o);a.a},"96bf":function(i,t,e){"use strict";e.r(t);var o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("el-dialog",{attrs:{title:"请输入退回的理由",visible:i.backinfo_win,width:"30%"},on:{"update:visible":function(t){i.backinfo_win=t}}},[e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"退回原因"},model:{value:i.backinfo_input,callback:function(t){i.backinfo_input=t},expression:"backinfo_input"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){i.backinfo_win=!1}}},[i._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(t){return i.verify_back()}}},[i._v("确 定")])],1)],1),e("div",{staticClass:"Common page-width"},[e("div",{staticClass:"l"},[e("iframe",{staticClass:"iframe",attrs:{src:"https://xbeibeix.com/api/bilibili/biliplayer/?url="+i.videoloadurl,allowfullscreen:"true",scrolling:"yes",frameborder:"0"}})]),e("div",{staticClass:"r"},[e("div",{staticClass:"mb"},[i._v(" 稿件状态: "),1==i.verify_type?e("span",[i._v("审核通过")]):i._e(),2==i.verify_type?e("span",[i._v("等待审核")]):i._e(),3==i.verify_type?e("span",[i._v("退回")]):i._e()]),e("div",{staticClass:"mb"},[i._v(" 退回原因:"),e("br"),i._v(" "+i._s(i.verify_falseinfo)+" ")]),e("div",{staticClass:"button",on:{click:function(t){return i.verify_ok()}}},[i._v("通过审核")]),e("div",{staticClass:"button",on:{click:function(t){return i.backrollr()}}},[i._v("回滚到等待审核")]),e("div",{staticClass:"button",on:{click:function(t){i.backinfo_win=!0}}},[i._v("退回")])])])],1)},a=[],n={name:"info",data:function(){return{id:0,loadcover:"",cover:"",classification:"",content_classification:0,title:"",introduce:"",source_type:1,original_type:1,original_url:"",original_author:"",videoloadurl:"",verify_type:"",backinfo_input:"",backinfo_win:!1,verify_falseinfo:""}},methods:{verify_back:function(){var i=this;this.$http.VideoAdminVerify({id:this.id,verify_type:3,verify_falseinfo:this.backinfo_input}).then((function(t){200==t.code&&(i.backinfo_win=!1,i.$Message({message:t.msg,duration:5e3}),i.query(i.$route.query.id))})).catch((function(i){console.log("error",i)}))},backrollr:function(){var i=this;this.$http.VideoAdminVerify({id:this.id,verify_type:2}).then((function(t){200==t.code&&(i.$Message({message:t.msg,duration:5e3}),i.query(i.$route.query.id))})).catch((function(i){console.log("error",i)}))},verify_ok:function(){var i=this;this.$http.VideoAdminVerify({id:this.id,verify_type:1}).then((function(t){200==t.code&&(i.$Message({message:t.msg,duration:5e3}),i.query(i.$route.query.id))})).catch((function(i){console.log("error",i)}))},query:function(i){var t=this;this.$http.VideoQuery({id:i}).then((function(i){200==i.code&&(t.verify_type=i.data.verify_type,t.id=i.data.id,t.cover=i.data.filecover,t.loadcover=i.data.cover,t.classification=i.data.classification,t.content_classification=i.data.content_classification,t.title=i.data.title,t.introduce=i.data.introduce,t.source_type=i.data.source_type,t.original_type=i.data.original_type,t.original_url=i.data.original_url,t.original_author=i.data.original_author,t.videoloadurl=i.data.videoloadurl,t.verify_falseinfo=i.data.verify_falseinfo)})).catch((function(i){console.log("error",i)}))}},components:{},created:function(){this.query(this.$route.query.id)}},r=n,c=(e("1c39"),e("2877")),s=Object(c["a"])(r,o,a,!1,null,"56b89108",null);t["default"]=s.exports},afe6:function(i,t,e){}}]);
//# sourceMappingURL=chunk-6c2b2526.600b6b1f.js.map