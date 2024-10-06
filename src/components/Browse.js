import React from 'react'
import { Header } from "./Header"
import useMovies from '../Hooks/useMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import useUpComingMovies from '../Hooks/useUpComingMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import usePopularMovies from '../Hooks/usePopularMovies'

const Browse = () => {
  useMovies()
  useUpComingMovies()
  useTopRatedMovies()
  usePopularMovies()
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondContainer/>
        
    </div>
  )
}

export default Browse