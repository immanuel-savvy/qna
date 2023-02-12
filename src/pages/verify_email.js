import React from "react";
import "bootstrap";
import Alert_message from "../components/alert_msg";
import { Loggeduser } from "../contexts";
import Footer from "../sections/footer";
import Header from "../sections/header";
import { post_request } from "../assets/js/services";

class Verify_email extends React.Component {
  constructor(props) {
    super(props);

    this.state = { verification_code: "" };
  }

  componentDidMount = () => {
    let href = window.location.href;
    href = href.split("?");
    if (href[1]) {
      href = href[1]
        .split("&")
        .filter((ref) => ref.trim().split("=")[0] === "addr");

      if (href) {
        href = href[0].split("=")[1];
        this.setState({ email: href });
      }
    }
  };

  is_set = () => {
    let { verification_code } = this.state;

    return /[0-9]{6}/.test(verification_code.length);
  };

  verify = async (e) => {
    e.preventDefault();

    let { loading, email, verification_code } = this.state;
    if (loading) return;

    this.setState({ loading: true });

    let result = await post_request("verify_email", {
      email,
      verification_code,
    });
    if (!result._id) return this.setState({ message: result });

    this.login(result);
  };

  render() {
    let { email } = this.state;

    return (
      <Loggeduser.Consumer>
        {({ login }) => {
          this.login = login;
          return (
            <>
              <Header />

              <section class="form_container">
                <h2>Verify Email</h2>

                <Alert_message
                  type="info"
                  msg="6-digit verification_code has been sent to your email"
                />
                <form action="#">
                  <div class="input_container">
                    <p>Email*</p>
                    <input
                      value={email}
                      type="email"
                      disabled
                      placeholder="E-mail"
                    />
                  </div>

                  <div class="input_container">
                    <p>Code*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({
                          verification_code: target.value,
                          message: "",
                        })
                      }
                      placeholder="* * * * * *"
                    />
                  </div>

                  <br />
                  <button
                    onClick={this.verify}
                    disabled={!this.is_set()}
                    type="submit"
                  >
                    Verify
                  </button>
                </form>
              </section>

              <Footer />
            </>
          );
        }}
      </Loggeduser.Consumer>
    );
  }
}

export default Verify_email;
