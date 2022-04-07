import { configureStore } from "@reduxjs/toolkit";
import claimSlice from "./claim-slice";

const store = configureStore({
  reducer: { claim: claimSlice },
});

export default store;
