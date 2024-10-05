import React from 'react'
import { IoIosInformationCircleOutline, IoMdPlay } from 'react-icons/io'

const VideoTitle = (props) => {
    const {movieInfo} = props
    const {overview,original_title} = movieInfo
  return (
    <div className=" w-screen aspect-video absolute z-10 pt-96 bg-gradient-to-r from-black ">
        <div className='px-12'>
            <div className='w-1/2 py-4 '>
            <h1 className='text-white text-5xl font-bold'>{original_title}</h1>
            <p className='text-white text-xl break-words leading-relaxed'>{overview}</p>
            </div>
            <div className='flex space-x-4 pb-4'>
                <button className='p-2 bg-white text-xl flex items-center rounded-md px-5 hover:bg-gray-300 w-40'><IoMdPlay className='text-4xl'/> Play</button>
                <button className='p-2 bg-gray-500 text-xl text-white flex items-center rounded-md px-5 w-40 hover:bg-slate-400'><IoIosInformationCircleOutline className='text-4xl'/> More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle