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
    if (!certificate || !exam) return;

    return (
      <tr>
        <td>
          <Link
            to="/vendor"
            onClick={() => {
              save_to_session("vendor", certificate.vendor);
              scroll_to_top();
            }}
            style={{ width: 200, wordBreak: "break-word" }}
          >
            {certificate.vendor.name}
          </Link>
        </td>

        <td>
          <Link
            onClick={() => {
              save_to_session("exam", exam);
              scroll_to_top();
            }}
            to="/take_exam"
            style={{
              wordBreak: "break-all",
              wordWrap: "break-word",
              flexWrap: "wrap",
              // width: 200,
            }}
          >
            <p
              style={{
                wordBreak: "break-all",
                wordWrap: "break-word",
                flexWrap: "wrap",
              }}
            >
              {to_title(title)}
            </p>
          </Link>
        </td>
        <td>
          <Link
            to="/certificate"
            onClick={() => {
              save_to_session("certificate".certificate);
              scroll_to_top();
            }}
          >
            <p
              style={{
                wordBreak: "break-all",
                wordWrap: "break-word",
                flexWrap: "wrap",
              }}
            >
              {certificate.title}
            </p>
          </Link>
        </td>
        <td>
          <Link
            style={{ color: "#000", textDecoration: "none", cursor: "none" }}
          >
            {year}
          </Link>
        </td>

        {admin ? (
          <td>
            <Link
              onClick={(e) => {
                save_to_session("exam_question", exam);
                scroll_to_top();
              }}
              to="/add_question"
            >
              Add Question
            </Link>
          </td>
        ) : null}
      </tr>
    );
  }
}

export default Practice_question;
export { save_to_session, get_session };
