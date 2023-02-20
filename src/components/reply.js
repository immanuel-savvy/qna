import React from "react";
import { date_string } from "../assets/js/functions";
import { post_request } from "../assets/js/services";

class Reply extends React.Component {
  constructor(props) {
    super(props);

    let { reply } = this.props;
    let { likes, dislikes } = reply;

    this.state = { likes: likes || 0, dislikes: dislikes || 0 };
  }

  thumbup = async () => {
    let { reply } = this.props;
    let { likes } = this.state;

    likes++;
    this.setState({ likes });

    await post_request("like_reply", {
      reply: reply._id,
      comment: reply.comment,
    });
  };

  thumbdown = async () => {
    let { reply } = this.props;
    let { dislikes } = this.state;

    dislikes++;
    this.setState({ dislikes });
    await post_request("dislike_reply", {
      reply: reply._id,
      comment: reply.comment,
    });
  };

  render() {
    let { likes, dislikes } = this.state;
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
          <i onClick={this.thumbup} class="material-icons-outlined">
            thumb_up
          </i>
          {likes || ""}{" "}
          <i onClick={this.thumbdown} class="material-icons-outlined">
            thumb_down
          </i>
          {dislikes || ""}{" "}
        </div>
        <div class="replies"></div>
      </div>
    );
  }
}

export default Reply;
