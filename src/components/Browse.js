import React from 'react'
import { Header } from "./Header"
import useMovies from '../Hooks/useMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import useUpComingMovies from '../Hooks/useUpComingMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import SearchPage from './SearchPage'

const Browse = () => {
  useMovies()
  useUpComingMovies()
  useTopRatedMovies()
  usePopularMovies()
  const isToggleSearch = useSelector((store) => store.Gpt?.showGptSearch)
  console.log(isToggleSearch)
  return (
    <div>
        <Header/>
        {isToggleSearch ? 
        (<SearchPage/>) :
        (<>
           <MainContainer/>
           <SecondContainer/>
         </>)}
        
        
    </div>
  )
}

export default Browse