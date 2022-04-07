import { createSlice } from "@reduxjs/toolkit";

const initialState = { claim: [] };

const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    addClaim(state, action) {
      state.claim = action.payload;
    },
  },
});

export const claimActions = claimSlice.actions;

export default claimSlice.reducer;
