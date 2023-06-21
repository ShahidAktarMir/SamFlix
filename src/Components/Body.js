import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col bg-gray-50">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
