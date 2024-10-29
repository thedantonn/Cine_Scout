import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../Slice/moviesSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies)
    useEffect(()=>{
        !TopRatedMovies && getTopRatedMovies ()
    },[])
    const getTopRatedMovies = async() => {
        try{
        const data = await fetch ('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
        }
        catch (error) {
            return
        }
       
    } 
}

export default useTopRatedMovies