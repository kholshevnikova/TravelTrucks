import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default campersSlice.reducer;
