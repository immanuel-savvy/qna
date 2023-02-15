import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />
        <header>
          <div className="nav2">
            <Link to="/">Home</Link>
            <Link to="/ebooks">E-books</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/faq">FAQ</Link>
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
