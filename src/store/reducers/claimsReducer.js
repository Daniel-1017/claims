import { createReducer } from "@reduxjs/toolkit";
import { addClaims } from "../actions/claimsActions";

const initialState = { claims: [] };

const claimsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addClaims, (state, action) => {
    state.claims = action.payload;
  });
});

export default claimsReducer;
