import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg: 'hello'
}

export const handleAsyncMessageAction = createAsyncThunk('message/asyncChange', async () => {
    const ret = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('response data')
        }, 2000);
    })
    return ret
})

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        ...initialState,
        upperMsg: initialState.msg.toUpperCase()
    },
    reducers: {
        change(state, action) {
            state.msg = action.payload
            state.upperMsg = state.msg.toUpperCase()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(handleAsyncMessageAction.fulfilled, (state, action) => {
            state.msg = action.payload
            state.upperMsg = state.msg.toUpperCase()
        })
    }
    /* extraReducers: {
        [handleAsyncMessageAction.fulfilled]: (state, action) => {
            state.msg = action.payload
            state.upperMsg = state.msg.toUpperCase()
        }
    } */
})


export default messageSlice.reducer

/* function messageReducer(state = { msg: 'hello' }, action) {
    switch (action.type) {
        case 'message/change':
            const msg = action.payload
            return { msg, upperMsg: msg.toUpperCase() }
        default:
            state.upperMsg = state.msg.toUpperCase()
            return state
    }
}

export default messageReducer */