import React from "react";

const Alert_message = ({ msg, type }) => (
  <div className={`alert alert-${type || "danger"}`} role="alert">
    {msg}
  </div>
);

export default Alert_message;
