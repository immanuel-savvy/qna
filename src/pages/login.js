import React from "react";
import { Link } from "react-router-dom";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <section class="form_container">
          <h2>Login Now</h2>

          <form action="#">
            <div class="input_container">
              <p>Email*</p>
              <input type="email" placeholder="E-mail" />
            </div>

            <div class="input_container">
              <p>Password*</p>
              <input type="email" placeholder="Password" />
            </div>

            <div class="form_extra">
              <a href="#">Forgot Password?</a>
            </div>
            <br />

            <button type="submit">Login</button>
          </form>

          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </section>

        <Footer />
      </>
    );
  }
}

export default Login;
