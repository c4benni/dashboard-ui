import { undefinedProp, undefinedStringProp } from '../utils'

const backdropWillChange = 'will-change-[opacity]'
const backdropActiveTransition = `${backdropWillChange} transition-opacity`
const backdropBeforeTransition = `opacity-[0!important] ${backdropWillChange}`

export const defaultBackdropTransition = {
    enterClass: backdropBeforeTransition,
    enterActiveClass: backdropActiveTransition,
    leaveClass: backdropWillChange,
    leaveActiveClass: backdropActiveTransition,
    leaveToClass: backdropBeforeTransition,
}

const contentWillChange = 'will-change-[opacity,transform]'
const contentTransform = 'scale-[1.15]'
const contentActiveTransition = `${contentWillChange} transition-[opacity,transform] transform-gpu`
const contentBeforeTransition = `${contentTransform} opacity-0 ${contentWillChange}`

export const defaultTransitionClasses = {
    enterClass: contentBeforeTransition,
    enterActiveClass: contentActiveTransition,
    leaveClass: contentWillChange,
    leaveActiveClass: contentActiveTransition,
    leaveToClass: contentBeforeTransition,
}

export default {
    transitionName: undefinedStringProp,
    modelValue: undefinedProp(Boolean),
    backdropOpacity: undefinedProp(Number),
    showBackdrop: {
        type: Boolean,
        default: true,
    },
    lockBodyScroll: {
        type: Boolean,
        default: true,
    },
    backdropTransition: {
        type: Object,
        default: () => defaultBackdropTransition,
    },
    transition: {
        type: Object,
        default: () => defaultTransitionClasses,
    },
}