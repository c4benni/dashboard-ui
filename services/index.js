export async function getUser() {
    const res = await
    import ('@/assets/localData/user.json')

    return res.default
}

export async function getMetrics() {
    const res = await
    import ('@/assets/localData/metric.json')

    return res.default
}

export async function getTable() {
    const res = await
    import ('@/assets/localData/table.json')

    return res.default
}