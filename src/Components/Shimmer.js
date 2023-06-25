import React from "react";

const Shimmer = () => {
  return (
    <div className=" flex flex-wrap justify-center mt-10  bg-gray-50">
      {Array(50)
        .fill(null)
        .map((i, k) => (
          <div
            className=" h-[315px] w-[340px] rounded-2xl  animate-pulse  transition-all duration-500 m-2 cursor-pointer "
            key={k}
          >
            <div className=" rounded-2xl w-[340px] h-[191px]  bg-gray-300  animate-pulse "></div>

            {/* <div>
            <img
              src={
                "https://xsgames.co/randomusers/assets/avatars/female/" +
                index +
                ".jpg"
              }
              alt="profile"
              className="h-10 w-10 mr-5 rounded-full"
            />
          </div> */}
            <div className="p-2 mt-2">
              <p className="font-medium h-3 animate-pulse rounded-xl w-full bg-gray-300 mb-2"></p>
              <p className="font-medium h-3 animate-pulse  rounded-xl w-full bg-gray-200 mb-2"></p>
              <p className="font-medium h-3  animate-pulse rounded-xl w-52 bg-gray-200 mb-2"></p>
              <p className="font-medium h-3 animate-pulse rounded-xl w-32 bg-gray-200 mb-2"></p>
              <p className="font-medium h-3 rounded-xl w-20 bg-gray-200 mb-2 animate-pulse"></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
