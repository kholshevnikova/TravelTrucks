import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    equipment: {
      AC: false,
      kitchen: false,
      bathroom: false,
      TV: false,
    },
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipmentKey = action.payload;
      state.equipment[equipmentKey] = !state.equipment[equipmentKey];
    },
    resetFilters: (state) => {
      state.location = "";
      state.type = "";
      state.equipment = {
        AC: false,
        kitchen: false,
        bathroom: false,
        TV: false,
      };
    },
  },
});

export const { setLocation, setType, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
