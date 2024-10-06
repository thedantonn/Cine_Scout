import React from 'react'
import { Movie_Poster_URL } from '../utilis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img 
        alt='moviecard'
        src={Movie_Poster_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard