import React from "react";
import { Link } from "react-router-dom";

class Certification_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { index } = this.props;

    return (
      <div
        class="table_active"
        style={index % 2 ? null : { backgroundColor: "#fff" }}
      >
        <div class="table_active_item">
          <small>Exam</small>
          <Link to="/take_exam">220-1002</Link>
        </div>
        <div class="table_active_item">
          <small>Questions</small>
          <a href="#">11</a>
        </div>
        <div class="table_active_item">
          <small>Title</small>
          <p>CompTIA A+ Certification Exam: Core 2</p>
        </div>
      </div>
    );
  }
}

export default Certification_exam;
