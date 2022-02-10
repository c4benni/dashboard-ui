<template>
  <Dialog
    :model-value="modelValue"
    aria-labelledby="dialog-title"
    @update:modelValue="toggle"
  >
    <div
      class="inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div class="bg-white px-8 pt-10 pb-8 sm:p-12 sm:pb-8">
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-full bg-error-100 sm:mx-0 sm:h-20 sm:w-20"
          >
            <svg
              class="h-12 w-12 text-error-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div class="mt-6 text-center sm:mt-0 sm:ml-8 sm:text-left">
            <UiText
              id="modal-title"
              label="Delete row"
              weight="500"
              variant="title"
              size="custom"
              tag="h3"
              class="text-[1.125rem]"
            />
            <div class="mt-2">
              <UiText
                label="Are you sure you want to delete this row? All of your  data will be permanently removed. This action cannot be
                  undone."
                variant="caption"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-8 py-6 sm:px-12 sm:flex sm:flex-row-reverse">
        <Button
          v-for="action in actions"
          :key="action.label"
          :label="action.label"
          :hierarchy="action.hierarchy"
          :destructive="action.destructive"
          :autofocus="action.autofocus"
          class="w-full sm:ml-6 sm:w-auto"
          :class="action.className"
          @click="close"
        />
      </div>
    </div>
  </Dialog>
</template>

<script>
export default {
  name: 'DeleteDialog',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: Boolean,
  },
  data: () => ({
    deleted: false,
  }),
  computed: {
    actions() {
      const action = (hierarchy, label, className, destructive, autofocus) => ({
        hierarchy,
        label,
        className,
        destructive,
        autofocus,
      })

      return [
        action(undefined, 'Delete', undefined, true),
        action('secondary gray', 'Cancel', 'sm:mt-0 mt-6', true, true),
      ]
    },
  },
  methods: {
    toggle(e) {
      this.$emit('update:modelValue', e)
    },
    close() {
      this.toggle(false)
    },
  },
}
</script>

<style></style>
