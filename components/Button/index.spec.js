import { mount } from '@vue/test-utils'
import Button from './index.vue'
import { isVueInstance, setTestId, testAutoFocus } from '@/test/utils'

const component = 'Button'

describe(component, () => {
    let wrapper = mount(Button)

    let propsData = {}

    beforeEach(() => {
        wrapper.destroy()
        wrapper = mount(Button, { propsData })
    })

    const testId = setTestId(wrapper, component)

    isVueInstance(wrapper)

    test('It renders a button when no tag is passed', () => {
        expect(wrapper.find(`button${testId}`)).toBeTruthy()
    })

    test('It renders a dynamic tags with role="button"', () => {
        propsData = {
            tag: 'div',
        }

        expect(wrapper.find(`div${testId}[role="button"]`)).toBeTruthy()
    })

    describe('disabled prop works', () => {
        test('Can click when not disabled', async() => {
            let clicked = false

            wrapper = mount(Button, {
                listeners: {
                    click: () => {
                        clicked = true
                    },
                },
            })

            await wrapper.trigger('click')

            expect(clicked).toBe(true)
        })

        test('Doesnt click when disabled is true', async() => {
            let clicked = false

            wrapper = mount(Button, {
                propsData: {
                    disabled: true,
                },
                listeners: {
                    click: () => {
                        clicked = true
                    },
                },
            })

            await wrapper.trigger('click')

            expect(clicked).toBe(false)
        })
    })

    testAutoFocus(Button)

    test('Renders a text when label prop is used', () => {
        const label = 'Hello world'

        wrapper = mount(Button, {
            propsData: {
                label,
            },
        })

        expect(wrapper.text()).toBe(label)
    })
})