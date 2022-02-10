<template>
  <MountingPortal v-if="renderRoot" mount-to="body" append>
    <div
      role="dialog"
      aria-modal="true"
      v-bind="$attrs"
      class="absolute top-0 left-0 w-full h-full isolate grid justify-center items-center z-10"
      :class="{ 'pointer-events-none': !isActive }"
    >
      <Transition v-bind="getBackdropTransition">
        <div
          v-if="renderContentAndBackdrop && showBackdrop"
          class="bg-[#344054B2] absolute w-full h-full inset-0"
          :class="{ 'pointer-events-auto': isActive }"
          :style="{
            opacity: `${backdropOpacity || 0.7}`,
          }"
          @click="close"
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
import { mapState } from 'vuex'
import eventKey from '../utils/eventKey'
import { nextAnimFrame } from '../utils'
import props, {
  defaultBackdropTransition,
  defaultTransitionClasses,
} from './props'
import ControlledFocus, { hackTabKey } from '@/components/utils/ControlledFocus'

export default {
  name: 'Modal',

  model: {
    event: 'update:modelValue',
    prop: 'modelValue',
  },

  props,

  data: () => ({
    previousActive: null,
    manualActive: false,

    // to shoot the root with portal
    renderRoot: false,

    renderContentAndBackdrop: false,
  }),

  computed: {
    ...mapState(['breakpoint']),

    getTransition() {
      return {
        ...defaultTransitionClasses,
        ...this.transition,
      }
    },

    getBackdropTransition() {
      return {
        ...defaultBackdropTransition,
        ...this.backdropTransition,
      }
    },

    isActive() {
      if (typeof this.modelValue === 'boolean') {
        return this.modelValue
      }
      return this.manualActive
    },

    renderIf() {
      if (!this.toRender) return false

      if (typeof this.dialog.renderIf === 'function') {
        return this.dialog.renderIf()
      }
      return true
    },

    transitionEvents() {
      return {
        beforeEnter: this.onBeforeEnter,
        afterEnter: this.onAfterEnter,
        leave: this.onLeave,
        afterLeave: this.onAfterLeave,
      }
    },

    contentEvents() {
      return {
        click: this.onClick,
        keydown: this.onKeydown,
      }
    },

    toRender() {
      return this.dialog.component
    },
  },

  watch: {
    isActive(n) {
      if (n) {
        this.renderRoot = true
      } else {
        this.renderContentAndBackdrop = false
      }
    },
    async renderRoot(n) {
      if (n) {
        await this.$nextTick()

        this.renderContentAndBackdrop = true
      }
    },
    lockBodyScroll(n) {
      if (n) {
        this.lockBody()
      } else this.unlockBodyScroll()
    },
  },

  created() {
    this.renderRoot = this.isActive
  },

  methods: {
    toggle(value) {
      if (typeof this.modelValue === 'boolean') {
        this.$emit('update:modelValue', value)
      }

      this.manualActive = value
    },

    open() {
      this.toggle(true)
    },

    close() {
      this.toggle(false)
    },

    lockBody() {
      if (!this.lockBodyScroll) {
        return
      }

      document.documentElement.style.setProperty(
        '--width-difference',
        `${window.innerWidth - document.body.clientWidth}px`
      )
      document.documentElement.dataset.lockBodyScroll = ''
    },

    unlockBodyScroll() {
      document.documentElement.style.removeProperty('--width-difference')

      delete document.documentElement.dataset.lockBodyScroll
    },

    onBeforeEnter(e) {
      this.$emit('before-enter', e)

      this.previousActive = document.activeElement
    },

    onAfterEnter(e) {
      this.$emit('after-enter', e)

      e.focus({ preventScroll: true })

      this.lockBody()
    },

    onLeave(e) {
      this.$emit('leave', e)

      this.previousActive && this.previousActive.focus()
    },

    async onAfterLeave(e) {
      this.$emit('after-leave', e)
      if (!this.isActive) {
        this.unlockBodyScroll()

        await nextAnimFrame()

        this.renderRoot = false
      }
    },

    onClick(e) {
      e.stopPropagation()
    },

    onKeydown(e) {
      if (!this.isActive) {
        return
      }

      const key = eventKey(e)

      if (key === 'esc') {
        return this.close()
      }

      hackTabKey(
        e,
        () => {
          const controlledFocus = new ControlledFocus({
            root: e.currentTarget,
            children: '*',
            loop: true,
            uid: this._uid,
          })

          if (e.shiftKey) {
            controlledFocus.backward()
          } else controlledFocus.forward()
        },
        key
      )
    },
  },
}
</script>
