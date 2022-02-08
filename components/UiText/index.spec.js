import { mount } from '@vue/test-utils'
import UiText from './index.vue'
import { isVueInstance } from '@/test/utils'

const component = 'UiText'

describe(component, () => {
    const text = 'hello world'
    const testId = `[data-test-id="${component}"]`

    const wrapper = mount(UiText, {
        slots: {
            default: text,
        },
        attrs: {
            'data-test-id': component,
        },
    })

    isVueInstance(wrapper)

    test('Renders a text when slotted in', () => {
        expect(wrapper.text()).toEqual(text)
    })

    describe('Adds correct tailwind classes', () => {
        describe('Adds correct font-size', () => {
            const testForClass = (size) => {
                test(`Adds text-${size} when size is ${size}`, async() => {
                    await wrapper.setProps({
                        size,
                    })

                    expect(wrapper.find(`${testId}`).classes()).toContain(`text-${size}`)
                })
            }

            ;
            ['xs', 'sm', 'lg', 'xl', '2xl'].forEach(testForClass)
        })

        describe('Adds correct font-weight', () => {
            const testForClass = ({ weight, className }) => {
                test(`Adds font-${weight} when weight is ${weight}`, async() => {
                    await wrapper.setProps({
                        weight,
                    })

                    expect(wrapper.find(`${testId}`).classes()).toContain(
                        `font-${className}`
                    )
                })
            }

            ;
            [
                { weight: '500', className: 'medium' },
                { weight: '600', className: 'semibold' },
            ].forEach(testForClass)
        })
    })

    test('Renders dynamic tag', async() => {
        await wrapper.setProps({
            tag: 'h1',
        })

        expect(wrapper.find(`h1${testId}`)).toBeTruthy()
    })
})