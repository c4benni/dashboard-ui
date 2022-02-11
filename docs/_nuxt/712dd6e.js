(window.webpackJsonp=window.webpackJsonp||[]).push([[9,34,35],{485:function(t,e,r){"use strict";r.r(e);var n={name:"MetricGroup"},c=r(14),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"grid md:grid-flow-col gap-10 md:gap-12"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},486:function(t,e,r){"use strict";r.r(e);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),c=(r(269),r(46),r(62),r(30)),o=r(0);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"MetricItem",props:{title:o.j,total:Object(o.i)(Number),percent:{type:Number,required:!0,validator:function(t){return t>=0&&t<=100}},trend:{type:String,required:!0,validator:function(t){return["up","down"].includes(Object(o.k)(t))}},period:{type:String,default:"last month"}},computed:d(d({},Object(c.c)(["breakpoint"])),{},{isMobile:function(){return this.breakpoint.isMobile},captionLabel:function(){return"".concat(this.getTrend," ").concat(this.percent,"% vs ").concat(this.period)},getTrend:function(){return Object(o.k)(this.trend)},getTotal:function(){return"number"==typeof this.total?this.total.toLocaleString():""}})},m=r(14),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"shadow-sm bg-white border border-gray-200 rounded h-79 md:h-88 py-10 px-8 md:py-12 md:px-12"},[r("figure",{staticClass:"grid"},[r("header",{staticClass:"flex justify-between items-center mb-10 md:mb-12"},[r("UiText",{staticClass:"text-gray-900",attrs:{tag:"h4",weight:"500",label:t.title}}),t._v(" "),r("button",{staticClass:"rounded transition-[box-shadow,opacity] outline-none bg-white h-10 w-10 p-0 border-none border-gray-300 focus:border can-hover:hover:bg-gray-50 focus:bg-gray-25 active:opacity-80 focus:ring-4 ring-gray-100 inline-flex justify-center ml-4",attrs:{"aria-label":"dropdown menu"}},[r("Icon",{staticClass:"text-gray-400",attrs:{name:"MoreVertical",title:"Menu",height:"20",width:"20"}})],1)],1),t._v(" "),r("div",{staticClass:"grid grid-cols-[1fr,auto] w-full items-end"},[r("div",{staticClass:"grid gap-y-8"},[r("UiText",{staticClass:"text-gray-900",attrs:{tag:"h5",weight:"600",size:t.isMobile?"xl":"2xl",label:t.getTotal}}),t._v(" "),r("figcaption",{staticClass:"text-gray-500 text-sm font-medium h-10 flex items-center justify-start",attrs:{"aria-label":t.captionLabel}},[r("Icon",{staticClass:"inline-block mr-2",class:[{"text-success-500":"up"===t.getTrend,"text-error-500":"down"===t.getTrend}],attrs:{width:"20",height:"20",name:"up"===t.getTrend?"ArrowUp":"ArrowDown"}}),t._v(" "),r("UiText",{staticClass:"text-success-700 inline-block h-full mr-4",attrs:{tag:"span",size:"sm",weight:"500",label:t.percent+"%"}}),t._v("\n\n          vs "+t._s(t.period)+"\n        ")],1)],1),t._v(" "),r("up"===t.getTrend?"ChartsUp":"ChartsDown",{tag:"Component",attrs:{height:t.isMobile?"48":"64",width:t.isMobile?"96":"128"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiText:r(267).default,Icon:r(268).default,Button:r(188).default})},517:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(31),r(182)),o={name:"DashboardOverviewMetrics",data:function(){return{metrics:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)();case 2:t.metrics=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},l=r(14),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mt-16 px-8 md:px-0"},[t.metrics?r("MetricGroup",{staticClass:"fade-appear"},t._l(t.metrics,(function(e){return r("MetricItem",t._b({key:e.title},"MetricItem",e,!1))})),1):r("div",{staticClass:"flex justify-center h-79 md:h-88 items-center"},[r("Icon",{staticClass:"animate-spin text-gray-500",attrs:{name:"spinner",size:"56"}}),t._v(" "),r("p",{staticClass:"sr-only"},[t._v("Loading metrics...")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MetricItem:r(486).default,MetricGroup:r(485).default,Icon:r(268).default})}}]);