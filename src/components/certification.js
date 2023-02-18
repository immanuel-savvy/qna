import React from "react";
import { Link } from "react-router-dom";
import { domain } from "../assets/js/utils";

class Certification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { certificate } = this.props;
    let { image, title, _id } = certificate;

    return (
      <Link
        to={`/exams?${_id}`}
        style={{
          backgroundImage: `url('${`${domain}/images/${image}`}')`,
        }}
      >
        <div class="content">
          <p style={{ textTransform: "capitalize" }}>{title}</p>
        </div>
      </Link>
    );
  }
}

export default Certification;
