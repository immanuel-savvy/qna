import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";
import { scroll_to_top } from "./ebook";
import { save_to_session } from "./practice_question";

class Vendor_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { index, exam } = this.props;
    let { title, year, certificate } = exam;

    return (
      <div
        class="table_active"
        style={index % 2 ? null : { backgroundColor: "#fff" }}
      >
        <div class="table_active_item">
          <small>Exam</small>
          <Link onClick={scroll_to_top} to="/take_exam">
            <span>{to_title(title)}</span>
          </Link>
        </div>
        <div class="table_active_item">
          <small>Year</small>
          <a href="#">{year}</a>
        </div>
        <div class="table_active_item">
          <small>Certificate</small>
          <Link
            to="/certificate"
            onClick={() => {
              save_to_session("certificate".certificate);
              scroll_to_top();
            }}
          >
            {certificate.title}
          </Link>
        </div>
      </div>
    );
  }
}

export default Vendor_exam;