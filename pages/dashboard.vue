<template>
  <div>
    <Divider />

    <template v-if="!breakpoint.isMobile">
      <DashboardOverviewHeader />

      <Divider />
    </template>

    <NuxtChild />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DashboardPage',
  computed: {
    ...mapState(['breakpoint']),
  },
}
</script>

<style></style>
