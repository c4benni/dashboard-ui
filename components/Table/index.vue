<template>
  <div class="w-screen">
    <div
      class="bg-white border border-gray-200 shadow-md overflow-hidden md:rounded w-fit max-w-[100vw] overflow-x-auto"
    >
      <table>
        <TableHead />

        <TableBody />

        <TableFoot v-if="!breakpoint.isMobile" />
      </table>
    </div>

    <TableFoot v-if="breakpoint.isMobile" />
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
