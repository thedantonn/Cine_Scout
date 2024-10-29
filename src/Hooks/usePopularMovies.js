import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../Slice/moviesSlice'

const usePopularMovies = () => {
    const PopularMovies = useSelector((store)=>store.movies.PopularMovies)
    const dispatch = useDispatch()
   
    const getPopularMovies = async() => {
        try{
        const data = await fetch ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
        } catch (error) {
            return
        }
        
    } 
 useEffect(()=>{
        !PopularMovies && getPopularMovies ()
    },[])
}

export default usePopularMovies