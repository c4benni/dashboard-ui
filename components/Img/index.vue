<template>
  <img :src="publicId" :alt="alt" :width="width" :height="height" class="text-[transparent] text-[1px]"/>
</template>

<script>
import { Cloudinary } from 'cloudinary-core'

import { requiredStringProp, undefinedStringProp } from '../utils'

const cloudinary = new Cloudinary({ cloud_name: 'c4benn' })

export default {
  name: 'Img',
  props: {
    alt: requiredStringProp,
    src: requiredStringProp,
    width: undefinedStringProp,
    height: undefinedStringProp,
    quality: undefinedStringProp,
    loading: undefinedStringProp,
  },
  computed: {
    publicId() {
      const { src, height, width, quality } = this

      return cloudinary.url(`untitledUi/${src}`, {
        transformation: [
          {
            height,
            width,
            quality,
          },
        ],
      })
    },
  },
}
</script>
