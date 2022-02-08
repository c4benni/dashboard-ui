<script>
// Communicates actions users can take;
// Can render dynamic tag that defaults to <button/>;
// If to prop is passed, it renders <NuxtLink/>;
// If href is passed, it renders <a/> and adds relevant attrs like target,...

import computed from './computed'
import props from './props'

export default {
  name: 'Button',
  props,
  computed,
  mounted() {
    if (this.autofocus && !this.disabled) {
      this.$el?.focus?.()
    }
  },
  render(h) {
    return h(
      this.getTag,
      {
        ...this.anchorAttrs,
        props: {
          ...this.nuxtLinkProps,
        },
        disabled: this.disabled,
        staticClass:
          'font-medium flex items-center outline-none justify-center flex-row',
        class: [
          {
            rounded: !this.isLink,
            'cursor-pointer transition-[opacity,box-shadow] active:opacity-80 can-hover:active:opacity-90':
              !this.disabled,
            'cursor-not-allowed': this.disabled,
            'border focus:ring-4 shadow-xs': this.isRaised,
          },
          this.sizes,
          this.colors,
        ],
      },
      [
        this.getIcon === 'dot'
          ? h('div', {
              staticClass: 'h-4 w-4 rounded-full mr-[9px]',
              class: [this.dotBackground],
            })
          : this.icon === 'leading'
          ? h('div',{
            staticClass: 'mr-[9.67px] h-[16.67px] w-[16.67px]'
          },[
              this.$slots.icon ||
                h('Icon', {
                  props: {
                    name: this.iconName,
                  },
                }),
            ])
          : null,
        this.$slots.default,
      ]
    )
  },
}
</script>
