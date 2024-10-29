import React from 'react'
import useMovies from '../../Hooks/useMovies'
import useUpComingMovies from '../../Hooks/useUpComingMovies'
import useTopRatedMovies from '../../Hooks/useTopRatedMovies'
import usePopularMovies from '../../Hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import { Header } from '../Header'
import SearchPage from './SearchPage'
import MainContainer from '../MainContainer'
import SecondContainer from '../SecondContainer'
import useRecommended from '../../Hooks/useRecommended'
import useAiringtoday from '../../Hooks/series/useAiringtoday'
import useOntheair from '../../Hooks/series/useOntheair'
import usePopular from '../../Hooks/series/usePopular'
import useToprated from '../../Hooks/series/useToprated'


const BrowsePage = () => {
  useRecommended()
  useMovies()
  useUpComingMovies()
  useTopRatedMovies()
  usePopularMovies()
  const isToggleSearch = useSelector((store) => store.Gpt?.showGptSearch)
  useAiringtoday()
  useOntheair()
  usePopular()
  useToprated()
 
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

export default BrowsePage