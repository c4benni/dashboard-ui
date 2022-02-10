<template>
  <nav>
      <ul class="h-20 grid grid-flow-col gap-x-2 justify-start">
          <slot/>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'Nav'
}
</script>