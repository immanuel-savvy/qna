import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <Link to="/" class="logo">
          <h1>QNA.</h1>
          <p>Digitalized assesment</p>
        </Link>
        <form action="">
          <input type="search" name="" id="" placeholder="Search... " />
          <button type="submit">
            <i class="material-icons">search</i>
          </button>
        </form>
        <span class="icons">
          <Link to="/signup" class="signup spp">
            <i class="material-icons-outlined">person</i> Sign Up
          </Link>
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
