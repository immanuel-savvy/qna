import React from "react";
import "./App.css";
import { Loggeduser } from "./contexts";

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

const emitter = new Emitter();

class Qna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let loggeduser = window.sessionStorage.getItem("loggeduser");
    if (loggeduser) {
      try {
        this.setState({ loggeduser: JSON.parse(loggeduser) });
      } catch (e) {}
    }
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
    this.setState({ admin_logged: admin }, () => {
      window.sessionStorage.setItem("logged_admin", JSON.stringify(admin));
    });

  render() {
    let { loggeduser } = this.state;

    return (
      <Loggeduser.Provider
        value={{ loggeduser, login: this.login, logout: this.logout }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="vendor" element={<Vendor />} />
            <Route path="start_exam" element={<Start_exam />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verify_email" element={<Verify_email />} />
            <Route path="forgot_password" element={<Forgot_password />} />
            <Route path="*" element={<Page_not_found />} />
          </Routes>
        </BrowserRouter>
      </Loggeduser.Provider>
    );
  }
}

export default Qna;
export { emitter };
