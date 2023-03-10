import React from "react";
import { Link } from "react-router-dom";
import { email_regex } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import Alert_message from "../components/alert_msg";
import Stretch_btn from "../components/stretch_btn";
import { Loggeduser } from "../contexts";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  is_set = () => {
    let { email, password, message, loading } = this.state;

    return email_regex.test(email) && password && !message && !loading;
  };

  submit = async (e) => {
    e.preventDefault();

    let { email, password } = this.state;
    this.setState({ loading: true });

    let res = await post_request("login", { email, password });

    if (res && res._id) {
      this.login(res);
    } else
      this.setState({
        message:
          typeof res === "string"
            ? res
            : "Cannot login at the moment, try again.",
        loading: false,
      });
  };

  render() {
    let { message, loading } = this.state;

    return (
      <Loggeduser.Consumer>
        {({ login }) => {
          this.login = login;

          return (
            <>
              <Header />

              <section class="form_container">
                <h2>Login Now</h2>

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
                    <p>Password*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({ password: target.value, message: "" })
                      }
                      type="password"
                      placeholder="Password"
                    />
                  </div>

                  <div class="form_extra">
                    <a href="#">Forgot Password?</a>
                  </div>

                  {message ? <Alert_message msg={message} /> : null}
                  <br />

                  <Stretch_btn
                    title="login"
                    action={this.submit}
                    disbaled={!this.is_set()}
                    loading={loading}
                  />
                </form>

                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </section>

              <Footer />
            </>
          );
        }}
      </Loggeduser.Consumer>
    );
  }
}

export default Login;
