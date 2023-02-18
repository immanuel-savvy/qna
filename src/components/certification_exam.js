import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";

const scroll_to_top = () => window.scrollTo({ top: 0, behavior: "smooth" });

class Certification_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { index, exam } = this.props;
    let { title, exams, year, certificate, questions } = exam;

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
          <small>Questions</small>
          <p>{questions || 0}</p>
        </div>
        <div class="table_active_item">
          <small>Vendor</small>
          <Link
            onClick={() => {
              window.sessionStorage.setItem(
                "vendor",
                JSON.stringify(certificate.vendor)
              );
              scroll_to_top();
            }}
            to="/vendor"
          >
            {certificate.vendor.name}
          </Link>
        </div>
      </div>
    );
  }
}

export default Certification_exam;
