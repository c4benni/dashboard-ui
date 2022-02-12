<template>
  <!-- fetch images within 56px of viewport. loading='lazy' isn't widely supported -->
  <ClientOnly>
    <Intersection
      v-slot="{ isIntersecting }"
      once
      :config="{ rootMargin: '56px' }"
      :disabled="hasLoaded"
    >
      <a
        v-if="!isIntersecting && !hasLoaded"
        :title="alt"
        :href="publicId"
        target="_blank"
        rel="noreferrer noopener"
        :style="{
          height: `${height || size}px`,
          width: `${width || size}px`,
        }"
        class="inline-block"
      />

      <img
        v-else
        :src="publicId"
        :alt="alt"
        :width="width || size"
        :height="height || size"
        decoding="async"
        crossorigin="anonymous"
        class="text-[transparent] text-[1px] select-none"
        @load="imgLoaded"
      />
    </Intersection>
  </ClientOnly>
</template>

<script>
import { Cloudinary } from 'cloudinary-core'

import { requiredStringProp, undefinedStringProp } from '../utils'

const cloudinary = new Cloudinary({ cloud_name: 'c4benn', secure: true })

// store loaded srcs to avoid using intersectionObserver for loaded images;
// use object for quicker lookup; {`this.publicId`: 1}
const loadedSrc = {}

export default {
  name: 'Img',
  props: {
    alt: requiredStringProp,
    src: requiredStringProp,
    width: undefinedStringProp,
    height: undefinedStringProp,
    size: undefinedStringProp,
    quality: undefinedStringProp,
    loading: undefinedStringProp,
  },
  data: () => ({
    intersected: false,
  }),
  computed: {
    hasLoaded() {
      return !!loadedSrc[this.publicId]
    },
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
  methods: {
    imgLoaded() {
      loadedSrc[this.publicId] = 1
    },
  },
}
</script>
