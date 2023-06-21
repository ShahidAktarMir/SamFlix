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
  },
});
export const { toggleMenu, collapsMenu, collapsMenuOff } = navSlice.actions;
export default navSlice.reducer;
