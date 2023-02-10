import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <a href="" class="logo">
          <h1>QNA.</h1>
          <p>Digitalized assesment</p>
        </a>
        <form action="">
          <input type="search" name="" id="" placeholder="Search... " />
          <button type="submit">
            <i class="material-icons">search</i>
          </button>
        </form>
        <span class="icons">
          <a href="./register.html" class="signup spp">
            <i class="material-icons-outlined">person</i> Sign Up
          </a>
          <a href="" class="signup cart">
            <i class="material-icons-outlined">shopping_cart</i>
          </a>
        </span>
        <i class="material-icons s">search</i>
        <i class="material-icons i" id="i" onclick="sideNavOn();">
          menu
        </i>
        <i class="material-icons x" id="x" onclick="sideNavOff();">
          close
        </i>
      </nav>
    );
  }
}

export default Nav;
