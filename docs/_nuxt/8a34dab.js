(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{480:function(t,e,r){"use strict";r.r(e);r(23),r(16),r(22),r(11),r(31),r(19),r(32);var n=r(10),o=r(29);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Tablefoot",computed:l(l({},Object(o.c)(["breakpoint"])),{},{actions:function(){var t=function(title,t){return{title:title,rotateArrow:t}};return[t("Previous"),t("Next",!0)]}})},y=r(7),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ClientOnly",[t.breakpoint.isMobile?r("div",{staticClass:"mt-12 mx-8"},[r("Divider"),t._v(" "),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("Button",{attrs:{hierarchy:"tertiary gray",icon:"only","icon-name":"PaginationArrow",title:"Previous page",size:"sm"}}),t._v(" "),r("UiText",{attrs:{label:"Page 1 of 10",size:"sm"}}),t._v(" "),r("Button",{staticClass:"rotate-180",attrs:{hierarchy:"tertiary gray",icon:"only","icon-name":"PaginationArrow",title:"Next page",size:"sm"}})],1)],1):r("div",{staticClass:"h-33 flex items-center justify-between w-full pt-[11px] px-12 pb-8"},[r("div",{staticClass:"grid grid-flow-col gap-x-6"},t._l(t.actions,(function(t){return r("Button",{key:t.title,staticClass:"h-19 py-[9px] px-[17px] rounded-sm text-sm",attrs:{hierarchy:"secondary gray",label:t.title,size:"custom"}})})),1),t._v(" "),r("UiText",{staticClass:"flex items-center",attrs:{label:"Page 1 of 10",variant:"body",size:"sm"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(139).default,UiText:r(194).default,Divider:r(195).default})}}]);