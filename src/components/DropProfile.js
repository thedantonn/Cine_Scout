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
    <div className=' w-56 absolute rounded-md  bg-black opacity-90 right-0 top-12 pt-4'>
        <ul className='flex flex-col text-white text-sm font-light space-y-3'>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><TiPencil/><span>Manage Profile</span> </li>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><RiProfileLine/><span>Transfer Profile</span></li>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><CiUser/><span>Account</span></li>
            <li className='flex flex-row items-center space-x-2 px-2 hover:text-stone-500 cursor-pointer hover:underline'><BsQuestionCircle/><span>centre</span></li> 
            <button 
            className='text-sm flex justify-center p-4 border-t-2'
            onClick={handleSignout}
            >Sign out of Netflix</button>  
        </ul>
        
    </div>
  )
}

export default DropProfile