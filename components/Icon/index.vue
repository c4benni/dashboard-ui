
<script>
import {
  camelCase,
  capitalize,
  requiredStringProp,
  undefinedStringProp,
} from '../utils'

export default {
  name: 'Icon',
  props: {
    name: requiredStringProp,
    title: undefinedStringProp,
    height: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    size: {
      type:String,
      default:'20'
    }
  },
  computed: {
    // format `name` to match valid jsx syntax. Eg edit will be IconEdit
    // also matching the folder structure.
    toRender() {
      return `Icon${capitalize(camelCase(this.name))}`
    },
    label() {
      if (this.title) {
        return this.title
      }

      // format `name` to have a title like 'checkbox blank icon' when `name` is CheckboxBlank or checkboxBlank
      const formatIconName = () => {
        const addSpace = camelCase(this.name).replace(/[A-Z]/g, (x) =>
          ` ${x}`.toLowerCase()
        )

        return `${capitalize(addSpace)} icon`
      }

      return formatIconName()
    },
  },
  render(h){
    return h(this.toRender, {
      attrs:{
        role:'img',
        'aria-label': this.label,
        height:this.height||this.size,
        width:this.width||this.size,
        ...this.$attrs
      },
      on:{...this.$listeners}
    })
  }
}
</script>
