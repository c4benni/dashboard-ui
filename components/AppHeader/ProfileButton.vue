<template>
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

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProfileButton',
  async fetch() {
    await this.getUser()
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['getUser']),
  },
}
</script>

<style></style>
