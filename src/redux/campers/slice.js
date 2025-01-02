import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const vehicleTypeMap = {
  Van: "panelTruck",
  "Fully integrated": "fullyIntegrated",
  Alcove: "alcove",
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters, thunkAPI) => {
    try {
      const {
        page = 1,
        location = "",
        form = "",
        transmission = "",
        features = {},
      } = filters || {};
      const formattedForm = vehicleTypeMap[form] || form;
      const queryParams = {
        page,
        limit: 4,
        location,
        form: formattedForm,
        transmission,
      };

      Object.keys(features).forEach((key) => {
        if (features[key]) {
          queryParams[key] = true;
        }
      });
      const queryString = Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join("&");
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${queryString}`
      );
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

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
      );
      return response.data;
    } catch (error) {
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
      features: {},
      transmission: "",
    },
    selectedCampers: getFromLocalStorage("selectedCampers"),
  },
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.filters.page = 1;
      // saveToLocalStorage("filters", state.filters);
    },
    resetFilters(state) {
      state.filters = {
        page: 1,
        location: "",
        form: "",
        features: {},
        transmission: "",
      };
    },
    incrementPage(state) {
      state.filters.page += 1;
    },
    addToFavorive(state, action) {
      const camperId = action.payload;
      if (state.selectedCampers.includes(camperId)) {
        state.selectedCampers = state.selectedCampers.filter(
          (id) => id !== camperId
        );
      } else {
        state.selectedCampers.push(camperId);
      }
      saveToLocalStorage("selectedCampers", state.selectedCampers);
    },
    mergeCampers(state, action) {
      state.campers = [...state.campers, ...action.payload];
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
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = [action.payload];
      })
      .addCase(fetchCamperById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  setFilters,
  resetFilters,
  incrementPage,
  addToFavorive,
  mergeCampers,
} = campersSlice.actions;
export default campersSlice.reducer;
