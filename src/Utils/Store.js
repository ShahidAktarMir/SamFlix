import navSlice from "./navSlice";

const { configureStore } = require("@reduxjs/toolkit");

const Store = configureStore({
  reducer: {
    nav: navSlice,
  },
});
export default Store;
