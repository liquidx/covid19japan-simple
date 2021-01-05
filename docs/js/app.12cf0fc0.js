(function(e){function t(t){for(var a,n,o=t[0],s=t[1],l=t[2],f=0,d=[];f<o.length;f++)n=o[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(a=!1)}a&&(c.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},i={app:0},c=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/covid19japan-simple/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},c=[],n=(r("034f"),r("2877")),o={},s=Object(n["a"])(o,i,c,!1,null,null,null),l=s.exports,u=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"simple"},[e._m(0),r("HeaderRow",{attrs:{title:e.humanReadableMetricKey,metric:e.periodSelected+" %Δ"},on:{toggleMetric:e.toggleMetric,togglePeriod:e.togglePeriod}}),r("StatRow",{ref:"japan",attrs:{place:"Japan",metric:e.metrics.japan}}),r("StatRow",{ref:"kanto",attrs:{place:"Kanto",metric:e.metrics.kanto}}),r("StatRow",{ref:"tokyo",attrs:{place:"Tokyo",metric:e.metrics.tokyo}}),r("StatRow",{ref:"osaka",attrs:{place:"Osaka",metric:e.metrics.osaka}}),r("StatRow",{ref:"others",attrs:{place:"Others",metric:e.metrics.others}})],1)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Simple"),r("br"),e._v("Covid19"),r("br"),e._v("Japan")])}],p=(r("4de4"),r("c975"),r("fb6a"),r("b0c0"),r("b680"),r("d3b7"),r("b85c")),h=(r("96cf"),r("1da1")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"place"},[e._v(e._s(e.place))]),r("div",{staticClass:"metric"},[e._v(e._s(e.metric))])])},v=[],y={name:"StatRow",props:{place:String,metric:String}},b=y,g=(r("b77b"),Object(n["a"])(b,m,v,!1,null,"29b92acb",null)),k=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"title",on:{click:e.titleDidClick}},[e._v(e._s(e.title))]),r("div",{staticClass:"metric",on:{click:e.metricDidClick}},[e._v(e._s(e.metric))])])},j=[],_={name:"HeaderRow",props:{title:String,metric:String},methods:{titleDidClick:function(){this.$emit("toggleMetric")},metricDidClick:function(){this.$emit("togglePeriod")}}},S=_,M=(r("7ba2"),Object(n["a"])(S,w,j,!1,null,"44ab836e",null)),O=M.exports,C=r("2ef0"),K=r.n(C),x={name:"SimpleCovid",components:{StatRow:k,HeaderRow:O},data:function(){return{japan:[],prefectures:[],periodSelected:"Weekly",periodNames:{Weekly:7,Monthly:30},metricKeys:["confirmed","active","critical","deceased"],metricKey:"confirmed",prefectureMetricKeyName:{confirmed:"dailyConfirmedCount",active:"dailyActive",deceased:"dailyDeceasedCount"},metrics:{japan:"",kanto:"",tokyo:"",osaka:"",others:""}}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadData();case 1:case"end":return t.stop()}}),t)})))()},watch:{japan:function(){this.recalculateMetrics()}},computed:{humanReadableMetricKey:function(){switch(this.metricKey){case"active":return"Active Cases";case"critical":return"Critical Cases";case"deceased":return"Deaths";case"confirmed":return"Confirmed";default:return""}}},methods:{loadData:function(){var e=this;fetch("https://data.covid19japan.com/summary_min/latest.json").then((function(e){return e.json()})).then((function(t){e.japan=t.daily,e.prefectures=t.prefectures,console.log(e.prefectures)}))},recalculateMetrics:function(){var e=function(e){return"Tokyo"==e.name},t=function(e){return"Osaka"==e.name},r=function(e){return-1!=["Tokyo","Kanagawa","Chiba","Saitama"].indexOf(e.name)},a=function(e){return-1==["Tokyo","Kanagawa","Chiba","Saitama","Osaka"].indexOf(e.name)};this.metrics.japan=this.calculateJapanWideMetrics(),this.metrics.kanto=this.calculatePrefectureMetrics(e),this.metrics.tokyo=this.calculatePrefectureMetrics(r),this.metrics.osaka=this.calculatePrefectureMetrics(t),this.metrics.others=this.calculatePrefectureMetrics(a)},calculateJapanWideMetrics:function(){var e=this.periodNames[this.periodSelected],t=this.japan.slice(this.japan.length-e),r=this.japan.slice(this.japan.length-2*e,this.japan.length-e);console.log(t);var a=K.a.sumBy(t,this.metricKey),i=K.a.sumBy(r,this.metricKey),c=((a-i)/i*100).toFixed(1);return c>0?"+".concat(c,"%"):"".concat(c,"%")},calculatePrefectureMetrics:function(e){var t=K.a.filter(this.prefectures,e),r=this.periodNames[this.periodSelected],a=0,i=0,c=this.prefectureMetricKeyName[this.metricKey];if(!c)return"";var n,o=Object(p["a"])(t);try{for(o.s();!(n=o.n()).done;){var s=n.value,l=s[c];if(l){var u=l.slice(l.length-r),f=l.slice(l.length-2*r,l.length-r);a+=K.a.sum(u),i+=K.a.sum(f)}}}catch(h){o.e(h)}finally{o.f()}var d=((a-i)/i*100).toFixed(1);return d>0?"+".concat(d,"%"):"".concat(d,"%")},toggleMetric:function(){console.log("toggleMetric");var e=this.metricKeys.indexOf(this.metricKey),t=e+1;t>=this.metricKeys.length&&(t=0),this.metricKey=this.metricKeys[t],this.recalculateMetrics()},togglePeriod:function(){switch(this.periodSelected){case"Weekly":this.periodSelected="Monthly";break;case"Monthly":this.periodSelected="Weekly";break}this.recalculateMetrics()}}},P=x,R=(r("b80d"),Object(n["a"])(P,f,d,!1,null,"739fd7b0",null)),D=R.exports;a["a"].use(u["a"]);var $=[{path:"/",name:"SimpleCovid",component:D}],T=new u["a"]({routes:$}),J=T;a["a"].config.productionTip=!1,new a["a"]({router:J,render:function(e){return e(l)}}).$mount("#app")},"7ba2":function(e,t,r){"use strict";r("a3f4")},"840c":function(e,t,r){},"85ec":function(e,t,r){},a3f4:function(e,t,r){},b77b:function(e,t,r){"use strict";r("840c")},b80d:function(e,t,r){"use strict";r("be76")},be76:function(e,t,r){}});
//# sourceMappingURL=app.12cf0fc0.js.map