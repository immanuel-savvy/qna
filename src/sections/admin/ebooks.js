import React from "react";
import { Link } from "react-router-dom";
import { emitter } from "../../Qna";

class Admin_ebooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_upload_ebook = () => emitter.emit("toggle_upload_ebook");

  render() {
    let { ebooks, ebooks_purchased, ebooks_sold } = this.props;

    return (
      <div class="ebooks">
        <p class="title">eBooks</p>
        <a href="#" onClick={this.toggle_upload_ebook} class="upload">
          <i class="material-icons">file_upload</i>
          <p class="txt">Upload a new ebook</p>
        </a>
        <span class="created">
          <p> eBooks created: {ebooks}</p>{" "}
          <Link to="/ebooks">
            View all <i class="material-icons">chevron_right</i>
          </Link>
        </span>
        <span class="created purchased">
          <p> eBooks purchased: {ebooks_sold}</p>{" "}
          <Link to="/ebooks">Total Revenue: NGN {ebooks_purchased}</Link>
        </span>
      </div>
    );
  }
}

export default Admin_ebooks;
