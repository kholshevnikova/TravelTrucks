import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  equipment: [],
  favorites: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleEquipment(state, action) {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    addFavorites(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorites(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    resetFilters(state) {
      state.location = "";
      state.vehicleType = "";
      state.equipment = [];
      state.favorites = [];
    },
  },
});

export const {
  setLocation,
  setVehicleType,
  toggleEquipment,
  resetFilters,
  addFavorites,
  removeFavorites,
} = filtersSlice.actions;
export default filtersSlice.reducer;
