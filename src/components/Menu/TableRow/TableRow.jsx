import React from "react";
import classes from "./TableRow.module.css";
import { FaAngleRight } from "react-icons/fa";

const TableRow = (props) => {
  return (
    <div className="p-2 d-flex border-bottom">
      <div className={classes.icon}>
        <div className={classes.icon__circle}>
          <FaAngleRight />
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h5>
            Producedby - <span>event Type</span>
          </h5>
          <p>04.08.2021 14:35 produced</p>
        </div>
        <h5>Success</h5>
        <p className="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolore quaerat obcaecati, fugit, enim dicta quod consectetur omnis
          esse, ullam autem aliquam provident nostrum pariatur. Id facilis
          dolorum tempore asperiores. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci dolore quaerat obcaecati, fugit, enim dicta
          quod consectetur omnis esse, ullam autem aliquam provident nostrum
          pariatur. Id facilis dolorum tempore asperiores.
        </p>
        <h5>+380 664 7723</h5>
      </div>
    </div>
  );
};

export default TableRow;
