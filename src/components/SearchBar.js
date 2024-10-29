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
    <div className='w-full p-12'>
        <form className='grid grid-cols-12 gap-4' onSubmit={(e) => e.preventDefault()}> 
            <input 
            className="text-black bg-white col-span-9 text-xl p-2 text-center" 
            type='text' 
            placeholder={lang[languageType].gptSearchPlaceholder}
            ref={search}/>
            <button 
            onClick={GenerateResult}
            className='bg-red-700 text-white px-4 py-4 col-span-3 text-xl'>{lang[languageType].search}</button>
        </form>
    </div>
  )
}

export default SearchBar