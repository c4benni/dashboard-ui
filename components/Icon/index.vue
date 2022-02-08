<template>
  <img decoding="async" loading="lazy" draggable="false" :src="getSrc" :alt="getAlt" :height="height" :width="width" class="select-none"/>
</template>

<script>
import { requiredStringProp, undefinedStringProp } from '../utils'

export default {
  name: 'Icon',
  props: {
    name: requiredStringProp,
    height: undefinedStringProp,
    width: undefinedStringProp
  },
  computed: {
    getSrc() {
      return `svg/${this.name}.svg`
    },
    getAlt(){
      return `${this.name} icon`.replace(/\//g, ' ')
    },
    
  },
}
</script>

<style></style>
