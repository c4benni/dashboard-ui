<template>
  <MountingPortal v-if="renderRoot" mount-to="body" append>
    <div
      ref="root"
      role="dialog"
      aria-modal="true"
      v-bind="$attrs"
      class="fixed top-0 left-0 w-full h-full isolate z-10 overflow-x-hidden snap-y before:w-full before:h-full before:block before:pointer-events-none before:snap-end hide-scrollbar snap-always"
      :class="{
        'pointer-events-none': !isActive,
        invisible: swipedOut,
        'snap-mandatory': true,
      }"
      :style="{
        '--ratio': ratio === null ? undefined : `${ratio}`,
      }"
      @click="close"
    >
      <Transition v-bind="getBackdropTransition">
        <div
          v-if="renderBackdrop"
          class="fixed w-full h-full inset-0"
          :class="[
            {
              'pointer-events-auto': isActive && swipeContentOnly,
              'pointer-events-none': !swipeContentOnly,
            },
            backdropColor,
          ]"
          :style="{
            opacity: `var(--ratio, 1)`,
          }"
        />
      </Transition>

      <div
        class="w-full h-full relative bg-[transparent] snap-start grid items-end justify-items-center"
        :style="{
          transform: !isActive
            ? `translate-y(calc(100% - calc(var(--ratio * 100))))`
            : undefined,
        }"
      >
        <Intersection
          v-if="renderContentIntersection"
          :config="intersectionConfig"
          @update:entry="onIntersectionEntry"
        >
          <div
            aria-hidden="true"
            class="absolute inset-0 w-full h-full invisible"
          />
        </Intersection>
        <Transition v-bind="getTransition" v-on="transitionEvents">
          <div
            v-if="renderContentAndBackdrop"
            :tabindex="isActive ? '0' : '-1'"
            class="z-10 relative isolate focus:outline-none w-full max-w-lg bg-white content rounded-t height-sm:rounded-b height-sm:mb-4 border-gray-200 border overflow-auto"
            :class="[{ 'snap-mandatory': snapMandatory }, contentClass]"
            :style="{
              'box-shadow': `0 -25px 50px -12px rgb(0 0 0 / calc(0.25 * var(--ratio, 1)))`,
            }"
            v-on="contentEvents"
          >
            <slot :payload="{ ratio: ratio, swipedOut: swipedOut }" />
          </div>
        </Transition>
      </div>
    </div>
  </MountingPortal>
</template>

<script>
import { isHTML, nextAnimFrame, undefinedProp } from '../utils'
import overlayMixin from '../utils/overlayMixin'
import { getDefaultTransitionClasses } from '../utils/overlayMixin/props'

export default {
  name: 'BottomSheet',
  mixins: [overlayMixin],
  props: {
    thresholdLength: {
      type: Number,
      default: 200,
    },
    transition: {
      type: Object,
      default: () => getDefaultTransitionClasses('translate-y-[100%]'),
    },
    disableRatio: Boolean,
    snapMandatory: Boolean,
    swipeContentOnly: Boolean,
    minVisibility: {
      type: Number,
      default: 0.01,
      validator: (prop) => prop >= 0.005 && prop <= 1,
    },
    contentClass: undefinedProp([String, Array, Object]),
  },
  emits: ['update:ratio', 'update:modelValue'],
  data() {
    return {
      ratio: null,
      swipedOut: false,
    }
  },

  computed: {
    intersectionConfig() {
      const { thresholdLength } = this

      return {
        threshold: [
          ...Array.from(
            {
              length: thresholdLength,
            },
            (_, i) => i * (1 / thresholdLength)
          ),
          1,
        ],
      }
    },
    renderBackdrop() {
      return this.renderContentAndBackdrop && this.showBackdrop
    },
    renderContentIntersection() {
      return (
        this.renderContentAndBackdrop &&
        !this.disableRatio &&
        this.contentEntered
      )
    },
  },
  watch: {
    renderRoot(n) {
      this.swipedOut = false

      if (n) {
        this.$nextTick(() => {
          const root = this.$refs.root
          if (isHTML(root)) {
            root.scrollTo(0, root.clientHeight)
          }
        })
      } else {
        this.ratio = null
      }
    },
  },
  methods: {
    async onIntersectionEntry(e) {
      const { intersectionRatio, boundingClientRect } = e

      this.$emit('update:ratio', intersectionRatio)

      if (boundingClientRect.top >= 0) {
        await nextAnimFrame()

        this.ratio = intersectionRatio

        if (intersectionRatio <= this.minVisibility && this.isActive) {
          this.swipedOut = true

          await this.$nextTick()

          this.close()
        }
      }
    },
  },
}
</script>
