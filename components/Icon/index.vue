<template>
  <Component :is="toRender" role="img" :aria-label="label" :height="height" :width="width" />
</template>

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
      default: '20'
    },
    width: {
      type: String,
      default: '20'
    },
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
}
</script>

<style></style>
