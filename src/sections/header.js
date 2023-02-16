import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

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
            <span className="title">Exams :</span>
            <span className="exams">
              <Link to="/vendor">Microsoft</Link>
              <Link to="/vendor">Cisco</Link>
              <Link to="/vendor">compTIA</Link>
              <Link to="/vendor">AMAZON</Link>
              <Link to="/vendor">PIM</Link>
              <Link to="/vendor">compTIA</Link>
              <Link to="/vendor">AMAZON</Link>
              <Link to="/vendor">PIM</Link>
              <Link to="/vendor">compTIA</Link>
              <Link to="/vendor">AMAZON</Link>
              <Link to="/vendor">PIM</Link>
              <Link to="/vendor">compTIA</Link>
              <Link to="/vendor">AMAZON</Link>
              <Link to="/vendor">PIM</Link>
              <Link to="/vendor">compTIA</Link>
              <Link to="/vendor">AMAZON</Link>
              <Link to="/vendor">PIM</Link>
            </span>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
