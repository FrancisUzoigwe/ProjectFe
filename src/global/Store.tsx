import { configureStore } from "@reduxjs/toolkit";
import reducer from "./globalFile";

export const store = configureStore({
  reducer,
});
