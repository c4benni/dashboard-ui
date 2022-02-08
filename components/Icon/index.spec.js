import { mount } from '@vue/test-utils'
import Icon from './index.vue'
import { isVueInstance, setTestId } from '@/test/utils'

describe('Icon', () => {
    const wrapper = mount(Icon)

    const testId = setTestId(wrapper, 'Icon')

    isVueInstance(wrapper)

    test('It renders an img', () => {
        expect(wrapper.find(`img${testId}`).exists())
    })

    describe('It renders an src that starts with svg/ when a name prop is given and a formatted alt attribute that ends with "icon"', () => {
        wrapper.props({
            name: 'edit',
        })

        test('It renders an src', () => {
            expect(wrapper.find(`${testId}[src*='svg/']`).exists())
        })

        test('It renders an alt', () => {
            expect(wrapper.find(`${testId}[alt='edit icon']`).exists())
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