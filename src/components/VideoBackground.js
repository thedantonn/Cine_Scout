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
    <div className='relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-screen  from-black'>
        <iframe 
        className='w-full h-full'
        src={`${VIDEO_URL}${trailerVideo}?&autoplay=1&mute=${isVolume ? "1" : "0" }&loop=1&playlist=${trailerVideo}` }
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  )
}

export default VideoBackground