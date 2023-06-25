import React from "react";
import COUNTRY_CODES_ALPHA2 from "../Utils/countryCodes";
import { useDispatch } from "react-redux";
import { setCountry } from "../Utils/countrySlice";

const Country = () => {
  const dispatch = useDispatch();
  const CC = COUNTRY_CODES_ALPHA2;
  const setCou = (cc) => {
    let cData;
    Object.entries(CC).map((c) => (c[0] == cc ? (cData = c) : null));
    dispatch(setCountry(cData));
  };
  return (
    <div className="mt-3  h-[32px] flex -ml-72">
      <select
        id="countries"
        onChange={(e) => {
          setCou(e.target.value);
        }}
        className=" bg-gray-200 rounded "
      >
        {Object.entries(CC).map((c) =>
          c[0] == "IN" ? (
            <option value={c[0]} selected key={c[0]}>
              {c[1]}
            </option>
          ) : (
            <option value={c[0]} key={c[0]} className="bg-red-100 ">
              {c[1]}
            </option>
          )
        )}
      </select>
      {/* <img src={"https://flagsapi.com/" "/flat/64.png"} alt="CC" /> */}
    </div>
  );
};

export default Country;
