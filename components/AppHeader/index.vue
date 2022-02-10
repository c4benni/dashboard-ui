<template>
  <header class="h-32 md:h-36 w-full py-12 md:py-0 pr-4 md:pr-16 pl-8 md:pl-16 max-w-7xl flex items-center">
    <NuxtLink to="/" class="flex mr-8">
      <Img
        src="logo"
        alt="app logo"
        height="32"
        width="32"
        class="mr-5 object-cover"
      />

      <UiText
        tag="h1"
        size="custom"
        weight="500"
        variant="title"
        class="flex items-center mr-8 text-[16.5px] md:text-[20px] not-sr-only"
      >
        Untitled UI
      </UiText>
    </NuxtLink>

    <template v-if="!breakpoint.isMobile">
      <Nav>
        <NavItem
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          :label="link.title"
          :current="link.active"
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

      <button
        title="Profile"
        class="w-20 h-20 rounded-full cursor-pointer bg-primary-50 can-hover:hover:opacity-90 active:opacity-80 can-hover:active:opacity-80 transition-opacity outline-none focus:ring-4 ring-primary-50"
      >
        <Img
          v-if="user"
          :src="user.avatar"
          alt="Profile image"
          width="40"
          height="40"
          class="object-cover"
        />
      </button>
    </template>

    <template v-else>
      <Spacer/>

      <Button
      icon="only"
      icon-name="menu"
      title="Open navigation"
      hierarchy="tertiary gray"
    />
    </template>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  async fetch() {
    await this.getUser()
  },
  computed: {
    ...mapState(['user', 'breakpoint']),

    links() {
      const link = (title, to) => {
        const getTo = `/${title.toLowerCase().replace(/\s+/g, '-')}`

        return {
          title,
          to: to || getTo,
          active: to
            ? this.$route.path === to
            : this.$route.path.startsWith(getTo),
        }
      }

      return [
        link('Home', '/'),
        link('Dashboard'),
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
  methods: {
    ...mapActions(['getUser']),
  },
}
</script>

<style></style>
