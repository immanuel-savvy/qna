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
          <div class="nav2">
            <Link to="/">Home</Link>
            <Link to="/ebooks">E-books</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div class="nav3">
            <span class="title">Exams :</span>
            <span class="exams">
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
