import React from 'react'
import SearchBar from '../SearchBar'
import { SearchResult } from '../SearchResult'
import { Netflix_Bg } from '../../utilis/constants'

const SearchPage = () => {
  return (
    <div>
      <img className="fixed min-h-screen overflow-hidden" src = {Netflix_Bg} alt='bg'/>
      <div className='relative z-0 flex flex-col xl:pt-72 lg:pt-72 md:pt-40 sm:pt-40 pt-40 items-center'>
        <SearchBar/>
        <SearchResult/>
      </div>
        
    </div>
  )
}

export default SearchPage