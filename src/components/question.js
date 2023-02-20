import React from "react";
import { to_title } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import { client_domain, domain } from "../assets/js/utils";
import { emitter } from "../Qna";
import { save_to_session } from "./practice_question";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_answer = () => this.setState({ show_answer: !this.state.show_answer });

  toggle_discussions = () => {
    let { question, exam } = this.props;

    emitter.emit("question_discussion", { question, exam });
  };

  set_answer = (op) => {
    let { question, set_answer } = this.props;

    set_answer(question._id, op);
  };

  option = (option, image, answer, op) => {
    let { reveal_answer, question } = this.props;

    return (
      <li
        style={{
          cursor: "pointer",
          backgroundColor:
            reveal_answer && question.answer === op
              ? "#54c547"
              : answer === op
              ? reveal_answer
                ? "#ccc"
                : "#54c547"
              : null,
        }}
        onClick={() => this.set_answer(op)}
        className="question_option"
      >
        {option}{" "}
        {image ? (
          <img src={`${domain}/images/${image}`} className="img img-fluid" />
        ) : null}
      </li>
    );
  };

  update_question = () => {
    let { question, exam } = this.props;

    save_to_session("question", question);
    save_to_session("exam_question", exam);
    window.location.assign(`${client_domain}/add_question`);
  };

  remove_question = async () => {
    let { question } = this.props;

    if (!window.confirm("Are you sure to remove question?")) return;

    this.setState({ removed: true });
    await post_request("remove_question", {
      question: question._id,
      exam: question.exam,
    });
  };

  render() {
    let { question: question_, index, answer } = this.props;

    let {
      question,
      image,
      aimage,
      bimage,
      cimage,
      dimage,
      solution_image,
      solution,
      options,
      discussions,
      answer: q_answer,
    } = question_;
    let { show_answer, removed } = this.state;
    if (removed) return;

    return (
      <div
        className="ex"
        style={{
          boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
          border: "none",
        }}
      >
        <span className="t1">
          Question {index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="ml-5">
            <span style={{ cursor: "pointer" }} onClick={this.update_question}>
              <i className="material-icons-outlined">edit</i>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ cursor: "pointer" }} onClick={this.remove_question}>
              <i className="material-icons-outlined">close</i>
            </span>
          </span>
        </span>
        <span className="Question">
          <p className="t">{question}</p>
          {image ? (
            <img src={`${domain}/images/${image}`} className="img img-fluid" />
          ) : null}
          <ol type="A">
            {this.option(options.a, aimage, answer, "a")}
            {this.option(options.b, bimage, answer, "b")}
            {this.option(options.c, cimage, answer, "c")}
            {this.option(options.d, dimage, answer, "d")}
          </ol>
          <span className="ansdiv">
            <a
              style={{ cursor: "pointer" }}
              className="a1"
              onClick={this.toggle_answer}
            >
              {show_answer ? "Hide" : "Reveal"} solution
            </a>
            <a
              style={{ cursor: "pointer" }}
              className="a2"
              onClick={this.toggle_discussions}
            >
              <i className="material-icons">question_answer</i> Discussion{" "}
              {discussions ? `(${discussions})` : null}
            </a>
          </span>
          {show_answer ? (
            <div
              className="answer Question"
              id="answer"
              style={{ display: "flex" }}
            >
              <p className="t">
                <b>{to_title(q_answer)}: </b>
                {`${solution}`}
              </p>
              {solution_image ? (
                <img
                  src={`${domain}/images/${solution_image}`}
                  className="img img-fluid"
                />
              ) : null}
            </div>
          ) : null}
        </span>
      </div>
    );
  }
}

export default Question;
