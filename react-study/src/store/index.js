import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'inc':
            // state.count++
            return { count: state.count + 1 }
        default:
            return state
    }
}

const store = createStore(counterReducer, composeWithDevTools())

export default store