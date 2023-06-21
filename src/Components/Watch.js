import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapsMenuR } from "../Utils/navSliceR";

const Watch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapsMenuR());
  });
  return <div>Watch</div>;
};

export default Watch;
