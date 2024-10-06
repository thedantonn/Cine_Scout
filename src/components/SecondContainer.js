import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondContainer = () => {
    const movies = useSelector((store) => store.movies)

  return (
    <div className= ' bg-black'>
        <div className='-mt-52 relative z-20'>
        <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Top Rated"} movies = {movies.TopRatedMovies}/>
        <MovieList title = {"Popular"} movies = {movies.PopularMovies}/>
        <MovieList title = {"UpComing"} movies = {movies.UpComingMovies}/>
        </div>
    </div>
  )
}

export default SecondContainer