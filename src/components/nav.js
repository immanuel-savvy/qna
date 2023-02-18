import React from "react";
import { Link } from "react-router-dom";
import { Loggeduser } from "../contexts";
import { emitter } from "../Qna";
import Question_discussion from "../sections/question_discussion";
import Add_certificate from "./add_certificate";
import Create_exam from "./create_exam";
import Add_new_vendor from "./add_new_vendor";
import Sidenav from "./sidenav";
import Upload_ebook from "./upload_ebook";
import { save_to_session } from "./practice_question";
import { client_domain } from "../assets/js/utils";
import Add_question from "./add_question";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.question_discussion = (question) => this.setState({ question });
    this.toggle_questions_upload = (exam) => this.setState({ exam });
    this.toggle_add_vendor = () =>
      this.setState({ add_vendor: !this.state.add_vendor });
    this.toggle_create_exam = () =>
      this.setState({ create_exam: !this.state.create_exam });
    this.toggle_add_certificate = () =>
      this.setState({ add_certificate: !this.state.add_certificate });
    this.toggle_upload_ebook = () =>
      this.setState({ upload_ebook: !this.state.upload_ebook });

    emitter.listen("toggle_questions_upload", this.toggle_questions_upload);
    emitter.listen("toggle_add_vendor", this.toggle_add_vendor);
    emitter.listen("toggle_create_exam", this.toggle_create_exam);
    emitter.listen("toggle_add_certificate", this.toggle_add_certificate);
    emitter.listen("toggle_upload_ebook", this.toggle_upload_ebook);
    emitter.listen("question_discussion", this.question_discussion);
  };

  componentWillUnmount = () => {
    emitter.remove_listener(
      "toggle_add_certificate",
      this.toggle_add_certificate
    );
    emitter.remove_listener("toggle_add_vendor", this.toggle_add_vendor);
    emitter.remove_listener(
      "toggle_questions_upload",
      this.toggle_questions_upload
    );
    emitter.remove_listener("toggle_create_exam", this.toggle_create_exam);
    emitter.remove_listener("toggle_upload_ebook", this.toggle_upload_ebook);
    emitter.remove_listener("question_discussion", this.question_discussion);
  };

  handle_user = () => {
    if (this.loggeduser) {
      window.confirm("Are you sure you want to logout?") && this.logout();
    } // else window.location.assign(`${client_domain}/signup`);
  };

  toggle_sidenav = () => this.setState({ sidenav_on: !this.state.sidenav_on });

  close_discussion = () => this.setState({ question: null });

  search = async (e) => {
    e.preventDefault();

    let { query } = this.state;
    if (!query) return;

    save_to_session("query", query);
    window.location.assign(`${client_domain}/exams_search_result`);
  };

  render() {
    let {
      sidenav_on,
      question,
      create_exam,
      add_certificate,
      add_vendor,
      upload_ebook,
      exam,
    } = this.state;

    return (
      <Loggeduser.Consumer>
        {({ loggeduser, logout }) => {
          this.loggeduser = loggeduser;
          this.logout = logout;

          return (
            <>
              {upload_ebook ? (
                <Upload_ebook toggle={this.toggle_upload_ebook} />
              ) : null}
              {exam ? (
                <Add_question exam={exam} toggle={this.toggle_upload_ebook} />
              ) : null}
              {create_exam ? (
                <Create_exam toggle={this.toggle_create_exam} />
              ) : null}
              {add_certificate ? (
                <Add_certificate toggle={this.toggle_add_certificate} />
              ) : null}
              {add_vendor ? (
                <Add_new_vendor toggle={this.toggle_add_vendor} />
              ) : null}
              {question ? (
                <Question_discussion
                  toggle={this.close_discussion}
                  question={question}
                />
              ) : null}
              {sidenav_on ? <Sidenav /> : null}
              <nav>
                <Link to="/" className="logo">
                  <h1>QNA.</h1>
                  <p>Digitalised assessment</p>
                </Link>
                <form action="">
                  <input
                    onChange={({ target }) =>
                      this.setState({ query: target.value })
                    }
                    type="search"
                    name=""
                    id=""
                    placeholder="Search... "
                  />
                  <button type="submit" onClick={this.search}>
                    <i className="material-icons">search</i>
                  </button>
                </form>
                <span className="icons">
                  <Link
                    to={loggeduser ? null : "/signup"}
                    onClick={this.handle_user}
                    className="signup spp"
                  >
                    <i className="material-icons-outlined">person</i>{" "}
                    {loggeduser ? "" : "Sign Up"}
                  </Link>
                </span>
                <i className="material-icons s">search</i>
                <i
                  onClick={this.toggle_sidenav}
                  className="material-icons i"
                  style={{ cursor: "pointer" }}
                  id="i"
                >
                  {sidenav_on ? "close" : "menu"}
                </i>
              </nav>
            </>
          );
        }}
      </Loggeduser.Consumer>
    );
  }
}

export default Nav;
