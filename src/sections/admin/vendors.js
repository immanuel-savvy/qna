import React from "react";
import { emitter } from "../../Qna";

class Vendors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { vendors } = this.props;

    return (
      <div class="exams">
        <p class="title">Vendors</p>
        <div class="sec">
          <div class="item">
            <span class="created">
              <p> Total Vendors: {vendors}</p>{" "}
              <a href="ebook.html">
                View all <i class="material-icons">chevron_right</i>
              </a>
            </span>
          </div>
          <div class="item">
            <a
              onClick={() => emitter.emit("toggle_add_vendor")}
              href="#"
              class="upload"
            >
              <i class="material-icons">description</i>
              <p>Add new Vendor</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Vendors;
