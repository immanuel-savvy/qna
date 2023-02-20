import React from "react";
import { domain } from "../assets/js/utils";
import { emitter } from "../Qna";

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
    return (
      <li
        style={{
          cursor: "pointer",
          backgroundColor: answer === op ? "#54c547" : null,
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
    } = question_;
    let { show_answer } = this.state;

    return (
      <div
        className="ex"
        style={{
          boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
          border: "none",
        }}
      >
        <span className="t1">Question {index + 1}</span>
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
              <p className="t">{solution}</p>
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
