<template>
  <header
    class="h-32 md:h-36 w-full py-12 md:py-0 pr-4 md:pr-16 pl-8 md:pl-16 max-w-7xl flex items-center"
  >
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
        class="flex items-center mr-8 text-[16.5px] md:text-[20px] md:sr-only lg:not-sr-only"
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
        @click="icon.onClick"
      />

      <Dialog
        v-model="dialog"
        aria-labelledby="dialog-title"
        :transition="{
          enterClass: 'translate-x-[100%] will-change-transform',
          enterActiveClass:
            'duration-[400ms] transform-gpu transition-transform',
          leaveToClass: 'translate-x-[100%] will-change-transform',
        }"
      >
        <div
          class="h-screen w-screen flex justify-end"
          @click.self="toggleDialog(false)"
        >
          <div class="bg-white h-full w-200 shadow-xl">
            <header
              id="dialog-title"
              class="flex justify-between items-center py-6 px-12"
            >
              <UiText
                :label="dialogTitle"
                size="lg"
                variant="title"
                weight="500"
              />

              <Button
                title="Close dialog"
                icon="only"
                icon-name="x"
                hierarchy="tertiary gray"
                @click="toggleDialog(false)"
              />
            </header>

            <Divider />
          </div>
        </div>
      </Dialog>

      <AppHeaderProfileButton />
    </template>

    <template v-else>
      <Spacer />

      <Button
        v-model="sheet"
        icon="only"
        icon-name="menu"
        title="Open navigation"
        hierarchy="tertiary gray"
      />

      <ClientOnly>
        <AppHeaderBottomSheet v-model="sheet" />
      </ClientOnly>
    </template>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    dialog: false,
    dialogTitle: '',
    sheet: false,
  }),
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
          active: this.$route.path.startsWith(getTo),
        }
      }
      return [
        link('Home', '/'),
        link('Dashboard', '/dashboard/overview'),
        link('Projects'),
        link('Tasks'),
        link('Reporting'),
        link('Users'),
      ]
    },
    icons() {
      const icon = (icon, title) => ({
        icon,
        title,
        onClick: () => {
          this.dialogTitle = title
          this.toggleDialog(true)
        },
      })
      return [icon('setting', 'Setting'), icon('bell', 'Notifications')]
    },
  },
  methods: {
    ...mapActions(['getUser']),
    toggleDialog(val) {
      this.dialog = val
    },
  },
}
</script>

<style></style>
