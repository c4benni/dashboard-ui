<template>
  <section class="mt-16 px-8 md:px-0">
    <MetricGroup v-if="metrics" class="fade-appear">
      <MetricItem
        v-for="metric in metrics"
        :key="metric.title"
        v-bind="metric"
      />
    </MetricGroup>

    <div v-else class="flex justify-center h-79 md:h-88 items-center">
      <Icon name='spinner' size='56' class="animate-spin text-gray-500"/>

      <p class="sr-only">Loading metrics...</p>
    </div>
  </section>
</template>

<script>
import { getMetrics } from '~/services'

export default {
  name: 'DashboardOverviewMetrics',
  data: () => ({
    metrics: null,
  }),
  async fetch() {
    this.metrics = await getMetrics()
  },
}
</script>
