import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { expandMenu } from "../Utils/navSlice";
import COUNTRY_CODES_ALPHA2 from "../Utils/countryCodes";
import Shimmer from "./Shimmer";
const MainContainer = () => {
  const [mpV, setMpv] = useState([]);
  const [loading, setLoading] = useState(false);
  const CC = useSelector((store) => store.country.CCode);
  const Cname = useSelector((store) => store.country.CountryName);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(expandMenu());
    getYD();
    setLoading(false);
  }, [CC]);
  const getYD = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=" +
        CC +
        "&key=AIzaSyCwanr-usSZpgIPYUnwx6bXdS7Qal7IVPo"
    );
    const json = await data.json();
    setMpv(json.items);
    setLoading(true);
  };
  return !loading ? (
    <Shimmer />
  ) : !mpV ? (
    <div className="w-screen h-screen  bg-gray-50 mt-10">
      <div className="flex justify-center">
        <p className=" mx-2 text-5xl mb-20">YouTube</p>
        <p className=" mx-2 text-5xl mb-20 font-semibold text-red-400">
          Not Available{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <p className="mx-2 text-5xl mb-20">in </p>
      </div>

      <div className="flex justify-center h-[100px]">
        <p className="text-9xl mx-10">{Cname}</p>
        <img
          src={"https://flagsapi.com/" + CC + "/flat/64.png"}
          alt="cc"
          className="h-full mt-9"
        />
      </div>
    </div>
  ) : (
    <div className=" flex flex-wrap justify-center mt-10  bg-gray-50">
      {mpV.map((items, index) => (
        <Link to={"/watch?v=" + items.id} key={items.id}>
          <VideoCard items={items} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
