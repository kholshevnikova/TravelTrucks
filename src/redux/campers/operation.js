// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchCampers",
//   async (page = 1, thunkAPI) => {
//     try {
//       const response = await axios.get(`/campers?page=${page}&limit=4`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
