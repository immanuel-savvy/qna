import React from "react";
import "./App.css";
import { Loggeduser } from "./contexts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Forgot_password from "./pages/forgot_password";
import Page_not_found from "./pages/404";

class Qna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { loggeduser } = this.state;

    return (
      <Loggeduser.Provider value={{ loggeduser, login: this.login }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot_password" element={<Forgot_password />} />
            <Route path="*" element={<Page_not_found />} />
          </Routes>
        </BrowserRouter>
      </Loggeduser.Provider>
    );
  }
}

export default Qna;
