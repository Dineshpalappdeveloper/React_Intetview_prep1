import { createSlice } from "@reduxjs/toolkit"
const CounterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
    },
    reducers: {
        // add: (state) => state++,
    }
})
export default CounterSlice.reducer
// export const { add } = CounterSlice.actions
