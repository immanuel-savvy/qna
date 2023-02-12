import React from "react";
import { Loggeduser } from "../contexts";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Verify_email extends React.Component {
  constructor(props) {
    super(props);

    this.state = { password: "" };
  }

  is_set = () => {
    let { code } = this.state;

    return /[0-9]{6}/.test(code.length);
  };

  verify = async () => {
    let { loading } = this.state;
    if (loading) return;

    this.setState({ loading: true });
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

                <form action="#">
                  <div class="input_container">
                    <p>Email*</p>
                    <input type="email" disabled placeholder="E-mail" />
                  </div>

                  <div class="input_container">
                    <p>Code*</p>
                    <input
                      onChange={({ target }) =>
                        this.setState({ code: target.value, message: "" })
                      }
                      placeholder="Password"
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
