import React from "react";
import { Link } from "react-router-dom";

class Practice_question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <span class="">
        <Link to="/vendor" class="vendor">
          Microsoft
        </Link>
        <Link to="/start_exam" class="exam">
          DOY24
        </Link>
        <Link class="file">MCSE</Link>
      </span>
    );
  }
}

export default Practice_question;
