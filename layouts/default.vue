<template>
  <div>
    <div :class="{'sr-only': !appMounted}">
      <AppHeader />

      <KeepAlive>
        <Nuxt />
      </KeepAlive>
    </div>

    <div v-if="!appMounted" class="app-loading">
      <Icon name="spinner" size="56" class="spinner" />

      <p class="label">Loading metrics...</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { initBreakpoint } from '~/components/utils'

export default {
  name: 'DefaultLayout',
  data: () => ({
    modal: false,
  }),

  async fetch() {
    await this.getUser()
  },
  head() {
    return {
      htmlAttrs: {
        'data-lock-body-scroll': this.appMounted ? undefined : '',
      },
    }
  },
  computed: {
    ...mapState(['appMounted']),
  },
  beforeMount() {
    initBreakpoint.call(this)
  },
  mounted() {
    this.setAppMounted(true)
  },
  methods: {
    ...mapActions(['getUser', 'setAppMounted']),
  },
}
</script>

<style></style>
