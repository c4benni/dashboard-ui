<script>
export default {
  name: 'Spacer',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(h, c) {
    return h(c.props.tag, {
      attrs: {
        'aria-hidden': 'true',
      },
      staticClass: 'flex-shrink-0 flex-grow',
    })
  },
}
</script>
