import React from "react";
import { Logged_admin } from "../contexts";
import Admin_login from "../sections/admin_login";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let admin = window.sessionStorage.getItem("admin");
    if (admin && !this.admin) {
      admin = JSON.parse(admin);
      this.admin_login(admin);
    }
  };

  render() {
    return (
      <Logged_admin.Consumer>
        {({ admin, admin_login }) => {
          this.admin = admin;
          this.admin_login = admin_login;

          return (
            <>
              <Header />
              {admin ? <></> : <Admin_login login={admin_login} />}

              <Footer />
            </>
          );
        }}
      </Logged_admin.Consumer>
    );
  }
}

export default Admin;
