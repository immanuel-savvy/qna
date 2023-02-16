import React from "react";
import Practice_question from "../components/practice_question";

class Top_practice_questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section class="sectioniii">
        <p class="txt">Top 50 practice exams</p>
        <div class="list">
          <span class="top">
            <a class="vendor p1">Vendor</a>
            <a class="exam p1">Exam</a>
            <a class="file p1">Certifications</a>
          </span>

          <Practice_question />
          <Practice_question />
          <Practice_question />
          <Practice_question />
          <Practice_question />
          <Practice_question />
          <Practice_question />
          <Practice_question />
        </div>
      </section>
    );
  }
}

export default Top_practice_questions;
