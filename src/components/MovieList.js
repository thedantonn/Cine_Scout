import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  return (
    <div className='px-12 py-4'>
       <h1 className='text-white text-xl pb-3'>{title}</h1>
       <div className='flex overflow-x-scroll'>
        <div className='flex space-x-4'>
            {movies?.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))}
        </div>
       </div>
    </div>
  )
}

export default MovieList