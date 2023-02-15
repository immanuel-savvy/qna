import React from "react";
import { Link } from "react-router-dom";
import { client_domain } from "../assets/js/utils";
import { Loggeduser } from "../contexts";
import Sidenav from "./sidenav";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handle_user = () => {
    if (this.loggeduser) {
      window.confirm("Are you sure you want to logout?") && this.logout();
    } else window.location.assign(`${client_domain}/signup`);
  };

  render() {
    return (
      <Loggeduser.Consumer>
        {({ loggeduser, logout }) => {
          this.loggeduser = loggeduser;
          this.logout = logout;

          return (
            <>
              <Sidenav />
              <nav>
                <Link to="/" class="logo">
                  <h1>QNA.</h1>
                  <p>Digitalized assessment</p>
                </Link>
                <form action="">
                  <input type="search" name="" id="" placeholder="Search... " />
                  <button type="submit">
                    <i class="material-icons">search</i>
                  </button>
                </form>
                <span class="icons">
                  <a href="#" onClick={this.handle_user} class="signup spp">
                    <i class="material-icons-outlined">person</i>{" "}
                    {loggeduser ? "" : "Sign Up"}
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
            </>
          );
        }}
      </Loggeduser.Consumer>
    );
  }
}

export default Nav;
