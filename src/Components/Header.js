import React from "react";
import YouTube_ICONS from "../CustomAPI";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/navSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Country from "./Country";

const Header = () => {
  const { HeadersSection } = YouTube_ICONS;
  const CC = useSelector((store) => store.country.CCode);

  const dispatch = useDispatch();
  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap w-[250px]">
        <div className="hover:bg-gray-200 h-[40px] w-[40px] ml-[15px] mt-2 rounded-full flex justify-center">
          <svg
            onClick={() => toggleMenuHandeler()}
            className="cursor-pointer m-auto "
            height={HeadersSection.toggleMenu.svg.height}
            viewBox={HeadersSection.toggleMenu.svg.viewBox}
            width={HeadersSection.toggleMenu.svg.width}
          >
            <path d={HeadersSection.toggleMenu.path.d}></path>
          </svg>
        </div>
        <Link to="/">
          <div className="mt-[18px] ml-[18px] ">
            <svg height="20" viewBox="0 0 90 20" width="90">
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                fill="#FF0000"
              ></path>
              <path
                d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </Link>
        <Link to="/">
          <p className="font-semibold mt-[15px] -ml-14 ">ShahidFlix</p>
        </Link>
      </div>
      <Country />
      <div className="flex justify-center h-[50px] w-[64px] -ml-64  mt-1 animate-pulse">
        <img
          src={"https://flagsapi.com/" + CC + "/flat/64.png"}
          alt="cc"
          className="h-full"
        />
      </div>
      <div className="flex mt-[10px] ">
        <input
          id="search"
          name="search_query"
          type="text"
          placeholder="Search"
          aria-label="Search"
          aria-haspopup="false"
          aria-autocomplete="list"
          dir="ltr"
          className="w-[540px] rounded-l-full shadow-md px-5"
        />
        <button className="bg-gray-100 w-[64px] h-[40px] flex justify-center items-center rounded-r-full  hover:bg-gray-200 shadow-md">
          <svg
            height={HeadersSection.seacrhIcon.svg.height}
            width={HeadersSection.seacrhIcon.svg.width}
            viewBox={HeadersSection.seacrhIcon.svg.viewBox}
          >
            <path d={HeadersSection.seacrhIcon.path.d}></path>
          </svg>
        </button>
      </div>

      <div className=" mt-2 rounded-full flex justify-center">
        <svg
          className="cursor-pointer m-auto mx-5  mr-8"
          height={HeadersSection.creteIcon.svg.height}
          viewBox={HeadersSection.creteIcon.svg.viewBox}
          width={HeadersSection.creteIcon.svg.width}
        >
          <path d={HeadersSection.creteIcon.path.d}></path>
        </svg>

        <svg
          className="cursor-pointer m-auto mr-24"
          height={HeadersSection.notiIcon.svg.height}
          viewBox={HeadersSection.notiIcon.svg.viewBox}
          width={HeadersSection.notiIcon.svg.width}
        >
          <path d={HeadersSection.notiIcon.path.d}></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
