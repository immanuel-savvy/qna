import React from "react";
import { Link } from "react-router-dom";
import { client_domain } from "../assets/js/utils";
import Loadindicator from "../components/loadindicator";
import Nav from "../components/nav";
import { get_session } from "../components/practice_question";
import { Nav_context } from "../contexts";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let href = window.location.href.split("?")[1];
    if (
      href === "admin" ||
      get_session("admin_header") ||
      get_session("logged_admin")
    )
      this.setState({ admin: true }, () =>
        window.sessionStorage.setItem("admin_header", true)
      );
  };

  reload_ebooks = (free) => {
    let href = window.location.href.split("/").slice(-1)[0];

    if (href && href.startsWith("ebooks")) {
      if (free && !href.endsWith("free"))
        window.location.assign(`${client_domain}/ebooks?free`);
      else window.location.assign(`${client_domain}/ebooks`);
    }
  };

  render() {
    let { admin } = this.state;

    return (
      <Nav_context.Consumer>
        {({ vendors }) => {
          return (
            <>
              <Nav />
              <header>
                <div className="nav2">
                  <Link to="/">Home</Link>
                  <Link onClick={() => this.reload_ebooks()} to="/ebooks">
                    E-books
                  </Link>
                  <Link
                    onClick={() => this.reload_ebooks(true)}
                    to="/ebooks?free"
                  >
                    Free Downloads
                  </Link>
                  <Link to="/forum">Forum</Link>
                  <Link to="/faq">FAQ</Link>
                  {admin ? <Link to="/admin">Admin</Link> : null}
                </div>
                <div className="nav3">
                  <span className="title">Vendors :</span>
                  <span className="exams">
                    {vendors ? (
                      vendors.map((vendor) => (
                        <Link
                          onClick={() =>
                            window.sessionStorage.setItem(
                              "vendor",
                              JSON.stringify(vendor)
                            )
                          }
                          to={`/vendor?${vendor._id}`}
                        >
                          {vendor.name}
                        </Link>
                      ))
                    ) : (
                      <Loadindicator small />
                    )}
                  </span>
                </div>
              </header>
            </>
          );
        }}
      </Nav_context.Consumer>
    );
  }
}

export default Header;
