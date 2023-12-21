import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineMusicNote,
  MdComputer,
  MdShoppingCart,
  MdSportsCricket,
  MdSportsHockey,
  MdOutlineTrendingUp,
  MdNewspaper,
  MdLiveTv,
} from "react-icons/md";
import { RiReactjsFill, RiFootballLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { GrYoga } from "react-icons/gr";
import { BsCameraReels, BsCodeSquare, BsEmojiLaughing } from "react-icons/bs";

import { RiMovie2Fill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import MyContext from "../utilis/searchTextContext";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpenFlag);
  const {text,setText} = useContext(MyContext)
  const navigate = useNavigate()
  //Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="m-1 w-28 md:p-5 shadow-lg md:w-48 ">
      <ul className="border md:pt-1">
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer">
          <MdHomeFilled />
          <Link to={"/"}>
            {" "}
            <span className="pl-3"> Home</span>
          </Link>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "shorts";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <BsCameraReels />
          <span className="pl-3">Shorts</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "trending";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          {" "}
          <MdOutlineTrendingUp />
          <span className="pl-3">Trending</span>
        </li>
      </ul>

      {/* second list */}

      <ul className="border pt-1">
        <h1 className=" md:px-6 text-lg font-medium md:p-2 ">Explore</h1>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "News";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdNewspaper />
          <span className="pl-3">News</span>{" "}
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Reactjs";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <RiReactjsFill />
          <span className="pl-3"> Reactjs</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Live";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdLiveTv />
          <span className="pl-3"> Live</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Coding";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <BsCodeSquare />
          <span className="pl-3"> Coding</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Comedy";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <BsEmojiLaughing />
          <span className="pl-3"> Comedy</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Technology";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdComputer />
          <span className="pl-3"> Technology</span>
        </li>
      </ul>

      {/* third list */}

      <ul className="border pt-1">
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "JavaScript";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <SiJavascript />
          <span className="pl-3"> JavaScript</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Shopping";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdShoppingCart />
          <span className="pl-3"> Shopping</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Music";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdOutlineMusicNote />
          <span className="pl-3"> Music</span>
        </li>
     
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Hollywood";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <RiMovie2Fill />
          <span className="pl-3"> Hollywood</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Game";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <GrGamepad />
          <span className="pl-3"> Game</span>
        </li>
      </ul>

      {/* fourth list */}
      <ul className="border pt-1">
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Yoga";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <GrYoga />
          <span className="pl-3"> Yoga</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Cricket";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdSportsCricket />
          <span className="pl-3"> Cricket</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={(e)=>{
          const searchTerm = "Football";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <RiFootballLine />
          <span className="pl-3"> Football</span>
        </li>
        <li className="flex mt-1 md:mt-0 md:p-2 items-center md:px-6 hover:bg-gray-100 rounded-lg  cursor-pointer" onClick={(e)=>{
          const searchTerm = "Hockey";
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>
          <MdSportsHockey />
          <span className="pl-3"> Hockey</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
