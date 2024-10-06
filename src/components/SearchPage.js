import React from 'react'
import SearchBar from './SearchBar'
import { SearchResult } from './SearchResult'
import { Netflix_Bg } from '../utilis/constants'

const SearchPage = () => {
  return (
    <div>
      <img className="absolute" src = {Netflix_Bg} alt='bg'/>
      <div className='relative z-0 flex flex-col pt-48 items-center'>
        <SearchBar/>
        <SearchResult/>
      </div>
        
    </div>
  )
}

export default SearchPage