import React from "react";
import { minutes_to_hours, to_title } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import { month_index } from "../assets/js/utils";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";
import Question from "../components/question";
import Stretch_btn from "../components/stretch_btn";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Take_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      page: 1,
      questions: new Array(),
    };
  }

  componentDidMount = async () => {
    let exam = get_session("exam");

    exam && this.setState({ exam });
  };

  start = async (e) => {
    e.preventDefault();

    let { exam, limit, questions: questions_array, page } = this.state;
    if (!exam) return;

    this.setState({ fetching: true, start_exam: true });
    let questions = await post_request(`exam_questions/${exam._id}`, {
      limit,
      skip: (page - 1) * limit,
    });

    questions_array = new Array(...questions_array, ...questions);
    this.setState({ questions: questions_array, fetching: false });
  };

  current_questions = (questions) => {
    let { skip, limit } = this.state;

    return questions;
  };

  render() {
    let { exam, questions, start_exam, fetching } = this.state;
    if (!exam) return <Loadindicator />;

    let { title, year, duration, updated, certificate } = exam;
    updated = new Date(updated);

    return (
      <>
        <Header />
        <main>
          <section class="sectiontop">
            <div
              class="examtitle"
              style={{
                boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
                border: "none",
              }}
            >
              <span class="top"></span>
              <small style={{ marginTop: 20 }}>{certificate.vendor.name}</small>
              <p style={{ marginTop: 10 }} class="examname">
                {to_title(title)}
              </p>

              <span class="instructions">
                <p class="t1">
                  Vendor: <b>{certificate.vendor.name}</b>
                </p>
                <p class="t1">
                  Certification: <b>{certificate.title}</b>
                </p>
                <p class="t1">
                  Duration: <b>{minutes_to_hours(duration).string}</b>
                </p>
                <p class="t1">
                  Questions last updated{" "}
                  <b>
                    <em>
                      {to_title(month_index[updated.getMonth()])}{" "}
                      {updated.getFullYear()}
                    </em>
                  </b>
                </p>
              </span>

              <form class="forms mb-5">
                {!fetching && start_exam ? null : (
                  <Stretch_btn title="start exam" action={this.start} />
                )}
              </form>
            </div>
            {start_exam ? (
              <div class="examquestions">
                {fetching ? (
                  <Loadindicator />
                ) : (
                  this.current_questions(questions).map((question) => (
                    <Question question={question} key={question._id} />
                  ))
                )}

                <a href="" class="next">
                  Next page <i class="material-icons">chevron_right</i>
                </a>
              </div>
            ) : null}
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default Take_exam;
