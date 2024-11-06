import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: null,
    page: 1,
    total: 0,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = [...state.campers, ...action.payload.items];
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { incrementPage } = campersSlice.actions;
export default campersSlice.reducer;
