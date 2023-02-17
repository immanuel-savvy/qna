import React from "react";
import { Link } from "react-router-dom";
import Loadindicator from "../components/loadindicator";
import Nav from "../components/nav";
import { Nav_context } from "../contexts";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let href = window.location.href.split("?")[1];
    if (href === "admin" || window.sessionStorage.getItem("admin_header"))
      this.setState({ admin: true }, () =>
        window.sessionStorage.setItem("admin_header", true)
      );
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
                  <Link to="/ebooks">E-books</Link>
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
