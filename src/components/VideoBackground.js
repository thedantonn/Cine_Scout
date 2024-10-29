import React from 'react'
import { useSelector } from 'react-redux'
import useTrailer from '../Hooks/useTrailer'
import { VIDEO_URL } from '../utilis/constants'


const VideoBackground = ({movieId}) => {
    const trailerIndex = useSelector((store) => store.movies.trailerIndex);
    const trailerVideo = useSelector((store) => store.movies?.trailer?.[trailerIndex]?.key)
    const isVolume = useSelector((store) => store.config?.volume)
    useTrailer(movieId)

  return (
    <div className=''>
        <iframe className='w-screen aspect-video relative'
        src={`${VIDEO_URL}${trailerVideo}?&autoplay=1&mute=${isVolume ? "1" : "0" }` }
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}

export default VideoBackground