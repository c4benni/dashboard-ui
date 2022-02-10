<template>
  <section class="mt-16">
      <DashboardOverviewTableFilters/>
      <DashboardOverviewTableData/>
  </section>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'DashboardOverviewTable',
    async fetch(){
        await this.getTableData()
    },
    methods:{
        ...mapActions(['getTableData'])
    }
}
</script>