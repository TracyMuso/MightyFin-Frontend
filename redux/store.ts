import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import loanSlice from "./loan/loanSlice";
const Allreducer = combineReducers({
  user: authSlice,
  loan: loanSlice,
  // IF ANY REDUX STATES ARE CREATED, ADD THEM HERE
});
export const store = configureStore({
  reducer: Allreducer,
});

export type IRootState = ReturnType<typeof store.getState>;
