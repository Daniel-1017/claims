import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addClaims } from "../store/actions/claimsActions";

const Claims = () => {
  const dispatch = useDispatch();
  const claimsSelector = useSelector((state) => state.claimsReducer.claims);

  const fetchDataHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        return dispatch(addClaims(data));
      });
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div>
      <ul>
        {claimsSelector &&
          claimsSelector.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default Claims;
