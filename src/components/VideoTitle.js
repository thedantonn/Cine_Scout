import React from 'react'
import { IoIosAdd, IoIosArrowRoundForward, IoIosPlay} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { changeVolume } from '../Slice/configSlice'
import { addtrailerIndex } from '../Slice/moviesSlice'
import { addCollection } from '../Slice/userSlice'

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

    const Info = useSelector((store) => store.movies?.SelectedMovie)
    
    const handleCollection = () => {
      dispatch(addCollection(Info))
      console.log(Info)
    }

  return (
    <div className="w-screen aspect-video absolute z-10 lg:pt-50 md:pt-32 sm:pt-16 pt-14  ">
        <div className='xl:px-12 lg:px-10 md:px-8 px-2 xl:space-y-6  lg:space-y-4 md:space-y-3 sm:space-y-2 space-y-1'>
            <div className='w-1/2 lg:py-6 md:py-4 sm:py-2 py-1 '>
            <h1 className='text-[#00FFFF] drop-shadow-lg font-extrabold xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-sm lg:pb-4 tracking-wider'>{original_title}</h1>
            <p className='text-gray-300 xl:text-[16px] lg:text-sm md:text-xs sm:text-xs text-[8px] leading-relaxed'>{overview}</p>
            </div>
            <div className='flex xl:space-x-6 lg:space-x-4 md:space-x-4 sm:space-x-3 space-x-2  xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-xs'>
                <button onClick={handleVolume} className='bg-[#00FFFF] text-black lg:px-5 md:px-1 lg:w-56 lg:h-14 md:w-36 md:h-12 sm:w-10 flex items-center rounded-md w-20 h-5 hover:bg-[#00CCFF] hover:shadow-lg transition duration-300'><IoIosPlay className='lg:text-4xl md:3xl sm-2xl text-xl'/> Play</button>
                <button onClick={handleNext} className='p-2 border-2 border-[#00FFFF] text-[#00FFFF] rounded-md flex items-center lg:w-32 lg:h-14 md:w-20 md:h-14 w-20 h-5 hover:bg-[#00FFFF] hover:text-black hover:shadow-lg transition duration-300'><IoIosArrowRoundForward className='lg:text-4xl md:3xl sm-2xl text-xl' />Next</button>
                <button onClick={handleCollection}className='bg-[#00FFFF] text-black lg:px-5 md:px-1 lg:w-56 lg:h-14 md:w-36 md:h-12 sm:w-10 flex items-center rounded-md w-20 h-5 hover:bg-[#00CCFF] hover:shadow-lg transition duration-300'><IoIosAdd className='lg:text-4xl md:3xl sm-2xl text-xl'/>Collection</button>

            </div>
        </div>
    </div>
  )
}

export default VideoTitle