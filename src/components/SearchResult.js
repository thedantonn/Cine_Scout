import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


export const SearchResult = () => {
  const ResultantMovies = useSelector((store) => store.Gpt)
  const {MovieResult,MovieName} = ResultantMovies
  if(!MovieName) return 


  return (
    <div className='w-full px-12 flex flex-col'>
      {MovieResult.map((movie)=> (
        <MovieList
        title={MovieName} 
        movies ={movie}/>
      ))}
         
         
    </div>

  )
}
