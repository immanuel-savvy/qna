import React from "react";
import { date_string } from "../assets/js/functions";

class Reply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { reply: reply_ } = this.props;
    let { reply, fullname, created } = reply_;

    return (
      <div class="comment">
        <div class="top">
          <i class="material-icons">person</i>
          <p class="username">{fullname}</p>
          <p class="time">({date_string(created)})</p>
        </div>
        <div class="com">{reply}</div>
        <div class="like">
          {" "}
          <i class="material-icons-outlined">thumb_up</i>{" "}
          <i class="material-icons-outlined">thumb_down</i>{" "}
        </div>
        <div class="replies"></div>
      </div>
    );
  }
}

export default Reply;
