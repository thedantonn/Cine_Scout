import React, { useEffect, useRef, useState } from 'react'
import CheckValidate from './CheckValidate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged,updateProfile } from "firebase/auth";
import { createUser, removeUser } from '../Slice/userSlice';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errormessage, seterrormessage] = useState(null)
    const email = useRef(null)
    const displayName = useRef(null)
    const password = useRef(null)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(createUser({ uid: uid, email: email, displayName: displayName }));
          navigate('/browsePage');
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      });
      return () => unsubscribe();
    }, [dispatch, navigate]);

    const [issignin,setissignin] = useState(true)

    const handleClick = () => {
        setissignin(!issignin)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const message = CheckValidate(email.current.value,password.current.value)
        seterrormessage(message)
        if(message) return 
        
        if(issignin){
            createUserWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value,
                //displayName.current.value
            ).then((userCredential) => {
               const user = userCredential.user;
               updateProfile(user, {
                displayName: displayName.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // ... 
                const {uid,displayName,email}= auth.currentUser;
                dispatch(createUser({uid: uid, displayName: displayName, email: email}))
              }).catch((error) => {
                // An error occurred
                // ...
              });
               navigate("/browsePage")
             }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode +"-"+errorMessage)
  });
        }
        else {
            signInWithEmailAndPassword(
                auth, 
                email.current?.value,
                password.current?.value)
  .then((userCredential) => {
    const user = userCredential.user;
    const {uid,displayName,email}= user;
    dispatch(createUser({uid: uid, displayName: displayName, email: email}))
    navigate("/browsePage")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode +"-"+errorMessage)
  });
        }
    }
  return (
    <form 
    onSubmit={handleSubmit}
    className="flex flex-col justify-center border-2 border-cyan-400 shadow-md xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 space-y-4 
               xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 w-11/12 h-auto text-left bg-black/60 backdrop-blur-md rounded-lg p-6">
        <h1 className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-cyan-300'>
            {issignin === false?
               "Sign In" : "Sign Up"}
        </h1>
            {issignin &&
            (<input 
                 type='text' 
                 placeholder='Name' 
                 ref={displayName}
                 className='w-full p-3 border-2 border-cyan-400 rounded-md bg-black text-cyan-300 
                       placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all'/>) }
        <input 
        type='email' 
        placeholder='Email or mobile number'
        ref={email}
        className='w-full p-3 border-2 border-cyan-400 rounded-md bg-black text-cyan-300 
                       placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all' />
        
        <input 
        type='password' 
        placeholder='Password'
        ref={password}
        className='w-full p-3 border-2 border-cyan-400 rounded-md bg-black text-cyan-300 
                       placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all'/>
        <p className='text-pink-500 font-medium'>{errormessage}</p>
        <button 
        className='w-full p-3 font-bold rounded-md bg-gradient-to-r from-cyan-500 to-pink-500 text-black 
                   hover:from-pink-500 hover:to-cyan-500 transition-all'>
            {issignin === false ? "Sign In" : "Sign Up" } 
        </button>
        
        <h1 className='text-cyan-400'>
            {issignin === false ? 
            (<p>New to CineScout? <span onClick={handleClick} className='text-pink-400 hover:underline cursor-pointer'>Sign up now.</span></p>) 
            : (<p>Already a member? <span onClick={handleClick} className='text-pink-400 hover:underline cursor-pointer'>Sign in.</span></p>)} </h1>
    </form>
  )
}

export default Login