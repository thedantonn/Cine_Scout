import React from 'react'
import { Movie_Poster_URL } from '../utilis/constants'



const MovieCard = ({posterPath,onClick,movieInfo}) => {
 
  if (!posterPath) return null
  return (
    <div className='xl:w-48 lg:w-44 md:w-36 sm:w-28 w-20 
                    hover:cursor-pointer transition-all duration-300
                    hover:scale-105 hover:rotate-1 
                    hover:drop-shadow-[0_0_10px_#00ffff]'>
        <img 
        onClick={() => onClick(movieInfo)}
        alt='moviecard'
        loading="lazy"
        src={Movie_Poster_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard