<template>
  <div
    class="h-22 rounded flex justify-start items-center shadow-xs border border-gray-300 bg-white focus-within:border transition-[shadow,opacity] relative"
    :class="[
      {
        'focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-100':
          !disabled,
        'cursor-not-allowed border-dotted': disabled,
        'w-fit active:opacity-90':iconOnly
      },
    ]"
  >
    <span
      class="flex justify-center items-center w-10 h-10 relative z-1 ml-[13px] pointer-events-none"
      :class="{ 'mr-4': !iconOnly, 'mr-[13px]': iconOnly }"
    >
      <Icon
        name="search"
        class="w-[15px] h-[15px]"
        :class="[
          {
            'text-gray-500': !disabled,
            'text-gray-300': disabled,
          },
        ]"
      />
    </span>

    <input
      ref="input"
      :tabindex="disabled ? '-1' : undefined"
      v-bind="$attrs"
      :disabled="disabled"
      type="search"
      :placeholder="placeholder"
      :value="getValue"
      class="input appearance-none outline-none text-base placeholder:text-base py-5 bg-white rounded-[inherit]"
      :class="[
        {
          'placeholder:text-gray-500 text-gray-900': !disabled,
          'placeholder:text-gray-300 text-gray-600 pointer-events-none':
            disabled,
          'sr-only': iconOnly,
          'absolute inset-0 pr-4 pl-20 h-full w-full': !iconOnly,
        },
      ]"
      v-on="$listeners"
      @input="onInput"
    />

    <!-- might add clear icon -->
  </div>
</template>

<script>
import { undefinedStringProp } from '../utils'

export default {
  name: 'Search',
  inheritAttrs: false,
  model: {
    event: 'update:modelValue',
    prop: 'modelValue',
  },
  props: {
    disabled: Boolean,
    autofocus: Boolean,
    modelValue: undefinedStringProp,
    iconOnly: Boolean,
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  data: () => ({
    manualModel: '',
  }),
  computed: {
    hasVModel() {
      return typeof this.modelValue === 'string'
    },
    getValue() {
      if (this.hasVModel) {
        return this.modelValue
      }
      return this.manualModel
    },
  },
  mounted() {
    if (this.autofocus && !this.disabled) {
      this.$refs.input?.focus?.()
    }
  },
  methods: {
    update(val) {
      if (this.hasVModel) {
        this.$emit('update:modelValue', val)
      }
      this.manualModel = val
    },
    onInput(evt) {
      const value = evt.target.value

      this.update(value)
    },
  },
}
</script>

<style scoped lang="postcss">
.input::-ms-clear {
  display: none;
}

.input::-webkit-search-decoration,
.input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
</style>
