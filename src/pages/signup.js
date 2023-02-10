import React from "react";
import { Link } from "react-router-dom";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <section class="form_container">
          <h2>Free Registration</h2>

          <form action="#">
            <div class="input_container">
              <p>Email*</p>
              <input type="email" placeholder="E-mail" />
            </div>

            <div class="input_container">
              <p>Password*</p>
              <input type="password" placeholder="Password" />
            </div>

            <div class="input_container">
              <p>Confirm Password*</p>
              <input type="password" placeholder="Password" />
            </div>

            <div class="form_extra">
              <div class="radio_container">
                <input type="radio" />
                <p>
                  I have read and accept to Exere{" "}
                  <a href="#">Exere Terms & Conditions</a>
                </p>
              </div>
            </div>

            <br />
            <button type="submit">Register Now</button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </section>

        <Footer />
      </>
    );
  }
}

export default Signup;
