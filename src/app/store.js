import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/slice/slice";

export const store = configureStore({
  reducer,
});
