import React from "react";
import { Link } from "react-router-dom";

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
          <span class="">
            <Link to="/vendor" class="vendor">
              Microsoft
            </Link>
            <Link to="/start_exam" class="exam">
              DOY24
            </Link>
            <Link class="file">MCSE</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              Comptia
            </Link>
            <Link to="/start_exam" class="exam">
              SLL23
            </Link>
            <Link class="file">Comptia Security Master</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              AMAZON
            </Link>
            <Link to="/start_exam" class="exam">
              3000
            </Link>
            <Link class="file">AWS Certified Expert</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              Microsoft
            </Link>
            <Link to="/start_exam" class="exam">
              DOY24
            </Link>
            <Link class="file">MCSE</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              Comptia
            </Link>
            <Link to="/start_exam" class="exam">
              SLL23
            </Link>
            <Link class="file">Comptia Security Master</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              AMAZON
            </Link>
            <Link to="/start_exam" class="exam">
              3000
            </Link>
            <Link class="file">AWS Certified Expert</Link>
          </span>{" "}
          <span class="">
            <Link to="/vendor" class="vendor">
              Microsoft
            </Link>
            <Link to="/start_exam" class="exam">
              DOY24
            </Link>
            <Link class="file">MCSE</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              Comptia
            </Link>
            <Link to="/start_exam" class="exam">
              SLL23
            </Link>
            <Link class="file">Comptia Security Master</Link>
          </span>
          <span class="">
            <Link to="/vendor" class="vendor">
              AMAZON
            </Link>
            <Link to="/start_exam" class="exam">
              3000
            </Link>
            <Link class="file">AWS Certified Expert</Link>
          </span>
        </div>
      </section>
    );
  }
}

export default Top_practice_questions;
