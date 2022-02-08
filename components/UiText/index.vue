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
        ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(trimmedLowerCase(prop)),
    },
    weight: {
      type: String,
      default: '400',
      validator: (prop) => ['400', '500', '600'].includes(prop.trim()),
    },
  },
  render(h) {
    // get the tailwind class to be applied based on the `size` prop;
    // returns md size if size not given or passed a wrong prop value;
    const getSize = () => {
      switch (trimmedLowerCase(this.size)) {
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
    }

    // get the tailwind class to be applied based on the `weight` prop;
    // if `weight` === 400, returns ''. To avoid unecessary className;
    // defaults to 400;
    const getWeight = () => {
      switch (this.weight.trim()) {
        case '500':
          return 'font-medium'
        case '600':
          return 'font-semibold'
        default:
          return 'font-normal'
      }
    }

    return h(
      this.tag,
      {
        ...this.$attrs,
        class: [getSize(), getWeight()],
      },
      [this.label || this.$slots.default]
    )
  },
}
</script>
