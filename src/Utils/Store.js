import navSlice from "./navSlice";
import navSliceR from "./navSliceR";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: {
    nav: navSlice,
    navR: navSliceR,
  },
});
export default Store;
