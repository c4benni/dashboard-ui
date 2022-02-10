<template>
  <div
    role="checkbox"
    :aria-checked="getChecked"
    :title="title"
    class="h-10 w-10 rounded-sm border flex items-center justify-center mr-6 transition-[shadow,opacity]"
    :class="[
      {
        'bg-white border-gray-300': getType === 'blank',
        'bg-primary-50 border-primary-600': getType !== 'blank' && !disabled,
        'border-dotted cursor-not-allowed': disabled,
        'active:opacity-90 focus-within:ring-4 ring-primary-50 cursor-pointer':
          !disabled,
      },
    ]"
    v-on="$listeners"
    @click="toggle(!getChecked)"
  >
    <input
      :id="$attrs.id"
      ref="input"
      type="checkbox"
      :indeterminate="getType === 'indeterminate'"
      :checked="getChecked"
      :aria-label="label"
      :disabled="disabled"
      class="sr-only"
      @click.prevent
      @input="handleInput"
    />

    <Transition mode="out-in" v-bind="transitionClasses">
      <Icon
        v-if="getType !== 'blank'"
        :key="getType"
        :name="iconName"
        size="14"
        class="transition-[opacity,transform]"
        :class="[{ 'text-primary-600': !disabled, 'text-gray-300': disabled }]"
      />
    </Transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { requiredStringProp, undefinedStringProp } from '../utils'
export default {
  name: 'Checkbox',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    label: requiredStringProp,
    title: undefinedStringProp,
    indeterminate: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    modelValue: {
      type: Boolean,
      default: undefined,
    },
  },
  data: () => ({
    manualChecked: false,
  }),
  computed: {
    ...mapState(['breakpoint']),
    getType() {
      if (this.indeterminate) {
        return 'indeterminate'
      }
      return this.getChecked ? 'checked' : 'blank'
    },
    getChecked() {
      if (typeof this.modelValue === 'boolean') {
        return this.modelValue
      }
      return this.manualChecked
    },
    iconName() {
      switch (this.getType) {
        case 'indeterminate':
          return 'CheckboxIndeterminate'
        case 'checked':
          return 'CheckboxChecked'
        default:
          return 'CheckboxBlank'
      }
    },
    transitionClasses() {
      if (this.breakpoint.isMobile) {
        return {}
      }
      return {
        enterClass: `rotate-[20deg] opacity-0 will-change-transform`,
        enterActiveClass: 'will-change-transform duration-[150ms]',
        entertoClass: 'scale-100 opacity-100',
        leaveActiveClass: 'will-change-transform duration-[75ms]',
        leaveToClass: 'scale-75 opacity-0',
      }
    },
  },
  mounted() {
    if (this.autofocus && !this.disabled) {
      this.$refs.input?.focus?.()
    }
  },
  methods: {
    toggle(value) {
      this.$refs.input?.focus?.()

      if (typeof this.modelValue === 'boolean') {
        this.$emit('update:modelValue', value)
      }

      this.manualChecked = value
    },

    handleInput(evt) {
      this.toggle(evt.target.value)
    },
  },
}
</script>
