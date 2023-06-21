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
  },
});
export const { toggleMenu } = navSlice.actions;
export default navSlice.reducer;
