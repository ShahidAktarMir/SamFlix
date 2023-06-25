import countrySlice from "./countrySlice";
import navSlice from "./navSlice";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: {
    nav: navSlice,
    country: countrySlice,
  },
});
export default Store;
