export default () => ({
    appMounted: false,
    user: null,
    tableData: null,
    selectedTableItemIndex: [],
    // 1 = asc; 2 = desc; 0 = none;
    tableSortStep: 1,
    breakpoint: {
        inactive: true,
    },
})