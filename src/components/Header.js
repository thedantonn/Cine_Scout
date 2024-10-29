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
    <div className="absolute z-20 w-screen flex justify-between py-4 px-8 bg-gradient-to-b from-black">
       <div className="flex text-white items-center">
       <img 
        className=" w-32 m-2"
        src={Netflix_Logo} alt = "netflix_logo"/>
    
        <ul className="flex flex-row space-x-4">
            <li onClick={handleMediaToggle}><Link to={"/browsePage"}>{selectedmedia ? <h1>Movies</h1> :<h1>TV Shows</h1>}</Link></li>
            <li><Link to={"/comingsoon"}>New & Popular</Link></li>
            <li><Link to={"/comingsoon"}>My List</Link></li>
            <li><Link to={"/comingsoon"}>Browse by Languages</Link></li>
        </ul>
       </div>
        <ul className="flex flex-row space-x-4 items-center text-white text-2xl relative">
            <li className="hover:cursor-pointer"
                onClick={handleGptSearch}>
                   { isToggleSearch ? <span className="text-3xl rounded-lg bg-black py-2 px-6 text-white">🔙</span> : <BiSearch/>}
            </li>
            <li>{
            isToggleSearch ? ( 
                <select 
                onChange={handleLanguageChange}
                className="px-4 py-3 rounded-lg opacity-70 bg-black text-white relative z-20">
                    {SUPPORTED_LANGUAGE.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.language}</option>))}
                </select>) : <BiBell/> }</li>
            <li className="flex flex-row relative"><img 
            className="w-10 "
            src={User_Profile_logo} alt="userprofilelogo"/>
            <h1 className="text-xl flex items-center pl-2">{userInfo?.displayName}</h1>
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
