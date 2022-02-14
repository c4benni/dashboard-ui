<template>
  <BottomSheet
    :model-value="modelValue"
    content-class="h-[calc(100%-32px)] height-sm:h-[calc(100%-16px)]"
    @update:modelValue="toggle"
  >
    <div class="h-full rounded-[inherit]">
      <div class="sticky top-0 bg-white z-10">
        <header class="h-24 px-8 flex items-center justify-between">
          <Button
            icon="only"
            icon-name="paginationArrow"
            title="Back"
            hierarchy="tertiary gray"
          />

          <UiText label="Dashboard" variant="title" weight="600" />

          <Button
            icon="only"
            icon-name="x"
            title="Back"
            destructive
            hierarchy="tertiary gray"
            @click="close"
          />
        </header>

        <Divider />
      </div>

      <div class="flex flex-col h-[calc(100%-48px-66px)] overflow-auto">
        <div class="mx-8 h-full pb-8">
          <Search v-model="search" class="mt-8" />

          <nav
            class="my-8 rounded bg-gray-50 w-[95%] mx-auto border border-gray-100"
            @touchstart="() => {}"
          >
            <ul class="grid divide-y">
              <UiText
                v-for="(link, i) in links"
                :key="link.title"
                tag="li"
                class="border-gray-200 p-8 height-sm:p-6 pr-8 flex items-center justify-between focus-within:ring-4 ring-gray-200 active:opacity-80 transition-opacity relative"
                :class="{
                  'rounded-t': i === 0,
                  'rounded-b': i === links.length - 1,
                }"
                :variant="link.active ? 'title' : 'body'"
                :weight="link.active ? '500' : '400'"
                @click="close"
              >
                <NuxtLink
                  :to="link.to"
                  :aria-label="link.title"
                  class="absolute inset-0"
                >
                </NuxtLink>

                {{ link.title }}

                <Icon
                  name="paginationArrow"
                  class="rotate-180 text-gray-500"
                  size="16"
                />
              </UiText>
            </ul>
          </nav>
        </div>
      </div>

      <div class="bg-white z-10">
        <Divider />

        <div class="flex justify-between items-center px-8 py-6">
          <Button
            v-for="(icon, i) in icons"
            :key="icon.icon"
            icon="only"
            :icon-name="icon.icon"
            :title="icon.title"
            :hierarchy="icon.hierarchy"
          />

          <AppHeaderProfileButton />
        </div>
      </div>
    </div>
  </BottomSheet>
</template>

<script>
export default {
  name: 'HeaderBottomSheet',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: Boolean,
  },
  data: () => ({
    search: '',
  }),
  computed: {
    links() {
      const link = (title) => {
        const to = `/dashboard/${title.toLowerCase().replace(/\s+/g, '-')}`
        return { title, to, active: this.$route.path.startsWith(to) }
      }

      return [
        link('Overview'),
        link('Notifications'),
        link('Analytics'),
        link('Saved reports'),
        link('Trade history'),
        link('User reports'),
      ]
    },
    icons(){
      const icon = (title, icon, hierarchy) =>({title,icon,hierarchy: hierarchy || 'tertiary gray'});

      return [
        icon('Upgrade now', 'zap', 'secondary color'),
        icon('Setting', 'setting',),
        icon('Notifications', 'bell',),
      ]
    }
  },
  methods: {
    toggle(value) {
      this.$emit('update:modelValue', value)
    },
    open() {
      this.toggle(true)
    },
    close() {
      this.toggle(false)
    },
  },
}
</script>
