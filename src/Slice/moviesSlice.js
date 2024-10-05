import { createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailer : null
    },
    reducers : {
        addNowPlayinMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailer : (state,action) => {
            state.addTrailer = action.payload
        }
    }
})
export const {addNowPlayinMovies,addTrailer} = movieSlice.actions;
export default movieSlice.reducer