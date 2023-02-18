import React from "react";
import { get_request } from "../assets/js/services";
import Loadindicator from "../components/loadindicator";
import Practice_question from "../components/practice_question";

class Top_practice_questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let exams = await get_request("exams/all");
    console.log(exams);
    this.setState({ exams });
  };

  render() {
    let { exams } = this.state;
    if (exams && !exams.length) return;

    return (
      <section class="sectioniii">
        <p class="txt">Top practice exams</p>
        <div class="list">
          <span class="top">
            <a class="vendor p1">Vendor</a>
            <a class="exam p1">Exam</a>
            <a class="file p1">Certifications</a>
            <a class="exam p1">Year</a>
          </span>

          {exams ? (
            exams.map((exam) => (
              <Practice_question exam={exam} key={exam._id} />
            ))
          ) : (
            <Loadindicator />
          )}
        </div>
      </section>
    );
  }
}

export default Top_practice_questions;
