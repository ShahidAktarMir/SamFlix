import React from "react";
import { useSelector } from "react-redux";

import YouTube_ICONS from "../CustomAPI";

const Sidebar = () => {
  const { GuideSection } = YouTube_ICONS;
  const isMenu = useSelector((store) => store.nav.isMenu);
  return isMenu ? (
    <div className="w-[230px] h-full overflow-visible mt-2 px-2 font-normal bg-gray-50 ">
      <ul className="p-1">
        {GuideSection.map((menu) => (
          <li
            key={menu.id}
            className="hover:bg-gray-200 bg-gray-50 h-[42px] w-[206px]  p-[12px] flex items-center mb-2  focus:font-semibold text-center rounded-xl cursor-pointer hover:stroke-gray-900"
          >
            <svg
              height={menu.svg.height}
              viewBox={menu.svg.viewBox}
              width={menu.svg.width}
            >
              <path d={menu.path.d}></path>
            </svg>
            <p className="ml-7">{menu.name}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <ul className="bg-gray-50 ml-[6px] mt-[6px] ">
      {GuideSection.map(
        (menu, index) =>
          index < 4 && (
            <li
              key={menu.id}
              className="hover:bg-gray-200 flex flex-col items-center py-[15px]  w-[60px] rounded-md cursor-pointer hover:stroke-gray-900 "
            >
              <svg
                className="mb-1"
                height={menu.svg.height}
                viewBox={menu.svg.viewBox}
                width={menu.svg.width}
              >
                <path d={menu.path.d}></path>
              </svg>
              <p className="text-[10px] font-normal ">{menu.name}</p>
            </li>
          )
      )}
    </ul>
  );
};

export default Sidebar;
