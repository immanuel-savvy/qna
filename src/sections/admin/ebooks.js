import React from "react";
import { emitter } from "../../Qna";

class Admin_ebooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_upload_ebook = () => emitter.emit("toggle_upload_ebook");

  render() {
    let { ebooks, ebooks_sales, ebooks_sold } = this.props;

    return (
      <div class="ebooks">
        <p class="title">eBooks</p>
        <a href="#" onClick={this.toggle_upload_ebook} class="upload">
          <i class="material-icons">file_upload</i>
          <p class="txt">Upload a new ebook</p>
        </a>
        <span class="created">
          <p> eBooks created: {ebooks}</p>{" "}
          <a href="ebook.html">
            View all <i class="material-icons">chevron_right</i>
          </a>
        </span>
        <span class="created purchased">
          <p> eBooks purchased: {ebooks_sold}</p>{" "}
          <a href="ebook.html">Total Revenue: NGN {ebooks_sales}</a>
        </span>
      </div>
    );
  }
}

export default Admin_ebooks;
