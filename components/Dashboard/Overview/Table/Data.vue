<template>
  <div class="mt-12">
    <Table v-if="tableData" />

    <div v-else class="flex justify-center h-79 md:h-88 items-center">
      <Icon name='spinner' size='56' class="animate-spin text-gray-500"/>

      <p class="sr-only">Loading table...</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DashboardOverviewTableData',
  computed: {
    ...mapState(['tableData']),
  },
}
</script>

<style></style>
