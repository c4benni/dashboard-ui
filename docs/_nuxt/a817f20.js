(window.webpackJsonp=window.webpackJsonp||[]).push([[46,7,36],{467:function(e,t,r){var content=r(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(135).default)("52f37f48",content,!0,{sourceMap:!1})},468:function(e,t,r){"use strict";r(467)},469:function(e,t,r){var n=r(134)((function(i){return i[1]}));n.push([e.i,".input[data-v-bf302dec]::-ms-clear{display:none}.input[data-v-bf302dec]::-webkit-search-cancel-button,.input[data-v-bf302dec]::-webkit-search-decoration{-webkit-appearance:none}",""]),n.locals={},e.exports=n},470:function(e,t,r){"use strict";r.r(t);var n=r(0),o={name:"Search",inheritAttrs:!1,model:{event:"update:modelValue",prop:"modelValue"},props:{disabled:Boolean,autofocus:Boolean,modelValue:n.m,iconOnly:Boolean,placeholder:{type:String,default:"Search"}},data:function(){return{manualModel:""}},computed:{hasVModel:function(){return"string"==typeof this.modelValue},getValue:function(){return this.hasVModel?this.modelValue:this.manualModel}},mounted:function(){var e,t;this.autofocus&&!this.disabled&&(null===(e=this.$refs.input)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e))},methods:{update:function(e){this.hasVModel&&this.$emit("update:modelValue",e),this.manualModel=e},onInput:function(e){var t=e.target.value;this.update(t)}}},l=(r(468),r(14)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-22 rounded flex justify-start items-center shadow-xs border border-gray-300 bg-white focus-within:border transition-[shadow,opacity] relative",class:[{"focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-100":!e.disabled,"cursor-not-allowed border-dotted":e.disabled,"w-fit active:opacity-90":e.iconOnly}]},[r("span",{staticClass:"flex justify-center items-center w-10 h-10 relative z-1 ml-[13px] pointer-events-none",class:{"mr-4":!e.iconOnly,"mr-[13px]":e.iconOnly}},[r("Icon",{staticClass:"w-[15px] h-[15px]",class:[{"text-gray-500":!e.disabled,"text-gray-300":e.disabled}],attrs:{name:"search"}})],1),e._v(" "),r("input",e._g(e._b({ref:"input",staticClass:"input appearance-none outline-none text-base placeholder:text-base py-5 bg-white rounded-[inherit]",class:[{"placeholder:text-gray-500 text-gray-900":!e.disabled,"placeholder:text-gray-300 text-gray-600 pointer-events-none":e.disabled,"sr-only":e.iconOnly,"absolute inset-0 pr-4 pl-20 h-full w-full":!e.iconOnly}],attrs:{tabindex:e.disabled?"-1":void 0,disabled:e.disabled,type:"search",placeholder:e.placeholder},domProps:{value:e.getValue},on:{input:e.onInput}},"input",e.$attrs,!1),e.$listeners))])}),[],!1,null,"bf302dec",null);t.default=component.exports;installComponents(component,{Icon:r(268).default})},481:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=(r(17),r(47),r(136),r(30));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"DashboardOverviewHeader",data:function(){return{search:""}},computed:c(c({},Object(o.c)(["breakpoint"])),{},{links:function(){var e=this,link=function(title){var t="/dashboard/".concat(title.toLowerCase().replace(/\s+/g,"-"));return{title:title,to:t,active:e.$route.path.startsWith(t)}};return[link("Overview"),link("Notifications"),link("Analytics"),link("Saved reports"),link("Trade history"),link("User reports")]}})},f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"max-w-7xl h-32 w-full px-16 flex items-center",attrs:{"aria-label":"Overview header"}},[r("Nav",e._l(e.links,(function(link){return r("NavItem",{key:link.title,attrs:{to:link.to,label:link.title,current:link.active}})})),1),e._v(" "),r("Spacer"),e._v(" "),r("Search",{class:[{"w-160":!e.breakpoint.isTab}],attrs:{"icon-only":e.breakpoint.isTab},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NavItem:r(274).default,Nav:r(190).default,Spacer:r(272).default,Search:r(470).default})},492:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(30);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"DashboardPage",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["breakpoint"]))},d=c,f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Divider"),e._v(" "),e.breakpoint.isMobile?e._e():[r("DashboardOverviewHeader"),e._v(" "),r("Divider")],e._v(" "),r("NuxtChild")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Divider:r(270).default,DashboardOverviewHeader:r(481).default})}}]);