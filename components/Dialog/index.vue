<template>
  <MountingPortal v-if="renderRoot" mount-to="body" append>
    <div
      role="dialog"
      aria-modal="true"
      v-bind="$attrs"
      class="absolute top-0 left-0 w-full h-full isolate grid justify-center items-center z-10"
      :class="{ 'pointer-events-none': !isActive }"
      @click="close"
    >
      <Transition v-bind="getBackdropTransition">
        <div
          v-if="renderContentAndBackdrop && showBackdrop"
          class="absolute w-full h-full inset-0"
          :class="[{ 'pointer-events-auto': isActive }, backdropColor]"
        />
      </Transition>

      <Transition v-bind="getTransition" v-on="transitionEvents">
        <div
          v-if="renderContentAndBackdrop"
          :tabindex="isActive ? '0' : '-1'"
          class="z-10 isolate focus:outline-none"
          :class="[{ 'pointer-events-auto': isActive }]"
          v-on="contentEvents"
        >
          <slot />
        </div>
      </Transition>
    </div>
  </MountingPortal>
</template>

<script>
import overlayMixin from '../utils/overlayMixin'

export default {
  name: 'Dialog',

  mixins: [overlayMixin],
}
</script>
