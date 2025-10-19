import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter', //指定的是dispatch时的type前缀
    initialState: {
        ...initialState,
        doubleCount: initialState.count * 2
    },
    reducers: {
        inc(state, action) {
            state.count += action.payload
            state.doubleCount = state.count * 2
        }
    }
})

export default counterSlice.reducer

// function counterReducer(state={count: 0}, action) {
//     switch (action.type) {
//         case 'counter/inc':
//             const count = state.count + action.payload
//             return { count, doubleCount: count * 2 }
//         default:
//             state.doubleCount = state.count * 2
//             return state
//     }
// }

// export function handleCounterAction() {
//     return (dispatch) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
// /*                 dispatch({ type: 'counter/inc', payload: 5 })
//                 resolve('success data') */
//                 resolve('success data')
//             }, 2000);
//         })
//     }
// }

// export default counterReducer