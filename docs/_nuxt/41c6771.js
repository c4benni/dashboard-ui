(window.webpackJsonp=window.webpackJsonp||[]).push([[48,8],{484:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(6),c=(r(41),r(31),r(30));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"DashboardOverviewIntro",fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUser();case 2:case"end":return t.stop()}}),t)})))()},computed:d(d({},Object(c.c)(["user","breakpoint"])),{},{greeting:function(){return this.user?"Welcome back, ".concat(this.user.name):"Loading..."},introActions:function(){var e=function(title,e,t){return{title:title,icon:e,hierarchy:t}};return[e("Import","Upload","secondary gray"),e("Add","plus")]}}),methods:d({},Object(c.b)(["getUser"]))},v=r(14),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"flex items-start flex-col md:flex-row px-8 md:px-0"},[r("div",{staticClass:"flex-grow"},[r("UiText",{staticClass:"fade-appear",attrs:{tag:"h2",weight:"500",size:e.breakpoint.isMobile?"lg":"xl",variant:"title",label:e.greeting}}),e._v(" "),r("UiText",{staticClass:"mt-2",attrs:{tag:"h3",variant:"caption",label:"Track, manage and forecast your customers and orders."}})],1),e._v(" "),r("div",{staticClass:"mt-8 md:mt-0"},e._l(e.introActions,(function(e,i){return r("Button",{key:e.title,class:{"mr-6":0===i},attrs:{icon:"leading","icon-name":e.icon,hierarchy:e.hierarchy,label:e.title}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiText:r(267).default,Button:r(188).default})},495:function(e,t,r){"use strict";r.r(t);var n={name:"DashboardOverview",head:function(){return{title:"Dashboard Overview",meta:[{hid:"description",name:"description",content:"An overview of your dashboard"}]}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"pt-16 md:pt-24 pb-24 md:pb-48 max-w-7xl md:px-16"},[r("DashboardOverviewIntro"),e._v(" "),r("LazyDashboardOverviewMetrics"),e._v(" "),r("LazyDashboardOverviewTable")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DashboardOverviewIntro:r(484).default})}}]);