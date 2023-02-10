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
            <Link href="">E-books</Link>
            <Link href="">Contact Us</Link>
            <Link href="./faq.html">FAQ</Link>
          </div>
          <div class="nav3">
            <span class="title">Exams :</span>
            <span class="exams">
              <Link href="">Microsoft</Link>
              <Link href="">Cisco</Link>
              <Link href="">compTIA</Link>
              <Link href="">AMAZON</Link>
              <Link href="">PIM</Link>
              <Link href="">compTIA</Link>
              <Link href="">AMAZON</Link>
              <Link href="">PIM</Link>
              <Link href="">compTIA</Link>
              <Link href="">AMAZON</Link>
              <Link href="">PIM</Link>
              <Link href="">compTIA</Link>
              <Link href="">AMAZON</Link>
              <Link href="">PIM</Link>
              <Link href="">compTIA</Link>
              <Link href="">AMAZON</Link>
              <Link href="">PIM</Link>
            </span>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
