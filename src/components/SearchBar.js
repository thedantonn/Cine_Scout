import React, { useRef } from 'react'
import lang from '../utilis/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { REACT_APP_GEMINI_API_KEY } from '../utilis/constants';
import { API_OPTIONS } from "../utilis/constants";
import { showSearchedMovies } from "../Slice/searchGptSlice";


const SearchBar = () => {
  const languageType = useSelector((store) => store.config.lang)
  const search = useRef(null)
  const dispatch = useDispatch()

  const getSearchedMovies = async (movie) => {
    const data = await fetch ("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json()
    return json.results[0]
    }


  
  const GenerateResult = async () => {
    if (!search.current?.value.trim()) {
      return }
    try {
        const genAI = new GoogleGenerativeAI(REACT_APP_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "think of yoursel as a movie recommender and suggest movie name for the query only:" + search.current.value + "only give me name of 5 movies,in a comma separated manner , for example : krish 3, Ra One, Don"
        const result = await model.generateContent(prompt);
        const gptMovies = result.response.text().split(",")
        const promiseArray = gptMovies.map((movie) => getSearchedMovies(movie.trim()));
        const tmdbResult = await Promise.all(promiseArray);
        dispatch(showSearchedMovies({MovieName: gptMovies, MovieResult: tmdbResult}))

    }
    catch(error){
    return
    }
}

  return (
    <div className='w-full xl:m-0 lg:m-0 md:m-20 -m-12 xl:px-12 lg:px-10 md:px-8 px-2'>
        <form className='grid grid-cols-12 gap-4' onSubmit={(e) => e.preventDefault()}> 
            <input 
            className="col-span-9 bg-black text-[#00FFFF] border-2 border-[#00FFFF] xl:text-xl lg:text-xl md:text-xl sm:text-xs text-[9px] p-2 text-center rounded-md focus:ring-2 focus:ring-[#00FFFF] outline-none transition duration-300" 
            type='text' 
            placeholder={lang[languageType].gptSearchPlaceholder}
            ref={search}/>
            <button 
            onClick={GenerateResult}
            className='col-span-3 bg-[#00FFFF] text-black font-bold lg:p-4 xl:text-xl lg:text-lg md:text-sm sm:text-xs text-[9px] rounded-md hover:bg-[#00CCFF] hover:shadow-lg transition duration-300'>{lang[languageType].search}</button>
        </form>
    </div>
  )
}

export default SearchBar