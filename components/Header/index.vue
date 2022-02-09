<template>
  <header class="h-36 w-full px-16 max-w-7xl flex items-center">
    <Img src="/icon.png" height="32" width="32" class="mr-5 object-cover" />

    <UiText
      size="md"
      weight="500"
      variant="title"
      class="flex items-center mr-8"
    >
      Untitled UI
    </UiText>

    <Nav>
      <NavItem
        v-for="link in links"
        :key="link.title"
        :to="link.to"
        :label="link.title"
      />
    </Nav>

    <Spacer />

    <Button
      icon="leading"
      icon-name="zap"
      label="Upgrade now"
      hierarchy="secondary gray"
      class="mr-8"
    />

    <Button
      v-for="(icon, i) in icons"
      :key="icon.title"
      icon="only"
      :icon-name="icon.icon"
      hierarchy="tertiary gray"
      :title="icon.title"
      :class="[
        {
          'mr-2': i === 0,
          'mr-8': i === 1,
        },
      ]"
    />

    <Img src="/img/Avatar.png" width="40" height="40" class="object-cover" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    links() {
      const link = (title, to = '#') => ({ title, to })

      return [
        link('Home'),
        link('Dashboard', '/dashboard'),
        link('Projects'),
        link('Tasks'),
        link('Reporting'),
        link('Users'),
      ]
    },
    icons() {
      const icon = (icon, title) => ({ icon, title })

      return [icon('setting', 'Setting'), icon('bell', 'Notifications')]
    },
  },
}
</script>

<style></style>
