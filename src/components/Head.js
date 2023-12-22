import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilis/appSlice";
import { YOUTUBE_SEARCH_API_KEY } from "../utilis/contants";
import { json, useNavigate } from "react-router-dom";
import { cacheResults } from "../utilis/SearchSlice";


const Head = () => {
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search)

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestSuggestion, setSuggestSuggestion] = useState([])
  const [showSuggetsion ,setShowSuggestion] = useState(false)


  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
     
      if(searchCache[searchQuery]){
        setSuggestSuggestion(searchCache[searchQuery])
      }else{
        //  getSearchResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResults = async () => {
    // console.log("API Call -" +searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API_KEY + searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestSuggestion(json[1])

    //update cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery){
      navigate(`/search/${searchQuery}`);
      setSearchQuery("")
    }
  }

  return (
    <div className="grid grid-flow-col p-2 md:p-5 md:m-2  shadow-lg ">
      <div className="flex col-span-4 md:col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburger icon"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-5 md:h-8 md:mx-2 cursor-pointer"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="youtube icon"
          />
        </a>
      </div>
      <div className="md:col-span-10  md:px-10">
        <div>
          <input
            className="w-1/2 px-5 border border-gray-400 p-1 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
          <button className="border border-gray-400 p-1 rounded-r-full px-5 bg-gray-100 " onClick={(e) => {
            handleSearch(e);
          }}>
            🔍
          </button>
        </div>
       {showSuggetsion &&
        <div className=" absolute  bg-white py-2 px-2 w-[32rem] rounded-lg shadow-lg border border-gray-100">
          <ul>
          {
            suggestSuggestion?.map(s =>  <li key={s} className=" py-2 shadow-sm hover:bg-gray-100 rounded-lg">🔍 {s}</li>)
          }
           


          </ul>
        </div>}
      </div>
      <div className=" md:col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="usericon" onClick={()=>{
            navigate('/about')
          }}
        />
      </div>
    </div>
  );
};

export default Head;
