import React from "react";
import "../assets/css/add_questions.css";
import { post_request } from "../assets/js/services";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Alert_message from "./alert_msg";
import { scroll_to_top } from "./ebook";
import Handle_file_upload from "./handle_file";
import Loadindicator from "./loadindicator";
import { get_session } from "./practice_question";
import Stretch_btn from "./stretch_btn";

class Add_question extends Handle_file_upload {
  constructor(props) {
    super(props);

    this.state = {};
  }

  is_set = () => {
    let { optiona, optionb, optionc, optiond, question, solution } = this.state;

    return optiona && optionb && optionc && optiond && question && solution;
  };

  componentDidMount = () => {
    let exam = get_session("exam_question");
    if (exam) this.setState({ exam });
    else window.history.go(-1);
  };

  add_question = async () => {
    let {
      optiona,
      optionb,
      aimage,
      bimage,
      cimage,
      dimage,
      image,
      solution_image,
      optionc,
      optiond,
      exam,
      question,
      solution,
    } = this.state;
    this.setState({ loading: true });

    let exam_question = {
      question,
      solution,
      options: {
        a: optiona,
        b: optionb,
        c: optionc,
        d: optiond,
      },
      aimage,
      bimage,
      cimage,
      dimage,
      image,
      solution_image,
      exam: exam._id,
    };

    let result = await post_request("add_question", exam_question);

    if (result && result._id) {
      exam_question._id = result._id;
      exam_question.created = result.created;

      this.reset_state();
    } else
      this.setState({
        loading: false,
        message: "Cannot add question at the moment",
        type: null,
      });
  };

  reset_state = () => {
    this.setState(
      {
        question: "",
        solution: "",
        optiona: "",
        optionc: "",
        optionb: "",
        optiond: "",
        aimage: null,
        bimage: null,
        cimage: null,
        dimage: null,
        solution_image: null,
        image: null,
        loading: false,
        aimage_filename: null,
        bimage_filename: null,
        cimage_filename: null,
        dimage_filename: null,
        solution_image_filename: null,
        image_filename: null,
        loading: false,
        message: "Question added succesfully!",
        type: "success",
      },
      scroll_to_top()
    );
  };

  render() {
    let {
      exam,
      loading,
      optiona,
      optionb,
      optionc,
      optiond,
      solution,
      question,
      message,
      type,
    } = this.state;
    if (!exam) return <Loadindicator />;

    let { title } = exam;
    return (
      <>
        <Header />

        <main>
          <section class="sectionaa1" style={{ display: "flex" }}>
            <p class="title">Upload a Question</p>
            <form action="">
              <span class="sp">
                <label for="">Exam Title</label>
                <input
                  value={title}
                  disabled
                  type="text"
                  placeholder="Enter your exam title"
                />
              </span>
              <span class="sp">
                <label for="">
                  Full Question <span className="text-dangeer">*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  value={question}
                  onChange={({ target }) =>
                    this.setState({ question: target.value })
                  }
                  cols="30"
                  rows="10"
                  placeholder="Enter full question"
                ></textarea>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "image")}
                />
              </span>
              <span class="sp">
                <label for="">
                  Options <span className="text-dangeer">*</span>
                </label>
                <label for="">
                  <small>
                    Option A <span className="text-dangeer">*</span>
                  </small>
                </label>
                <input
                  type="text"
                  placeholder="Option A"
                  value={optiona}
                  onChange={({ target }) =>
                    this.setState({ optiona: target.value })
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "aimage")}
                />
                <label for="">
                  <small>
                    Option B <span className="text-dangeer">*</span>
                  </small>
                </label>
                <input
                  type="text"
                  placeholder="Option B"
                  value={optionb}
                  onChange={({ target }) =>
                    this.setState({ optionb: target.value })
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "bimage")}
                />
                <label for="">
                  <small>
                    Option C <span className="text-dangeer">*</span>
                  </small>
                </label>
                <input
                  type="text"
                  placeholder="Option C"
                  value={optionc}
                  onChange={({ target }) =>
                    this.setState({ optionc: target.value })
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "cimage")}
                />
                <label for="">
                  <small>
                    Option D <span className="text-dangeer">*</span>
                  </small>
                </label>
                <input
                  type="text"
                  placeholder="Option D"
                  value={optiond}
                  onChange={({ target }) =>
                    this.setState({ optiond: target.value })
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "dimage")}
                />
              </span>
              <span class="sp">
                <label for="">
                  Solution <h6>(Ensure accuracy*)</h6>
                </label>
                <textarea
                  name=""
                  value={solution}
                  onChange={({ target }) =>
                    this.setState({ solution: target.value })
                  }
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter full solution..."
                ></textarea>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "solution_image")}
                />
              </span>
              {message ? <Alert_message msg={message} type={type} /> : null}
              <Stretch_btn
                action={this.add_question}
                title="Add Question"
                disabled={!this.is_set()}
                loading={loading}
              />
            </form>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Add_question;