import { mount } from '@vue/test-utils'

export function isVueInstance(wrapper) {
    return test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
}

export function setTestId(wrapper, name) {
    wrapper.attributes({
        'data-test-id': name,
    })

    return `[data-test-id="${name}"]`
}

export function testAutoFocus(component) {
    describe('Autofocus prop works when mounted', () => {
        let focused = false

        const mountButton = (propsData) => {
            mount(component, {
                propsData,
                listeners: {
                    focus: () => {
                        focused = true
                    },
                },
                attachTo: document.body,
            })
        }

        test('Can focus when not disabled', () => {
            mountButton({
                autofocus: true,
            })

            expect(focused).toBe(true)
        })

        test('Cannot focus when disabled', () => {
            focused = false

            mountButton({
                autofocus: true,
                disabled: true,
            })

            expect(focused).toBe(false)
        })
    })
}