import React from "react";
import { Alert } from "react-bootstrap";
import { sentence_case } from "../assets/js/functions";

const Alert_message = ({ msg, type }) => (
  <Alert className="mt-3" variant={type || "danger"}>
    {sentence_case(msg)}
  </Alert>
);

export default Alert_message;
