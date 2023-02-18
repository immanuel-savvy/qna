import React from "react";
import "../assets/css/add_questions.css";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Add_question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <main>
          <section class="sectionaa1" style={{ display: "flex" }}>
            <p class="title">Upload a Question</p>
            <form action="">
              <span class="sp">
                <label for="">Exam Title</label>
                <input type="text" placeholder="Enter your exam title" />
              </span>
              <span class="sp">
                <label for="">Full Question</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter full question"
                ></textarea>
              </span>
              <span class="sp">
                <label for="">Options</label>
                <input type="text" placeholder="Option 1" />
                <input type="text" placeholder="Option 2" />
                <input type="text" placeholder="Option 3" />
                <input type="text" placeholder="Option 4" />
              </span>
              <span class="sp">
                <label for="">
                  Solution <h6>(Ensure accuracy*)</h6>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter full solution..."
                ></textarea>
              </span>
              <button type="submit">Create Question</button>
            </form>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Add_question;
