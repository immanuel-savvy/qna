import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";
import { scroll_to_top } from "./ebook";

class Practice_question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  save_to_session = (key, value) =>
    window.sessionStorage.setItem(key, JSON.stringify(value));

  render() {
    let { exam } = this.props;
    let { certificate, title, year } = exam;

    return (
      <span class="">
        <Link
          to="/vendor"
          onClick={() => {
            this.save_to_session("vendor", certificate.vendor);
            scroll_to_top();
          }}
          class="vendor"
        >
          {certificate.vendor.name}
        </Link>
        <Link
          onClick={() => this.save_to_session("exam", exam)}
          to="/take_exam"
          class="exam"
        >
          {to_title(title)}
        </Link>
        <Link
          onClick={() => this.save_to_session("certificate", certificate)}
          class="file"
        >
          {certificate.title}
        </Link>
        <Link
          style={{ color: "#000", textDecoration: "none", cursor: "none" }}
          class="file"
        >
          {year}
        </Link>
      </span>
    );
  }
}

export default Practice_question;
