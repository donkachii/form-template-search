import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./components/templates/templateSlice";
import { myCustomApiService } from "./api/myCustomApiService";

export const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});
