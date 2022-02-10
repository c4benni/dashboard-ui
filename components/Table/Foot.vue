<template>
  <ClientOnly>
    <div
      v-if="!breakpoint.isMobile"
      class="h-33 flex items-center justify-between w-full pt-[11px] px-12 pb-8"
    >
      <div class="grid grid-flow-col gap-x-6">
        <Button
          v-for="action in actions"
          :key="action.title"
          hierarchy="secondary gray"
          :label="action.title"
          size="custom"
          class="h-19 py-[9px] px-[17px] rounded-sm text-sm"
        />
      </div>

      <UiText
        label="Page 1 of 10"
        variant="body"
        size="sm"
        class="flex items-center"
      />
    </div>

    <div v-else class="mt-12 mx-8">
      <Divider />

      <div class="flex justify-between items-center mt-4">
        <Button
          hierarchy="tertiary gray"
          icon="only"
          icon-name="PaginationArrow"
          title="Previous page"
          size="sm"
        />

        <UiText label="Page 1 of 10" size="sm" />

        <Button
          hierarchy="tertiary gray"
          icon="only"
          icon-name="PaginationArrow"
          title="Next page"
          size="sm"
          class="rotate-180"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tablefoot',
  computed: {
    ...mapState(['breakpoint']),

    actions() {
      const action = (title, rotateArrow) => ({ title, rotateArrow })

      return [action('Previous'), action('Next', true)]
    },
  },
}
</script>
