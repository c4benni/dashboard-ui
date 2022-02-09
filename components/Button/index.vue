<script>
// Communicates actions users can take;
// Can render dynamic tag that defaults to <button/>;
// If to prop is passed, it renders <NuxtLink/>;
// If href is passed, it renders <a/> and adds relevant attrs like target,...

// Social buttons ommitted for simplicity.

import computed from './computed'
import props from './props'

const name = 'Button'

export default {
  name,
  props,
  computed,
  created() {
    if (process.env.NODE_ENV === 'development') {
      if (this.getIcon === 'only' && !this.title) {
        console.error(
          `${name}: Requires a title when icon="only". Find icon-name="${this.iconName}"`
        )
      }
    }
  },
  mounted() {
    if (this.autofocus && !this.disabled) {
      this.$el?.focus?.()
    }
  },
  render(h) {
    let iconSlot
    let iconComponent

    if (this.icon) {
      iconComponent = h('Icon', {
        props: {
          name: this.iconName,
          ...this.iconSizeAndSpace.icon,
        },
      })

      iconSlot = h(
        'div',
        {
          staticClass: 'flex items-center justify-center',
          class: [this.iconSizeAndSpace.wrapper],
        },
        [this.$slots.icon || iconComponent]
      )
    }

    return h(
      this.getTag,
      {
        attrs: {
          ...this.anchorAttrs,
          title: this.title,
          tabindex: this.disabled ? '-1' : !this.focusableTag ? '0' : undefined,
          role: !this.focusableTag ? 'button' : undefined,
          disabled: this.disabled,
          ...this.$attrs,
        },
        props: {
          ...this.nuxtLinkProps,
        },
        on: {
          ...this.$listeners,
        },
        staticClass:
          'font-medium items-center outline-none justify-center flex-row select-none',
        class: [
          {
            [`${this.getSize === 'custom' ? '' : 'rounded'} whitespace-nowrap`]: !this.isLink,
            'cursor-pointer transition-[opacity,box-shadow] active:opacity-80 can-hover:active:opacity-90':
              !this.disabled,
            'cursor-not-allowed': this.disabled,
            'border focus:ring-4 shadow-xs': this.isRaised,
            'inline-flex': !this.block || this.isLink,
            'flex w-full': this.block && !this.isLink,
          },
          this.sizes,
          this.colors,
        ],
      },
      this.getIcon === 'only'
        ? [iconComponent]
        : [
            this.getIcon === 'dot'
              ? h('span', {
                  role: 'presentation',
                  staticClass: 'h-4 w-4 rounded-full mr-[9px] inline-block',
                  class: [this.dotBackground],
                })
              : this.icon === 'leading'
              ? iconSlot
              : null,
            this.label || this.$slots.default,
            this.getIcon === 'trailing' ? iconSlot : null,
          ]
    )
  },
}
</script>
