export default  (state = [],action) => {
    switch (action.type) {
        case 'FETCH__ALL':
            return state
        case 'CREATE__USER':
            return state
        default:
            return state
    }
}