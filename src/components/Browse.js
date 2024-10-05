import React from 'react'
import { Header } from './Header'
import useMovies from '../utilis/useMovies'


const Browse = () => {
  const movies = useMovies()


  return (
    <div>
        <Header/>
    </div>
  )
}

export default Browse