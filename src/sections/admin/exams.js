import React from "react";

class Exams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="exams">
        <p class="title">Exams</p>
        <div class="sec sec2">
          <div class="item">
            <span class="created">
              <p> Exams created: 300</p>{" "}
              <a href="ebook.html">
                View all <i class="material-icons">chevron_right</i>
              </a>
            </span>
            <span class="created purchased">
              <p> Exams Taken: 250</p>{" "}
            </span>
          </div>
        </div>
        <div class="sec">
          <div class="item">
            <span class="created">
              <p> Exams created: 300</p>{" "}
              <a href="ebook.html">
                View all <i class="material-icons">chevron_right</i>
              </a>
            </span>
            <span class="created purchased">
              <p> Exams purchased: 200</p>{" "}
              <a href="ebook.html">Total Revenue: NGN 3,000,000</a>
            </span>
          </div>
          <div class="item">
            <a href="Questionupload.html" class="upload">
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
