const { createSlice } = require("@reduxjs/toolkit");

const navSliceR = createSlice({
  name: "navSliceR",
  initialState: {
    isMenuR: true,
  },
  reducers: {
    collapsMenuR: (state) => {
      state.isMenuR = false;
    },
    MenuR: (state) => {
      state.isMenuR = true;
    },
  },
});
export const { collapsMenuR, MenuR } = navSliceR.actions;
export default navSliceR.reducer;
