import React from 'react'
import lang from '../utilis/languageConstants'
import { useSelector } from 'react-redux'

const SearchBar = () => {
  const languageType = useSelector((store) => store.config.lang)
  console.log(languageType)
  return (
    <div className='w-full p-12'>
        <div className='grid grid-cols-12 gap-4'> 
            <input className="text-black bg-white col-span-9 text-xl p-2 text-center" type='seach' placeholder={lang[languageType].gptSearchPlaceholder}/>
            <button className='bg-red-700 text-white px-4 py-4 col-span-3 text-xl'>{lang[languageType].search}</button>
        </div>
    </div>
  )
}

export default SearchBar