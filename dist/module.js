define(["lodash","app/plugins/sdk"],function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=36)}([function(t,e,r){var n=r(23),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(53),o=r(59);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(7),o=r(55),a=r(56),i="[object Null]",u="[object Undefined]",c=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:i:c&&c in Object(t)?o(t):a(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(43),o=r(44),a=r(45),i=r(46),u=r(47);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(21);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(0).Symbol;t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(2)(Object,"create");t.exports=n},function(t,e,r){var n=r(68);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(18),o=1/0;t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},function(t,e,r){var n=r(2)(r(0),"Map");t.exports=n},function(t,e,r){var n=r(60),o=r(67),a=r(69),i=r(70),u=r(71);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(89),o=r(96),a=r(16);t.exports=function(t){return a(t)?n(t):o(t)}},function(t,e){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},function(t,e,r){var n=r(22),o=r(15);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e,r){var n=r(1),o=r(18),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||i.test(t)||!a.test(t)||null!=e&&t in Object(e)}},function(t,e,r){var n=r(3),o=r(4),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&n(t)==a}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(5),o=r(48),a=r(49),i=r(50),u=r(51),c=r(52);function s(t){var e=this.__data__=new n(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=u,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(3),o=r(8),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==i||e==u||e==a||e==c}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(54))},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(72),o=r(4);t.exports=function t(e,r,a,i,u){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,a,i,t,u))}},function(t,e,r){var n=r(73),o=r(76),a=r(77),i=1,u=2;t.exports=function(t,e,r,c,s,f){var p=r&i,l=t.length,v=e.length;if(l!=v&&!(p&&v>l))return!1;var h=f.get(t);if(h&&f.get(e))return h==e;var d=-1,y=!0,b=r&u?new n:void 0;for(f.set(t,e),f.set(e,t);++d<l;){var g=t[d],x=e[d];if(c)var _=p?c(x,g,d,e,t,f):c(g,x,d,t,e,f);if(void 0!==_){if(_)continue;y=!1;break}if(b){if(!o(e,function(t,e){if(!a(b,e)&&(g===t||s(g,t,r,c,f)))return b.push(e)})){y=!1;break}}else if(g!==x&&!s(g,x,r,c,f)){y=!1;break}}return f.delete(t),f.delete(e),y}},function(t,e,r){var n=r(91),o=r(4),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,r){(function(t){var n=r(0),o=r(92),a="object"==typeof e&&e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===a?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,r(29)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?r:e)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){var n=r(93),o=r(94),a=r(95),i=a&&a.isTypedArray,u=i?o(i):n;t.exports=u},function(t,e,r){var n=r(8);t.exports=function(t){return t==t&&!n(t)}},function(t,e){t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},function(t,e,r){var n=r(35),o=r(11);t.exports=function(t,e){for(var r=0,a=(e=n(e,t)).length;null!=t&&r<a;)t=t[o(e[r++])];return r&&r==a?t:void 0}},function(t,e,r){var n=r(1),o=r(17),a=r(108),i=r(111);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:a(i(t))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AnnotationsQueryCtrl=e.QueryOptionsCtrl=e.ConfigCtrl=e.QueryCtrl=e.Datasource=void 0;var n=r(37),o=r(127),a=function(){function t(){}return t.templateUrl="partials/config.html",t}(),i=function(){function t(){}return t.templateUrl="partials/query.options.html",t}(),u=function(){function t(){}return t.templateUrl="partials/annotations.editor.html",t}();e.Datasource=n.PCPDatasource,e.QueryCtrl=o.PCPDatasourceQueryCtrl,e.ConfigCtrl=a,e.QueryOptionsCtrl=i,e.AnnotationsQueryCtrl=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PCPDatasource=void 0;var n=u(r(38)),o=u(r(39)),a=u(r(8)),i=u(r(126));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(t,e,r,n){this.$q=e,this.name=t.name,this.url=t.url,this.q=e,this.backendSrv=r,this.templateSrv=n,this.withCredentials=t.withCredentials,this.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&t.basicAuth.length>0&&(this.headers.Authorization=t.basicAuth)}return t.$inject=["instanceSettings","$q","backendSrv","templateSrv"],t.prototype.queryPost=function(t){var e=t;return e.targets=this.buildQueryTargets(t),e.targets.length<=0?this.q.when({data:[]}):(this.templateSrv.getAdhocFilters?e.adhocFilters=this.templateSrv.getAdhocFilters(this.name):e.adhocFilters=[],this.doRequest({url:this.url+"/grafana/query",data:e,method:"POST"}))},t.prototype.query=function(t){var e=this,r=[],o=t;if(o.targets=this.buildQueryTargets(t),o.targets.length<=0)return this.q.when({data:[]});console.log("DEBUG query.targets.length="+o.targets.length);for(var a=0;a<o.targets.length;a++)console.log("--\x3e> DEBUG query.targets["+a+"] refId="+o.targets[a].refId+",target="+o.targets[a].target),r.push(o.targets[a]);if(this.templateSrv.getAdhocFilters?o.adhocFilters=this.templateSrv.getAdhocFilters(this.name):o.adhocFilters=[],1===o.targets.length)return this.doRequest({url:this.url+"/grafana/query?refId="+o.targets[0].refId+"&panelId="+o.panelId+"&dashboardId="+o.dashboardId+"&timezone="+o.timezone+"&maxdatapoints="+o.maxDataPoints+"&start="+Math.round(o.range.from/1e3)+"&finish="+Math.round(o.range.to/1e3)+"&startraw="+o.rangeRaw.from+"&finishraw="+o.rangeRaw.to+"&intervalms="+o.intervalMs+"&interval="+o.interval+"&expr="+o.targets[0].target,method:"GET"});n.default.map(r,function(t){var r=e.url+"/grafana/query?refId="+t.refId+"&start="+t.range.from+"&finish="+t.range.to+"&interval="+t.interval+"&expr="+t.target;return console.log("DEBUG QUERY allQueryPromise url="+r),e.doRequest({url:r,data:[],method:"GET"}).then(function(t){return t.data})})},t.prototype.testDatasource=function(){return this.doRequest({url:this.url+"/grafana",method:"GET"}).then(function(t){return 200===t.status?{status:"success",message:"PCP Data source is working",title:"Success"}:{status:"error",message:"PCP Data source is not working: "+t.message,title:"Error"}})},t.prototype.annotationQuery=function(t){var e={annotation:{query:this.templateSrv.replace(t.annotation.query,{},"glob"),name:t.annotation.name,datasource:t.annotation.datasource,enable:t.annotation.enable,iconColor:t.annotation.iconColor},range:t.range,rangeRaw:t.rangeRaw,variables:this.getVariables()};return this.doRequest({url:this.url+"/grafana/annotations",method:"POST",data:e}).then(function(t){return t.data})},t.prototype.metricFindQuery=function(t){var e={target:this.templateSrv.replace(t,null,"regex")};return this.doRequest({url:this.url+"/grafana/search",data:e,method:"POST"}).then(this.mapToTextValue)},t.prototype.mapToTextValue=function(t){return(0,o.default)(t.data,function(t,e){return t&&t.text&&t.value?{text:t.text,value:t.value}:(0,a.default)(t)?{text:t,value:e}:{text:t,value:t}})},t.prototype.doRequest=function(t){return t.withCredentials=this.withCredentials,t.headers=this.headers,this.backendSrv.datasourceRequest(t)},t.prototype.buildQueryTargets=function(t){var e=this;return t.targets.filter(function(t){return"select metric"!==t.target}).map(function(r){var n=r.data;return"string"==typeof n&&""===n.trim()&&(n=null),n&&(n=JSON.parse(n)),{data:n,target:e.templateSrv.replace(r.target,t.scopedVars,"regex"),refId:r.refId,hide:r.hide,type:r.type}})},t.prototype.getVariables=function(){var t=(0,i.default)(this.templateSrv.index)?{}:this.templateSrv.index,e={};return Object.keys(t).forEach(function(r){var n=t[r];e[n.name]={text:n.current.text,value:n.current.value}}),e},t.prototype.getTagKeys=function(t){var e=this;return new Promise(function(r,n){e.doRequest({url:e.url+"/grafana/tag-keys",method:"POST",data:t}).then(function(t){return r(t.data)})})},t.prototype.getTagValues=function(t){var e=this;return new Promise(function(r,n){e.doRequest({url:e.url+"/grafana/tag-values",method:"POST",data:t}).then(function(t){return r(t.data)})})},t}();e.PCPDatasource=c},function(e,r){e.exports=t},function(t,e,r){var n=r(19),o=r(40),a=r(120),i=r(1);t.exports=function(t,e){return(i(t)?n:a)(t,o(e,3))}},function(t,e,r){var n=r(41),o=r(106),a=r(116),i=r(1),u=r(117);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):n(t):u(t)}},function(t,e,r){var n=r(42),o=r(105),a=r(33);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},function(t,e,r){var n=r(20),o=r(25),a=1,i=2;t.exports=function(t,e,r,u){var c=r.length,s=c,f=!u;if(null==t)return!s;for(t=Object(t);c--;){var p=r[c];if(f&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++c<s;){var l=(p=r[c])[0],v=t[l],h=p[1];if(f&&p[2]){if(void 0===v&&!(l in t))return!1}else{var d=new n;if(u)var y=u(v,h,l,t,e,d);if(!(void 0===y?o(h,v,a|i,u,d):y))return!1}}return!0}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(6),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e,r){var n=r(6);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(6);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(6);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(5);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var n=r(5),o=r(12),a=r(13),i=200;t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var u=r.__data__;if(!o||u.length<i-1)return u.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(u)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var n=r(22),o=r(57),a=r(8),i=r(24),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?l:u).test(i(t))}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(7),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(58),o=function(){var t=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},function(t,e,r){var n=r(0)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(61),o=r(5),a=r(12);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},function(t,e,r){var n=r(62),o=r(63),a=r(64),i=r(65),u=r(66);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(9);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(9),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return a.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(9),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(9),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},function(t,e,r){var n=r(10);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(10);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(10);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(10);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(20),o=r(26),a=r(78),i=r(82),u=r(100),c=r(1),s=r(28),f=r(31),p=1,l="[object Arguments]",v="[object Array]",h="[object Object]",d=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,y,b,g){var x=c(t),_=c(e),j=x?v:u(t),m=_?v:u(e),O=(j=j==l?h:j)==h,w=(m=m==l?h:m)==h,P=j==m;if(P&&s(t)){if(!s(e))return!1;x=!0,O=!1}if(P&&!O)return g||(g=new n),x||f(t)?o(t,e,r,y,b,g):a(t,e,j,r,y,b,g);if(!(r&p)){var S=O&&d.call(t,"__wrapped__"),A=w&&d.call(e,"__wrapped__");if(S||A){var C=S?t.value():t,T=A?e.value():e;return g||(g=new n),b(C,T,r,y,g)}}return!!P&&(g||(g=new n),i(t,e,r,y,b,g))}},function(t,e,r){var n=r(13),o=r(74),a=r(75);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},function(t,e){var r="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,r),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,r){var n=r(7),o=r(79),a=r(21),i=r(26),u=r(80),c=r(81),s=1,f=2,p="[object Boolean]",l="[object Date]",v="[object Error]",h="[object Map]",d="[object Number]",y="[object RegExp]",b="[object Set]",g="[object String]",x="[object Symbol]",_="[object ArrayBuffer]",j="[object DataView]",m=n?n.prototype:void 0,O=m?m.valueOf:void 0;t.exports=function(t,e,r,n,m,w,P){switch(r){case j:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!w(new o(t),new o(e)));case p:case l:case d:return a(+t,+e);case v:return t.name==e.name&&t.message==e.message;case y:case g:return t==e+"";case h:var S=u;case b:var A=n&s;if(S||(S=c),t.size!=e.size&&!A)return!1;var C=P.get(t);if(C)return C==e;n|=f,P.set(t,e);var T=i(S(t),S(e),n,m,w,P);return P.delete(t),T;case x:if(O)return O.call(t)==O.call(e)}return!1}},function(t,e,r){var n=r(0).Uint8Array;t.exports=n},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}},function(t,e,r){var n=r(83),o=1,a=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,i,u,c){var s=r&o,f=n(t),p=f.length;if(p!=n(e).length&&!s)return!1;for(var l=p;l--;){var v=f[l];if(!(s?v in e:a.call(e,v)))return!1}var h=c.get(t);if(h&&c.get(e))return h==e;var d=!0;c.set(t,e),c.set(e,t);for(var y=s;++l<p;){var b=t[v=f[l]],g=e[v];if(i)var x=s?i(g,b,v,e,t,c):i(b,g,v,t,e,c);if(!(void 0===x?b===g||u(b,g,r,i,c):x)){d=!1;break}y||(y="constructor"==v)}if(d&&!y){var _=t.constructor,j=e.constructor;_!=j&&"constructor"in t&&"constructor"in e&&!("function"==typeof _&&_ instanceof _&&"function"==typeof j&&j instanceof j)&&(d=!1)}return c.delete(t),c.delete(e),d}},function(t,e,r){var n=r(84),o=r(86),a=r(14);t.exports=function(t){return n(t,a,o)}},function(t,e,r){var n=r(85),o=r(1);t.exports=function(t,e,r){var a=e(t);return o(t)?a:n(a,r(t))}},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(87),o=r(88),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(t){return null==t?[]:(t=Object(t),n(i(t),function(e){return a.call(t,e)}))}:o;t.exports=u},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}},function(t,e){t.exports=function(){return[]}},function(t,e,r){var n=r(90),o=r(27),a=r(1),i=r(28),u=r(30),c=r(31),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),f=!r&&o(t),p=!r&&!f&&i(t),l=!r&&!f&&!p&&c(t),v=r||f||p||l,h=v?n(t.length,String):[],d=h.length;for(var y in t)!e&&!s.call(t,y)||v&&("length"==y||p&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,d))||h.push(y);return h}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(3),o=r(4),a="[object Arguments]";t.exports=function(t){return o(t)&&n(t)==a}},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(3),o=r(15),a=r(4),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(23),o="object"==typeof e&&e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,u=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}).call(this,r(29)(t))},function(t,e,r){var n=r(97),o=r(98),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))a.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(99)(Object.keys,Object);t.exports=n},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(101),o=r(12),a=r(102),i=r(103),u=r(104),c=r(3),s=r(24),f=s(n),p=s(o),l=s(a),v=s(i),h=s(u),d=c;(n&&"[object DataView]"!=d(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=d(new o)||a&&"[object Promise]"!=d(a.resolve())||i&&"[object Set]"!=d(new i)||u&&"[object WeakMap]"!=d(new u))&&(d=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=d},function(t,e,r){var n=r(2)(r(0),"DataView");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Promise");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Set");t.exports=n},function(t,e,r){var n=r(2)(r(0),"WeakMap");t.exports=n},function(t,e,r){var n=r(32),o=r(14);t.exports=function(t){for(var e=o(t),r=e.length;r--;){var a=e[r],i=t[a];e[r]=[a,i,n(i)]}return e}},function(t,e,r){var n=r(25),o=r(107),a=r(113),i=r(17),u=r(32),c=r(33),s=r(11),f=1,p=2;t.exports=function(t,e){return i(t)&&u(e)?c(s(t),e):function(r){var i=o(r,t);return void 0===i&&i===e?a(r,t):n(e,i,f|p)}}},function(t,e,r){var n=r(34);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){var n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(109)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,function(t,r,n,a){e.push(n?a.replace(o,"$1"):r||t)}),e});t.exports=a},function(t,e,r){var n=r(110),o=500;t.exports=function(t){var e=n(t,function(t){return r.size===o&&r.clear(),t}),r=e.cache;return e}},function(t,e,r){var n=r(13),o="Expected a function";function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(a.Cache||n),r}a.Cache=n,t.exports=a},function(t,e,r){var n=r(112);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(7),o=r(19),a=r(1),i=r(18),u=1/0,c=n?n.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-u?"-0":r}},function(t,e,r){var n=r(114),o=r(115);t.exports=function(t,e){return null!=t&&o(t,e,n)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,r){var n=r(35),o=r(27),a=r(1),i=r(30),u=r(15),c=r(11);t.exports=function(t,e,r){for(var s=-1,f=(e=n(e,t)).length,p=!1;++s<f;){var l=c(e[s]);if(!(p=null!=t&&r(t,l)))break;t=t[l]}return p||++s!=f?p:!!(f=null==t?0:t.length)&&u(f)&&i(l,f)&&(a(t)||o(t))}},function(t,e){t.exports=function(t){return t}},function(t,e,r){var n=r(118),o=r(119),a=r(17),i=r(11);t.exports=function(t){return a(t)?n(i(t)):o(t)}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e,r){var n=r(34);t.exports=function(t){return function(e){return n(e,t)}}},function(t,e,r){var n=r(121),o=r(16);t.exports=function(t,e){var r=-1,a=o(t)?Array(t.length):[];return n(t,function(t,n,o){a[++r]=e(t,n,o)}),a}},function(t,e,r){var n=r(122),o=r(125)(n);t.exports=o},function(t,e,r){var n=r(123),o=r(14);t.exports=function(t,e){return t&&n(t,e,o)}},function(t,e,r){var n=r(124)();t.exports=n},function(t,e){t.exports=function(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return e}}},function(t,e,r){var n=r(16);t.exports=function(t,e){return function(r,o){if(null==r)return r;if(!n(r))return t(r,o);for(var a=r.length,i=e?a:-1,u=Object(r);(e?i--:++i<a)&&!1!==o(u[i],i,u););return r}}},function(t,e){t.exports=function(t){return void 0===t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PCPDatasourceQueryCtrl=void 0;var n=r(128),o=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),a=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.target.hide=!1,n.target.target=n.target.target||"select metric",n.target.type||(n.target.type="table"===n.panelCtrl.panel.type?"table":"timeseries"),n.target.data=n.target.data||"",n.types=[{text:"Time series",value:"timeseries"},{text:"Table",value:"table"}],n.showJSON=!1,n}return o(e,t),e.$inject=["$scope","$injector"],e.prototype.getOptions=function(t){return this.datasource.metricFindQuery(t||"")},e.prototype.toggleEditorMode=function(){this.target.rawQuery=!this.target.rawQuery},e.prototype.onChangeInternal=function(){this.panelCtrl.refresh()},e.templateUrl="partials/query.editor.html",e}(n.QueryCtrl);e.PCPDatasourceQueryCtrl=a},function(t,r){t.exports=e}])});
//# sourceMappingURL=module.js.map