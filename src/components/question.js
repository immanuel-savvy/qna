import React from "react";
import { to_title } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import { client_domain, domain } from "../assets/js/utils";
import { emitter, openai } from "../Qna";
import { save_to_session } from "./practice_question";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  format_prompt = () => {
    let { question } = this.props;

    return `${question.question}

    A. ${question.options.a}
    B. ${question.options.b}
    C. ${question.options.c}
    D. ${question.options.d}
    
    Thats the problem above, I want you to give me a response based on the options and format your response in a JSON format of {option:a|b|c|d, reason: "explanation for that option in a paragraph"}
    PROVIDE NO PREAMBLE WHATSOEVER, JUST THE JSON STRING.
    `;
  };

  toggle_answer = async () => {
    // let res = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: this.format_prompt() }],
    //   model: "gpt-3.5-turbo",
    // });

    this.setState({ show_answer: !this.state.show_answer });
  };

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
          <>
            <img
              style={{ height: 300, display: "block" }}
              src={`${domain}/images/${image}`}
              className="img img-fluid img-responsive"
            />
          </>
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
    let {
      question: question_,
      admin,
      reveal_answer,
      index,
      show_options,
      answer,
      style,
      exam,
    } = this.props;

    if (!question_) return;
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
        className="ex col-md-6 col-sm-12 col-lg-4"
        style={{
          boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
          border: "none",
          ...style,
        }}
      >
        <span className="t1">
          {!show_options ? exam?.title || "Question" : `Question ${index + 1}`}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {admin ? (
            <span className="ml-5">
              <span
                style={{ cursor: "pointer" }}
                onClick={this.update_question}
              >
                <i className="material-icons-outlined">edit</i>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span
                style={{ cursor: "pointer" }}
                onClick={this.remove_question}
              >
                <i className="material-icons-outlined">close</i>
              </span>
            </span>
          ) : null}
        </span>

        <span className="Question">
          <p className="t">{question}</p>
          {image ? (
            <img src={`${domain}/images/${image}`} className="img img-fluid" />
          ) : null}
          {reveal_answer || show_options ? (
            <ol type="A">
              {this.option(options.a, aimage, answer, "a")}
              {this.option(options.b, bimage, answer, "b")}
              {this.option(options.c, cimage, answer, "c")}
              {this.option(options.d, dimage, answer, "d")}
            </ol>
          ) : null}
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
