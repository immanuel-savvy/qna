import React from "react";
import "./App.css";
import { Loggeduser } from "./contexts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

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
          </Routes>
        </BrowserRouter>
      </Loggeduser.Provider>
    );
  }
}

export default Qna;
