import React from "react";
import { domain } from "../assets/js/utils";
import { emitter } from "../Qna";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_answer = () => this.setState({ show_answer: !this.state.show_answer });

  toggle_discussions = () =>
    emitter.emit("question_discussion", this.props.question?._id || true);

  render() {
    let { question: question_ } = this.props;
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
        <span className="t1">Question 1</span>
        <span className="Question">
          <p className="t">{question}</p>
          {image ? (
            <img src={`${domain}/images/${image}`} className="img img-fluid" />
          ) : null}
          <ol type="A">
            <li>
              {options.a}{" "}
              {aimage ? (
                <img
                  src={`${domain}/images/${aimage}`}
                  className="img img-fluid"
                />
              ) : null}
            </li>
            <li>
              {options.b}
              {bimage ? (
                <img
                  src={`${domain}/images/${bimage}`}
                  className="img img-fluid"
                />
              ) : null}
            </li>
            <li>
              {options.c}
              {cimage ? (
                <img
                  src={`${domain}/images/${cimage}`}
                  className="img img-fluid"
                />
              ) : null}
            </li>
            <li>
              {options.d}
              {dimage ? (
                <img
                  src={`${domain}/images/${dimage}`}
                  className="img img-fluid"
                />
              ) : null}
            </li>
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
              <i className="material-icons">question_answer</i> Discussion
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
