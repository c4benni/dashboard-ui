(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{482:function(t,e,r){"use strict";r.r(e);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),c=r(6),o=(r(41),r(31),r(30));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"DashboardOverviewIntro",fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUser();case 2:case"end":return e.stop()}}),e)})))()},computed:f(f({},Object(o.c)(["user","breakpoint"])),{},{greeting:function(){return this.user?"Welcome back, ".concat(this.user.name):"Loading..."},introActions:function(){var t=function(title,t,e){return{title:title,icon:t,hierarchy:e}};return[t("Import","Upload","secondary gray"),t("Add","plus")]}}),methods:f({},Object(o.b)(["getUser"]))},m=r(14),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex items-start flex-col md:flex-row px-8 md:px-0"},[r("div",{staticClass:"flex-grow"},[r("UiText",{staticClass:"fade-appear",attrs:{tag:"h2",weight:"500",size:t.breakpoint.isMobile?"lg":"xl",variant:"title",label:t.greeting}}),t._v(" "),r("UiText",{staticClass:"mt-2",attrs:{tag:"h3",variant:"caption",label:"Track, manage and forecast your customers and orders."}})],1),t._v(" "),r("div",{staticClass:"mt-8 md:mt-0"},t._l(t.introActions,(function(t,i){return r("Button",{key:t.title,class:{"mr-6":0===i},attrs:{icon:"leading","icon-name":t.icon,hierarchy:t.hierarchy,label:t.title}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiText:r(267).default,Button:r(188).default})}}]);