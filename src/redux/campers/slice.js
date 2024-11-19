import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters, thunkAPI) => {
    try {
      const { page = 1, location = "", form = "", features = [] } = filters;
      const query = new URLSearchParams({
        page,
        limit: 4,
        location,
        form,
        features: features.join(","),
      }).toString();

      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${query}`
      );
      // Если статус 404, возвращаем пустые данные
      if (response.status === 404) {
        return { items: [], total: 0 };
      }

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { items: [], total: 0 }; // Если 404, возвращаем пустой массив кемперов
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    total: 0,
    loading: false,
    error: null,
    filters: {
      page: 1,
      location: "",
      form: "",
      features: [],
    },
  },
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.filters.page = 1; // Скидання сторінки при зміні фільтрів
    },
    resetFilters(state) {
      state.filters = {
        page: 1,
        location: "",
        form: "",
        features: [],
      };
    },
    incrementPage(state) {
      state.filters.page += 1;
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
        if (state.filters.page > 1) {
          state.campers = [...state.campers, ...action.payload.items];
        } else {
          state.campers = action.payload.items;
        }
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetFilters, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;
