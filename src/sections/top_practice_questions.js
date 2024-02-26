import React from "react";
import { get_request } from "../assets/js/services";
import { Table } from "react-bootstrap";
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

    this.setState({ exams, admin });
  };

  render() {
    let { exams, admin } = this.state;
    if (exams && !exams.length) return;

    return (
      <section class="sectioniii">
        <p class="txt">Top practice exams</p>
        <Table
          style={{ width: "100%", textAlign: "center" }}
          className="result_table"
          striped
          bordered
          hover
          responsive
        >
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Exam</th>
              <th>Certifications</th>
              <th></th>
              {admin ? <th>Admin Action</th> : null}
            </tr>
          </thead>

          <tbody>
            {exams ? (
              exams.length ? (
                exams.map((exam) => (
                  <Practice_question admin={admin} exam={exam} key={exam._id} />
                ))
              ) : (
                <></>
              )
            ) : (
              <Loadindicator />
            )}
          </tbody>
        </Table>
      </section>
    );
  }
}

export default Top_practice_questions;
