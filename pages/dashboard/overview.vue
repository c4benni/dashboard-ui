<template>
  <main class="pt-16 md:pt-24 pb-24 md:pb-48 max-w-7xl md:px-16">
    <DashboardOverviewIntro />

    <LazyDashboardOverviewMetrics />

    <LazyDashboardOverviewTable />
  </main>
</template>

<script>
export default {
  name: 'DashboardOverview',
  head() {
    return {
      title: 'Dashboard Overview',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "An overview of your dashboard",
        },
      ],
    }
  },
}
</script>
