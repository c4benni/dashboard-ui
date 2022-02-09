<template>
  <div>
    <Divider />
    <header
      aria-label="Overview header"
      class="max-w-7xl h-32 w-full px-16 flex items-center"
    >
      <Nav>
        <NavItem
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          :label="link.title"
        />
      </Nav>

      <Spacer />

      <Search v-model="search" class="w-160" />
    </header>

    <Divider />

    <main class="pt-24 pb-48">
      <div>
        <div>
          <UiText
            weight="500"
            size="xl"
            variant="title"
            label="Welcome back, Olivia"
          />

          <UiText
            variant="caption"
            label="Track, manage and forecast your customers and orders."
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardOverview',
  data: () => ({
    search: '',
  }),
  computed: {
    links() {
      const link = (title, to = '#') => ({ title, to })

      return [
        link('Overview'),
        link('Notifications'),
        link('Analytics'),
        link('Saved reports'),
        link('Trade history'),
        link('User reports'),
      ]
    },
  },
}
</script>
