import { createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailer : null,
        PopularMovies : null,
        TopRatedMovies : null,
        UpComingMovies : null
    },
    reducers : {
        addTrailer : (state,action) => {
            state.trailer = action.payload
        },
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload
        },
        addTopRatedMovies : (state,action) => {
            state.TopRatedMovies = action.payload
        },
        addUpComingMovies : (state,action) => {
            state.UpComingMovies = action.payload
        }
    }
})
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer