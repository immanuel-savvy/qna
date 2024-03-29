import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loggeduser, Logged_admin, Nav_context } from "./contexts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Forgot_password from "./pages/forgot_password";
import Page_not_found from "./pages/404";
import Start_exam from "./pages/start_exam";
import Vendor from "./pages/vendor";
import FAQ from "./pages/faq";
import Verify_email from "./pages/verify_email";
import Emitter from "semitter";
import { client_domain } from "./assets/js/utils";
import Forum from "./pages/forum";
import Ebook from "./pages/ebook";
import Ebooks from "./pages/ebooks";
import Take_exam from "./pages/take_exam";
import Admin from "./pages/admin";
import { get_request, post_request } from "./assets/js/services";
import Certificate from "./pages/certificate";
import Exams_search_result from "./pages/exams_search_result";
import Add_question from "./components/add_question";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_AI_KEY,
  dangerouslyAllowBrowser: true,
});

const emitter = new Emitter();

class Qna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let loggeduser = window.sessionStorage.getItem("loggeduser");
    if (loggeduser) {
      try {
        this.setState({ loggeduser: JSON.parse(loggeduser) });
      } catch (e) {}
    }
    let vendors = (await get_request("vendors/all")) || new Array();

    this.setState({ vendors });

    await post_request("site_visit");
  };

  logout = () =>
    this.setState({ loggeduser: null }, () => {
      window.sessionStorage.removeItem("loggeduser");
      window.location.assign(client_domain);
    });

  restore_loggeduser = (loggeduser) =>
    this.setState({ loggeduser }, () =>
      window.sessionStorage.setItem("loggeduser", JSON.stringify(loggeduser))
    );

  login = (user, no_redirect) =>
    this.setState({ loggeduser: user }, () => {
      window.sessionStorage.setItem("loggeduser", JSON.stringify(user));

      if (no_redirect) return;

      let red = window.sessionStorage.getItem("redirect");

      window.sessionStorage.removeItem("redirect");
      window.location.assign(red || client_domain);
    });

  log_admin = (admin) =>
    this.setState({ admin }, () => {
      window.sessionStorage.setItem("logged_admin", JSON.stringify(admin));
    });

  admin_logout = () => {
    this.setState({ admin: false }, () =>
      window.sessionStorage.removeItem("logged_admin")
    );
  };

  render() {
    let { loggeduser, admin, vendors } = this.state;

    return (
      <Logged_admin.Provider
        value={{
          logout: this.admin_logout,
          admin,
          admin_login: this.log_admin,
        }}
      >
        <Loggeduser.Provider
          value={{ loggeduser, login: this.login, logout: this.logout }}
        >
          <Nav_context.Provider value={{ vendors }}>
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="forum" element={<Forum />} />
                <Route path="certificate" element={<Certificate />} />
                <Route path="ebook" element={<Ebook />} />
                <Route path="ebooks" element={<Ebooks />} />
                <Route path="take_exam" element={<Take_exam />} />
                <Route
                  path="exams_search_result"
                  element={<Exams_search_result />}
                />
                <Route path="vendor" element={<Vendor />} />
                <Route path="add_question" element={<Add_question />} />
                <Route path="start_exam" element={<Start_exam />} />
                <Route path="admin" element={<Admin />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="verify_email" element={<Verify_email />} />
                <Route path="forgot_password" element={<Forgot_password />} />
                <Route path="*" element={<Page_not_found />} />
              </Routes>
            </BrowserRouter>
          </Nav_context.Provider>
        </Loggeduser.Provider>
      </Logged_admin.Provider>
    );
  }
}

export default Qna;
export { emitter, openai };
