import React from "react";

function Alerts(props) {
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert.atype} : </strong>
          {props.alert.msg}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}
export default Alerts;
