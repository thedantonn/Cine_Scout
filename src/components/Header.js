import { BiBell, BiCaretDown, BiCaretUp, BiSearch } from "react-icons/bi";
import {SUPPORTED_LANGUAGE, User_Profile_logo } from "../utilis/constants";
import React, { useState } from 'react'
import DropProfile from "./DropProfile";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../Slice/searchGptSlice";
import { changeLanguage } from "../Slice/configSlice";
import { Link } from "react-router-dom";
import { toggleSelectedMedia } from "../Slice/selectedMediaSlice";

export const Header = () => {
    const userInfo = useSelector((store) => store.user)
    const [isbtnDown,setisbtnDown] = useState(false)
    const handleDrop = () => {
        setisbtnDown(!isbtnDown)
    }
    const dispatch = useDispatch()
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const isToggleSearch = useSelector((store) => store.Gpt?.showGptSearch)

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    const handleMediaToggle = () => {
        dispatch(toggleSelectedMedia())
    }
    const selectedmedia = useSelector((store) => store.selectedmedia?.tvShows)

  return (
    <div className="absolute z-20 w-screen flex justify-between items-center xl:py-4 lg:py-3 md:py-2 sm:py-1 py-0 
                        xl:px-8 lg:px-6 md:px-4 px-0 bg-black/60 backdrop-blur-md">
       <div className="flex text-white items-center space-x-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">Cine<span className="text-yellow-600">Scout</span></h1>
        <ul className="flex space-x-8 text-cyan-300 xl:text-lg lg:text-md md:text-sm sm:text-xs text-[5px]">

            <li onClick={handleMediaToggle} 
            className="hover:text-pink-400 transition-all duration-300">
                <Link to={"/browsePage"}>{selectedmedia ? <h1>Movies</h1> :<h1>TV Shows</h1>}</Link></li>

            <li className="hover:text-pink-400 transition-all duration-300">
                <Link to={"/collection"}>My Collection</Link></li>

            <li className="hover:cursor-pointer"
                onClick={handleGptSearch}>
                    { isToggleSearch ? 
                    <span className="text-3xl rounded-lg bg-black px-4 py-2 text-white hover:text-pink-400 transition-all duration-300">
                        🔙</span> : <h1 className="flex items-center text-center hover:text-pink-400 transition-all duration-300">
                            <span className="text-2xl mr-2"><BiSearch/></span>GPT Search</h1>}
            </li>
        </ul>
       </div>
        <ul className="flex flex-row space-x-4 items-center text-white xl:text-2xl lg:text-xl md:text-lg sm:text-xs text-[1px]relative">
            <li>{
            isToggleSearch ? ( 
                <select 
                onChange={handleLanguageChange}
                className="py-2 px-4 rounded-lg bg-black text-cyan-300 hover:text-pink-400 transition-all duration-300">
                    {SUPPORTED_LANGUAGE.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.language}</option>))}
                </select>) : <div></div> }</li>
            <li className="flex flex-row relative"><img 
            className="w-10 rounded-full border-2 border-cyan-400"
            src={User_Profile_logo} alt="userprofilelogo"/>
            <h1 className="xl:text-3xl lg:text-xl md:text-lg sm:text-sm text-[9px] flex items-center xl:pl-2 lg:pl-2 md:pl-1 sm:pl-1 pl-0">{userInfo?.displayName}</h1>
            <span 
            className="flex items-center"
            onClick={handleDrop}>
                {isbtnDown === false ? 
                (<BiCaretDown/>) :
                (<div>
                    <BiCaretUp/>
                    <DropProfile/>
                </div>) }</span></li>
        </ul>
       
    </div>
  )
}
