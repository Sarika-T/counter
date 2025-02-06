import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userId: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    saveUserData: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      state.userData = action.payload;
    },
  },
});

export const { setUserData, saveUserData } = userSlice.actions;
export default userSlice.reducer;


  