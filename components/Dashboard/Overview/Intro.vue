<template>
  <section class="flex items-start flex-col md:flex-row px-8 md:px-0">
    <div class="flex-grow">
      <UiText
        tag="h2"
        weight="500"
        :size="breakpoint.isMobile ? 'lg' : 'xl'"
        variant="title"
        :label="greeting"
        class="fade-appear"
      />

      <UiText
        tag="h3"
        variant="caption"
        label="Track, manage and forecast your customers and orders."
        class="mt-2"
      />
    </div>

    <div class="mt-8 md:mt-0">
      <Button
        v-for="(action, i) in introActions"
        :key="action.title"
        icon="leading"
        :icon-name="action.icon"
        :hierarchy="action.hierarchy"
        :label="action.title"
        :class="{
          'mr-6': i === 0,
        }"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DashboardOverviewIntro',
  async fetch() {
    await this.getUser()
  },
  computed: {
    ...mapState(['user', 'breakpoint']),
    greeting() {
      if (!this.user) {
        return 'Loading...'
      }
      return `Welcome back, ${this.user.name}`
    },
    introActions() {
      const action = (title, icon, hierarchy) => ({ title, icon, hierarchy })
      return [
        action('Import', 'Upload', 'secondary gray'),
        action('Add', 'plus'),
      ]
    },
  },
  methods: {
    ...mapActions(['getUser']),
  },
}
</script>
