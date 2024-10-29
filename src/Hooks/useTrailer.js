import { useEffect } from 'react'
import { addTrailer } from '../Slice/moviesSlice'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utilis/constants'

const useTrailer = (movieId) => {
    const dispatch = useDispatch()

  
    useEffect(()=> {
        getMovieBackgroundVideo ()
    },[movieId])

    const getMovieBackgroundVideo = async() => {
        try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        const filterData = json?.results?.filter((video) => video.type === "Trailer")
        const trailer = filterData?.length === 0 ? json?.results[0] : filterData[0]
        console.log(trailer)
        dispatch(addTrailer(filterData))
        } catch (error) {
            return
        }
        
        

    }
}

export default useTrailer