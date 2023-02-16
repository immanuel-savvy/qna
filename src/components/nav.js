import React from "react";
import { Link } from "react-router-dom";
import { Loggeduser } from "../contexts";
import { emitter } from "../Qna";
import Question_discussion from "../sections/question_discussion";
import Sidenav from "./sidenav";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.question_discussion = (question) => this.setState({ question });

    emitter.listen("question_discussion", this.question_discussion);
  };

  componentWillUnmount = () =>
    emitter.remove_listener("question_discussion", this.question_discussion);

  handle_user = () => {
    if (this.loggeduser) {
      window.confirm("Are you sure you want to logout?") && this.logout();
    } // else window.location.assign(`${client_domain}/signup`);
  };

  toggle_sidenav = () => this.setState({ sidenav_on: !this.state.sidenav_on });

  close_discussion = () => this.setState({ question: null });

  render() {
    let { sidenav_on, question } = this.state;

    return (
      <Loggeduser.Consumer>
        {({ loggeduser, logout }) => {
          this.loggeduser = loggeduser;
          this.logout = logout;

          return (
            <>
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
                  <p>Digitalized assessment</p>
                </Link>
                <form action="">
                  <input type="search" name="" id="" placeholder="Search... " />
                  <button type="submit">
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
