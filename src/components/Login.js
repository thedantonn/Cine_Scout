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
          navigate('/browse');
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
        console.log(message)
        if(message) return 
        
        if(issignin){
            createUserWithEmailAndPassword(
                auth, 
                email.current.value,
                password.current.value,
                //displayName.current.value
            ).then((userCredential) => {
               const user = userCredential.user;
               console.log(user)
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
               navigate("/browse")
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
    navigate("/browse")
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
    className=' flex flex-col justify-center  border-2 border-gray-400 px-14 space-y-1 w-4/12 h-1/2 text-left bg-black opacity-80'>
        <h1 className='text-3xl font-semibold pb-3 text-white'>
            {issignin === false?
               "Sign In" : "Sign Up"}
        </h1>
            {issignin &&
            (<input 
                 type='text' 
                 placeholder='Name' 
                 ref={displayName}
                 className='p-4 font-light border-2 border-gray-400 rounded-md bg-black  text-gray-500'/>) }
        <input 
        type='email' 
        placeholder='Email or mobile number'
        ref={email}
        className='p-4 font-light border-2 border-gray-400 rounded-md bg-black  text-gray-500 ' />
        
        <input 
        type='password' 
        placeholder='Password'
        ref={password}
        className='p-4 font-light border-2 border-gray-400 rounded-md bg-black  text-gray-500'/>
        <p className='text-red-600 font-medium text-md'>{errormessage}</p>
        <button 
        className='bg-red-600  text-white p-3 w-auto rounded-md'>
            {issignin === false ? "Sign In" : "Sign Up" } 
        </button>
        
        <h1 className='text-gray-500'>
            {issignin === false ? 
            (<p>New to Netflix? <span onClick={handleClick} className='text-white hover:cursor-pointer'>Sign up now.</span></p>) 
            : (<p>Already a member? <span onClick={handleClick} className='text-white hover:cursor-pointer'>Sign in.</span></p>)} </h1>
    </form>
  )
}

export default Login