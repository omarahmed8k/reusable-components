import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggle-slice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

export default store;
