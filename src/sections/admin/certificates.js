import React from "react";
import { emitter } from "../../Qna";

class Certificates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="exams">
        <p class="title">Certificates</p>
        <div class="sec">
          <div class="item">
            <span class="created">
              <p> Total Certificates: 300</p>{" "}
              <a href="ebook.html">
                View all <i class="material-icons">chevron_right</i>
              </a>
            </span>
          </div>
          <div class="item">
            <a
              onClick={() => emitter.emit("toggle_add_certificate")}
              href="#"
              class="upload"
            >
              <i class="material-icons">description</i>
              <p>Add new certificate</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
