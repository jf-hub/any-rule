(function(e){function t(t){for(var r,l,a=t[0],u=t[1],o=t[2],p=0,v=[];p<a.length;p++)l=a[p],s[l]&&v.push(s[l][0]),s[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(v.length)v.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},s={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/any-rule/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("dac5"),n("6e26"),n("9604"),n("df67");var r=n("6e6d"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("header",[n("h1",[e._v("正则大全")]),n("a",{staticClass:"github",attrs:{href:"https://github.com/any86/any-rule",target:"_blank"}},[n("svg",{attrs:{height:"20",viewBox:"0 0 16 16",version:"1.1",width:"20","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),n("span",[e._v(" github")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"searchInput",staticClass:"search-input",attrs:{autofocus:"",placeholder:"搜索关键词, 如'手机'",type:"text"},domProps:{value:e.keyword},on:{keyup:e.search,mouseenter:e.selectSearchInputText,focus:e.selectSearchInputText,input:function(t){t.target.composing||(e.keyword=t.target.value)}}})]),n("article",[0<e.rules.length?n("ul",{staticClass:"list"},e._l(e.rules,function(t,r){var s=t.title,i=t.rule;t.events;return n("li",{key:s,staticClass:"row",on:{mouseenter:function(t){return e.mouseenterHandler(r)}}},[n("i",{staticClass:"border"}),n("h2",[e._v(e._s(s))]),n("p",{staticClass:"rule"},[n("span",{staticClass:"btn-copy",attrs:{"data-clipboard-text":i}},[e._v("复制")]),e._v("\n                    "+e._s(i)+"\n                ")]),n("section",{staticClass:"verification"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.list[r].value,expression:"list[index].value"}],ref:"input",refInFor:!0,domProps:{value:e.list[r].value},on:{blur:function(t){return e.check(r,"blur")},keyup:function(t){return e.check(r,"keyup")},input:function(t){t.target.composing||e.$set(e.list[r],"value",t.target.value)}}}),n("span",{staticClass:"btn-clear",on:{click:function(t){return e.reset(r)}}},[e._v("清空")])]),n("div",{staticClass:"tip"},[void 0!==e.list[r].isOk?[e.list[r].isOk?n("p",{staticClass:"success"},[e._v("通过")]):n("p",{staticClass:"error"},[e._v("不通过")])]:e._e()],2)]),n("section",{staticClass:"trigger"},[n("h3",[e._v("验证时机")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.list[r].events.blur,expression:"list[index].events.blur"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.list[r].events.blur)?e._i(e.list[r].events.blur,null)>-1:e.list[r].events.blur},on:{change:function(t){var n=e.list[r].events.blur,s=t.target,i=!!s.checked;if(Array.isArray(n)){var l=null,a=e._i(n,l);s.checked?a<0&&e.$set(e.list[r].events,"blur",n.concat([l])):a>-1&&e.$set(e.list[r].events,"blur",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.list[r].events,"blur",i)}}}),e._v(" blur\n                    ")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.list[r].events.keyup,expression:"list[index].events.keyup"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.list[r].events.keyup)?e._i(e.list[r].events.keyup,null)>-1:e.list[r].events.keyup},on:{change:function(t){var n=e.list[r].events.keyup,s=t.target,i=!!s.checked;if(Array.isArray(n)){var l=null,a=e._i(n,l);s.checked?a<0&&e.$set(e.list[r].events,"keyup",n.concat([l])):a>-1&&e.$set(e.list[r].events,"keyup",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.list[r].events,"keyup",i)}}}),e._v(" keyup\n                    ")])])])}),0):n("p",{attrs:{align:"center"}},[e._v("无数据")])])])},i=[],l=(n("bae3"),[{title:"是否手机号",rule:/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/},{title:"只能输入大写字母",rule:/^[A-Z]+$/},{title:"只能输如日期,如2000-01-01",rule:/^\d{4}(-)\d{1,2}\1\d{1,2}$/},{title:"只能是email地址",rule:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}]),a=n("7cbd"),u=n.n(a),o={name:"app",components:{},data:function(){return Object.freeze(l),{keyword:"",rules:l,list:l.map(function(){return{value:"",isOk:void 0,events:{blur:!0,keyup:!1}}})}},mounted:function(){var e=new u.a(".btn-copy");this.$on("hook:destroyed",function(){e.destroy()}),e.on("success",function(){alert("复制成功!")})},methods:{search:function(){var e=this;""!==this.keyword?this.rules=this.rules.filter(function(t){var n=t.title;return-1!==n.indexOf(e.keyword.toLowerCase())}):this.rules=l},selectSearchInputText:function(){this.$refs.searchInput.select()},mouseenterHandler:function(e){this.$refs.input[e].focus()},reset:function(e){var t=this;this.$nextTick(function(){t.list[e].value="",t.list[e].isOk=void 0})},check:function(e,t){var n=this.list[e],r=n.events,s=n.value;if(""===s&&this.reset(e),r[t]){var i=this.rules[e].rule,l=this.list[e];l.isOk=i.test(l.value)}}}},c=o,p=(n("645e"),n("17cc")),v=Object(p["a"])(c,s,i,!1,null,"9b3e0234",null),d=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(d)}}).$mount("#app")},"645e":function(e,t,n){"use strict";var r=n("e44c"),s=n.n(r);s.a},e44c:function(e,t,n){}});
//# sourceMappingURL=app.33bbec57.js.map