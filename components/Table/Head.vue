<template>
  <thead>
    <tr class="flex items-center">
      <th
        v-for="(th, i) in tableHead"
        :key="th.title"
        role="columnheader"
        scope="col"
        :aria-sort="sortBy === th.title ? thAriaSort : 'none'"
        :aria-label="`${th.title}. Click to ${sortBy===th.title ? thAriaLabelSuffix : 'sort ascending'}`"
        class="inline-flex items-center px-12 py-6 flex-shrink-0"
        :class="th.width"
      >
        <template v-if="!th.hidden">
          <Checkbox
            v-if="i === 0"
            :model-value="checkboxChecked"
            :indeterminate="checkboxindeterminate"
            :label="checkboxTitle"
            :title="checkboxTitle"
            @update:modelValue="handleSelect"
          />

          <div
            class="cursor-pointer flex items-center group"
            @click="changeSort(th)"
          >
            <UiText
              tag="span"
              :label="th.title"
              size="xs"
              weight="500"
              variant="caption"
            />

            <Transition v-bind="arrowTransition">
              <Icon
                v-if="sortBy === th.title && sortStep"
                :key="sortStep"
                name="SortArrow"
                size="16"
                class="mx-2 text-gray-500 transform-gpu"
                :class="[
                  {
                    'rotate-180': sortStep === 2,
                  },
                ]"
              />

              <Icon
                v-else
                name="SortArrow"
                size="12"
                class="mx-2 text-gray-500 transition-[opacity,transform] transform-gpu opacity-[0] can-hover:group-hover:opacity-50"
              />
            </Transition>
          </div>
        </template>

        <template v-else>
          <p class="sr-only">
            {{ th.title }}
          </p>
        </template>
      </th>
    </tr>
  </thead>
</template>

<script>import { thead } from "./utils"

export default {
  name: 'Tablehead',

  data: () => ({
    sortBy: 'Company',
    // 1 = asc, 2 = desc, 0 = null;
    sortStep: 1,
    tableHead: thead
  }),

  computed: {
    checkboxChecked() {
      return false
    },
    checkboxindeterminate() {
      return false
    },
    checkboxTitle() {
      return ''
      // return !this.selected.length ? 'Select all' : 'Clear selection'
    },
    arrowTransition() {
      const properties = 'transition-[opacity,transform]'
      const willChange = 'will-change-transform'

      return {
        mode: 'out-in',
        enterClass: `${willChange} opacity-0 ${
          this.sortStep === 1 ? '-translate-y-1' : 'translate-y-1'
        }`,
        enterActiveClass: `${willChange} ${properties} ${
          this.sortStep ? 'duration-300' : ''
        }`,
        enterToClass: 'opacity-100 translate-y-0',
        leaveClass: willChange,
        leaveActiveClass: `${willChange} ${properties}`,
        leaveToClass: `opacity-0 ${
          this.sortStep !== 2
            ? `${this.sortStep === 0 ? 'translate-y-1' : '-translate-y-1'}`
            : ''
        }`,
      }
    },

    thAriaSort() {
      switch (this.sortStep) {
        case 1:
          return 'ascending'
        case 2:
          return 'descending'
        default:
          return 'none'
      }
    },

    // appends the result to all th's aria-label;
    thAriaLabelSuffix() {
      switch (this.sortStep) {
        case 0:
          return 'sort ascending'
        case 1:
          return 'sort descending'
        default:
          return 'remove sort'
      }
    },
  },

  methods: {
    changeSort(th) {
      if (this.sortBy === th.title) {
        if (this.sortStep === 2) {
          this.sortStep = 0
        } else this.sortStep++
      } else {
        this.sortBy = th.title

        this.sortStep = 1
      }
    },

    handleSelect(evt) {
      if (evt === true) {
        this.selectAll()
      } else {
        this.selected = []
      }
    },
  },
}
</script>

<style></style>
