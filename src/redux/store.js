import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice";
// import filtersReducer from "./filters/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "campers",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, campersReducer);

const store = configureStore({
  reducer: {
    campers: persistedContactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;

export const persistor = persistStore(store);
