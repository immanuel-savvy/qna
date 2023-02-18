import React from "react";
import { get_request } from "../assets/js/services";
import Loadindicator from "../components/loadindicator";
import Practice_question, {
  get_session,
} from "../components/practice_question";

class Top_practice_questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let exams = await get_request("exams/all");
    let admin = !!get_session("logged_admin");
    console.log(admin);

    this.setState({ exams, admin });
  };

  render() {
    let { exams, admin } = this.state;
    if (exams && !exams.length) return;

    return (
      <section class="sectioniii">
        <p class="txt">Top practice exams</p>
        <div class="list">
          <span class="top">
            <a class="p1">Vendor</a>
            <a class="p1">Exam</a>
            <a class=" p1">Certifications</a>
            <a>Year</a>

            {admin ? <a>Admin Action</a> : null}
          </span>

          {exams ? (
            exams.map((exam) => (
              <Practice_question admin={admin} exam={exam} key={exam._id} />
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
