// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   location: "",
//   venicleType: "",
//   equipment: {
//     AC: false,
//     kitchen: false,
//     bathroom: false,
//     TV: false,
//   },
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     setLocation: (state, action) => {
//       state.location = action.payload;
//     },
//     setVenicleType: (state, action) => {
//       state.venicleType = action.payload;
//     },
//     toggleEquipment: (state, action) => {
//       state.equipment[action.payload] = !state.equipment[action.payload];
//     },
//     resetFilters: (state) => {
//       state.location = "";
//       state.venicleType = "";
//       state.equipment = {
//         AC: false,
//         kitchen: false,
//         bathroom: false,
//         TV: false,
//       };
//     },
//   },
// });

// export const { setLocation, setVenicleType, toggleEquipment, resetFilters } =
//   filtersSlice.actions;
// export default filtersSlice.reducer;
