import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapsMenu } from "../Utils/navSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  useEffect(() => {
    dispatch(collapsMenu());
  }, []);
  return (
    <div className="pt-2 bg-black mt-8 -ml-[32rem] w-[1250px] h-[703]">
      <iframe
        width="1250"
        height="703"
        src={"https://www.youtube.com/embed/" + videoID}
        title="I surprised my DAD with a brand new CAR @SameekshaTakke13  #fathersday #birthdaY  #tatapunch"
        frameborder="0"
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoPlay={true}
        className="-mt-2"
      ></iframe>
    </div>
  );
};

export default Watch;
