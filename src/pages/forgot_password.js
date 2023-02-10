import React from "react";
import { Link } from "react-router-dom";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Forgot_password extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <section class="form_container">
          <h2>Recover Password</h2>

          <form action="#">
            <div class="input_container">
              <p>Email*</p>
              <input type="email" placeholder="E-mail" />
            </div>

            <button type="submit">Login</button>
          </form>

          <p>
            Remember password? <Link to="/login">Login</Link>
          </p>
        </section>

        <Footer />
      </>
    );
  }
}

export default Forgot_password;
