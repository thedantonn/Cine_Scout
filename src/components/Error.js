import React from 'react'
import { IoIosRefresh } from 'react-icons/io'
import { RiSignalWifiErrorFill } from 'react-icons/ri'

const Error = () => {
    const handleRetry = () => {
        window.location.reload()
    }
  return (
     <div className="mt-24 flex relative flex-col items-center z-10 text-center">
     <RiSignalWifiErrorFill className="text-red-600 text-6xl mb-4 animate-bounce" />
     
     <p className="text-2xl font-semibold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer">
       Oops! Something went wrong.
       <br />
       The Movie Database is Unable To Fetch Data,
       Try Switching To Your Mobile Network.
     </p>
     <button 
       onClick={handleRetry}
       className="mt-6 px-6 py-4 bg-red-600 rounded-md text-4xl font-medium transition-transform transform hover:bg-red-700 active:scale-95"
     >
       <span className='text-white font-bold animate-pulse'><IoIosRefresh /></span>
     </button>
   </div>
  )
}

export default Error