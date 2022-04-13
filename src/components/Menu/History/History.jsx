import React from "react";
import Sms from "./SMS/Sms";
import classes from "./History.module.css";

const History = () => {
  return (
    <React.Fragment>
      <h2 className="my-4">History</h2>
      <div className="border">
        <div className="d-flex justify-content-between p-3 border-bottom">
          <div>
            <button className={classes["history__navigation--btn"]}>All</button>
            <button className={classes["history__navigation--btn"]}>SMS</button>
          </div>
          <button className={classes["history__navigation--btn"]}>
            Refresh
          </button>
        </div>
        <Sms />
      </div>
    </React.Fragment>
  );
};

export default History;
