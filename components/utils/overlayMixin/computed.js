import { mapState } from 'vuex'

import { defaultBackdropTransition, defaultTransitionClasses } from './props'

export default {
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
}