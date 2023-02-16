import React from "react";
import { Link } from "react-router-dom";
import { email_regex } from "../assets/js/functions";
import { post_request } from "../assets/js/services";
import Alert_message from "../components/alert_msg";
import Stretch_btn from "../components/stretch_btn";

class Admin_login extends React.Component {
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

    let { login } = this.props;
    let { email, password } = this.state;
    this.setState({ loading: true });

    let res = await post_request("admin_login", { email, password });

    if (res && res.admin) {
      login(res.admin);
    } else
      this.setState({
        message:
          typeof res === "string"
            ? res
            : (res && res.message) || "Cannot login at the moment, try again.",
        loading: false,
      });
  };

  render() {
    let { loading, message } = this.state;

    return (
      <section class="form_container">
        <h2>Login To Your Admin Profile</h2>

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

          {message ? <Alert_message msg={message} /> : null}
          <br />

          <Stretch_btn
            title="admin login"
            action={this.submit}
            disbaled={!this.is_set()}
            loading={loading}
          />
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </section>
    );
  }
}

export default Admin_login;
