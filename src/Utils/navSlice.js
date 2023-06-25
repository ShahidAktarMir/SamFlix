const { createSlice } = require("@reduxjs/toolkit");

const navSlice = createSlice({
  name: "navSlice",
  initialState: {
    isMenu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenu = !state.isMenu;
    },
    collapsMenu: (state) => {
      state.isMenu = false;
    },
    expandMenu: (state) => {
      state.isMenu = true;
    },
  },
});
export const { toggleMenu, collapsMenu, expandMenu } = navSlice.actions;
export default navSlice.reducer;
