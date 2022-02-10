<template>
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
        :current="`/dashboard/${link.to}` === $route.path"
      />
    </Nav>

    <Spacer />

    <Search v-model="search" class="w-160" />
  </header>
</template>

<script>
export default {
  name: 'DashboardOverviewHeader',
  data: () => ({
    search: '',
  }),
  computed: {
    links() {
      const link = (title) => ({ title, to: `${title.toLowerCase().replace(/\s+/g,'-')}` })

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

<style></style>
