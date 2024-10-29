import React, { useEffect } from 'react'
import { API_OPTIONS } from '../../utilis/constants'
import { useDispatch } from 'react-redux'
import { addPopular } from '../../Slice/seriesSlice'

const usePopular = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getPopular ()
    },[])

    const getPopular = async() => {
        const data = await fetch (`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`,API_OPTIONS)
        const json = await data.json()
        dispatch(addPopular(json.results))
    }
  return
}

export default usePopular