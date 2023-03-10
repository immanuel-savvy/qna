import React from "react";
import { Link } from "react-router-dom";
import { email_regex } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import Alert_message from "../components/alert_msg";
import Stretch_btn from "../components/stretch_btn";
import { Loggeduser } from "../contexts";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { password: "" };
  }

  is_set = () => {
    let { email, fullname, password, message, confirm_password, confirm } =
      this.state;

    return (
      email_regex.test(email) &&
      password.trim() &&
      password === confirm_password &&
      confirm &&
      fullname &&
      !message
    );
  };

  signup = async (e) => {
    e.preventDefault();

    let { email, fullname, password, loading } = this.state;
    if (loading) return;

    this.setState({ loading: true });

    let user = { email, fullname, password };
    let res = await post_request("signup", user);

    if (!res._id) return this.setState({ message: res, loading: false });

    user._id = res._id;
    user.created = res.created;
    delete user.password;

    document.getElementById("click_verify").click();
  };

  render() {
    let { email, message, loading } = this.state;

    return (
      <Loggeduser.Consumer>
        {({ login }) => {
          this.login = login;
          return (
            <>
              <Header />

              <section class="form_container">
                <h2>Free Registration</h2>

                <form action="#">
                  <div class="input_container">
                    <p>Email*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({ email: target.value, message: "" })
                      }
                      type="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div class="input_container">
                    <p>Fullname*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({ fullname: target.value, message: "" })
                      }
                      placeholder="Fullname"
                    />
                  </div>

                  <div class="input_container">
                    <p>Password*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({ password: target.value, message: "" })
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div class="input_container">
                    <p>Confirm Password*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          confirm_password: target.value,
                          message: "",
                        })
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div class="form_extra">
                    <div class="radio_container">
                      <label for="confirm">
                        <input
                          type="checkbox"
                          onChange={({ target }) =>
                            this.setState({ confirm: target.checked })
                          }
                          id="confirm"
                        />
                        &nbsp;&nbsp;I have read and accept to Exere{" "}
                        <a href="#">Exere Terms & Conditions</a>
                      </label>
                    </div>
                  </div>

                  {message ? (
                    <>
                      <br />
                      <Alert_message msg={message} />
                    </>
                  ) : null}

                  <br />

                  <Stretch_btn
                    action={this.signup}
                    disabled={!this.is_set()}
                    title="register now"
                    loading={loading}
                  />
                </form>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </section>

              <Link id="click_verify" to={`/verify_email?addr=${email}`}></Link>

              <Footer />
            </>
          );
        }}
      </Loggeduser.Consumer>
    );
  }
}

export default Signup;
