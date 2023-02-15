import React from "react";
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
    let { show_answer } = this.state;

    return (
      <div className="ex">
        <span className="t1">Question 1</span>
        <span className="Question">
          <p className="t">
            A customer, Ann, has requested two custom PCs, one to be used for
            gaming and the other to be used as a virtualization workstation for
            her business. The gaming PC should support the latest games and
            gaming peripherals. The virtualization workstation should be able to
            host several production virtual machines as part of Ann's home
            business. INSTRUCTIONS - Use the tabs at the top to switch between
            the PCs. Objects should be placed on the appropriate slot/display
            areas and can only be used once. All slot/display areas should be
            filled. If at any time you would like to bring back the initial
            state of the simulation, please click the Reset All button. Select
            and Place:
          </p>
          <ol type="A">
            <li>Compt</li>
            <li>Letsyts</li>
            <li>Ellip</li>
            <li>WEQSBD</li>
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
              <p className="t">
                A. Officia ut ipsum officia aliquip. Sit excepteur nostrud et
                adipisicing consequat voluptate incididunt sit labore cupidatat
                velit ea proident. Do duis consequat anim minim enim consectetur
                aliqua ex sint.
              </p>
            </div>
          ) : null}
        </span>
      </div>
    );
  }
}

export default Question;
