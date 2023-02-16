import React from "react";
import { Alert } from "react-bootstrap";

const Alert_message = ({ msg, type }) => (
  <Alert className="mt-3" variant={type || "danger"}>
    {msg}
  </Alert>
);

export default Alert_message;
