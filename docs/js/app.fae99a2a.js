(function(e){function t(t){for(var r,n,s=t[0],o=t[1],l=t[2],f=0,d=[];f<s.length;f++)n=s[f],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],r=!0,s=1;s<i.length;s++){var o=i[s];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=n(n.s=i[0]))}return e}var r={},a={app:0},c=[];function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/covid19japan-simple/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},3901:function(e,t,i){"use strict";i("7fe8")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},c=[],n=(i("034f"),i("2877")),s={},o=Object(n["a"])(s,a,c,!1,null,null,null),l=o.exports,u=i("8c4f"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"simple"},[e._m(0),i("HeaderRow",{attrs:{title:e.humanReadableMetricKey,metric:e.periodSelected+" %Δ"},on:{toggleMetric:e.toggleMetric,togglePeriod:e.togglePeriod}}),i("StatRow",{ref:"japan",attrs:{place:"Japan",metric:e.metrics.japan}}),i("StatRow",{ref:"kanto",attrs:{place:"Kanto",metric:e.metrics.kanto}}),i("StatRow",{ref:"tokyo",attrs:{place:"Tokyo",metric:e.metrics.tokyo}}),i("StatRow",{ref:"osaka",attrs:{place:"Osaka",metric:e.metrics.osaka}}),i("StatRow",{ref:"others",attrs:{place:"Others",metric:e.metrics.others}})],1)},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[e._v("Simple"),i("br"),e._v("Covid19"),i("br"),e._v("Japan")])}],p=(i("4de4"),i("c975"),i("fb6a"),i("b0c0"),i("b680"),i("d3b7"),i("b85c")),h=(i("96cf"),i("1da1")),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"place"},[e._v(e._s(e.place))]),i("div",{staticClass:"metric"},[e._v(e._s(e.metric))])])},v=[],y={name:"StatRow",props:{place:String,metric:String}},g=y,b=(i("b77b"),Object(n["a"])(g,m,v,!1,null,"29b92acb",null)),j=b.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"title",on:{click:e.titleDidClick}},[e._v(e._s(e.title))]),i("div",{staticClass:"metric",on:{click:e.metricDidClick}},[e._v(e._s(e.metric))])])},w=[],M={name:"HeaderRow",props:{title:String,metric:String},methods:{titleDidClick:function(){this.$emit("toggleMetric")},metricDidClick:function(){this.$emit("togglePeriod")}}},_=M,S=(i("7ba2"),Object(n["a"])(_,k,w,!1,null,"44ab836e",null)),C=S.exports,K=i("2ef0"),O=i.n(K),x={name:"SimpleCovid",components:{StatRow:j,HeaderRow:C},data:function(){return{japan:[],prefectures:[],periodSelected:"Weekly",periodNames:{Weekly:7,Monthly:30},metricKeys:["confirmed","active","critical","deceased"],metricKey:"confirmed",prefectureMetricKeyName:{confirmed:"dailyConfirmedCount",active:"dailyActive",deceased:"dailyDeceasedCount"},avgKeyForMetric:{active:"activeCumulative",critical:"criticalCumulative"},diffMethod:{confirmed:"sumDiff",deceased:"sumDiff",active:"avgDiff",critical:"avgDiff"},metrics:{japan:"",kanto:"",tokyo:"",osaka:"",others:""}}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadData();case 1:case"end":return t.stop()}}),t)})))()},watch:{japan:function(){this.recalculateMetrics()}},computed:{humanReadableMetricKey:function(){switch(this.metricKey){case"active":return"Active Cases";case"critical":return"Critical Cases";case"deceased":return"Deaths";case"confirmed":return"Confirmed";default:return""}}},methods:{loadData:function(){var e=this;fetch("https://data.covid19japan.com/summary_min/latest.json").then((function(e){return e.json()})).then((function(t){e.japan=t.daily,e.prefectures=t.prefectures,console.log(e.prefectures)}))},recalculateMetrics:function(){var e=function(e){return"Tokyo"==e.name},t=function(e){return"Osaka"==e.name},i=function(e){return-1!=["Tokyo","Kanagawa","Chiba","Saitama"].indexOf(e.name)},r=function(e){return-1==["Tokyo","Kanagawa","Chiba","Saitama","Osaka"].indexOf(e.name)};this.metrics.japan=this.calculateJapanWideMetrics(),this.metrics.kanto=this.calculatePrefectureMetrics(e),this.metrics.tokyo=this.calculatePrefectureMetrics(i),this.metrics.osaka=this.calculatePrefectureMetrics(t),this.metrics.others=this.calculatePrefectureMetrics(r)},calculateJapanWideMetrics:function(){var e=this.diffMethod[this.metricKey],t=this.periodNames[this.periodSelected],i=1,r=1;if("sumDiff"==e){var a=this.japan.slice(this.japan.length-t),c=this.japan.slice(this.japan.length-2*t,this.japan.length-t);i=O.a.sumBy(a,this.metricKey),r=O.a.sumBy(c,this.metricKey)}else"avgDiff"==e&&(i=this.japan[this.japan.length-1][this.avgKeyForMetric[this.metricKey]],r=this.japan[this.japan.length-t-1][this.avgKeyForMetric[this.metricKey]]);var n=((i-r)/r*100).toFixed(1);return n>0?"+".concat(n,"%"):"".concat(n,"%")},calculatePrefectureMetrics:function(e){var t=O.a.filter(this.prefectures,e),i=this.periodNames[this.periodSelected],r=0,a=0,c=this.prefectureMetricKeyName[this.metricKey];if(!c)return"";var n,s=Object(p["a"])(t);try{for(s.s();!(n=s.n()).done;){var o=n.value,l=o[c];if(l){var u=l.slice(l.length-i),f=l.slice(l.length-2*i,l.length-i);r+=O.a.sum(u),a+=O.a.sum(f)}}}catch(h){s.e(h)}finally{s.f()}var d=((r-a)/a*100).toFixed(1);return d>0?"+".concat(d,"%"):"".concat(d,"%")},toggleMetric:function(){console.log("toggleMetric");var e=this.metricKeys.indexOf(this.metricKey),t=e+1;t>=this.metricKeys.length&&(t=0),this.metricKey=this.metricKeys[t],this.recalculateMetrics()},togglePeriod:function(){switch(this.periodSelected){case"Weekly":this.periodSelected="Monthly";break;case"Monthly":this.periodSelected="Weekly";break}this.recalculateMetrics()}}},P=x,D=(i("3901"),Object(n["a"])(P,f,d,!1,null,"11a263b2",null)),R=D.exports;r["a"].use(u["a"]);var $=[{path:"/",name:"SimpleCovid",component:R}],T=new u["a"]({routes:$}),J=T;r["a"].config.productionTip=!1,new r["a"]({router:J,render:function(e){return e(l)}}).$mount("#app")},"7ba2":function(e,t,i){"use strict";i("a3f4")},"7fe8":function(e,t,i){},"840c":function(e,t,i){},"85ec":function(e,t,i){},a3f4:function(e,t,i){},b77b:function(e,t,i){"use strict";i("840c")}});
//# sourceMappingURL=app.fae99a2a.js.map