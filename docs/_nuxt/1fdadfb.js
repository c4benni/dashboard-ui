(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{490:function(t,e,l){"use strict";l.r(e);var o={name:"DeleteDialog",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:Boolean},data:function(){return{deleted:!1}},computed:{actions:function(){var t=function(t,label,e,l,o){return{hierarchy:t,label:label,className:e,destructive:l,autofocus:o}};return[t(void 0,"Delete",void 0,!0),t("secondary gray","Cancel","sm:mt-0 mt-6",!0,!0)]}},methods:{toggle:function(t){this.$emit("update:modelValue",t)},close:function(){this.toggle(!1)}}},r=l(14),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("Dialog",{attrs:{"model-value":t.modelValue,"aria-labelledby":"dialog-title"},on:{"update:modelValue":t.toggle}},[l("div",{staticClass:"inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-lg sm:w-full mx-8 md:mx-0"},[l("div",{staticClass:"bg-white px-8 pt-10 pb-8 sm:p-12 sm:pb-8"},[l("div",{staticClass:"sm:flex sm:items-start"},[l("div",{staticClass:"mx-auto flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-full bg-error-100 sm:mx-0 sm:h-20 sm:w-20"},[l("svg",{staticClass:"h-12 w-12 text-error-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})])]),t._v(" "),l("div",{staticClass:"mt-6 text-center sm:mt-0 sm:ml-8 sm:text-left"},[l("UiText",{staticClass:"text-[1.125rem]",attrs:{id:"modal-title",label:"Delete row",weight:"500",variant:"title",size:"custom",tag:"h3"}}),t._v(" "),l("div",{staticClass:"mt-2"},[l("UiText",{attrs:{label:"Are you sure you want to delete this row? All of your  data will be permanently removed. This action cannot be\n                undone.",variant:"caption",size:"sm"}})],1)],1)])]),t._v(" "),l("div",{staticClass:"bg-gray-50 px-8 py-6 sm:px-12 sm:flex sm:flex-row-reverse"},t._l(t.actions,(function(e){return l("Button",{key:e.label,staticClass:"w-full sm:ml-6 sm:w-auto",class:e.className,attrs:{label:e.label,hierarchy:e.hierarchy,destructive:e.destructive,autofocus:e.autofocus},on:{click:t.close}})})),1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiText:l(267).default,Button:l(188).default,Dialog:l(273).default})}}]);