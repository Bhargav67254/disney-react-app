import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.photo = action.payload.photo;
    },
    setUserLogOutState: (state) => {
      state.email = null;
      state.name = null;
      state.photo = null;
    },
  },
});

export const { setUserLogOutState, setUserLoginDetails } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export default userSlice.reducer;
