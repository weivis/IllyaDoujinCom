(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0155acd9"],{1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Components-Pagination"},[a("div",{staticClass:"Pagination Content Common page-width"},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)])},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){var i=n/2;return i<1?a/2*i*i+e:(i--,-a/2*(i*(i-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,a){var n=s(),i=t-n,c=20,u=0,l="undefined"===typeof e?500:e,p=function t(){u+=c;var s=Math.easeInOutQuad(u,n,i,l);o(s),u<e?r(t):a&&"function"===typeof a&&a()};p()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"prev, pager, next"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(){this.$emit("pagination"),this.autoScroll&&c(0,800)},handleCurrentChange:function(){this.$emit("pagination"),this.autoScroll&&c(0,800)}}},l=u,p=(a("8500"),a("2877")),f=Object(p["a"])(l,n,i,!1,null,"35f7faa7",null);e["a"]=f.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,o;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(o=r.prototype)&&o!==a.prototype&&i(t,o),t}},"7b79":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v(" 类型 "),a("el-radio-group",{model:{value:t.sfilter,callback:function(e){t.sfilter=e},expression:"sfilter"}},[a("el-radio-button",{attrs:{label:0}},[t._v("全部")]),a("el-radio-button",{attrs:{label:1}},[t._v("已审核")]),a("el-radio-button",{attrs:{label:2}},[t._v("等待审核")]),a("el-radio-button",{attrs:{label:3}},[t._v("审核不合格退回")])],1)],1),a("div",{staticClass:"Common page-width pcont"},t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"cover"},[a("el-link",{attrs:{href:"/doujin/info?id="+e.id,target:"_blank"}},[a("el-image",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:e.cover,fit:"cover"}})],1)],1),a("div",{staticClass:"info"},[a("div",{staticClass:"content"},[a("div",{staticClass:"buttonli"},[a("el-link",{staticStyle:{"margin-right":"15px"},attrs:{href:"/contribute/verify/info?id="+e.id,target:"_blank"}},[a("el-button",[t._v("审核")])],1)],1),a("div",{staticClass:"title"},[a("span",{staticClass:"span"},[a("el-link",{staticClass:"span",staticStyle:{"font-size":"18px"},attrs:{href:"/doujin/info?id="+e.id,target:"_blank",underline:!1}},[t._v(t._s(e.title))])],1),a("div",{staticClass:"tag"},[1===e.verify_type?a("span",[t._v("审核通过")]):t._e(),2===e.verify_type?a("span",[t._v("等待审核中")]):t._e(),3===e.verify_type?a("span",[t._v("审核不合格退回")]):t._e(),4===e.verify_type?a("span",[t._v("被管理员删除")]):t._e()])]),a("div",{staticClass:"more"},[a("span",{staticClass:"span"},[t._v(" VID: "+t._s(e.id)+" ")]),a("span",{staticClass:"span"},[1===e.classification?a("span",[t._v("MAD·AMV")]):t._e(),2===e.classification?a("span",[t._v("MMD")]):t._e(),3===e.classification?a("span",[t._v("技术宅")]):t._e(),4===e.classification?a("span",[t._v("其他")]):t._e()]),a("span",{staticClass:"span"},[t._v(" 作品类型: "),1===e.original_type?a("span",[t._v("原创")]):t._e(),2===e.original_type?a("span",[t._v("转载")]):t._e()]),a("span",{staticClass:"span"},[t._v(" 投稿时间: "+t._s(e.create_time)+" ")])])])])])})),0),a("Pagination",{attrs:{total:t.totalItem,page:t.currentPage,limit:t.pageSize},on:{"update:page":function(e){t.currentPage=e},pagination:function(e){return t.getList()},"update:limit":function(e){t.pageSize=e}}})],1)},i=[],r=a("1799"),o={name:"contribute",data:function(){return{buttlist:[{title:"全部",conttype:0},{title:"已审核通过",conttype:1},{title:"等待审核",conttype:2},{title:"审核不合格退回",conttype:3}],rnav:[{title:"+ 投稿新作品",routername:"morecontribute"}],sfilter:0,currentPage:1,totalItem:0,totalPage:0,pageSize:10,list:[]}},components:{Pagination:r["a"]},watch:{sfilter:function(){this.getList()}},methods:{getList:function(){var t=this;this.$http.VideoList({types:0,pages:this.currentPage,sfilter:this.sfilter}).then((function(e){200==e.code&&(t.list=e.data.result,t.currentPage=e.data.page,t.totalPage=e.data.pages,t.totalItem=e.data.count)})).catch((function(t){console.log("error",t)}))}},created:function(){this.getList()}},s=o,c=(a("a22f"),a("2877")),u=Object(c["a"])(s,n,i,!1,null,"03cfa1a5",null);e["default"]=u.exports},8500:function(t,e,a){"use strict";var n=a("acc2"),i=a.n(n);i.a},"9b07":function(t,e,a){},a22f:function(t,e,a){"use strict";var n=a("9b07"),i=a.n(n);i.a},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),o=a("6eeb"),s=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),p=a("d039"),f=a("7c73"),d=a("241c").f,g=a("06cf").f,v=a("9bf2").f,m=a("58a8").trim,_="Number",h=i[_],b=h.prototype,y=c(f(b))==_,C=function(t){var e,a,n,i,r,o,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(r=u.slice(2),o=r.length,s=0;s<o;s++)if(c=r.charCodeAt(s),c<48||c>i)return NaN;return parseInt(r,n)}return+u};if(r(_,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var I,S=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof S&&(y?p((function(){b.valueOf.call(a)})):c(a)!=_)?u(new h(C(e)),a,S):C(e)},N=n?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)s(h,I=N[w])&&!s(S,I)&&v(S,I,g(h,I));S.prototype=b,b.constructor=S,o(i,_,S)}},acc2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0155acd9.d219f678.js.map