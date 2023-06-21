import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col bg-gray-50">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
