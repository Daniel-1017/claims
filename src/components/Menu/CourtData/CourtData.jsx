import React from "react";

const CourtData = () => {
  return (
    <React.Fragment>
      <h2 className="my-4">Court data</h2>

      <div className="row">
        <div className="row">
          <label
            class="col-md-4 control-label text-right"
            style={{ textAlign: "right" }}
            for="title"
          >
            Start Date in Precourt
          </label>

          <div class="col-md-8 ng-binding">2021-09-20</div>

          <label
            class="col-md-4 control-label text-right"
            style={{ textAlign: "right" }}
            for="title"
          >
            Start Date in Precourt Start Date in Precourt Start Date in Precourt
          </label>

          <div class="col-md-8 ng-binding">2021-09-20</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourtData;
