import React from 'react'
import { useSelector } from 'react-redux'
import useTrailer from '../Hooks/useTrailer'

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.addTrailer)
    useTrailer(movieId)
    console.log(movieId)
  return (
    <div>
        <iframe className='w-screen aspect-video relative'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1" }
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}

export default VideoBackground