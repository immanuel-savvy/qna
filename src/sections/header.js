import React from "react";
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
            <a href="">Home</a>
            <a href="">E-books</a>
            <a href="">Contact Us</a>
            <a href="./faq.html">FAQ</a>
          </div>
          <div class="nav3">
            <span class="title">Exams :</span>
            <span class="exams">
              <a href="">Microsoft</a>
              <a href="">Cisco</a>
              <a href="">compTIA</a>
              <a href="">AMAZON</a>
              <a href="">PIM</a>
              <a href="">compTIA</a>
              <a href="">AMAZON</a>
              <a href="">PIM</a>
              <a href="">compTIA</a>
              <a href="">AMAZON</a>
              <a href="">PIM</a>
              <a href="">compTIA</a>
              <a href="">AMAZON</a>
              <a href="">PIM</a>
              <a href="">compTIA</a>
              <a href="">AMAZON</a>
              <a href="">PIM</a>
            </span>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
