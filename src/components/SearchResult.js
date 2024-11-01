import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


export const SearchResult = () => {
  const ResultantMovies = useSelector((store) => store.Gpt)
  const {MovieResult,MovieName} = ResultantMovies
  if(!MovieName) return 


  return (
    <div className='w-full xl:px-6 lg:px-6 md:px-4 px-0 flex flex-row overflow-x-scroll pt-10 '>
      {MovieResult.map((movie)=> (
        <MovieList
        title={MovieName} 
        movies ={movie}/>
      ))}
         
         
    </div>

  )
}
