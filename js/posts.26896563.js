!function(t){function a(a){for(var e,l,o=a[0],n=a[1],c=a[2],m=0,h=[];m<o.length;m++)l=o[m],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);for(d&&d(a);h.length;)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,o=1;o<s.length;o++){var n=s[o];0!==i[n]&&(e=!1)}e&&(r.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={posts:0},r=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],n=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=n;r.push([1,"chunk-vendors","chunk-common"]),s()}({1:function(t,a,s){t.exports=s("a6ae")},"6ec9":function(t,a,s){},"7c0d":function(t,a,s){"use strict";(function(t){a.a={name:"week",data:function(){return{value1:!1}},methods:{drawLine:function(){this.myChart=this.$echarts.init(document.getElementById("myChart")),this.option={animationDuration:3e3,tooltip:{trigger:"axis"},grid:{left:"5%",right:"5%",bottom:"5%",top:"15%",containLabel:!0},legend:{data:[],selected:{Affiliate:this.value1}},calculable:!0,xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{type:"dashed",color:"#e7e7e7"}},axisLabel:{textStyle:{color:"#95aac9"}}}],yAxis:[{type:"value",min:0,splitNumber:3,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:"{value}hrs",color:"#95aac9"},splitLine:{lineStyle:{type:"dashed",color:"#e7e7e7"}}}],series:[{type:"bar",barWidth:10,data:[21,12,28,15,5,12,17],barGap:(document.body.clientWidth-300)/10+"%",itemStyle:{normal:{barBorderRadius:[10,10,10,10],color:"#006cfa"}}}]},this.myChart.setOption(this.option)}},mounted:function(){var a=this;this.drawLine(),window.addEventListener("resize",(function(){t("#myChart").css("max-width","100%"),a.drawLine(),a.myChart.resize()}))},watch:{value1:function(t,a){this.drawLine()},destroyed:function(){window.removeEventListener("resize",this.myChart,20)}}}}).call(this,s("1157"))},a4a5:function(t,a,s){"use strict";var e=s("6ec9");s.n(e).a},a6ae:function(t,a,s){"use strict";s.r(a),s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("a026"),i=(s("4360"),s("7c0d").a),r=(s("c9e2"),s("2877")),l={name:"Posts",components:{week:Object(r.a)(i,(function(){this.$createElement;return this._self._c,this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"orders-line w-100"},[a("div",{attrs:{id:"myChart"}})])}],!1,null,"6bedc924",null).exports},data:function(){return{}}},o=(s("a4a5"),Object(r.a)(l,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"maincontent"},[this._m(0),a("div",{staticClass:"postcontent"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[this._m(1),a("div",{staticClass:"col-12 col-xl-4"},[this._m(2),a("div",{staticClass:"orders"},[this._m(3),a("week")],1)])])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("img",{staticClass:"w-100 header_img",attrs:{src:"https://wx2.sinaimg.cn/mw690/0078Ruosgy1gh6o1p4ipyj314008c4ac.jpg",alt:""}}),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header_one"},[s("div",{staticClass:"header_1 d-flex justify-content-start"},[s("img",{staticClass:"rounded-circle mt-n5",attrs:{src:"https://wx4.sinaimg.cn/small/0078Ruosgy1gh6lyt9feqj3074074ac1.jpg",alt:""}}),s("div",{staticClass:"header_box"},[s("h6",[t._v("MEMBERS")]),s("h4",[t._v("Dianna")])])]),s("button",{staticClass:"btn btn-primary float-right"},[t._v("Subscribe")])]),s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("ul",{staticClass:"nav nav-tabs nav-overflow header-tabs"},[s("li",[s("a",{staticClass:"active",attrs:{href:"#"}},[t._v("Posts")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Group")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Projects")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Files")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Subscribers")])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-12 col-xl-8"},[s("div",{staticClass:"orders card-left"},[s("div",{staticClass:"row align-items-center d-flex"},[s("div",{staticClass:"col-auto"},[s("a",{staticClass:"avatar",attrs:{href:"#"}},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx4.sinaimg.cn/small/0078Ruosgy1gh6lyt9feqj3074074ac1.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2 card-title"},[s("span",[t._v("Dinna Smiley")]),s("h6",[s("i",{staticClass:"fa fa-clock-o"}),t._v(" 4hr ago ")])]),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fa fa-bars"})]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])]),s("p",[t._v("I've been working on shipping the latest version of Launchday. The story I'm trying to focus on is something like \"You're launching soon and need to be 100% focused on your product. Don't lose precious days designing, coding, and testing a product site. Instead, build one in minutes.\"")]),s("p",[t._v(" What do you y'all think? Would love some feedback from "),s("a",{staticClass:"badge badge-soft-primary",attrs:{href:"#"}},[t._v("@Ab")]),t._v("or "),s("a",{staticClass:"badge badge-soft-primary",attrs:{href:"#"}},[t._v("@Adolfo")]),t._v("? ")]),s("img",{staticClass:"w-100 rounded pb-2",attrs:{src:"https://wx4.sinaimg.cn/mw690/0078Ruosgy1gh6nngap7bj313y0lcna9.jpg",alt:""}}),s("div",{staticClass:"row like"},[s("div",{staticClass:"col"},[s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("😍 1")]),s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("👍 2")]),s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("Add Reaction")])]),s("div",{staticClass:"col-auto mr-n3"},[s("div",{staticClass:"d-flex justify-content-end"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lys6ctqj3074074mye.jpg",alt:""}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx2.sinaimg.cn/small/0078Ruosgy1gh6lyth7z1j307407476j.jpg",alt:""}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lyst7bzj3074074tai.jpg",alt:""}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx2.sinaimg.cn/small/0078Ruosgy1gh6lyt7s7tj3074074aba.jpg",alt:""}})])])]),s("div",{staticClass:"col col-auto"},[s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("Share")])])]),s("hr"),s("div",{staticClass:"comment mb-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lys6ctqj3074074mye.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col comment-title"},[t._v("Ab Hadley")]),s("div",{staticClass:"col-auto time"},[t._v("11:12")])]),s("div",{staticClass:"text"},[t._v("Looking good Dianna! I like the image grid on the left, but it feels like a lot to process and doesn't really show me what the product does? I think using a short looping video or something similar demo'ing the product might be better?")])])])]),s("div",{staticClass:"comment mb-3 mt-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx2.sinaimg.cn/small/0078Ruosgy1gh6lyth7z1j307407476j.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col comment-title"},[t._v("Adolfo Hess")]),s("div",{staticClass:"col-auto time"},[t._v("11:12")])]),s("div",{staticClass:"text"},[t._v("Any chance you're going to link the grid up to a public gallery of sites built with Launchday?")])])])]),s("hr"),s("div",{staticClass:"row author"},[s("div",{staticClass:"col-auto"},[s("div",{staticClass:"avatar avatar-sm"},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx4.sinaimg.cn/small/0078Ruosgy1gh6lyt9feqj3074074ac1.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2"},[s("form",{staticClass:"mt-1",attrs:{action:""}},[s("label",{staticClass:"sr-only",attrs:{for:""}},[t._v("Leave a comment...")]),s("textarea",{staticClass:"form-control form-control-flush",attrs:{"data-toggle":"autosize",name:"",id:"",rows:"1",placeholder:"Leave a comment"}})])]),s("div",{staticClass:"col-auto align-self-end"},[s("a",{staticClass:"text-reset mr-3",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-camera"})]),s("a",{staticClass:"text-reset mr-3",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-paperclip"})]),s("a",{staticClass:"text-reset mr-3",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-commenting-o"})])])])]),s("div",{staticClass:"orders card-left"},[s("div",{staticClass:"row align-items-center d-flex"},[s("div",{staticClass:"col-auto"},[s("a",{staticClass:"avatar",attrs:{href:"#"}},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx4.sinaimg.cn/small/0078Ruosgy1gh6lyt9feqj3074074ac1.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2 card-title"},[s("span",[t._v("Dinna Smiley")]),s("h6",[s("i",{staticClass:"fa fa-clock-o"}),t._v(" 4hr ago ")])]),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fa fa-bars"})]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])]),s("p",[t._v("I've spent a lot of time thinking about our design process and trying to figure out a better order for us to tackle things. Right now it feels like we're everywhere with tools and process, so here's my suggestion:")]),s("ol",{staticClass:"mb-3"},[s("li",[s("strong",[t._v("Sketch a solution")]),t._v(" : Create a template for expressing what the purpose of a project is and why we're investing time and money in tackling it. ")]),s("li",[s("strong",[t._v("Define the goals")]),t._v(" : Use tried and true paper and pencil to express ideas and share them with others at the company before going too deep on design. ")]),s("li",[s("strong",[t._v("Prototype with code")]),t._v(" : Built and HTML/CSS with dummied data to test how things feel before building a true front-end. ")])]),s("p",[t._v(" Wanna help me out "),s("a",{staticClass:"badge badge-soft-primary",attrs:{href:"#"}},[t._v("@Ryu Duke")]),t._v("or "),s("a",{staticClass:"badge badge-soft-primary",attrs:{href:"#"}},[t._v("@Miyah Miles")]),t._v("? ")]),s("div",{staticClass:"row like"},[s("div",{staticClass:"col"},[s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("😍 4")]),s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("👍 3")]),s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("Add Reaction")])]),s("div",{staticClass:"col-auto mr-n3"},[s("div",{staticClass:"d-flex justify-content-end"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lyst7bzj3074074tai.jpg",alt:""}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lys6ctqj3074074mye.jpg",alt:""}})]),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:"https://wx2.sinaimg.cn/small/0078Ruosgy1gh6lyth7z1j307407476j.jpg",alt:""}})])])]),s("div",{staticClass:"col col-auto"},[s("a",{staticClass:"btn btn-sm btn-white",attrs:{href:"#"}},[t._v("Share")])])]),s("hr"),s("div",{staticClass:"comment mb-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lyst7bzj3074074tai.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col comment-title"},[t._v("Miyah Miles")]),s("div",{staticClass:"col-auto time"},[t._v("11:12")])]),s("div",{staticClass:"text"},[t._v("I love this Dianna! Let's add to our wiki tomorrow!")])])])]),s("div",{staticClass:"comment mb-3 mt-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx3.sinaimg.cn/small/0078Ruosgy1gh6lyt7lvpj3074074tb8.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col comment-title"},[t._v("Ryu Duke")]),s("div",{staticClass:"col-auto time"},[t._v("11:12")])]),s("div",{staticClass:"text"},[t._v("I'm onboard for sure. Sign me up to prototype anytime.")])])])]),s("hr"),s("div",{staticClass:"row author"},[s("div",{staticClass:"col-auto"},[s("div",{staticClass:"avatar avatar-sm"},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"https://wx4.sinaimg.cn/small/0078Ruosgy1gh6lyt9feqj3074074ac1.jpg",alt:""}})])]),s("div",{staticClass:"col ml-n2"},[s("form",{staticClass:"mt-1",attrs:{action:""}},[s("label",{staticClass:"sr-only",attrs:{for:""}},[t._v("Leave a comment...")]),s("textarea",{staticClass:"form-control form-control-flush",attrs:{"data-toggle":"autosize",name:"",id:"",rows:"1",placeholder:"Leave a comment"}})])]),s("div",{staticClass:"col-auto align-self-end"},[s("a",{staticClass:"text-reset mr-3",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-camera"})]),s("a",{staticClass:"text-reset mr-3",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-paperclip"})]),s("a",{staticClass:"text-reset mr-3",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-commenting-o"})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"orders card-left py-4"},[s("div",{staticClass:"row d-flex align-items-center"},[s("div",{staticClass:"col title"},[t._v("Birthday")]),s("div",{staticClass:"col-auto date"},[t._v("00/00/00")])]),s("hr"),s("div",{staticClass:"row d-flex align-items-center"},[s("div",{staticClass:"col title"},[t._v("Joined")]),s("div",{staticClass:"col-auto date"},[t._v("10/10/10")])]),s("hr"),s("div",{staticClass:"row d-flex align-items-center"},[s("div",{staticClass:"col title"},[t._v("Location")]),s("div",{staticClass:"col-auto date"},[t._v("Shenzhen")])]),s("hr"),s("div",{staticClass:"row d-flex align-items-center"},[s("div",{staticClass:"col title"},[t._v("Website")]),s("div",{staticClass:"col-auto text-primary"},[t._v("www.baidu.com")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"orders_1 w-100 d-flex align-items-center"},[a("div",{staticClass:"orders-title"},[this._v("Weekly Hours")])])}],!1,null,"3a065b02",null).exports),n=s("313e"),c=s.n(n),d=(s("1157"),s("5c96")),m=s.n(d),h=(s("0fae"),s("0418")),v=s("a18c"),u=s.n(v),f=s("5f5b"),g=s("b1e0");s("ab8b"),s("2dd8"),s("7f10"),s("3e48"),e.default.config.productionTip=!1,e.default.use(f.a),e.default.use(g.a),e.default.use(m.a),e.default.prototype.$echarts=c.a,new e.default({el:"#header",router:u.a,components:{Header:h.a},template:"<Header/>"}),new e.default({el:"#posts",components:{Posts:o},template:"<Posts/>"})},c9e2:function(t,a,s){"use strict";var e=s("ccd0");s.n(e).a},ccd0:function(t,a,s){}});