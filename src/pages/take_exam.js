import React from "react";
import Question from "../components/question";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Take_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section class="sectiontop">
            <div class="examtitle">
              <span class="top"></span>
              <p class="examname">Microsoft exam 0224</p>
              <span class="instructions">
                <p class="t1">Questions last updated November 2022</p>
              </span>
            </div>
            <div class="examquestions">
              <Question />
              <Question />
              <Question />
              <Question />
              <Question />
              <Question />
              <Question />

              <a href="" class="next">
                Next page <i class="material-icons">chevron_right</i>
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default Take_exam;
