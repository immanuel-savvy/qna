import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";
import { emitter } from "../Qna";
import { scroll_to_top } from "./ebook";

const save_to_session = (key, value) =>
  window.sessionStorage.setItem(key, JSON.stringify(value));

const get_session = (key) => {
  let val = window.sessionStorage.getItem(key);
  if (val) {
    try {
      return JSON.parse(val);
    } catch (e) {}
  }
  return val;
};

class Practice_question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { exam, admin } = this.props;
    let { certificate, title, year } = exam;

    return (
      <span class="">
        <Link
          to="/vendor"
          onClick={() => {
            save_to_session("vendor", certificate.vendor);
            scroll_to_top();
          }}
        >
          {certificate.vendor.name}
        </Link>
        <Link
          onClick={() => {
            save_to_session("exam", exam);
            scroll_to_top();
          }}
          to="/take_exam"
        >
          {to_title(title)}
        </Link>
        <Link onClick={() => save_to_session("certificate", certificate)}>
          {certificate.title}
        </Link>
        <Link style={{ color: "#000", textDecoration: "none", cursor: "none" }}>
          {year}
        </Link>
        {admin ? (
          <Link
            onClick={(e) => {
              save_to_session("exam_question", exam);
              scroll_to_top();
            }}
            to="/add_question"
          >
            Add Question
          </Link>
        ) : null}
      </span>
    );
  }
}

export default Practice_question;
export { save_to_session, get_session };
