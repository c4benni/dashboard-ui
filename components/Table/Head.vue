<template>
  <thead class="w-full">
    <tr class="flex items-center">
      <th
        v-for="(th, i) in tableHead"
        :key="th.title"
        role="columnheader"
        scope="col"
        :aria-sort="i === 0 ? thAriaSort : 'none'"
        :aria-label="`${th.title}.${
          i === 0 ? ` Click to ${thAriaLabelSuffix}` : ''
        }`"
        class="inline-flex items-center px-12 py-6 flex-shrink-0"
        :class="th.width"
      >
        <template v-if="!th.hidden">
          <Checkbox
            v-if="i === 0"
            :model-value="checkboxChecked"
            :indeterminate="!!checkboxindeterminate"
            :label="checkboxTitle"
            :title="checkboxTitle"
            @update:modelValue="handleSelect"
          />

          <div
            class="flex items-center group"
            :class="[{ 'cursor-pointer': i === 0, 'cursor-default': i !== 0 }]"
            v-on="i === 0 ? {
              click: ()=>changeSort(th)
            } : {} "
          >
            <UiText
              tag="span"
              :label="th.title"
              size="xs"
              weight="500"
              variant="caption"
            />

            <ClientOnly>
              <Transition v-bind="arrowTransition">
                <Icon
                  v-if="i === 0 && sortStep"
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
              </Transition>
            </ClientOnly>
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

<script>
import { mapState, mapActions } from 'vuex'

import { thead } from './utils'

export default {
  name: 'Tablehead',

  data: () => ({
    tableHead: thead,
  }),

  computed: {
    ...mapState(['selectedTableItemIndex', 'breakpoint', 'tableData']),
    ...mapState({
      // 1 = asc, 2 = desc, 0 = null;
      sortStep: 'tableSortStep',
    }),
    checkboxChecked() {
      return this.selectedTableItemIndex.length === this.tableData.length
    },
    checkboxindeterminate() {
      return (
        this.selectedTableItemIndex.length &&
        this.selectedTableItemIndex.length !== this.tableData.length
      )
    },
    checkboxTitle() {
      return !this.selectedTableItemIndex.length ? 'Select all' : 'Clear selection'
    },
    // fade out on leave, slide from down or up depending on sortBy state
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
    ...mapActions([
      'clearTableSelection',
      'selectMultipleTableItems',
      'tableSortStep',
    ]),
    changeSort(th) {
      if (this.sortStep === 2) {
        this.tableSortStep(1)
      } else this.tableSortStep(2)
    },

    handleSelect(evt) {
      if (evt === true) {
        // return all indexes of tableData
        this.selectMultipleTableItems(this.tableData.map((_, i) => i))
      } else {
        this.clearTableSelection()
      }
    },
  },
}
</script>

<style></style>
