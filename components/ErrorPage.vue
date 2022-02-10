<template>
  <main class="grid justify-center justify-items-center my-36 text-center md:text-justify px-8">
    <UiText label="Not found" weight="600" size="2xl" class="text-error-800" />

    <UiText
      label="This page doesn't exist, or hasn't been implemented yet."
      class="text-error-800 mt-8"
    />

    <Button to="/dashboard/overview" label="Go to Overview" class="mt-33" />
  </main>
</template>

<script>
export default {
  name: 'ErrorPage',
  head() {
    return {
      title: 'Not found',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "You've hit oblivion",
        },
      ],
    }
  },
}
</script>

<style></style>
