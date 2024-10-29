import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../utilis/constants'
import { useDispatch } from 'react-redux'
import { addToprated } from '../../Slice/seriesSlice'

const useToprated = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getToprated ()
    },[])

    const getToprated = async() => {
        const data = await fetch (`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,API_OPTIONS)
        const json = await data.json()
        dispatch(addToprated(json.results))
    }
  return
}

export default useToprated