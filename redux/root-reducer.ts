import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./features/rtkQuery/authApi";
import authSlice from './features/auth/slices';


const rootReducer = combineReducers({
  // Add your regular slice reducers
  [authSlice.name]: authSlice,
  user: authSlice,

  // Add RTK Query reducers
  [api.reducerPath]: api.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
