(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,s=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},u=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0155acd9":"d219f678","chunk-246978e4":"5d537ec1","chunk-1dd74da9":"778e6ca7","chunk-2950093c":"b98fc475","chunk-26fef33b":"4734cd51","chunk-2d0dacd3":"1ede2777","chunk-2d0e95df":"5ee2e6c0","chunk-2d21a3d2":"5a53fcf7","chunk-379e01e0":"fa8a25a8","chunk-39e48a10":"4edc1939","chunk-63291eb1":"d91dae4e","chunk-691c0196":"8e63bf61","chunk-6c2b2526":"600b6b1f","chunk-6ef8e268":"bee2a36c","chunk-6fff4c0e":"e44ac05f","chunk-73807532":"24eec48f","chunk-7ba2a21a":"affe765f","chunk-9ffb4070":"6c800209"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0155acd9":1,"chunk-1dd74da9":1,"chunk-2950093c":1,"chunk-26fef33b":1,"chunk-379e01e0":1,"chunk-39e48a10":1,"chunk-63291eb1":1,"chunk-691c0196":1,"chunk-6c2b2526":1,"chunk-6ef8e268":1,"chunk-6fff4c0e":1,"chunk-73807532":1,"chunk-7ba2a21a":1,"chunk-9ffb4070":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0155acd9":"3ba52ef2","chunk-246978e4":"31d6cfe0","chunk-1dd74da9":"f2036d9e","chunk-2950093c":"03c922ed","chunk-26fef33b":"1cdf3996","chunk-2d0dacd3":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-379e01e0":"ab6087c4","chunk-39e48a10":"092d6623","chunk-63291eb1":"0415b4cc","chunk-691c0196":"db92ba86","chunk-6c2b2526":"a4170632","chunk-6ef8e268":"60cdedae","chunk-6fff4c0e":"092d6623","chunk-73807532":"ec0d96f6","chunk-7ba2a21a":"1cdf3996","chunk-9ffb4070":"a6fd69f4"}[t]+".css",o=c.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return e()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){l=s[i],d=l.getAttribute("data-href");if(d===a||d===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[t],m.parentNode.removeChild(m),n(u)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=u);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var s=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/front/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var m=d;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"122a":function(t,e,n){"use strict";var a=n("d3eb"),r=n.n(a);r.a},"1be0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"upload",(function(){return rt})),n.d(a,"AlbumAddOrEdit",(function(){return ot})),n.d(a,"AlbumChange",(function(){return ut})),n.d(a,"AlbumBindBangumi",(function(){return it})),n.d(a,"AlbumDowurlAddOrEdit",(function(){return ct})),n.d(a,"AlbumDowurlDel",(function(){return lt})),n.d(a,"AlbumList",(function(){return dt})),n.d(a,"AlbumInfo",(function(){return st})),n.d(a,"AlbumDowurlList",(function(){return mt})),n.d(a,"AlbumDowurlChange",(function(){return ft})),n.d(a,"ArticleAddoredit",(function(){return ht})),n.d(a,"ArticleList",(function(){return pt})),n.d(a,"ArticleInfo",(function(){return bt})),n.d(a,"ArticleChange",(function(){return gt})),n.d(a,"authAdminLogin",(function(){return vt})),n.d(a,"authAdminLogout",(function(){return kt})),n.d(a,"BangumiCvDel",(function(){return yt})),n.d(a,"BangumiCvAddoredit",(function(){return wt})),n.d(a,"bangumiAddOrEdit",(function(){return _t})),n.d(a,"bangumiList",(function(){return Ct})),n.d(a,"bangumiChange",(function(){return xt})),n.d(a,"bangumiInfo",(function(){return At})),n.d(a,"bangumiPlayurlAddOrEdit",(function(){return Ot})),n.d(a,"bangumiPlayurlDel",(function(){return Lt})),n.d(a,"cvList",(function(){return jt})),n.d(a,"cvAdd",(function(){return Et})),n.d(a,"cvDel",(function(){return St})),n.d(a,"cvEdit",(function(){return Pt})),n.d(a,"VideoList",(function(){return Tt})),n.d(a,"VideoQuery",(function(){return Ut})),n.d(a,"VideoAdminVerify",(function(){return $t})),n.d(a,"PhotoList",(function(){return Dt})),n.d(a,"PhotoUp",(function(){return Ht})),n.d(a,"PhotoChange",(function(){return It})),n.d(a,"PhotoAdminChange",(function(){return Mt}));var r={};n.r(r),n.d(r,"getUserToken",(function(){return zt})),n.d(r,"setUserToken",(function(){return Rt})),n.d(r,"removeUserToken",(function(){return Ft})),n.d(r,"getUserData",(function(){return Kt}));n("c975"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{key:t.$route.fullPath})],1)},i=[],c={name:"App",created:function(){var t=this.$authUser.getUserToken();t?console.log("用户已登录"):console.log("用户未登录")}},l=c,d=(n("034f"),n("2877")),s=Object(d["a"])(l,u,i,!1,null,null,null),m=s.exports,f=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("layout-header"),n("layout-appmain"),n("layout-lnav"),n("layout-loginbar")],1)},p=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-Header"},[n("div",{staticStyle:{width:"250px",float:"left",height:"60px"}},[n("el-image",{staticStyle:{padding:"15px"},attrs:{src:t.logo,fit:"contain"}})],1),n("div",{staticStyle:{width:"calc(100% - 250px)",float:"right",height:"60px"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:"/contribute/verify"}},[t._v("审核稿件")])],1),n("el-menu-item",{attrs:{index:"3"}},[t._v("发布新资源")]),n("el-menu-item",{attrs:{index:"4"}},[t._v("发布新文章")])],1)],1)])},g=[],v={name:"Header",data:function(){return{logo:this.$ServerHttpUrl+"/static/admin/image/logo.png",activeIndex:"0"}},methods:{handleSelect:function(t,e){console.log(t,e)}},components:{},created:function(){}},k=v,y=Object(d["a"])(k,b,g,!1,null,"f41df0b4",null),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-Lnav"},[n("el-col",{attrs:{span:24}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("番剧")])]),n("router-link",{attrs:{to:"/bangumi/list"}},[n("el-menu-item",{attrs:{index:"1-1"}},[t._v("番剧管理")])],1),n("router-link",{attrs:{to:"/bangumi/add"}},[n("el-menu-item",{attrs:{index:"1-2"}},[t._v("发布新番剧")])],1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("CV管理")])]),n("router-link",{attrs:{to:"/cv/"}},[n("el-menu-item",{attrs:{index:"1-1"}},[t._v("CV管理")])],1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("文章")])]),n("router-link",{attrs:{to:"/article/add"}},[n("el-menu-item",{attrs:{index:"3-1"}},[t._v("发布新文章")])],1),n("router-link",{attrs:{to:"/article/list"}},[n("el-menu-item",{attrs:{index:"3-2"}},[t._v("管理文章")])],1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("用户评论管理")])]),n("el-menu-item",{attrs:{index:"4-1"}},[t._v("举报管理")]),n("el-menu-item",{attrs:{index:"4-2"}},[t._v("已处理的评论")])],2),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("资源区")])]),n("router-link",{attrs:{to:"/album/add"}},[n("el-menu-item",{attrs:{index:"5-1"}},[t._v("发布新资源")])],1),n("router-link",{attrs:{to:"/album/list"}},[n("el-menu-item",{attrs:{index:"5-2"}},[t._v("资源管理")])],1),n("router-link",{attrs:{to:"/album/feedback"}},[n("el-menu-item",{attrs:{index:"5-3"}},[t._v("反馈处理")])],1)],2),n("el-submenu",{attrs:{index:"6"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("视频管理")])]),n("router-link",{attrs:{to:"/contribute/verify"}},[n("el-menu-item",{attrs:{index:"6-1"}},[t._v("视频管理")])],1)],2),n("el-submenu",{attrs:{index:"7"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[t._v("相簿管理")])]),n("router-link",{attrs:{to:"/photo"}},[n("el-menu-item",{attrs:{index:"7-1"}},[t._v("相簿管理")])],1)],2)],1)],1)],1)},C=[],x={name:"Lnav",components:{},created:function(){},data:function(){return{active:1}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},A=x,O=Object(d["a"])(A,_,C,!1,null,"06e3e746",null),L=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HeaderLoginbar"},[n("div",{staticClass:"userbar"},[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[t._v(" 欢迎你: "+t._s(t.UserData.username)+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.Logout_users(e)}}},[t._v("退出登录")])],1)],1)],1)])},E=[],S={name:"HeaderLoginbar",data:function(){return{UserData:{}}},created:function(){this.UserData=this.$authUser.getUserData(),console.log(this.UserData)},methods:{Logout_users:function(){var t=this;this.$http.authAdminLogout().then((function(e){200===e.code&&(console.log(">用户退出登录"),t.$authUser.removeUserToken(),t.$router.push({name:"Login"}))})).catch((function(t){console.log("error",t)}))}}},P=S,T=(n("621d"),Object(d["a"])(P,j,E,!1,null,"9b878352",null)),U=T.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-main"},[n("div",{staticClass:"app-main-width"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view",{key:t.key})],1)],1)])},D=[],H=(n("b0c0"),{name:"AppMain",computed:{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date}}}),I=H,M=(n("122a"),Object(d["a"])(I,$,D,!1,null,"7deb4267",null)),q=M.exports,B={name:"Home",methods:{},components:{"layout-header":w,"layout-appmain":q,"layout-lnav":L,"layout-loginbar":U},created:function(){}},N=B,V=Object(d["a"])(N,h,p,!1,null,null,null),J=V.exports;o["default"].use(f["a"]);var z=[{path:"/404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},hidden:!0},{path:"/",component:J,children:[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{title:"首页"}}]},{path:"/contribute",component:J,children:[{path:"verify",name:"verifycontribute",component:function(){return n.e("chunk-0155acd9").then(n.bind(null,"7b79"))},meta:{title:"视频审核"}},{path:"verify/info",name:"verifycontributeinfo",component:function(){return n.e("chunk-6c2b2526").then(n.bind(null,"96bf"))},meta:{title:"视频审核"}}]},{path:"/bangumi",component:J,children:[{path:"list",name:"listbangumi",component:function(){return n.e("chunk-26fef33b").then(n.bind(null,"7c07"))},meta:{title:"番剧管理"}},{path:"add",name:"addbangumi",component:function(){return n.e("chunk-63291eb1").then(n.bind(null,"1bcf"))},meta:{title:"添加番剧"}},{path:"edit",name:"editbangumi",component:function(){return n.e("chunk-9ffb4070").then(n.bind(null,"1a3d"))},meta:{title:"编辑番剧信息"}}]},{path:"/cv",component:J,children:[{path:"/",name:"cvlist",component:function(){return n.e("chunk-691c0196").then(n.bind(null,"10ee"))},meta:{title:"CV管理"}}]},{path:"/article",component:J,children:[{path:"list",name:"articlelist",component:function(){return n.e("chunk-39e48a10").then(n.bind(null,"eb84"))},meta:{title:"文章管理"}},{path:"add",name:"articleadd",component:function(){return Promise.all([n.e("chunk-246978e4"),n.e("chunk-2950093c")]).then(n.bind(null,"fdc6"))},meta:{title:"添加文章"}},{path:"edit",name:"articleedit",component:function(){return Promise.all([n.e("chunk-246978e4"),n.e("chunk-1dd74da9")]).then(n.bind(null,"fbee"))},meta:{title:"编辑文章"}}]},{path:"/album",component:J,children:[{path:"list",name:"listalbum",component:function(){return n.e("chunk-6fff4c0e").then(n.bind(null,"b96c"))},meta:{title:"资源管理"}},{path:"add",name:"addalbum",component:function(){return n.e("chunk-73807532").then(n.bind(null,"2882"))},meta:{title:"添加资源"}},{path:"edit",name:"editalbum",component:function(){return n.e("chunk-379e01e0").then(n.bind(null,"0042"))},meta:{title:"编辑资源信息"}},{path:"feedback",name:"feedbackalbum",component:function(){return n.e("chunk-2d0dacd3").then(n.bind(null,"6cc3"))},meta:{title:"反馈处理"}}]},{path:"/photo",component:J,children:[{path:"/",name:"listphoto",component:function(){return n.e("chunk-7ba2a21a").then(n.bind(null,"55e9"))},meta:{title:"相簿"}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-6ef8e268").then(n.bind(null,"a55b"))}}],R=new f["a"]({base:"front",mode:"history",routes:z}),F=R,K=n("2f62");o["default"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=n("5c96"),W=n.n(G),X=n("f0d9"),Y=n.n(X),Z=n("bc3a"),tt=n.n(Z),et="https://illya-support.weivird.com/api",nt=tt.a.create({baseURL:et,timeout:5e4});nt.interceptors.request.use((function(t){var e=window.localStorage.getItem("illyaComAdminToken")?window.localStorage.getItem("illyaComAdminToken"):"";return console.log("Authorization",e),e&&(t.headers["Token"]=e),t}),(function(t){console.log(t),Promise.reject(t)})),nt.interceptors.response.use((function(t){var e=t.data;return e&&200!==e.code&&(e&&10086==e.code?(Object(G["Message"])({message:e.msg,type:"error",duration:5e3}),F.push({name:"login",params:{msg:e.msg}})):Object(G["Message"])({message:e.msg,type:"error",duration:5e3})),e}),(function(t){return console.log("err"+t),Object(G["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),nt.httpRoot=et;var at=nt;function rt(t){return at({url:"/upload/",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function ot(t){return at({url:"/album/addoredit",method:"post",data:t||{}})}function ut(t){return at({url:"/album/change",method:"post",data:t||{}})}function it(t){return at({url:"/album/bind/bangumi",method:"post",data:t||{}})}function ct(t){return at({url:"/album/dowurl/addoredit",method:"post",data:t||{}})}function lt(t){return at({url:"/album/dowurl/del",method:"post",data:t||{}})}function dt(t){return at({url:"/album/list",method:"post",data:t||{}})}function st(t){return at({url:"/album/info",method:"post",data:t||{}})}function mt(t){return at({url:"/album/dowurl/list",method:"post",data:t||{}})}function ft(t){return at({url:"/album/dowurl/feedback",method:"post",data:t||{}})}function ht(t){return at({url:"/article/addoredit",method:"post",data:t||{}})}function pt(t){return at({url:"/article/list",method:"post",data:t||{}})}function bt(t){return at({url:"/article/info",method:"post",data:{id:t}})}function gt(t){return at({url:"/article/change",method:"post",data:t||{}})}function vt(t,e){return at({url:"/auth/sign-in/admin",method:"post",data:{email:t,password:e}})}function kt(t,e){return at({url:"/auth/logout/admin",method:"post",data:{email:t,password:e}})}function yt(t){return at({url:"/bangumi/cv/del",method:"post",data:t||{}})}function wt(t){return at({url:"/bangumi/cv/addoredit",method:"post",data:t||{}})}function _t(t){return at({url:"/bangumi/add_or_edit",method:"post",data:t||{}})}function Ct(t,e,n){return at({url:"/bangumi/list",method:"post",data:{types:t,pages:e,sfilter:n}})}function xt(t,e,n){return at({url:"/bangumi/change",method:"post",data:{id:t,status:e,dele:n}})}function At(t){return at({url:"/bangumi/info",method:"post",data:{id:t}})}function Ot(t){return at({url:"/bangumi/playurl/addoredit",method:"post",data:t||{}})}function Lt(t){return at({url:"/bangumi/playurl/del",method:"post",data:t||{}})}function jt(t){return at({url:"/cv/list",method:"post",data:t||{}})}function Et(t){return at({url:"/cv/add",method:"post",data:t||{}})}function St(t){return at({url:"/cv/del",method:"post",data:t||{}})}function Pt(t){return at({url:"/cv/edit",method:"post",data:t||{}})}function Tt(t){return at({url:"/video/list",method:"post",data:t||{}})}function Ut(t){return at({url:"/video/query",method:"post",data:t||{}})}function $t(t){return at({url:"/video/admin/change",method:"post",data:t||{}})}function Dt(t){return at({url:"/photo/list",method:"post",data:t||{}})}function Ht(t){return at({url:"/photo/up",method:"post",data:t||{}})}function It(t){return at({url:"/photo/change",method:"post",data:t||{}})}function Mt(t){return at({url:"/photo/admin/change",method:"post",data:t||{}})}var qt=n("a78e"),Bt=n.n(qt),Nt="illyaComAdminToken",Vt="illyaComAdminUserName",Jt="illyaComAdminHead";function zt(){return Bt.a.get(Nt)}function Rt(t,e,n){return Bt.a.set(Nt,t),window.localStorage.setItem("illyaComAdminToken",t),Bt.a.set(Vt,e),Bt.a.set(Jt,n),t}function Ft(){Bt.a.remove(Vt),Bt.a.remove(Jt),Bt.a.remove(Nt),window.localStorage.removeItem("illyaComAdminToken")}function Kt(){return{username:Bt.a.get(Vt),userhead:Bt.a.get(Jt)}}F.beforeEach((function(t,e,n){t.meta.title&&(document.title=t.meta.title+" - 魔法少女☆伊莉雅同人爱好者网站 - 中国地区応援サイト"),n()}));n("1be0"),n("5da8"),n("6db3"),n("0fae");o["default"].use(W.a,{locale:Y.a}),o["default"].config.productionTip=!1,o["default"].prototype.$http=a,o["default"].prototype.$authUser=r,o["default"].prototype.$ServerHttpUrl="http://127.0.0.1:8888/",o["default"].prototype.$Message=G["Message"];var Qt=["/login","/404"];F.beforeEach((function(t,e,n){var a=zt();console.log("Token",a),a?a?"/login"===t.path?n({path:"/"}):n():"/login"===t.path?n({path:"/"}):"{}"==JSON.stringify(t.query||{})?n({path:t.path}):n({path:t.path,query:t.query}):-1!==Qt.indexOf(t.path)?n():n("/login")})),new o["default"]({el:"#app",router:F,store:Q,render:function(t){return t(m)}}).$mount("#app")},"5da8":function(t,e,n){},"621d":function(t,e,n){"use strict";var a=n("97bf"),r=n.n(a);r.a},"6db3":function(t,e,n){},"85ec":function(t,e,n){},"97bf":function(t,e,n){},d3eb:function(t,e,n){}});
//# sourceMappingURL=app.1793b548.js.map