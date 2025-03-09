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
    <div className='xl:px-12 lg:px-10 md:px-8 px-2 py-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-4 mt-8 xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-xs'>
     { movies?.length > 1 ? <h1 className='text-cyan-400 neon-text pb-3 xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-xs'>{title}</h1> :
     (null) }
       <div className='flex overflow-x-scroll  scrollbar-hide'>
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
        
              <div >
                <Link to={"/movies/" + movies?.id}>
                <h1 className='text-cyan-400 pb-3 text-lg'>{movies?.title}</h1>
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
