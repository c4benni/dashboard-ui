<template>
  <div class="flex md:items-center flex-col md:flex-row px-8 md:px-0">
    <ul class="order-3 md:order-none">
      <Button
        v-for="filter in appliedFilters"
        :key="filter"
        role="listitem"
        :label="filter"
        class="mr-6"
        :class="[
          {
            'py-1 pr-4 pl-5 h-12 text-sm rounded-full': isMobile,
          },
        ]"
        v-bind="badgeProps"
      />
    </ul>

    <Button
      icon="leading"
      icon-name="filter"
      hierarchy="secondary gray"
      label="More filters"
      class="my-6 md:my-0 md:mr-8 order-2 md:order-none"
    />

    <Spacer v-if="!isMobile" />

    <Search v-model="search" class="md:w-160 order-1 md:order-none" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DashboardOverviewTableFilters',
  data: () => ({
    appliedFilters: ['All time', 'US, AU, +4'],
    search: '',
  }),
  computed: {
    ...mapState(['breakpoint']),
    isMobile() {
      return this.breakpoint.isMobile
    },
    badgeProps() {
      return {
        iconSize: this.breakpoint.isMobile
          ? {
              wrapper: 'h-6 w-6 ml-2 text-primary-500',
              icon: {
                size: '6',
              },
            }
          : undefined,
        tag: 'li',
        icon: 'trailing',
        iconName: 'x',
        hierarchy: 'secondary color',
        pill: this.isMobile,
        size: this.isMobile ? 'custom' : undefined,
      }
    },
  },
}
</script>

<style></style>
