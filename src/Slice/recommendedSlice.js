import { createSlice } from "@reduxjs/toolkit";

const recommendedSlice = createSlice(
    {
        name: "recommended",
        initialState : {
            recommendedMovies : null
        },
    reducers : {
        addRecommended : (state,action) => {
            state.recommendedMovies = action.payload
        }
    }
})
export const {addRecommended} = recommendedSlice.actions;
export default recommendedSlice.reducer