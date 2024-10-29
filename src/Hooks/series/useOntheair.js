import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../utilis/constants'
import { useDispatch } from 'react-redux'
import { addOntheair } from '../../Slice/seriesSlice'

const useOntheair = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getOntheair ()
    },[])

    const getOntheair = async() => {
        const data = await fetch (`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`,API_OPTIONS)
        const json = await data.json()
        dispatch(addOntheair(json.results))
    }
  return
}

export default useOntheair