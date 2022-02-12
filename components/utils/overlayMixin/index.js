import computed from './computed'
import methods from './methods'
import props from './props'
import watch from './watch'

// overlay mixins
const overlayMixin = {
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
        // triggered onAfterEnter, onAfterLeave, and in renderRoot watcher
        contentEntered: false,
        contentLeaving: false,
    }),
    computed,
    watch,
    created() {
        this.renderRoot = this.isActive
    },
    methods,
}

export default overlayMixin