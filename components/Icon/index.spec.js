import { mount } from '@vue/test-utils'
import Icon from './index.vue'
import { isVueInstance, setTestId } from '@/test/utils'

const component = 'Icon'

describe(component, () => {
    const wrapper = mount(Icon, {
        propsData: {
            name: 'edit',
        },
        stubs: {
            IconEdit: true,
            IconPlus: true,
        },
    })

    isVueInstance(wrapper)
    const testId = setTestId(wrapper, component)

    test('It renders an svg', () => {
        expect(wrapper.find(`svg${testId}`).exists())
    })

    describe('It renders an svg when a name prop is given and a formatted aria-label attribute that ends with "icon"', () => {
        wrapper.props({
            name: 'plus',
        })

        test('It renders an svg', () => {
            expect(wrapper.find(`svg${testId}`).exists())
        })

        test('It renders an formatted aria-label', () => {
            expect(wrapper.find(`${testId}[aria-label='Plus icon']`).exists())
        })
    })

    test('It sets height and width attr when props are passed', () => {
        wrapper.setProps({
            height: '20',
            width: '20',
        })

        expect(wrapper.find(`${testId}[width='20']`).exists())
        expect(wrapper.find(`${testId}[height='20']`).exists())
    })
})