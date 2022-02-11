(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,12,36,37,38,43],{469:function(e,t,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(101).default)("681daae2",content,!0,{sourceMap:!1})},470:function(e,t,r){"use strict";r(469)},471:function(e,t,r){var n=r(100)((function(i){return i[1]}));n.push([e.i,".input[data-v-8c640c94]::-ms-clear{display:none}.input[data-v-8c640c94]::-webkit-search-cancel-button,.input[data-v-8c640c94]::-webkit-search-decoration{-webkit-appearance:none}",""]),n.locals={},e.exports=n},472:function(e,t,r){"use strict";r.r(t);var n=r(0),o={name:"Search",inheritAttrs:!1,model:{event:"update:modelValue",prop:"modelValue"},props:{disabled:Boolean,autofocus:Boolean,modelValue:n.m,placeholder:{type:String,default:"Search"}},data:function(){return{manualModel:""}},computed:{hasVModel:function(){return"string"==typeof this.modelValue},getValue:function(){return this.hasVModel?this.modelValue:this.manualModel}},mounted:function(){var e,t;this.autofocus&&!this.disabled&&(null===(e=this.$refs.input)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e))},methods:{update:function(e){this.hasVModel&&this.$emit("update:modelValue",e),this.manualModel=e},onInput:function(e){var t=e.target.value;this.update(t)}}},l=(r(470),r(14)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-22 rounded flex justify-start items-center shadow-xs border border-gray-300 bg-white focus-within:border transition-shadow relative",class:[{"focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-100":!e.disabled,"cursor-not-allowed border-dotted":e.disabled}]},[r("span",{staticClass:"flex justify-center items-center w-10 h-10 mr-4 relative z-1 ml-[13px] pointer-events-none"},[r("Icon",{staticClass:"w-[15px] h-[15px]",class:[{"text-gray-500":!e.disabled,"text-gray-300":e.disabled}],attrs:{name:"search"}})],1),e._v(" "),r("input",e._g(e._b({ref:"input",staticClass:"input appearance-none h-full w-full outline-none text-base placeholder:text-base py-5 bg-white absolute inset-0 pr-4 pl-20 rounded-[inherit]",class:[{"placeholder:text-gray-500 text-gray-900":!e.disabled,"placeholder:text-gray-300 text-gray-600 pointer-events-none":e.disabled}],attrs:{tabindex:e.disabled?"-1":void 0,disabled:e.disabled,type:"search",placeholder:e.placeholder},domProps:{value:e.getValue},on:{input:e.onInput}},"input",e.$attrs,!1),e.$listeners))])}),[],!1,null,"8c640c94",null);t.default=component.exports;installComponents(component,{Icon:r(268).default})},474:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(30);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"Table",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["breakpoint"]))},d=c,f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white md:border border-gray-200 md:shadow-md overflow-hidden md:rounded max-w-screen md:max-w-7xl"},[r("div",{staticClass:"w-fit max-w-full overflow-x-auto bg-white border md:border-0 shadow-md md:shadow-none"},[r("table",{staticClass:"w-full"},[r("TableHead"),e._v(" "),r("TableBody")],1)]),e._v(" "),r("TableFoot")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableHead:r(475).default,TableBody:r(477).default,Table:r(474).default,TableFoot:r(476).default})},475:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=(r(62),r(73),r(30)),th=function(title,e,t){return{title:title,width:e,hidden:t}},thead=[th("Company","w-119 md:w-185"),th("License use","w-68"),th("Status","w-[121px]"),th("Users","w-86"),th("About","w-[301px]"),th("Actions",null,"w-58")];function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Tablehead",data:function(){return{tableHead:thead}},computed:c(c(c({},Object(o.c)(["selectedTableItemIndex","breakpoint","tableData"])),Object(o.c)({sortStep:"tableSortStep"})),{},{checkboxChecked:function(){return this.selectedTableItemIndex.length===this.tableData.length},checkboxindeterminate:function(){return this.selectedTableItemIndex.length&&this.selectedTableItemIndex.length!==this.tableData.length},checkboxTitle:function(){return this.selectedTableItemIndex.length?"Clear selection":"Select all"},arrowTransition:function(){var e="transition-[opacity,transform]",t="will-change-transform";return{mode:"out-in",enterClass:"".concat(t," opacity-0 ").concat(1===this.sortStep?"-translate-y-1":"translate-y-1"),enterActiveClass:"".concat(t," ").concat(e," ").concat(this.sortStep?"duration-300":""),enterToClass:"opacity-100 translate-y-0",leaveClass:t,leaveActiveClass:"".concat(t," ").concat(e),leaveToClass:"opacity-0 ".concat(2!==this.sortStep?"".concat(0===this.sortStep?"translate-y-1":"-translate-y-1"):"")}},thAriaSort:function(){switch(this.sortStep){case 1:return"ascending";case 2:return"descending";default:return"none"}},thAriaLabelSuffix:function(){switch(this.sortStep){case 0:return"sort ascending";case 1:return"sort descending";default:return"remove sort"}}}),methods:c(c({},Object(o.b)(["clearTableSelection","selectMultipleTableItems","tableSortStep"])),{},{changeSort:function(th){2===this.sortStep?this.tableSortStep(1):this.tableSortStep(2)},handleSelect:function(e){!0===e?this.selectMultipleTableItems(this.tableData.map((function(e,i){return i}))):this.clearTableSelection()}})},f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"w-full"},[r("tr",{staticClass:"flex items-center"},e._l(e.tableHead,(function(th,i){return r("th",{key:th.title,staticClass:"inline-flex items-center px-12 py-6 flex-shrink-0",class:th.width,attrs:{role:"columnheader",scope:"col","aria-sort":0===i?e.thAriaSort:"none","aria-label":th.title+"."+(0===i?" Click to "+e.thAriaLabelSuffix:"")}},[th.hidden?[r("p",{staticClass:"sr-only"},[e._v("\n          "+e._s(th.title)+"\n        ")])]:[0===i?r("Checkbox",{attrs:{"model-value":e.checkboxChecked,indeterminate:!!e.checkboxindeterminate,label:e.checkboxTitle,title:e.checkboxTitle},on:{"update:modelValue":e.handleSelect}}):e._e(),e._v(" "),r("div",e._g({staticClass:"flex items-center group",class:[{"cursor-pointer":0===i,"cursor-default":0!==i}]},0===i?{click:function(){return e.changeSort(th)}}:{}),[r("UiText",{attrs:{tag:"span",label:th.title,size:"xs",weight:"500",variant:"caption"}}),e._v(" "),r("ClientOnly",[r("Transition",e._b({},"Transition",e.arrowTransition,!1),[0===i&&e.sortStep?r("Icon",{key:e.sortStep,staticClass:"mx-2 text-gray-500 transform-gpu",class:[{"rotate-180":2===e.sortStep}],attrs:{name:"SortArrow",size:"16"}}):e._e()],1)],1)],1)]],2)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Checkbox:r(473).default,UiText:r(267).default,Icon:r(268).default})},476:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(30);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Tablefoot",computed:c(c({},Object(o.c)(["breakpoint"])),{},{actions:function(){var e=function(title,e){return{title:title,rotateArrow:e}};return[e("Previous"),e("Next",!0)]}})},f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ClientOnly",[e.breakpoint.isMobile?r("div",{staticClass:"mt-12 mx-8"},[r("Divider"),e._v(" "),r("div",{staticClass:"flex justify-between items-center mt-4"},[r("Button",{attrs:{hierarchy:"tertiary gray",icon:"only","icon-name":"PaginationArrow",title:"Previous page",size:"sm"}}),e._v(" "),r("UiText",{attrs:{label:"Page 1 of 10",size:"sm"}}),e._v(" "),r("Button",{staticClass:"rotate-180",attrs:{hierarchy:"tertiary gray",icon:"only","icon-name":"PaginationArrow",title:"Next page",size:"sm"}})],1)],1):r("div",{staticClass:"h-33 flex items-center justify-between w-full pt-[11px] px-12 pb-8"},[r("div",{staticClass:"grid grid-flow-col gap-x-6"},e._l(e.actions,(function(e){return r("Button",{key:e.title,staticClass:"h-19 py-[9px] px-[17px] rounded-sm text-sm",attrs:{hierarchy:"secondary gray",label:e.title,size:"custom"}})})),1),e._v(" "),r("UiText",{staticClass:"flex items-center",attrs:{label:"Page 1 of 10",variant:"body",size:"sm"}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(188).default,UiText:r(267).default,Divider:r(270).default})},477:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(61),o=r(9),l=(r(271),r(41),r(62),r(30));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"Tablebody",computed:d(d({},Object(l.c)(["tableData","tableSortStep","breakpoint"])),{},{contents:function(){return 2===this.tableSortStep?Object(n.a)(this.tableData).sort((function(a,b){return a.company.name.toLowerCase()>a.company.name.toLowerCase()?1:-1})):this.tableData},transitionClasses:function(){if(this.breakpoint.isMobile)return{};var desc=2===this.tableSortStep,e="translate-y-1",t="-translate-y-1",r="will-change-[transform,opacity]";return{enterClass:"opacity-0 ".concat(desc?e:t," ").concat(r),enterActiveClass:"duration-[300ms] ".concat(r),leaveActiveClass:"duration-[75ms] ".concat(r),leaveClass:r,leaveToClass:"opacity-0 ".concat(desc?t:e),mode:"out-in"}}})},h=r(14),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Transition",e._b({},"Transition",e.transitionClasses,!1),[r("tbody",{key:e.breakpoint.isMobile?void 0:e.tableSortStep,staticClass:"border-gray-200 border-y transition-[opacity,transform]"},e._l(e.contents,(function(t,i){return r("TableBodyItem",e._b({key:t.company.name+i,attrs:{index:i,gray:(i+1)%2!=0}},"TableBodyItem",t,!1))})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableBodyItem:r(480).default})},491:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(30);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"DashboardOverviewTableData",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["tableData"]))},d=c,f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-12"},[e.tableData?r("Table"):r("div",{staticClass:"flex justify-center h-79 md:h-88 items-center"},[r("Icon",{staticClass:"animate-spin text-gray-500",attrs:{name:"spinner",size:"56"}}),e._v(" "),r("p",{staticClass:"sr-only"},[e._v("Loading table...")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Table:r(474).default,Icon:r(268).default})},492:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(30);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"DashboardOverviewTableFilters",data:function(){return{appliedFilters:["All time","US, AU, +4"],search:""}},computed:c(c({},Object(o.c)(["breakpoint"])),{},{isMobile:function(){return this.breakpoint.isMobile},badgeProps:function(){return{iconSize:this.breakpoint.isMobile?{wrapper:"h-6 w-6 ml-2 text-primary-500",icon:{size:"6"}}:void 0,tag:"li",icon:"trailing",iconName:"x",hierarchy:"secondary color",pill:this.isMobile,size:this.isMobile?"custom":void 0}}})},f=r(14),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex md:items-center flex-col md:flex-row px-8 md:px-0"},[r("ul",{staticClass:"order-3 md:order-none"},e._l(e.appliedFilters,(function(filter){return r("Button",e._b({key:filter,staticClass:"mr-6",class:[{"py-1 pr-4 pl-5 h-12 text-sm rounded-full":e.isMobile}],attrs:{role:"listitem",label:filter}},"Button",e.badgeProps,!1))})),1),e._v(" "),r("Button",{staticClass:"my-6 md:my-0 md:mr-8 order-2 md:order-none",attrs:{icon:"leading","icon-name":"filter",hierarchy:"secondary gray",label:"More filters"}}),e._v(" "),e.isMobile?e._e():r("Spacer"),e._v(" "),r("Search",{staticClass:"md:w-160 order-1 md:order-none",model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(188).default,Spacer:r(272).default,Search:r(472).default})},521:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var n=r(9),o=r(6),l=(r(31),r(30));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"DashboardOverviewTable",fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getTableData();case 2:case"end":return t.stop()}}),t)})))()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)(["getTableData"]))},f=d,h=r(14),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"mt-16"},[r("DashboardOverviewTableFilters"),e._v(" "),r("DashboardOverviewTableData")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DashboardOverviewTableFilters:r(492).default,DashboardOverviewTableData:r(491).default})}}]);