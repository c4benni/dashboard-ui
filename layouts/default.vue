<template>
  <div>
    <AppHeader />

    <KeepAlive>
      <Nuxt />
    </KeepAlive>

    <div v-if="!appMounted" class="flex justify-center items-center fixed inset-0 z-10 bg-white">
      <Icon name='spinner' size='56' class="animate-spin text-gray-500"/>

      <p class="sr-only">Loading metrics...</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { initBreakpoint } from '~/components/utils'

export default {
  name: 'DefaultLayout',
  async fetch() {
    await this.getUser()
  },
  head(){
    return {
      htmlAttrs:{
        'data-app-loading': this.appMounted ? undefined : ''
      }
    }
  },
  computed:{
    ...mapState(['appMounted'])
  },
  beforeMount(){
    initBreakpoint.call(this)
  },
  mounted(){
    this.setAppMounted(true);
  },
  methods: {
    ...mapActions(['getUser', 'setAppMounted']),
  },
}
</script>

<style></style>
