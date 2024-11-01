import React from 'react'
import { Movie_Poster_URL } from '../utilis/constants'



const MovieCard = ({posterPath,onClick,movieInfo}) => {
 
  if (!posterPath) return null
  return (
    <div className='xl:w-48 lg:w-44 md:w-36 sm:w-20 w-16'>
        <img 
        onClick={() => onClick(movieInfo)}
        alt='moviecard'
        src={Movie_Poster_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard