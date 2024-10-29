import { createSlice } from "@reduxjs/toolkit";

const selectedMediaSlice = createSlice ({
    name : "selected Media",
    initialState : {
        tvShows : false

    },
    reducers : {
        toggleSelectedMedia : (state,actions) => {
            state.tvShows = !state.tvShows
        },
    }
})

export const {toggleSelectedMedia} = selectedMediaSlice.actions
export default selectedMediaSlice.reducer
