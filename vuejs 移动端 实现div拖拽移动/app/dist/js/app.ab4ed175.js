(function(t){function e(e){for(var o,u,s=e[0],a=e[1],c=e[2],f=0,l=[];f<s.length;f++)u=s[f],r[u]&&l.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[t._v("拖拽事件")]),n("div",{attrs:{id:"webId"}},[n("div",{staticClass:"xuanfu",attrs:{id:"moveDiv"},on:{mousedown:t.down,touchstart:t.down,mousemove:t.move,touchmove:function(e){return e.preventDefault(),t.move(e)},mouseup:t.end,touchend:t.end}})])])},i=[],u=(n("3846"),{name:"app",components:{},data:function(){return{flags:!1,position:{x:0,y:0},nx:"",ny:"",dx:"",dy:"",xPum:"",yPum:""}},methods:{down:function(){var t;this.flags=!0,t=event.touches?event.touches[0]:event,this.position.x=t.clientX,this.position.y=t.clientY,this.dx=moveDiv.offsetLeft,this.dy=moveDiv.offsetTop},move:function(){var t;this.flags&&(t=event.touches?event.touches[0]:event,this.nx=t.clientX-this.position.x,this.ny=t.clientY-this.position.y,this.xPum=this.dx+this.nx,this.yPum=this.dy+this.ny,moveDiv.style.left=this.xPum+"px",moveDiv.style.top=this.yPum+"px",document.addEventListener("touchmove",function(){event.preventDefault()},!1))},end:function(){this.flags=!1}}}),s=u,a=(n("034f"),n("2877")),c=Object(a["a"])(s,r,i,!1,null,null,null),p=c.exports,f=n("081a");o["a"].config.productionTip=!1,o["a"].use(f["a"]);var l=[{path:"/App",name:"app",component:p},{path:"/",redirect:"app"}],d=new f["a"]({routes:l});new o["a"]({router:d,render:function(t){return t(p)}}).$mount("#app")},"64a9":function(t,e,n){}});