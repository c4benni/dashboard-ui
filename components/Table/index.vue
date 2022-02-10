<template>
  <div class="bg-white md:border border-gray-200 md:shadow-md overflow-hidden md:rounded max-w-screen md:max-w-7xl">
    <div
      class="w-fit max-w-full overflow-x-auto bg-white border md:border-0 shadow-md md:shadow-none"
    >
      <table class="w-full">
        <TableHead />

        <TableBody />
      </table>
    </div>

    <TableFoot/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Table',

  computed: {
    ...mapState(['breakpoint']),
  },
}
</script>
