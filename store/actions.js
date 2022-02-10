import { distinctArray } from '~/components/utils'
import { getTable, getUser } from '~/services'

const selectTableMutation = 'SELECTED_TABLE_ITEM_INDEX'

const fetchAndCommit = async(service, commit, mutation) => {
    const data = await service()

    commit(mutation, data)
}

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
    toggleTableSelection({ commit, state }, payload) {
        if (typeof payload === 'number') {
            const State = state.selectedTableItemIndex

            if (State.includes(payload)) {
                const newValue = State.filter((x) => x !== payload)

                commit(selectTableMutation, newValue)
            } else {
                const newValue = distinctArray([...State, payload])

                commit(selectTableMutation, newValue)
            }
        } else {
            throw new TypeError(`Expected number, got ${typeof payload}`)
        }
    },
    selectMultipleTableItems({ commit, state }, payload) {
        if (Array.isArray(payload)) {
            const newValue = distinctArray([
                ...state.selectedTableItemIndex,
                ...payload,
            ])

            commit(selectTableMutation, newValue)
        } else {
            throw new TypeError(`Expected Array, got ${typeof payload}`)
        }
    },
    clearTableSelection({ commit }) {
        commit(selectTableMutation, [])
    },
    tableSortStep({ commit }, payload) {
        if (typeof payload === 'number') {
            commit('TABLE_SORT_STEP', payload)
        } else {
            throw new TypeError(`Expected Number, got ${typeof payload}`)
        }
    },
    async getUser({ commit, state }) {
        if (!state.user) {
            await fetchAndCommit(getUser, commit, 'USER')
        }
    },

    async getTableData({ commit }) {
        await fetchAndCommit(getTable, commit, 'TABLE_DATA')
    },

    setAppMounted({ commit }, payload) {
        commit('APP_MOUNTED', payload)
    },
}