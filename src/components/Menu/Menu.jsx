import React from "react";
import History from "./History/History";
import Payments from "./Payments/Payments";
import CourtData from "./CourtData/CourtData";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <div className="container">
        <div className={classes.menu__inner}>
          <div className={classes.menu__navigation}>
            <button className={classes["menu__navigation--btn"]}>
              History
            </button>
            <button className={classes["menu__navigation--btn"]}>
              Payments
            </button>
            <button className={classes["menu__navigation--btn"]}>
              Court data
            </button>
          </div>
        </div>

        <Payments />
        {/* <CourtData /> */}
        <History />
      </div>
    </div>
  );
};

export default Menu;
