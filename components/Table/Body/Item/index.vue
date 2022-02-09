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
        class="mr-6"
        @update:modelValue="$emit('update:selected', selected)"
      />

      <Img v-bind="logo" height="40" width="40" class="mr-6" />

      <div>
        <UiText :label="company.name" weight="500" size="sm" variant="title" />

        <UiText :label="company.website" size="sm" variant="caption" />
      </div>
    </td>

    <td :class="[sharedClasses]" class="w-71">
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

    <td :class="[sharedClasses]">
      <Button
        v-for="action in actions"
        :key="action.icon"
        icon="only"
        :icon-name="action.icon"
        :title="action.title"
        hierarchy="tertiary gray"
      />
    </td>
  </tr>
</template>

<script>
import Checkbox from '~/components/Checkbox/index.vue'
import { requiredProp, trimmedLowerCase } from '~/components/utils'
import UiText from '~/components/UiText/index.vue'
export default {
  name: 'TableBodyItem',
  components: { Checkbox, UiText },
  props: {
    // apply gray background
    gray: Boolean,
    selected: Boolean,
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
  }),
  computed: {
    checkboxLabel() {
      if (this.selected) {
        return 'Deselect'
      }
      return 'Select'
    },
    actions() {
      const action = (icon, title) => ({ icon, title })

      return [action('Trash', 'Delete row'), action('Edit', 'Edit row')]
    },
  },
}
</script>
