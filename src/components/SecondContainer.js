import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import ShimmerPage from './Pages/ShimmerPage'


const SecondContainer = () => {
    const movies = useSelector((store) => store.movies)
    const searchedMovies = useSelector((store) => store.Gpt.MovieResult)
    const recommendedMovies = useSelector((store) => store.recommended?.recommendedMovies)
    const selectedMovie = useSelector((store) => store.movies?.SelectedMovie)
    const selectedmedia = useSelector((store) => store.selectedmedia?.tvShows)
    const series = useSelector((store) => store.series)

  return (movies?.trailer === null) ?  (<ShimmerPage/>)
  : (
    <div className= 'bg-black'>
        <div className='xl:-mt-50 lg:-mt-48 md:-mt-40 sm:-mt-32 -mt-52 relative z-20'>
        
        { searchedMovies === null ? (null)
         : (<MovieList title = {"Searched Movies"} movies = {searchedMovies}/>)
        }
        {selectedmedia ? <div>
        <MovieList title = {"On The Air"} movies = {series.ontheair}/>
        <MovieList title = {"Airing Today"} movies = {series.airingtoday}/>
        <MovieList title = {"Popular"} movies = {series.popular}/>
        <MovieList title = {"Top Rated"} movies = {series.toprated}/>
        </div> : <div>
          { recommendedMovies === null ? (null)
         : (<MovieList title = {`Because You Searched for ${selectedMovie?.title}`} movies = {recommendedMovies}/>)
        }
        <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Top Rated"} movies = {movies.TopRatedMovies}/>
        <MovieList title = {"Popular"} movies = {movies.PopularMovies}/>
        <MovieList title = {"UpComing"} movies = {movies.UpComingMovies}/>
        </div>}
        </div>
    </div>
  )
}

export default SecondContainer