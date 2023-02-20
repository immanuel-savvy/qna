import React from "react";
import Stretch_btn from "./stretch_btn";

class Calculate_result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  calculate_correct_answers = () => {
    let { questions, answers } = this.props;

    let correct_answers = 0;
    Array.from(Object.keys(answers)).map((q) => {
      questions.find((qu) => {
        if (qu._id === q && qu.answer === answers[q]) correct_answers++;
      });
    });

    return correct_answers;
  };

  render() {
    let { answers, try_again } = this.props;

    return (
      <span
        style={{
          boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
          padding: 24,
          borderRadius: 10,
        }}
      >
        <h4>
          <b>Test Results</b>
        </h4>
        <span class="instructions">
          <p class="t1">
            Total Questions Answered:{" "}
            <b>{Array.from(Object.keys(answers)).length}</b>
          </p>
          <p class="t1">
            Total Correct Answers: <b>{this.calculate_correct_answers()}</b>
          </p>
        </span>

        <form class="forms mb-5">
          <Stretch_btn title="Take test again" action={try_again} />
        </form>
      </span>
    );
  }
}

export default Calculate_result;
