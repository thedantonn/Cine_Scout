import React, { useState } from 'react'

const Login = () => {
    const [issignin,setissignin] = useState(true)
    const handleClick = () => {
        setissignin(!issignin)
    }
  return (
    <form 
    className='absolute flex flex-col justify-center border-2 border-gray-400 px-14 space-y-1 w-4/12 h-1/2 text-left bg-black opacity-80'>
        <h1 className='text-3xl font-semibold pb-3 text-white'>
            {issignin === false?
               "Sign In" : "Sign Up"}
        </h1>
            {issignin &&
            (<input 
                 type='text' 
                 placeholder='Name' 
                 className='p-4 font-light border-2 border-gray-400 rounded-md bg-black  text-gray-500'/>) }
        <input 
        type='text' 
        placeholder='Email or mobile number'
        className='p-4 font-light border-2 border-gray-400 rounded-md bg-black  text-gray-500' />
        <input 
        type='password' 
        placeholder='Password'
        className='p-4 font-light border-2 border-gray-400 rounded-md bg-black  text-gray-500'/>
        
        <button 
        className='bg-red-600  text-white p-3 w-auto rounded-md'>
            {issignin === false ? "Sign In" : "Sign Up" } 
        </button>
        
        <h1 className='text-gray-500'>
            {issignin === false ? 
            (<h1>New to Netflix? <span onClick={handleClick} className='text-white hover:cursor-pointer'>Sign up now.</span></h1>) 
            : (<h1>Already a member? <span onClick={handleClick} className='text-white hover:cursor-pointer'>Sign in.</span></h1>)} </h1>
    </form>
  )
}

export default Login