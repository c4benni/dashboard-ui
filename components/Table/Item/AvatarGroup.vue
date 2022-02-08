<template>
  <div class="flex items-center isolate">
    <template v-if="top5.length">
      <Img
        v-for="(img, i) in top5"
        :key="i"
        v-bind="img"
        draggable="false"
        class="bg-white"
        :class="[
          sharedClasses,
          {
            '-ml-3': i > 0,
            'z-1': i === 1,
            'z-2': i === 2,
            'z-3': i === 3,
            'z-4': i === 4,
          },
        ]"
        style="object-fit: none;"
      />

      <div
        v-if="remainder"
        class="flex justify-center items-center text-xs font-medium text-primary-600 bg-primary-50 z-5 -ml-3"
        :class="[sharedClasses]"
      >
        +{{ remainder }}
      </div>
    </template>

    <p v-else class="sr-only">No avatar</p>
  </div>
</template>

<script>
export default {
  name: 'TableItemAvatarGroup',
  props: {
    images: {
      type: Array,
      required: true,
    },
    max: {
      type: Number,
      default: 5,
    },
  },
  data: () => ({
    sharedClasses: 'w-12 h-12 border-2 border-white rounded-full relative select-none',
  }),
  computed: {
    top5() {
      if (Array.isArray(this.images)) {
        return this.images.slice(0, this.max)
      }
      return []
    },
    remainder() {
      return Math.max(this.images.length - this.max, 0)
    },
  },
}
</script>
