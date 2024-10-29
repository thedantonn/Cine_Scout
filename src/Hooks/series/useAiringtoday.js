import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../utilis/constants'
import { useDispatch } from 'react-redux'
import { addAiringtoday } from '../../Slice/seriesSlice'

const useAiringtoday = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getAiringtoday ()
    },[])

    const getAiringtoday = async() => {
        const data = await fetch (`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`,API_OPTIONS)
        const json = await data.json()
        dispatch(addAiringtoday(json.results))
    }
  return
}

export default useAiringtoday