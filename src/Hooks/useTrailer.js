import { useEffect } from 'react'
import { addTrailer } from '../Slice/moviesSlice'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utilis/constants'

const useTrailer = (movieId) => {
    const dispatch = useDispatch()
    console.log(movieId)
    useEffect(()=> {
        getMovieBackgroundVideo ()
    },[])

    const getMovieBackgroundVideo = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length === 0 ? filterData[2] : json.results[2]
        dispatch(addTrailer(trailer))
        console.log(trailer)
        console.log(filterData)
    }
}

export default useTrailer