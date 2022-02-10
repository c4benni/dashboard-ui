<template>
  <Transition v-bind="transitionClasses">
    <tbody
      :key="breakpoint.isMobile ? undefined : tableSortStep"
      class="border-gray-200 border-y transition-[opacity,transform]"
    >
      <TableBodyItem
        v-for="(item, i) in contents"
        :key="item.company.name + i"
        :index="i"
        v-bind="item"
        :gray="(i + 1) % 2 !== 0"
      />
    </tbody>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tablebody',

  computed: {
    ...mapState(['tableData', 'tableSortStep','breakpoint']),
    contents() {
      if (this.tableSortStep === 2) {
        return [...this.tableData].sort((a, b) => {
          const first = a.company.name.toLowerCase()

          const next = a.company.name.toLowerCase()

          return first > next ? 1 : -1
        })
      }
      return this.tableData
    },
    transitionClasses() {
      if(this.breakpoint.isMobile) return {}

      const desc = this.tableSortStep === 2
      const down = 'translate-y-1'
      const up = '-translate-y-1'
      const willChange = 'will-change-[transform,opacity]'

      return {
        enterClass: `opacity-0 ${desc ? down : up} ${willChange}`,
        enterActiveClass: `duration-[300ms] ${willChange}`,
        leaveActiveClass: `duration-[75ms] ${willChange}`,
        leaveClass: willChange,
        leaveToClass: `opacity-0 ${desc ? up : down}`,
        mode: 'out-in',
      }
    },
  },
}
</script>
