import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

import counterReducer from "./modules/counter";
import messageReducer from "./modules/message";

// function counterReducer(state = { count: 0 }, action) {
//     switch (action.type) {
//         case 'inc':
//             // state.count++
//             return { count: state.count + action.payload }
//         default:
//             return state
//     }
// }

const store = createStore(combineReducers({
    counter: counterReducer,
    message: messageReducer
}), composeWithDevTools(applyMiddleware(thunk)))

export default store