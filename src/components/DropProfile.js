import React from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { RiProfileLine } from 'react-icons/ri'
import { TiPencil } from 'react-icons/ti'
import {  signOut } from "firebase/auth";
import { auth } from '../utilis/firebase'
import { useNavigate } from 'react-router-dom'

const DropProfile = () => {
    const navigate = useNavigate()

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className=' xl:w-56 lg:w-52 md:w-44 sm:w-40 w-20 absolute rounded-md  bg-black opacity-90 right-0 xl:top-12 lg:top-10 md:top-9 sm:top-7 top-6 xl:pt-4 lg:pt-3 md:pt-2 sm:pt-1 pt-1'>
        <ul className='flex flex-col text-white xl:text-sm lg:text-[12px] md:text-[11px] sm:text-[10px] text-[6px] font-light xl:space-y-3 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-0'>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><TiPencil/><span>Manage Profile</span> </li>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><RiProfileLine/><span>Transfer Profile</span></li>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><CiUser/><span>Account</span></li>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><BsQuestionCircle/><span>centre</span></li> 
            <button 
            className='xl:text-sm lg:text-[12px] md:text-[11px] sm:text-[10px] text-[6px] flex justify-center xl:p-4 lg:p-3 md:p-2 sm:p-1 p-1 xl:border-t-2 lg:border-t-2 '
            onClick={handleSignout}
            >Sign out of CineScout</button>  
        </ul>
        
    </div>
  )
}

export default DropProfile