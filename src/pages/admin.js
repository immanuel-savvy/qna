import React from "react";
import "../assets/css/admin.css";
import { get_session } from "../components/practice_question";
import { Logged_admin } from "../contexts";
import Certificates from "../sections/admin/certificates";
import Admin_ebooks from "../sections/admin/ebooks";
import Exams from "../sections/admin/exams";
import FAQS from "../sections/admin/faqs";
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
        {({ admin, admin_login, logout }) => {
          this.admin = admin;
          this.admin_login = admin_login;

          return (
            <>
              <Header />
              {admin || get_session("logged_admin") ? (
                <main>
                  <p className="dashboard">Dashboard</p>
                  <span
                    onClick={logout}
                    className=""
                    style={{
                      alignSelf: "flex-end",
                      cursor: "pointer",
                      color: "blue",
                    }}
                  >
                    Sign-out Admin
                  </span>
                  <div className="sp1">
                    <Admin_ebooks />
                    <Vendors />
                    <Certificates />
                    <Exams />
                    <FAQS />
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
