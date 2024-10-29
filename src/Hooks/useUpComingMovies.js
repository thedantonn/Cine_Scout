import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpComingMovies } from '../Slice/moviesSlice'

const useUpComingMovies = () => {
    const dispatch = useDispatch()
    const UpComingMovies = useSelector((store) => store.movies.UpComingMovies)
    useEffect(() => {
        // Code runs only when "UpComingMovies" changes
        if (!UpComingMovies) {
            getUpComingMovies();
        }
    }, []);

    const getUpComingMovies = async() => {
        try {
        const data = await fetch ('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        dispatch(addUpComingMovies(json.results))
        }
        catch (error) {
            return 
        }
        
    } 
}

export default useUpComingMovies