import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { claimActions } from "../store/claim-slice";

const Claims = () => {
  const dispatch = useDispatch();
  const claimSelector = useSelector((state) => state.claim.claim);
  // use map on claimSelector ↑

  // ↓ use the fetchClaimHandler function when you click the "submit" button
  const fetchClaimHandler = () => {
    fetch("URL")
      .then((response) => response.json())
      .then((data) => {
        return dispatch(claimActions.addClaim(data));
      });
  };

  return <h1>Claims</h1>;
};

export default Claims;
