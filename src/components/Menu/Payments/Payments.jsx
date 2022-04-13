import React from "react";

const Payments = () => {
  return (
    <React.Fragment>
      <h2 className="my-4">Payments history</h2>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th className="h3">Payment data</th>
            <th className="h3">Payment sum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="h4">TOTAL</th>
            <td className="h4">0.00</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Payments;
