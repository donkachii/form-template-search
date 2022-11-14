import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./components/templates/templateSlice";

export const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});
