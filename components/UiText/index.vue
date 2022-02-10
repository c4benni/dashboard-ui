<script>
import { trimmedLowerCase, undefinedStringProp } from '../utils'
// A functional utitlity component to render different typography based on props passed;
// handles font-weight, font-size, and tag to be rendered;
// color will be handled externally;

export default {
  name: 'UiText',
  props: {
    label: undefinedStringProp,
    tag: {
      type: String,
      default: 'p',
    },
    size: {
      type: String,
      default: 'md',
      validator: (prop) =>
        ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'custom'].includes(trimmedLowerCase(prop)),
    },
    weight: {
      type: String,
      default: '400',
      validator: (prop) => ['400', '500', '600'].includes(prop.trim()),
    },
    variant: {
      type: String,
      default: undefined,
      validator: (prop) => {
        if (typeof prop === 'string') {
          return ['title', 'body', 'caption', 'disabled'].includes(
            trimmedLowerCase(prop)
          )
        }
        return true
      },
    },
  },
  computed: {
    // get the tailwind class to be applied based on the `size` prop;
    // returns md size if size not given or passed a wrong prop value;
    getSize() {
      switch (trimmedLowerCase(this.size)) {
        case 'custom':
          return ''
        case 'xs':
          return 'text-xs'
        case 'sm':
          return 'text-sm'
        case 'lg':
          return 'text-lg'
        case 'xl':
          return 'text-xl'
        case '2xl':
          return 'text-2xl'
        default:
          return 'text-base'
      }
    },

    // get the tailwind class to be applied based on the `weight` prop;
    // defaults to 400;
    getWeight() {
      switch (this.weight.trim()) {
        case '500':
          return 'font-medium'
        case '600':
          return 'font-semibold'
        default:
          return 'font-normal'
      }
    },

    // returns different text-color based on variant
    getVariant() {
      if(!this.variant) return '';
      
      switch (trimmedLowerCase(this.variant)) {
        case 'title':
          return 'text-gray-900'
        case 'caption':
          return 'text-gray-500'
        case 'disabled':
          return 'text-gray-300'
        default:
          return 'text-gray-700'
      }
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        attrs: { ...this.$attrs },
        on: { ...this.$listeners },
        class: [this.getSize, this.getWeight, this.getVariant],
      },
      [this.label || this.$slots.default]
    )
  },
}
</script>
