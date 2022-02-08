import { shallowMount } from '@vue/test-utils'
import Icon from '../Icon'
import Search from './index.vue'

import { isVueInstance, setTestId, testAutoFocus } from '@/test/utils'

const component = 'Search'

const components = {
    Icon,
}

describe(component, () => {
    let propsData = {}

    const $mount = () =>
        shallowMount(Search, {
            propsData,
            components,
            stubs: { Icon: true },
        })

    let wrapper = $mount()

    beforeEach(() => {
        wrapper.destroy()
        wrapper = $mount()
    })

    isVueInstance(wrapper)

    const testId = setTestId(wrapper, component)

    test('It renders an input with type="search"', () => {
        expect(wrapper.find(`${testId} input[type="search"]`)).toBeTruthy()
    })

    test('id can be passed down to input', () => {
        const id = 'input-id'

        propsData = {
            id,
        }

        expect(wrapper.find(`${testId} input[id="${id}"]`)).toBeTruthy()
    })

    describe('disabled prop works', () => {
        test('Can focus when not disabled', async() => {
            let focused = false

            wrapper = shallowMount(Search, {
                listeners: {
                    focus: () => {
                        focused = true
                    },
                },
                attachTo: document.body,
                components,
            })

            await wrapper.find('input').trigger('focus')

            expect(focused).toBe(true)
        })

        test('Doesnt focus when disabled is true', async() => {
            let focused = false

            wrapper = shallowMount(Search, {
                propsData: {
                    disabled: true,
                },
                listeners: {
                    click: () => {
                        focused = true
                    },
                },
                attachTo: document.body,
                components,
            })

            await wrapper.find('input').trigger('focus')

            expect(focused).toBe(false)
        })
    })

    testAutoFocus(Search)

    test('v-model works', async() => {
        let model = ''

        wrapper = shallowMount(Search, {
            propsData: {
                modelValue: model,
            },
            listeners: {
                'update:modelValue': (e) => {
                    model = e
                },
            },
            components,
            stubs: { Icon: true },
        })

        const newText = 'Hello world'

        const input = wrapper.find('input')

        await input.setValue(newText)

        expect(model).toBe(newText)

        expect(input.element.value).toBe(newText)
    })
})