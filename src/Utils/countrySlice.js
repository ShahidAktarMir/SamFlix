import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const countrySlice = createSlice({
  name: "countrySlice",
  initialState: {
    CCode: "IN",
    CountryName: "India",
  },
  reducers: {
    setCountry: (state, action) => {
      state.CCode = action.payload[0];
      state.CountryName = action.payload[1];
    },
  },
});
export const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;
