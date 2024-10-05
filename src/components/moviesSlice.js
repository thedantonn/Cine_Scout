import { createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
    },
    reducers : {
        addNowPlayinMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        }
    }
})
export const {addNowPlayinMovies} = movieSlice.actions;
export default movieSlice.reducer