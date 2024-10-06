import { BiBell, BiCaretDown, BiCaretUp, BiSearch } from "react-icons/bi";
import { Netflix_Logo, SUPPORTED_LANGUAGE, User_Profile_logo } from "../utilis/constants";
import React, { useState } from 'react'
import DropProfile from "./DropProfile";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../Slice/searchGptSlice";
import { changeLanguage } from "../Slice/configSlice";

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
    console.log(SUPPORTED_LANGUAGE)

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }


  return (
    <div className="absolute z-20 w-screen flex justify-between py-4 px-8 bg-gradient-to-b from-black">
       <div className="flex text-white items-center">
       <img 
        className=" w-32 m-2"
        src={Netflix_Logo} alt = "netflix_logo"/>
    
        <ul className="flex flex-row space-x-4">
            <li className="">Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
       </div>
        <ul className="flex flex-row space-x-4 items-center text-white text-2xl relative">
            <li className="hover:cursor-pointer"
                onClick={handleGptSearch}>
                    <BiSearch/>
            </li>
            <li>{isToggleSearch ? ( 
                <select onChange={handleLanguageChange}
                className="p-4 bg-black text-white relative z-20">{SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>
            ))}</select>) : <BiBell/> }</li>
            <li className="flex flex-row relative"><img 
            className="w-8"
            src={User_Profile_logo} alt="userprofilelogo"/>
            <h1 className="text-sm">{userInfo?.displayName}</h1>
            <span onClick={handleDrop}>
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
