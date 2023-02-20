import React from "react";
import { emitter } from "../../Qna";

class Exams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { exams, exams_taken } = this.props;
    return (
      <div class="exams">
        <p class="title">Exams</p>
        <div class="sec sec2">
          <div class="item">
            <span class="created">
              <p> Exams created: {exams}</p>{" "}
              <a href="ebook.html">
                View all <i class="material-icons">chevron_right</i>
              </a>
            </span>
            <span class="created purchased">
              <p> Exams Taken: {exams_taken}</p>{" "}
            </span>
          </div>
        </div>
        <div class="sec">
          <div class="item">
            <a
              onClick={() => emitter.emit("toggle_create_exam")}
              href="#"
              class="upload"
            >
              <i class="material-icons">description</i>
              <p>Create new exam</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Exams;
