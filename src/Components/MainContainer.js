import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MenuR } from "../Utils/navSliceR";
const MainContainer = () => {
  const [mpV, setMpv] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MenuR());
    getYD();
  });
  const getYD = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();
    setMpv(json.items);
  };
  console.log(mpV);
  return mpV.length == 0 ? null : (
    <div className=" flex flex-wrap justify-center mt-10  bg-gray-50">
      {mpV.map((items, index) => (
        <Link to={"/watch?v=" + items.id}>
          <VideoCard items={items} index={index} key={items.id} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
