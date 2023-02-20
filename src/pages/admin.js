import React from "react";
import "../assets/css/admin.css";
import { get_request } from "../assets/js/services";
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

    this.state = {
      site_metric: new Object(),
    };
  }

  componentDidMount = async () => {
    let admin = window.sessionStorage.getItem("admin");
    if (admin && !this.admin) {
      admin = JSON.parse(admin);
      this.admin_login(admin);
    }

    let site_metric = (await get_request("site_metric_data")) || new Object();
    this.setState({ site_metric });
  };

  render() {
    let { site_metric } = this.state;

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
                    <Admin_ebooks
                      ebooks={site_metric.ebooks}
                      ebooks_purchased={site_metric.ebooks_purchased}
                      ebooks_sold={site_metric.ebooks_sold}
                    />
                    <Vendors vendors={site_metric.vendors} />
                    <Certificates certificates={site_metric.certificates} />
                    <Exams
                      exams={site_metric.exams}
                      exams_taken={site_metric.exams_taken}
                    />
                    <FAQS faqs={site_metric.faqs} />
                  </div>

                  <Site_metric
                    visits={site_metric.visits}
                    users={site_metric.users}
                  />
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
