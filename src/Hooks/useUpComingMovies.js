import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../Slice/moviesSlice'

const useUpComingMovies = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        getUpComingMovies ()
    },[])
    const getUpComingMovies = async() => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addUpComingMovies(json.results))
        
    } 
}

export default useUpComingMovies