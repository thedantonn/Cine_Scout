import React from 'react'
import { Movie_Poster_URL } from '../utilis/constants'



const MovieCard = ({posterPath,onClick,movieInfo}) => {
 
  if (!posterPath) return null
  return (
    <div className='w-48'>
        <img 
        onClick={() => onClick(movieInfo)}
        alt='moviecard'
        src={Movie_Poster_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard