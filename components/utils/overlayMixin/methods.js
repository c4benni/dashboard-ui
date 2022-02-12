import eventKey from '../eventKey'
import { nextAnimFrame } from '..'
import ControlledFocus, { hackTabKey } from '@/components/utils/ControlledFocus'

export default {
    async rootOpen() {
        this.contentEntered = false

        await nextAnimFrame()

        await this.$nextTick()

        this.renderContentAndBackdrop = true
    },

    toggle(value) {
        if (typeof this.modelValue === 'boolean') {
            this.$emit('update:modelValue', value)
        }

        this.manualActive = value

        if (value) {
            this.renderRoot = true

            this.rootOpen()
        }
    },

    open() {
        !this.isActive && !this.contentLeaving && this.toggle(true)
    },

    close() {
        this.isActive && this.contentEntered && this.toggle(false)
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

        if (this.isActive) {
            this.contentEntered = true

            e.focus({ preventScroll: true })

            this.lockBody()
        }
    },

    onLeave(e) {
        this.$emit('leave', e)

        this.contentLeaving = true

        if (!this.isActive) {
            this.previousActive && this.previousActive.focus()
        }
    },

    async onAfterLeave(e) {
        this.$emit('after-leave', e)
        if (!this.isActive) {
            this.contentEntered = false

            this.unlockBodyScroll()

            await nextAnimFrame()

            this.renderRoot = false

            this.contentLeaving = false
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
}