import React from "react";
import "../assets/css/admin.css";
import { Logged_admin } from "../contexts";
import Admin_ebooks from "../sections/admin/ebooks";
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
                    <div class="exams">
                      <p class="title">Exams</p>
                      <div class="sec sec2">
                        <div class="item">
                          <span class="created">
                            <p> Exams created: 300</p>{" "}
                            <a href="ebook.html">
                              View all{" "}
                              <i class="material-icons">chevron_right</i>
                            </a>
                          </span>
                          <span class="created purchased">
                            <p> Exams Taken: 250</p>{" "}
                          </span>
                        </div>
                      </div>
                      <div class="sec">
                        <div class="item">
                          <span class="created">
                            <p> Exams created: 300</p>{" "}
                            <a href="ebook.html">
                              View all{" "}
                              <i class="material-icons">chevron_right</i>
                            </a>
                          </span>
                          <span class="created purchased">
                            <p> Exams purchased: 200</p>{" "}
                            <a href="ebook.html">
                              Total Revenue: NGN 3,000,000
                            </a>
                          </span>
                        </div>
                        <div class="item">
                          <a href="Questionupload.html" class="upload">
                            <i class="material-icons">description</i>
                            <p>Create new exam</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sp1 sp2">
                    <div class="exams">
                      <p class="title">Site Metrics</p>
                      <div class="sec sec2">
                        <div class="item">
                          <span class="created">
                            <p> Total site visits</p> <a>30, 000</a>
                          </span>
                          <span class="created">
                            <p> Total site users</p> <a>400</a>
                          </span>
                        </div>
                      </div>
                      <div class="sec">
                        <div class="item">
                          <span class="created">
                            <p> Total sales revenue</p> <a>NGN 9,000</a>
                          </span>
                          <span class="created">
                            <p> Active users</p> <a>3,000</a>
                          </span>
                        </div>
                        <div class="item">
                          <span class="created">
                            <p> Active users</p> <a>3,000</a>
                          </span>
                          <span class="created">
                            <p> Online users</p> <a>3,000</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
