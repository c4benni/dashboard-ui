<template>
  <div
    class="inline-flex h-11 py-1 px-4 rounded-xl justify-center items-center text-xs font-medium select-none"
    :class="[
      {
        'bg-success-50 text-success-700': success,
        'bg-gray-100 text-gray-700': !success,
      },
    ]"
  >
    {{ label }}
  </div>
</template>

<script>
import { requiredStringProp } from '~/components/utils'
export default {
  name: 'TableItemBadge',
  props: {
    label: requiredStringProp,
    success: Boolean,
  },
}
</script>
