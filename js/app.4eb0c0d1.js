(function(e){function t(t){for(var o,c,i=t[0],d=t[1],l=t[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var d=n[i];0!==r[d]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-arbotect/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"29e8":function(e,t){},"7b8f":function(e,t,n){"use strict";var o=n("84e7"),r=n.n(o);r.a},"84e7":function(e,t,n){},ad3e:function(e,t,n){},b861:function(e,t,n){"use strict";var o=n("ad3e"),r=n.n(o);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Vue Arbotect")]),n("h2",[e._v("Options")]),n("Options",{attrs:{options:e.options},on:{"toggle-expand":function(t){e.expand=t}}}),n("h2",[e._v("Demo")]),n("VueArbotect",{attrs:{tree:e.tree,options:e.options,expanded:e.expand}})],1)},a=[],c=n("d4ec"),i=n("262e"),d=n("2caf"),l=n("9ab4"),s=n("60a3"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.tree,(function(t){return n("li",{key:t.key},[n("Node",{attrs:{node:t,options:e.normalizedOptions,onToggle:e.onToggle}})],1)})),0)},p=[],f=(n("45fc"),n("bee2")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.node.key}},[n("div",{staticClass:"node"},[n("div",{staticClass:"expander"},[e.hasChildren?e._t("expander",[n("Expander",{attrs:{expanded:e.node.expanded},on:{toggle:function(t){e.node.expanded=!e.node.expanded}}})]):e._e()],2),e.options.selectMode!==e.SelectMode.Disabled?e._t("checkbox",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.node.selected,expression:"node.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.node.selected)?e._i(e.node.selected,null)>-1:e.node.selected},on:{change:[function(t){var n=e.node.selected,o=t.target,r=!!o.checked;if(Array.isArray(n)){var a=null,c=e._i(n,a);o.checked?c<0&&e.$set(e.node,"selected",n.concat([a])):c>-1&&e.$set(e.node,"selected",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.node,"selected",r)},function(t){return e.onCheckboxToggle(t.target.checked)}]}})]):e._e(),e._t("default",[e._v(" "+e._s(e.node.value)+" ")],{slotNode:e.node})],2),e.node.expanded&&e.hasChildren?n("ul",e._l(e.node.children,(function(t){return n("li",{key:t.key},[n("Node",e._g(e._b({attrs:{node:t},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),(function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}}))],null,!0)},"Node",Object.assign({},e.$attrs,e.$props),!1),e.$listeners),[e._l(Object.keys(e.$slots),(function(t){return e._t(t,null,{slot:t})}))],2)],1)})),0):e._e()])},v=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:function(t){return e.$emit("toggle")}}},[e.expanded?n("div",[e._v("-")]):n("div",[e._v("+")])])},O=[],j=function(e){Object(i["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);Object(l["a"])([Object(s["b"])()],j.prototype,"expanded",void 0),j=Object(l["a"])([Object(s["a"])({name:"Expander"})],j);var y,g=j,x=g,_=(n("b861"),n("2877")),m=Object(_["a"])(x,h,O,!1,null,"e14cd7c6",null),k=m.exports;n("fd72"),n("29e8");(function(e){e[e["Cascade"]=1]="Cascade",e[e["Disabled"]=2]="Disabled",e[e["Individual"]=3]="Individual",e[e["Single"]=4]="Single"})(y||(y={}));var w=y;function M(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var S=M,C=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(c["a"])(this,e),this.key=t,this.value=n,this.children=o,this.disabled=!1,this.expanded=!1,this.selected=!1}return Object(f["a"])(e,null,[{key:"randomize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=S(5);return new e("key".concat(n),"value".concat(n),t)}}]),e}(),$=n("b85c"),E=function e(t,n){if(n&&n(t),t.children){var o,r=Object($["a"])(t.children);try{for(r.s();!(o=r.n()).done;){var a=o.value;e(a,n)}}catch(c){r.e(c)}finally{r.f()}}},P=function(e,t){var n,o=Object($["a"])(e);try{for(o.s();!(n=o.n()).done;){var r=n.value;E(r,t)}}catch(a){o.e(a)}finally{o.f()}},A=function(e){Object(i["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.SelectMode=w,e}return Object(f["a"])(n,[{key:"onCheckboxToggle",value:function(e){this.options.selectMode===w.Cascade&&P([this.node],(function(t){return t.selected=e})),this.onToggle(this.node)}},{key:"hasChildren",get:function(){return this.node.children&&this.node.children.length}}]),n}(s["c"]);Object(l["a"])([Object(s["b"])()],A.prototype,"node",void 0),Object(l["a"])([Object(s["b"])({default:function(){return{}}})],A.prototype,"options",void 0),Object(l["a"])([Object(s["b"])()],A.prototype,"onToggle",void 0),A=Object(l["a"])([Object(s["a"])({components:{Expander:k}})],A);var T=A,N=T,D=(n("7b8f"),Object(_["a"])(N,b,v,!1,null,"08aa0802",null)),I=D.exports,q=function(e){Object(i["a"])(n,e);var t=Object(d["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"initDisabled",value:function(){this.initState("disabled")}},{key:"initExpanded",value:function(){this.initState("expanded")}},{key:"initSelected",value:function(){this.initState("selected")}},{key:"mounted",value:function(){this.initDisabled(),this.initExpanded(),this.initSelected()}},{key:"initState",value:function(e){var t=this[e];"boolean"===typeof t?this.recurse((function(n){return n[e]=t})):Array.isArray(t)?this.recurse((function(n){t.some((function(e){return n.key===e}))&&(n[e]=!0)})):this.recurse((function(e){return t(e)}))}},{key:"onToggle",value:function(e){this.options.selectMode===w.Single&&this.recurse((function(t){return t.selected=t.key===e.key})),this.$emit("node-toggle",e)}},{key:"recurse",value:function(e){P(this.tree,e)}},{key:"normalizedOptions",get:function(){return Object.assign({selectMode:w.Disabled},this.options)}}]),n}(s["c"]);Object(l["a"])([Object(s["b"])()],q.prototype,"options",void 0),Object(l["a"])([Object(s["b"])()],q.prototype,"tree",void 0),Object(l["a"])([Object(s["b"])({default:!1})],q.prototype,"disabled",void 0),Object(l["a"])([Object(s["b"])({default:!1})],q.prototype,"expanded",void 0),Object(l["a"])([Object(s["b"])({default:!1})],q.prototype,"selected",void 0),Object(l["a"])([Object(s["d"])("disabled")],q.prototype,"initDisabled",null),Object(l["a"])([Object(s["d"])("expanded")],q.prototype,"initExpanded",null),Object(l["a"])([Object(s["d"])("selected")],q.prototype,"initSelected",null),q=Object(l["a"])([Object(s["a"])({components:{Node:I}})],q);var z=q,V=z,J=(n("dac7"),Object(_["a"])(V,u,p,!1,null,null,null)),R=J.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h4",[e._v("Expansion")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.expand,expression:"expand"}],attrs:{type:"radio"},domProps:{value:!0,checked:e._q(e.expand,!0)},on:{change:[function(t){e.expand=!0},function(t){return e.$emit("toggle-expand",!0)}]}}),e._v(" Expanded ")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.expand,expression:"expand"}],attrs:{type:"radio"},domProps:{value:!1,checked:e._q(e.expand,!1)},on:{change:[function(t){e.expand=!1},function(t){return e.$emit("toggle-expand",!1)}]}}),e._v(" Collapsed ")])]),n("div",[n("h4",[e._v(" Selection Mode ")]),e._l(e.selectModes,(function(t){var o=t[0],r=t[1];return n("label",{key:r},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.selectMode,expression:"options.selectMode"}],attrs:{type:"radio"},domProps:{value:parseInt(o),checked:e._q(e.options.selectMode,parseInt(o))},on:{change:function(t){e.$set(e.options,"selectMode",parseInt(o))}}}),e._v(" "+e._s(r)+" ")])}))],2)])},F=[],G=(n("a434"),n("4fad"),function(e){Object(i["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.expand=!0,e.SelectMode=w,e}return Object(f["a"])(n,[{key:"selectModes",get:function(){var e=Object.entries(w);return e.splice(0,e.length/2)}}]),n}(s["c"]));Object(l["a"])([Object(s["b"])()],G.prototype,"options",void 0),G=Object(l["a"])([Object(s["a"])({})],G);var H=G,K=H,L=Object(_["a"])(K,B,F,!1,null,null,null),Q=L.exports,U=function(e){Object(i["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.options={selectMode:w.Cascade},e.expand=!0,e.tree=[new C("1","Root",[new C("2","Child 1",[new C("5","Childs Child 1"),new C("6","Childs Child 2")]),new C("3","Child 2"),new C("4","Child 3")])],e}return n}(s["c"]);U=Object(l["a"])([Object(s["a"])({components:{Options:Q,VueArbotect:R}})],U);var W=U,X=W,Y=Object(_["a"])(X,r,a,!1,null,null,null),Z=Y.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(Z)}}).$mount("#app")},dac7:function(e,t,n){"use strict";var o=n("f7c8"),r=n.n(o);r.a},f7c8:function(e,t,n){},fd72:function(e,t){}});
//# sourceMappingURL=app.4eb0c0d1.js.map