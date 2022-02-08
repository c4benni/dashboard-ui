<script>
import { htmlAnchorAttrs, undefinedStringProp } from '../utils'
export default {
  name: 'NavItem',
  props: {
    current: Boolean,
    label: undefinedStringProp,
    to:{
      type:[String, Object],
      required:true
    },
    href:undefinedStringProp
  },
  computed:{
    anchorTag(){
      if(this.to) return 'NuxtLink';

      if(this.href) return 'a'

      return null
    },
    htmlAnchorAttrs(){
      if(this.anchorTag==='a'){
        return htmlAnchorAttrs
      }return {}
    }
  },
  render(h){

    if(!this.anchorTag){return null}

    return h('li',[
      h(this.anchorTag,{
        attrs:{
          ...this.htmlAnchorAttrs,
        },
        props:{
          to: this.to,
        },
        staticClass: 'rounded-sm h-20 flex justify-center items-center text-gray-700 font-medium text-base can-hover:hover:bg-gray-25 border border-white can-hover:hover:border-gray-25 transition-opacity can-hover:active:opacity-90 active:opacity-80 focus:border-gray-300 focus:ring-4 focus:ring-gray-25 py-4 px-6 outline-none transition-shadow',
        class:[{'bg-white': !this.current, 'bg-gray-50':this.current}],
        on:{
          ...this.$listeners
        }
      },[
        this.label || this.$slots.default
      ])
    ])
  }
}
</script>
