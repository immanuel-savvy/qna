import React from "react";
import { Link } from "react-router-dom";
import { save_to_session } from "./practice_question";
import { client_domain } from "../assets/js/utils";

class Sidenar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  reload_ebooks = (free) => {
    let href = window.location.href.split("/").slice(-1)[0];

    if (href && href.startsWith("ebooks")) {
      if (free && !href.endsWith("free"))
        window.location.assign(`${client_domain}/ebooks?free`);
      else window.location.assign(`${client_domain}/ebooks`);
    }
  };

  search = async (e) => {
    e.preventDefault();

    let { query } = this.state;
    if (!query) return;

    save_to_session("query", query);
    window.location.assign(`${client_domain}/exams_search_result`);
  };

  render() {
    return (
      <div class="side_nav" id="sideNav" style={{ display: "flex" }}>
        <form>
          <input
            placeholder="Search"
            onChange={({ target }) => this.setState({ query: target.value })}
            type="search"
            class="search"
          />
          <button type="submit" onClick={this.search}>
            <i class="material-icons">search</i>
          </button>
        </form>

        <div class="sidenav_list">
          <Link to="/signup">
            {/* <i class="material-icons-outlined">person</i> */} Login/Register
          </Link>
          <Link onClick={() => this.reload_ebooks()} to="/ebooks">
            {/* <i class="material-icons-outlined">edit</i> */} E-books
          </Link>
          <Link onClick={() => this.reload_ebooks(true)} to="/ebooks?free">
            {/* <i class="material-icons-outlined">help_outline</i> */} Free
            Downloads
          </Link>
          <Link to="/forum">
            {/* <i class="material-icons-outlined cl">menu_book</i> */} Forum
          </Link>
          <Link to="/faq">
            {/* <i class="material-icons-outlined cl">insert_drive_file</i> */}{" "}
            FAQ
          </Link>
          <Link to="/admin">
            {/* <i class="material-icons-outlined cl">format_list_bulleted</i> */}{" "}
            Admin
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidenar;
