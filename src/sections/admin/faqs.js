import React from "react";
import { Link } from "react-router-dom";
import { emitter } from "../../Qna";

class FAQS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { faqs } = this.props;

    return (
      <div class="exams">
        <p class="title">FAQS</p>
        <div class="sec">
          <div class="item">
            <span class="created">
              <p> Total FAQS: {faqs}</p>{" "}
              <Link to="/faq">
                View all <i class="material-icons">chevron_right</i>
              </Link>
            </span>
          </div>
          <div class="item">
            <a
              onClick={() => emitter.emit("toggle_faq")}
              href="#"
              class="upload"
            >
              <i class="material-icons">description</i>
              <p>Add FAQ</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQS;
