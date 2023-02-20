import React from "react";
import { minutes_to_hours, to_title } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import { month_index } from "../assets/js/utils";
import Calculate_result from "../components/calculate_result";
import Exam_countdown from "../components/exam_countdown";
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
      answers: new Object(),
    };
  }

  componentDidMount = async () => {
    let exam = get_session("exam");

    exam && this.setState({ exam });
  };

  fetch_questions = async () => {
    let { exam, no_more } = this.state;
    if (no_more) return this.setState({ page: this.state.page - 1 });

    let { limit, questions: questions_array } = this.state;
    this.setState({ fetching: true });
    let questions = await post_request(`exam_questions/${exam._id}`, {
      limit,
      skip: this.skip(),
    });

    questions_array = new Array(...questions_array, ...questions);
    this.setState({
      questions: questions_array,
      no_more: questions.length < limit,
      fetching: false,
    });
  };

  skip = (page_) => {
    let { limit, page } = this.state;
    page = typeof page_ === "number" ? page_ : page;

    return limit * (page - 1);
  };

  next = () => {
    let { questions, fetching, page } = this.state;
    if (fetching) return;

    let skip = this.skip(page + 1);
    this.setState({ page: page + 1 }, async () => {
      skip >= questions.length && (await this.fetch_questions());
    });
  };

  prev = () => {
    let { page } = this.state;
    if (page === 1) return;

    page--;
    this.setState({ page });
  };

  start = async (e) => {
    e.preventDefault();

    let { exam } = this.state;
    if (!exam) return;
    this.setState(
      { start_exam: Date.now(), calculate_result: false },
      async () =>
        await post_request("exam_taken", {
          exam: exam._id,
          certificate: exam.certificate._id,
        })
    );
    await this.fetch_questions();
  };

  current_questions = (questions) => {
    let { limit } = this.state;

    return questions.slice(this.skip(), this.skip() + limit);
  };

  stop = () => {
    this.setState({ calculate_result: true });
  };

  set_answer = async (question, answer) => {
    let { answers } = this.state;
    answers[question] = answer;
    this.setState({ answers });
  };

  render() {
    let {
      exam,
      limit,
      calculate_result,
      answers,
      page,
      questions,
      start_exam,
      fetching,
    } = this.state;
    if (!exam) return <Loadindicator />;

    let { title, duration, updated, certificate } = exam,
      skip = limit * (page - 1);
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
                  Questions last updated:{" "}
                  <b>
                    <em>
                      {to_title(month_index[updated.getMonth()])}{" "}
                      {updated.getFullYear()}
                    </em>
                  </b>
                </p>
                {!calculate_result && start_exam ? (
                  <p class="t1" style={{ textAlign: "center" }}>
                    Time Left - &nbsp;&nbsp;
                    <b>
                      <Exam_countdown now={start_exam} duration={duration} />
                    </b>
                  </p>
                ) : null}
              </span>

              {calculate_result ? (
                <Calculate_result
                  try_again={() =>
                    this.setState(
                      {
                        start_exam: Date.now(),
                        calculate_result: false,
                        questions: new Array(),
                        answers: new Object(),
                        no_more: false,
                        page: 1,
                      },
                      this.fetch_questions
                    )
                  }
                  questions={questions}
                  answers={answers}
                />
              ) : null}

              <form class="forms mb-5">
                {calculate_result ? null : fetching ? null : start_exam ? (
                  <Stretch_btn
                    title="Stop exam"
                    action={this.stop}
                    color="red"
                  />
                ) : (
                  <Stretch_btn title="start exam" action={this.start} />
                )}
              </form>
            </div>
            {start_exam ? (
              <div class="examquestions">
                {fetching ? (
                  <Loadindicator />
                ) : (
                  this.current_questions(questions).map((question, index) => (
                    <Question
                      index={skip + index}
                      question={question}
                      key={question._id}
                      exam={exam}
                      reveal_answer={calculate_result}
                      answer={answers[question._id]}
                      set_answer={this.set_answer}
                    />
                  ))
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {page === 1 ? null : (
                    <a href="#" onClick={this.prev} class="next">
                      <i class="material-icons">chevron_left</i> Prev page
                    </a>
                  )}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  {
                    <a href="#" onClick={this.next} class="next">
                      Next page <i class="material-icons">chevron_right</i>
                    </a>
                  }
                </div>
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
