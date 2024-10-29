import { createSlice} from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        trailer : null,
        trailerIndex: 0,
        nowPlayingMovies : null,
        PopularMovies : null,
        TopRatedMovies : null,
        UpComingMovies : null,
        SelectedMovie : null
    },
    reducers : {
        addTrailer : (state,action) => {
            state.trailer = action.payload
        },
        addtrailerIndex: (state,action) => {
            state.trailerIndex = action.payload
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
        },
        addSelectedMovie : (state,action) => {
            state.SelectedMovie = action.payload
        }
    }
})
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpComingMovies,addSelectedMovie, addtrailerIndex} = movieSlice.actions;
export default movieSlice.reducer