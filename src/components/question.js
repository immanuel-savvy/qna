import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="ex">
        <span class="t1">Question 1</span>
        <span class="Question">
          <p class="t">
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
          <span class="ansdiv">
            <a class="a1" onclick="showAns()">
              Reveal solution
            </a>
            <a class="a2" onclick="openmodal()">
              <i class="material-icons">question_answer</i> Discussion
            </a>
          </span>
          <div class="answer Question" id="answer">
            <p class="t">A. Compt</p>
          </div>
        </span>
      </div>
    );
  }
}

export default Question;
