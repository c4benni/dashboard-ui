export default {
    updateBreakpoint({ commit, state }, payload) {
        const mutation = 'BREAKPOINT'

        if (state.breakpoint.inactive) {
            commit(mutation, {
                is: '',
                orientation: '',
                isMobile: false,
            })
        }

        if (typeof payload === 'object') {
            commit(mutation, {
                ...state.breakpoint,
                ...payload,
                isMobile: /xxs|xs|sm/.test(payload.is),
            })
        }
    },
}