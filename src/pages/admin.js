import React from "react";
import "../assets/css/admin.css";
import { Logged_admin } from "../contexts";
import Certificates from "../sections/admin/certificates";
import Admin_ebooks from "../sections/admin/ebooks";
import Exams from "../sections/admin/exams";
import Site_metric from "../sections/admin/site_metric";
import Vendors from "../sections/admin/vendors";
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
              {admin ? (
                <main>
                  <p class="dashboard">Dashboard</p>
                  <div class="sp1">
                    <Admin_ebooks />
                    <Vendors />
                    <Certificates />
                    <Exams />
                  </div>

                  <Site_metric />
                </main>
              ) : (
                <Admin_login login={admin_login} />
              )}

              <Footer />
            </>
          );
        }}
      </Logged_admin.Consumer>
    );
  }
}

export default Admin;
