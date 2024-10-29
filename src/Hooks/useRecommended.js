import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRecommended } from '../Slice/recommendedSlice'

const useRecommended = () => {
    const dispatch = useDispatch()
    const recommendInfoId = useSelector((store) => store.movies?.SelectedMovie?.id || [])
    useEffect(()=>{
        getRecommended ()
    },[recommendInfoId])

    const getRecommended = async () => {
        try{
        const data = await fetch (`https://api.themoviedb.org/3/movie/${recommendInfoId}/recommendations?language=en-US&page=1`,API_OPTIONS)
        const json = await data.json()
        dispatch(addRecommended(json.results))
        } catch (error) {
   
        }
        
    } 
  return 
}

export default useRecommended