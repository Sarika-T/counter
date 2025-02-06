import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserData";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

