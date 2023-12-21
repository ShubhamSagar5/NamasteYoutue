
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import React from "react";

const AboutUs = () => {
 

  return (
    <div className="  bg-gray-200 flex flex-col mx-auto md:h-[382px] md:mt-[55px] rounded-lg">
      <div className="m-5 p-2">
        <p className=" text-3xl font-bold">Hi, I'm Shubham Sagar</p>
        <p className=" text-lg font-semibold">Front End Developer</p>
        <p>
          Delighted to share my latest project, a clone of Youtube Desktop,
          built using react, redux toolkit, tailwind css and real-time youtube
          API's.
        </p>
        <p>
          <ul>
            Key features:
            <li>- Real time search suggestions (cached and debounced)</li>
            <li>- Live chat simulation (using api polling concept)</li>
            <li>
              -Infinite scroll for videos on feed, filtered lists, search
              queries, and profile videos too.
            </li>
            <li>-Shimmer effect while loading</li>
            <li>
              -Real data powered separate Profile page, search results and
              explore pages (ex. Trending) and more..
            </li>
            <li>
              -This project is a completion mark for the NAMASTE REACT course by{" "}
              <span className=" font-bold"> Akshay Saini</span> sir.
            </li>
          </ul>
        </p>
      </div>
      <div className=" m-auto">
        <a
          href="https://www.linkedin.com/in/shubham-sagar-983a35210"
          target="blank"
        >
          <button className="p-2 m-2 shadow-lg">
            <FaLinkedin size={35} />
          </button>
        </a>

        <a href="https://github.com/ShubhamSagar5"
        target="blank">
          <button className="p-2 m-2">
            <FaGithub size={35} />
          </button>
        </a>
        
      </div>
    </div>
  );
};

export default AboutUs;
