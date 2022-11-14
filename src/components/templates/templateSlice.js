import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  templateItems: [],
  error: "",
  isLoading: false,
};

export const fetchData = createAsyncThunk("template/fetchData", () => {
  return axios
    .get(
      "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
    )
    .then((response) => response.data);
});

const templateSlice = createSlice({
  name: "templates",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.templateItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.templateItems = [];
      state.error = action.error.message;
    });
  },
});

export default templateSlice.reducer;
