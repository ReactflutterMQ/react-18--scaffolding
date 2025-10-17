function counterReducer(state={count: 0}, action) {
    switch (action.type) {
        case 'counter/inc':
            const count = state.count + action.payload
            return { count, doubleCount: count * 2 }
        default:
            state.doubleCount = state.count * 2
            return state
    }
}

export default counterReducer