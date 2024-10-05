import React from 'react'
import { useSelector } from 'react-redux'
import useMovies from '../Hooks/useMovies'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    useMovies()
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies || movies.length === 0) {
        return <div className="text-white text-center py-4">Loading...</div>
    }
    const mainMovie = movies[0]
    const {id} = mainMovie
    console.log(id)
    
  return (
    <div>
            <VideoTitle movieInfo = {mainMovie}/>
            <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer