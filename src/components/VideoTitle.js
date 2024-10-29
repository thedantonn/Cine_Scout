import React from 'react'
import { IoIosInformationCircleOutline, IoMdPlay } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { changeVolume } from '../Slice/configSlice'
import { addtrailerIndex } from '../Slice/moviesSlice'

const VideoTitle = (props) => {
    const dispatch = useDispatch()
    const {movieInfo} = props
    const {overview,original_title} = movieInfo
    const handleVolume = () => {
      dispatch(changeVolume())
    }
    const trailers = useSelector((store)=>store.movies?.trailer)
    const currentTrailerIndex = useSelector((store) => store.movies?.trailerIndex);
    const handleNext = () => {
      if (trailers && trailers.length > 0) {
        const nextIndex = (currentTrailerIndex + 1) % trailers.length;
            dispatch(addtrailerIndex(nextIndex));
      }
    }

  return (
    <div className=" w-screen aspect-video absolute z-10 pt-56 bg-gradient-to-r from-black ">
        <div className='px-12'>
            <div className='w-1/2 py-4 '>
            <h1 className='text-white text-5xl pb-4 font-bold'>{original_title}</h1>
            <p className='text-white text-xl break-words leading-relaxed'>{overview}</p>
            </div>
            <div className='flex space-x-4 pb-4'>
                <button onClick={handleVolume} className='p-2 bg-white text-xl flex items-center rounded-md px-5 hover:bg-gray-300 w-40'><IoMdPlay className='text-4xl'/> Play</button>
                <button className='p-2 bg-gray-500 text-xl text-white flex items-center rounded-md px-5 w-40 hover:bg-slate-400'><IoIosInformationCircleOutline className='text-4xl'/> More Info</button>
                <button onClick={handleNext} className=' border-4 rounded-full bg-white text-xl w-40 text-black hover:bg-gray-300'>NEXT</button>

            </div>
        </div>
    </div>
  )
}

export default VideoTitle