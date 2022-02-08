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