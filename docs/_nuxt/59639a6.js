(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5,39,40,41,42],{473:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var l=r(9),n=r(30),o=r(0);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"Checkbox",inheritAttrs:!1,model:{prop:"modelValue",event:"update:modelValue"},props:{label:o.j,title:o.m,indeterminate:Boolean,disabled:Boolean,autofocus:Boolean,modelValue:{type:Boolean,default:void 0}},data:function(){return{manualChecked:!1,manualId:null}},computed:d(d({},Object(n.c)(["breakpoint"])),{},{getType:function(){return this.indeterminate?"indeterminate":this.getChecked?"checked":"blank"},getChecked:function(){return"boolean"==typeof this.modelValue?this.modelValue:this.manualChecked},iconName:function(){switch(this.getType){case"indeterminate":return"CheckboxIndeterminate";case"checked":return"CheckboxChecked";default:return"CheckboxBlank"}},transitionClasses:function(){return this.breakpoint.isMobile?{}:{enterClass:"rotate-[20deg] opacity-0 will-change-transform",enterActiveClass:"will-change-transform duration-[150ms]",entertoClass:"scale-100 opacity-100",leaveActiveClass:"will-change-transform duration-[75ms]",leaveToClass:"scale-75 opacity-0"}}}),created:function(){this.manualId="checkbox-".concat(performance.now())},mounted:function(){var e,t;this.autofocus&&!this.disabled&&(null===(e=this.$refs.input)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e))},methods:{toggle:function(e){var t,r;null===(t=this.$refs.input)||void 0===t||null===(r=t.focus)||void 0===r||r.call(t),"boolean"==typeof this.modelValue&&this.$emit("update:modelValue",e),this.manualChecked=e},handleInput:function(e){this.toggle(e.target.value)}}},f=r(14),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._g({staticClass:"h-10 w-10 rounded-sm border flex items-center justify-center mr-6 transition-[shadow,opacity]",class:[{"bg-white border-gray-300":"blank"===e.getType,"bg-primary-50 border-primary-600":"blank"!==e.getType&&!e.disabled,"border-dotted cursor-not-allowed":e.disabled,"active:opacity-90 focus-within:ring-4 ring-primary-50 cursor-pointer":!e.disabled}],attrs:{role:"checkbox","aria-checked":e.getChecked,"aria-label":e.label,title:e.title},on:{click:function(t){return e.toggle(!e.getChecked)}}},e.$listeners),[r("label",{staticClass:"sr-only",attrs:{for:e.$attrs.id||e.manualId}},[e._v("\n    "+e._s(e.label)+"\n  ")]),e._v(" "),r("input",{ref:"input",staticClass:"sr-only",attrs:{id:e.$attrs.id||e.manualId,type:"checkbox",indeterminate:"indeterminate"===e.getType,"aria-label":e.label,disabled:e.disabled},domProps:{checked:e.getChecked},on:{click:function(e){e.preventDefault()},input:e.handleInput}}),e._v(" "),r("Transition",e._b({attrs:{mode:"out-in"}},"Transition",e.transitionClasses,!1),["blank"!==e.getType?r("Icon",{key:e.getType,staticClass:"transition-[opacity,transform]",class:[{"text-primary-600":!e.disabled,"text-gray-300":e.disabled}],attrs:{name:e.iconName,size:"14"}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:r(268).default})},478:function(e,t,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(101).default)("0eb56fec",content,!0,{sourceMap:!1})},480:function(e,t,r){"use strict";r.r(t);r(27),r(20),r(26),r(11),r(32),r(24),r(33);var l=r(9),n=(r(269),r(41),r(46),r(85),r(30)),o=r(473),c=r(0),d=r(267);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"TableBodyItem",components:{Checkbox:o.default,UiText:d.default},props:{index:Object(c.i)(Number),gray:Boolean,logo:{type:Object,required:!0,validator:function(e){return"string"==typeof e.src&&"string"==typeof e.alt}},company:{type:Object,required:!0,validator:function(e){return"string"==typeof e.name&&"string"==typeof e.website}},licenseUse:Object(c.i)(Number),status:{type:Object,required:!0,validator:function(e){return"string"==typeof e.label&&["customer","churned"].includes(Object(c.k)(e.label))}},avatarGroup:Object(c.i)(Array),about:{type:Object,required:!0,validator:function(e){return"string"==typeof e.title&&"string"==typeof e.subtitle}}},emits:["update:selected"],data:function(){return{sharedClasses:"flex items-center py-8 px-12 justify-start h-full flex-shrink-0",dialog:!1}},computed:f(f({},Object(n.c)(["selectedTableItemIndex"])),{},{selected:function(){return this.selectedTableItemIndex.includes(this.index)},checkboxLabel:function(){return this.selected?"Deselect":"Select"},actions:function(){var e=this,t=function(e,title,t){return{icon:e,title:title,events:t}};return[t("Trash","Delete row",{click:function(){e.dialog=!0}}),t("Edit","Edit row")]}}),methods:f(f({},Object(n.b)(["toggleTableSelection"])),{},{toggleSelect:function(){this.toggleTableSelection(this.index)}})},y=r(14),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",{staticClass:"h-36 flex",class:[{"bg-gray-50":e.gray,"bg-white":!e.gray}]},[r("td",{staticClass:"w-119 md:w-185",class:[e.sharedClasses]},[r("Checkbox",{staticClass:"mr-6 shrink-0",attrs:{label:e.checkboxLabel,title:e.checkboxLabel,"model-value":e.selected},on:{"update:modelValue":e.toggleSelect}}),e._v(" "),r("Img",e._b({staticClass:"mr-6",attrs:{height:"40",width:"40"}},"Img",e.logo,!1)),e._v(" "),r("div",[r("UiText",{attrs:{label:e.company.name,weight:"500",size:"sm",variant:"title"}}),e._v(" "),r("UiText",{attrs:{label:e.company.website,size:"sm",variant:"caption"}})],1)],1),e._v(" "),r("td",{staticClass:"w-68",class:[e.sharedClasses]},[r("TableBodyItemProgress",{attrs:{value:e.licenseUse}})],1),e._v(" "),r("td",{staticClass:"w-[121px]",class:[e.sharedClasses]},[r("TableBodyItemBadge",{attrs:{success:e.status.success,label:e.status.label}})],1),e._v(" "),r("td",{staticClass:"w-86",class:[e.sharedClasses]},[r("TableBodyItemAvatarGroup",{attrs:{images:e.avatarGroup}})],1),e._v(" "),r("td",{staticClass:"flex-col flex items-start py-8 px-12 justify-center h-full flex-shrink-0 w-[301px]"},[r("UiText",{attrs:{label:e.about.title,size:"sm",variant:"title"}}),e._v(" "),r("UiText",{attrs:{label:e.about.subtitle,size:"sm",variant:"caption"}})],1),e._v(" "),r("td",{staticClass:"flex items-center p-8 justify-start h-full flex-shrink-0 w-58"},[e._l(e.actions,(function(t){return r("Button",e._g({key:t.icon,attrs:{icon:"only","icon-name":t.icon,title:t.title,hierarchy:"tertiary gray"}},t.events))})),e._v(" "),r("TableBodyItemDeleteDialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Checkbox:r(473).default,Img:r(189).default,UiText:r(267).default,TableBodyItemProgress:r(487).default,TableBodyItemBadge:r(488).default,TableBodyItemAvatarGroup:r(489).default,Button:r(188).default,TableBodyItemDeleteDialog:r(490).default})},481:function(e,t,r){"use strict";r(478)},482:function(e,t,r){var l=r(100)((function(i){return i[1]}));l.push([e.i,'.Progress[data-v-eb27a0fc]:before{pointer-events:none;position:absolute;left:0px;top:0px;height:100%;border-radius:inherit;--tw-bg-opacity:1;background-color:rgb(127 86 217 / var(--tw-bg-opacity));content:"";width:var(--percent)}',""]),l.locals={},e.exports=l},487:function(e,t,r){"use strict";r.r(t);r(269);var l={name:"Progress",props:{value:{type:Number,required:!0},max:{type:Number,default:100},min:{type:Number,default:0}},computed:{percentage:function(){return this.value/(this.max-this.min)*100}}},n=(r(481),r(14)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"h-4 w-44 rounded-[4px] bg-primary-50 relative Progress",style:{"--percent":e.percentage+"%"},attrs:{role:"progressbar","aria-valuenow":e.value,"aria-valuemax":e.max,"aria-valuemin":e.min,title:e.percentage+"%"}})}),[],!1,null,"eb27a0fc",null);t.default=component.exports},488:function(e,t,r){"use strict";r.r(t);var l={name:"TableItemBadge",props:{label:r(0).j,success:Boolean}},n=r(14),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"inline-flex h-11 py-1 px-4 rounded-xl justify-center items-center text-xs font-medium select-none",class:[{"bg-success-50 text-success-700":e.success,"bg-gray-100 text-gray-700":!e.success}]},[e._v("\n  "+e._s(e.label)+"\n")])}),[],!1,null,null,null);t.default=component.exports},489:function(e,t,r){"use strict";r.r(t);var l=r(28),n=(r(11),r(269),r(55),{name:"TableItemAvatarGroup",props:{images:{type:Array,required:!0,validator:function(e){return e.every((function(e){var t="object"===Object(l.a)(e),r="string"==typeof(null==e?void 0:e.src),n="string"==typeof(null==e?void 0:e.alt);return t&&r&&n}))}},max:{type:Number,default:5}},data:function(){return{sharedClasses:"w-12 h-12 border-2 border-white rounded-full relative select-none"}},computed:{top5:function(){return Array.isArray(this.images)?this.images.slice(0,this.max):[]},remainder:function(){return Math.max(this.images.length-this.max,0)}}}),o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center isolate"},[e.top5.length?[e._l(e.top5,(function(img,i){return r("Img",e._b({key:i,staticClass:"bg-white",class:[e.sharedClasses,{"-ml-3":i>0,"z-1":1===i,"z-2":2===i,"z-3":3===i,"z-4":4===i}],staticStyle:{"object-fit":"none"},attrs:{draggable:"false",size:"24"}},"Img",img,!1))})),e._v(" "),e.remainder?r("div",{staticClass:"flex justify-center items-center text-xs font-medium text-primary-600 bg-primary-50 z-5 -ml-3",class:[e.sharedClasses]},[e._v("\n      +"+e._s(e.remainder)+"\n    ")]):e._e()]:r("p",{staticClass:"sr-only"},[e._v("No avatar")])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Img:r(189).default})},490:function(e,t,r){"use strict";r.r(t);var l={name:"DeleteDialog",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:Boolean},data:function(){return{deleted:!1}},computed:{actions:function(){var e=function(e,label,t,r,l){return{hierarchy:e,label:label,className:t,destructive:r,autofocus:l}};return[e(void 0,"Delete",void 0,!0),e("secondary gray","Cancel","sm:mt-0 mt-6",!0,!0)]}},methods:{toggle:function(e){this.$emit("update:modelValue",e)},close:function(){this.toggle(!1)}}},n=r(14),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Dialog",{attrs:{"model-value":e.modelValue,"aria-labelledby":"dialog-title"},on:{"update:modelValue":e.toggle}},[r("div",{staticClass:"inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-lg sm:w-full mx-8 md:mx-0"},[r("div",{staticClass:"bg-white px-8 pt-10 pb-8 sm:p-12 sm:pb-8"},[r("div",{staticClass:"sm:flex sm:items-start"},[r("div",{staticClass:"mx-auto flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-full bg-error-100 sm:mx-0 sm:h-20 sm:w-20"},[r("svg",{staticClass:"h-12 w-12 text-error-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})])]),e._v(" "),r("div",{staticClass:"mt-6 text-center sm:mt-0 sm:ml-8 sm:text-left"},[r("UiText",{staticClass:"text-[1.125rem]",attrs:{id:"modal-title",label:"Delete row",weight:"500",variant:"title",size:"custom",tag:"h3"}}),e._v(" "),r("div",{staticClass:"mt-2"},[r("UiText",{attrs:{label:"Are you sure you want to delete this row? All of your  data will be permanently removed. This action cannot be\n                undone.",variant:"caption",size:"sm"}})],1)],1)])]),e._v(" "),r("div",{staticClass:"bg-gray-50 px-8 py-6 sm:px-12 sm:flex sm:flex-row-reverse"},e._l(e.actions,(function(t){return r("Button",{key:t.label,staticClass:"w-full sm:ml-6 sm:w-auto",class:t.className,attrs:{label:t.label,hierarchy:t.hierarchy,destructive:t.destructive,autofocus:t.autofocus},on:{click:e.close}})})),1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiText:r(267).default,Button:r(188).default,Dialog:r(273).default})}}]);