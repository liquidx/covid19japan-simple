(function(e){function t(t){for(var i,c,s=t[0],o=t[1],l=t[2],f=0,d=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(i=!1)}i&&(n.splice(t--,1),e=c(c.s=r[0]))}return e}var i={},a={app:0},n=[];function c(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=i,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(r,i,function(t){return e[t]}.bind(null,i));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/covid19japan-simple/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00ba":function(e,t,r){"use strict";r("381e")},"034f":function(e,t,r){"use strict";r("85ec")},"1f86":function(e,t,r){},"381e":function(e,t,r){},"54c4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],c=(r("034f"),r("2877")),s={},o=Object(c["a"])(s,a,n,!1,null,null,null),l=o.exports,u=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"simple"},[e._m(0),r("HeaderRow",{attrs:{title:e.humanReadableMetricKey,metric:e.metricTitle},on:{toggleMetric:e.toggleMetric,togglePeriod:e.togglePeriod}}),r("StatRow",{ref:"japan",attrs:{place:"Japan",metric:e.metrics.japan}}),r("StatRow",{ref:"kanto",attrs:{place:"Kanto",metric:e.metrics.kanto}}),r("StatRow",{ref:"tokyo",attrs:{place:"Tokyo",metric:e.metrics.tokyo}}),r("StatRow",{ref:"osaka",attrs:{place:"Osaka",metric:e.metrics.osaka}}),r("StatRow",{ref:"others",attrs:{place:"Others",metric:e.metrics.others}}),r("Description")],1)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Simple"),r("br"),e._v("Covid19"),r("br"),e._v("Japan")])}],h=(r("99af"),r("4de4"),r("c975"),r("fb6a"),r("b0c0"),r("b680"),r("b64b"),r("d3b7"),r("07ac"),r("ac1f"),r("25f0"),r("8a79"),r("5319"),r("b85c")),p=(r("96cf"),r("1da1")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"place"},[e._v(e._s(e.place))]),r("div",{staticClass:"metric"},[e._v(e._s(e.metric))])])},v=[],y={name:"StatRow",props:{place:String,metric:String}},g=y,b=(r("f007"),Object(c["a"])(g,m,v,!1,null,"1e6df3d5",null)),w=b.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"title",on:{click:e.titleDidClick}},[e._v(e._s(e.title)+" "),r("img",{attrs:{src:"disclosure.png",width:"20",height:"20"}})]),r("div",{staticClass:"metric",on:{click:e.metricDidClick}},[e._v(e._s(e.metric))])])},_=[],k={name:"HeaderRow",props:{title:String,metric:String},methods:{titleDidClick:function(){this.$emit("toggleMetric")},metricDidClick:function(){this.$emit("togglePeriod")}}},S=k,O=(r("ea79"),Object(c["a"])(S,j,_,!1,null,"3524055c",null)),C=O.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"description"},[r("p",[e._v(" For us to be safe, the new cases 14 day % delta must be below 0%. For us to be safe, the currently positive 14 day % delta should be below 0%. ")])])}],R=(r("00ba"),{}),P=Object(c["a"])(R,K,M,!1,null,"5c9d268d",null),x=P.exports,D=r("2ef0"),$=r.n(D),T={name:"SimpleCovid",components:{StatRow:w,HeaderRow:C,Description:x},data:function(){return{japan:[],prefectures:[],showRelativeValue:!0,periodSelected:"14 day",periodNames:{"14 day":14,"30 day":30},metricKey:"confirmed",metricKeys:["confirmed","deceased","active","critical"],metricProperties:{confirmed:{name:"New Cases",japanKey:"confirmed",prefectureKey:"dailyConfirmedCount",difference:!0},deceased:{name:"Deaths",japanKey:"deceased",prefectureKey:"dailyDeceasedCount",difference:!0},active:{name:"Currently Positive",japanKey:"activeCumulative",prefectureKey:"dailyActive",current:!0},critical:{name:"Critical Condition",japanKey:"criticalCumulative",current:!0}},metrics:{japan:"",kanto:"",tokyo:"",osaka:"",others:""}}},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadData();case 1:case"end":return t.stop()}}),t)})))()},watch:{japan:function(){this.recalculateMetrics()}},computed:{humanReadableMetricKey:function(){return this.metricProperties[this.metricKey].name},metricTitle:function(){return this.showRelativeValue?"".concat(this.periodSelected," %Δ"):this.metricProperties[this.metricKey].current?"Current":"Daily "+this.periodNames[this.periodSelected]+"d Avg"}},methods:{loadData:function(){var e=this;fetch("https://data.covid19japan.com/summary_min/latest.json").then((function(e){return e.json()})).then((function(t){e.japan=t.daily,e.prefectures=t.prefectures}))},humanReadableValues:function(e){for(var t=$.a.max(Object.values(e)),r={},i=0,a=Object.keys(e);i<a.length;i++){var n=a[i],c=e[n];c=t>1e6?(c/1e6).toFixed(1)+"M":t>1e3?(c/1e3).toFixed(1)+"K":c.toString(),r[n]=c}return r},recalculateMetrics:function(){var e=function(e){return"Tokyo"==e.name},t=function(e){return"Osaka"==e.name},r=function(e){return-1!=["Tokyo","Kanagawa","Chiba","Saitama"].indexOf(e.name)},i=function(e){return-1==["Tokyo","Kanagawa","Chiba","Saitama","Osaka"].indexOf(e.name)};this.metrics.japan=this.calculateJapanWideMetrics(),this.metrics.kanto=this.calculatePrefectureMetrics(r),this.metrics.tokyo=this.calculatePrefectureMetrics(e),this.metrics.osaka=this.calculatePrefectureMetrics(t),this.metrics.others=this.calculatePrefectureMetrics(i),this.showRelativeValue||(this.metrics=this.humanReadableValues(this.metrics))},calculateJapanWideMetrics:function(){var e=this.metricProperties[this.metricKey],t=e.japanKey,r=this.periodNames[this.periodSelected],i=1,a=1,n=this.japan.slice(0,this.japan.length-1);if(e.difference){var c=n.slice(n.length-r),s=n.slice(n.length-2*r,n.length-r);i=$.a.sumBy(c,t),a=$.a.sumBy(s,t)}else e.current&&(i=n[n.length-1][t],a=n[n.length-r-1][t]);if(this.showRelativeValue){var o=((i-a)/a*100).toFixed(0);return o>0?"+".concat(o,"%"):"".concat(o,"%")}return e.difference?Math.round(i/r):e.current?i:void 0},calculatePrefectureMetrics:function(e){var t=$.a.filter(this.prefectures,e),r=this.periodNames[this.periodSelected],i=0,a=0,n=this.metricProperties[this.metricKey],c=n.prefectureKey;if(!c)return"";var s,o=Object(h["a"])(t);try{for(o.s();!(s=o.n()).done;){var l=s.value,u=l[c];if(u)if(u=u.slice(0,u.length-1),n.difference){var f=u.slice(u.length-r),d=u.slice(u.length-2*r,u.length-r);i+=$.a.sum(f),a+=$.a.sum(d)}else n.current&&(i+=u[u.length-1],a+=u[u.length-r-1])}}catch(m){o.e(m)}finally{o.f()}if(this.showRelativeValue){var p=((i-a)/a*100).toFixed(0);return p>0?"+".concat(p,"%"):"".concat(p,"%")}return n.difference?Math.round(i/r):n.current?i:"Err"},toggleMetric:function(){var e=this.metricKeys.indexOf(this.metricKey),t=e+1;t>=this.metricKeys.length&&(t=0),this.metricKey=this.metricKeys[t],this.recalculateMetrics()},togglePeriod:function(){var e=["14 day true","14 day false","30 day true","30 day false"],t=e.indexOf("".concat(this.periodSelected," ").concat(this.showRelativeValue)),r=e[(t+1)%e.length];this.showRelativeValue=r.endsWith("true"),this.periodSelected=r.replace(" true","").replace(" false",""),this.recalculateMetrics()}}},V=T,E=(r("aed7"),Object(c["a"])(V,f,d,!1,null,"10bbbb3e",null)),F=E.exports;i["a"].use(u["a"]);var J=[{path:"/",name:"SimpleCovid",component:F}],N=new u["a"]({routes:J}),H=N;i["a"].config.productionTip=!1,new i["a"]({router:H,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){},aed7:function(e,t,r){"use strict";r("54c4")},ea79:function(e,t,r){"use strict";r("ecad")},ecad:function(e,t,r){},f007:function(e,t,r){"use strict";r("1f86")}});
//# sourceMappingURL=app.cd343b09.js.map