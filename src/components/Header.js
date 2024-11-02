import { BiBell, BiCaretDown, BiCaretUp, BiSearch } from "react-icons/bi";
import { Netflix_Logo, SUPPORTED_LANGUAGE, User_Profile_logo } from "../utilis/constants";
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
    <div className="absolute z-20 w-screen flex justify-between xl:py-4 lg:py-3 md:py-2 sm:py-1 py-0 xl:px-8 lg:px-6 md:px-4 px-0 bg-gradient-to-b from-black">
       <div className="flex text-white items-center">
       <img 
        className=" xl:w-36 lg:w-32 md:w-28 sm:w-24 w-16 m-2"
        src={Netflix_Logo} alt = "netflix_logo"/>
        <ul className="flex flex-row xl:space-x-12 lg:space-x-7 md:space-x-5 xl:text-xl lg:text-sm md:text-sm sm:text-xs text-[5px]">
            <li onClick={handleMediaToggle}><Link to={"/browsePage"}>{selectedmedia ? <h1>Movies</h1> :<h1>TV Shows</h1>}</Link></li>
            <li><Link to={"/comingsoon"}>New & Popular</Link></li>
            <li><Link to={"/collection"}>My Collection</Link></li>
            <li><Link to={"/comingsoon"}>Browse by Languages</Link></li>
        </ul>
       </div>
        <ul className="flex flex-row space-x-4 items-center text-white xl:text-2xl lg:text-xl md:text-lg sm:text-xs text-[1px]relative">
            <li className="hover:cursor-pointer"
                onClick={handleGptSearch}>
                   { isToggleSearch ? <span className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs rounded-lg bg-black xl:py-2 xl:px-6 lg:py-2 lg:px-5 md:py-2 md:px-3 sm:py-1 sm:px-2 py-1 px-1 text-white">🔙</span> : <BiSearch/>}
            </li>
            <li>{
            isToggleSearch ? ( 
                <select 
                onChange={handleLanguageChange}
                className="xl:text-3xl lg:text-xl md:text-sm sm:text-lg text-[9px] xl:py-2 xl:px-6 lg:py-2 lg:px-5 md:py-2 md:px-3 sm:py-1 sm:px-2 py-1 px-1 rounded-lg opacity-70 bg-black text-white relative z-20">
                    {SUPPORTED_LANGUAGE.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.language}</option>))}
                </select>) : <BiBell/> }</li>
            <li className="flex flex-row relative"><img 
            className="xl:w-10 lg:w-8 md:w-7 sm:w-6 w-4"
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
