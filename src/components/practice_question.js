import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";
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
};

class Practice_question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { exam } = this.props;
    let { certificate, title, year } = exam;

    return (
      <span class="">
        <Link
          to="/vendor"
          onClick={() => {
            save_to_session("vendor", certificate.vendor);
            scroll_to_top();
          }}
          class="vendor"
        >
          {certificate.vendor.name}
        </Link>
        <Link
          onClick={() => {
            save_to_session("exam", exam);
            scroll_to_top();
          }}
          to="/take_exam"
          class="exam"
        >
          {to_title(title)}
        </Link>
        <Link
          onClick={() => save_to_session("certificate", certificate)}
          // class="file"
        >
          {certificate.title}
        </Link>
        <Link
          style={{ color: "#000", textDecoration: "none", cursor: "none" }}
          // class="file"
        >
          {year}
        </Link>
      </span>
    );
  }
}

export default Practice_question;
export { save_to_session, get_session };
