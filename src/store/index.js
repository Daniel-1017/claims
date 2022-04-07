import { configureStore } from "@reduxjs/toolkit";
import claimsReducer from "./reducers/claimsReducer";

const store = configureStore({
  reducer: { claimsReducer: claimsReducer },
});

export default store;
