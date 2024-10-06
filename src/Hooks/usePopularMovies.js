import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../Slice/moviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        getPopularMovies ()
    },[])
    const getPopularMovies = async() => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
        
    } 

}

export default usePopularMovies