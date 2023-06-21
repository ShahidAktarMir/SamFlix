import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../Utils/constant";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  const [mpV, setMpv] = useState([]);
  useEffect(() => {
    getYD();
  }, []);
  const getYD = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();
    setMpv(json.items);
  };
  return mpV.length == 0 ? null : (
    <div className=" flex flex-wrap justify-center mt-10  bg-gray-50">
      {mpV.map((items, index) => (
        <VideoCard items={items} index={index} key={index} />
      ))}
    </div>
  );
};

export default MainContainer;
