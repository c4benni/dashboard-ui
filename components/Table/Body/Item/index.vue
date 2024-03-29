<template>
  <tr
    class="h-36 flex"
    :class="[
      {
        'bg-gray-50': gray,
        'bg-white': !gray,
      },
    ]"
  >
    <td class="w-119 md:w-185" :class="[sharedClasses]">
      <Checkbox
        :label="checkboxLabel"
        :title="checkboxLabel"
        :model-value="selected"
        class="mr-6 shrink-0"
        @update:modelValue="toggleSelect"
      />

      <Img v-bind="logo" height="40" width="40" class="mr-6" />

      <div>
        <UiText :label="company.name" weight="500" size="sm" variant="title" />

        <UiText :label="company.website" size="sm" variant="caption" />
      </div>
    </td>

    <td :class="[sharedClasses]" class="w-68">
      <TableBodyItemProgress :value="licenseUse" />
    </td>

    <td :class="[sharedClasses]" class="w-[121px]">
      <TableBodyItemBadge :success="status.success" :label="status.label" />
    </td>

    <td :class="[sharedClasses]" class="w-86">
      <TableBodyItemAvatarGroup :images="avatarGroup" />
    </td>

    <td
      class="flex-col flex items-start py-8 px-12 justify-center h-full flex-shrink-0 w-[301px]"
    >
      <UiText :label="about.title" size="sm" variant="title" />
      <UiText :label="about.subtitle" size="sm" variant="caption" />
    </td>

    <td class="flex items-center p-8 justify-start h-full flex-shrink-0 w-58">
      <Button
        v-for="action in actions"
        :key="action.icon"
        icon="only"
        :icon-name="action.icon"
        :title="action.title"
        hierarchy="tertiary gray"
        v-on="action.events"
      />

        <TableBodyItemDeleteDialog v-model="dialog" />
    </td>
  </tr>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Checkbox from '~/components/Checkbox/index.vue'
import { requiredProp, trimmedLowerCase } from '~/components/utils'
import UiText from '~/components/UiText/index.vue'
export default {
  name: 'TableBodyItem',
  components: { Checkbox, UiText },
  props: {
    // to easily get an item and update vuex selection;
    index: requiredProp(Number),
    // apply gray background
    gray: Boolean,
    // src: string, alt: string
    logo: {
      type: Object,
      required: true,
      validator: (prop) => {
        return typeof prop.src === 'string' && typeof prop.alt === 'string'
      },
    },
    // name:string, website:string
    company: {
      type: Object,
      required: true,
      validator: (prop) => {
        return typeof prop.name === 'string' && typeof prop.website === 'string'
      },
    },
    licenseUse: requiredProp(Number),
    // label: string; success: boolean;
    status: {
      type: Object,
      required: true,
      validator: (prop) => {
        const validLabel =
          typeof prop.label === 'string' &&
          ['customer', 'churned'].includes(trimmedLowerCase(prop.label))

        return validLabel
      },
    },
    avatarGroup: requiredProp(Array),
    about: {
      type: Object,
      required: true,
      validator: (prop) => {
        return (
          typeof prop.title === 'string' && typeof prop.subtitle === 'string'
        )
      },
    },
  },
  emits: ['update:selected'],
  data: () => ({
    sharedClasses:
      'flex items-center py-8 px-12 justify-start h-full flex-shrink-0',
    dialog: false,
  }),
  computed: {
    ...mapState(['selectedTableItemIndex']),
    selected() {
      return this.selectedTableItemIndex.includes(this.index)
    },
    checkboxLabel() {
      if (this.selected) {
        return 'Deselect'
      }
      return 'Select'
    },
    actions() {
      const action = (icon, title, events) => ({ icon, title, events })

      return [
        action('Trash', 'Delete row', {
          click: () => {
            this.dialog = true
          },
        }),
        action('Edit', 'Edit row'),
      ]
    },
  },
  methods: {
    ...mapActions(['toggleTableSelection']),
    toggleSelect() {
      this.toggleTableSelection(this.index)
    },
  },
}
</script>
