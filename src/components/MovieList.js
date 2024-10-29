import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch } from 'react-redux'
import { addSelectedMovie } from '../Slice/moviesSlice'
import { Link } from 'react-router-dom'

const MovieList = ({title,movies}) => {

  const dispatch = useDispatch()

  
  const handleTrailerChange = (movieInfo) => {
    dispatch(addSelectedMovie(movieInfo))


  }

  return (
    <div className='px-12 py-4'>
     { movies?.length > 1 ? <h1 className='text-white text-xl pb-3'>{title}</h1> :
     (null) }
       <div className='flex overflow-x-scroll'>
        <div className='flex space-x-4'>
        { movies?.length > 1 ? (
            movies?.map((movie) => ( 
                <MovieCard 
                onClick = {handleTrailerChange}
                movieInfo={movie}
                key={movie.id} 
                posterPath={movie.poster_path}/>      
            ))
          ) : 
          ( 
        
              <div>
                <Link to={"/movies/" + movies?.id}>
                <h1 className='text-white text-xl pb-3'>{movies?.title}</h1>
                <MovieCard 
                onClick = {handleTrailerChange}
                movieInfo={movies}
                key={movies?.id} 
                posterPath={movies?.poster_path}/>
                </Link>
               </div>
          
          
          )
        }
        </div>
    </div>
    </div>
  )
}

export default MovieList