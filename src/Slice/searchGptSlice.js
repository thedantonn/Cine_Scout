import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice ({
    name : "Gpt",
    initialState : {
        showGptSearch : false,
        MovieName : null,
        MovieResult : null,

    },
    reducers : {
        toggleGptSearchView : (state,actions) => {
            state.showGptSearch = !state.showGptSearch
        },
        showSearchedMovies : (state,action) => {
            const {MovieName,MovieResult} = action.payload
            state.MovieName = MovieName
            state.MovieResult = MovieResult
        },

    }
})

export const {toggleGptSearchView,showSearchedMovies} = GptSlice.actions
export default GptSlice.reducer
