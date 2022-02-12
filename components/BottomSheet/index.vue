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
// Bottom sheet is actually a dialog on fleek. It's useful on mobile devices or mini tabs to display an easily swipable dialog to mimc the native feel.
// This is quite aa complex component that uses css scroll-snapping, and intersectionObserver for its main functionality.
// Using scroll-snapping helps reduce the need of an onScroll or onTouchmove, or any painful event that blocks the main-thread.
// Intersection observer is used to create a nice fading out backdrop effect, also to determine when the backdrop has gone away enough to close it automatically.

import { isHTML, nextAnimFrame, undefinedProp } from '../utils'
import overlayMixin from '../utils/overlayMixin'
import { getDefaultTransitionClasses } from '../utils/overlayMixin/props'

export default {
  name: 'BottomSheet',
  mixins: [overlayMixin],
  props: {
    //   uses Dialog props with a little tweak to `transition` props.
    // threholdLength is to set dynamic thresholds for observing.
    // lesser value, fewer frames, idle is 200.
    thresholdLength: {
      type: Number,
      default: 200,
    },
    transition: {
      type: Object,
      default: () => getDefaultTransitionClasses('translate-y-[100%]'),
    },
    // to stop the ratio animation
    disableRatio: Boolean,
    // add snap-mandatory css class;
    snapMandatory: Boolean,
    // make only the content swipable by adding pointer-events-none to the backdrop
    swipeContentOnly: Boolean,
    // percentage of content that should be visible unless an automatic close will happen
    minVisibility: {
      type: Number,
      default: 0.01,
      validator: (prop) => prop >= 0.005 && prop <= 1,
    },
    // usefull for height
    contentClass: undefinedProp([String,Array,Object])
  },
  emits: ['update:ratio', 'update:modelValue'],
  data() {
    return {
      // ratio of swiping. Usefull to create an animation, because a css variable `var(--ratio)` will be made available on the root element. This means custom transitions can be made when exiting only by scrolling. Entrance transition is and regular exiting (via v-model e.g tapping backdrop) will also trigger the ratio as the ratio is actually the content's intersectionRect
      ratio: null,

      // when the content has been swiped out, this will be true; then on renderRoot watcher, this will be false;
      // when true, invisible class will be added to the root element to avoid animation jumping around;
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
    // renderRoot is passed in from the mixin;
    // when this is active, there's a window of nextAnimFrame & nextTick
    // before the content and backdrop will kickstart their transition
    // and on nextTick, the root will be available, so this is the best time to reset the scrollTop position to suit the bottomSheet;
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
      const { intersectionRatio } = e

      this.$emit('update:ratio', intersectionRatio)

      await nextAnimFrame()

      this.ratio = intersectionRatio

      if (intersectionRatio <= this.minVisibility && this.isActive) {
        this.swipedOut = true

        await this.$nextTick()

        this.close()
      }
    },
  },
}
</script>
