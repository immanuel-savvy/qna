import React from "react";
import { date_string, generate_random_string } from "../assets/js/functions";
import { get_request, post_request } from "../assets/js/services";
import { emitter } from "../Qna";
import Comment_form from "./comment_form";
import Loadindicator from "./loadindicator";
import Reply from "./reply";

class Comment extends React.Component {
  constructor(props) {
    super(props);

    let { comment } = this.props;
    let { likes, dislikes } = comment;
    this.state = { likes: likes || 0, dislikes: dislikes || 0 };
  }

  componentDidMount = () => {
    let { comment } = this.props;
    this.toggle_post_reply = (comment_id) => {
      if (comment_id !== comment._id && this.state.post_reply)
        this.setState({ post_reply: false });
    };

    emitter.listen("toggle_post_reply", this.toggle_post_reply);
  };

  componentWillUnmount = () => {
    emitter.remove_listener("toggle_post_reply", this.toggle_post_reply);
  };

  fetch_replies = async () => {
    let { comment } = this.props;
    let { replies } = this.state;
    if (replies) return;

    replies = await get_request(`replies/${comment._id}`);
    console.log(replies);
    this.setState({ replies });
  };

  view_replies = () => {
    this.setState(
      { show_replies: !this.state.show_replies },
      this.fetch_replies
    );
  };

  toggle_reply = () =>
    this.setState(
      { post_reply: !this.state.post_reply, show_replies: true },
      () => {
        emitter.emit("toggle_post_reply", this.props.comment._id);
        this.state.show_replies && this.fetch_replies();
      }
    );

  post_reply = async ({ fullname, user, comment: reply }) => {
    let { comment } = this.props;
    let { replies } = this.state;

    reply = {
      reply,
      comment: comment._id,
      question: comment.question,
      fullname,
      user,
    };

    let result = await post_request("new_reply", reply);
    if (!result || (result && !result._id))
      return this.setState({ message: "Cannot post reply at the moment" });

    reply._id = result._id;
    reply.created = result.created || Date.now();

    if (!replies) replies = new Array();
    replies = new Array(reply, ...replies);
    this.setState({ replies, message: "", show_replies: true });
  };

  thumbup = async () => {
    let { comment } = this.props;
    let { likes } = this.state;

    likes++;
    this.setState({ likes });

    await post_request("like_comment", {
      comment: comment._id,
      question: comment.question,
    });
  };

  thumbdown = async () => {
    let { comment } = this.props;
    let { dislikes } = this.state;

    dislikes++;
    this.setState({ dislikes });
    await post_request("dislike_comment", {
      comment: comment._id,
      question: comment.question,
    });
  };

  render() {
    let { replies, show_replies, likes, dislikes, post_reply } = this.state;
    let { comment: comment_ } = this.props;
    let { fullname, comment, replies: replies_, created } = comment_;

    return (
      <div class="comment">
        <div class="top">
          <i class="material-icons">person</i>
          <p class="username">
            {fullname || generate_random_string(8, "alnum")}
          </p>
          <p class="time">({date_string(created)})</p>
        </div>
        <div class="com">{comment}</div>
        <div class="like">
          {" "}
          <i onClick={this.thumbup} class="material-icons-outlined">
            thumb_up
          </i>
          {likes || ""}{" "}
          <i onClick={this.thumbdown} class="material-icons-outlined">
            thumb_down
          </i>{" "}
          {dislikes || ""}{" "}
          <i onClick={this.toggle_reply} class="material-icons-outlined">
            reply
          </i>
          <span onClick={this.view_replies}>
            {replies_ || (replies && replies.length) || ""}
          </span>
        </div>

        {post_reply ? <Comment_form action={this.post_reply} /> : null}
        {show_replies ? (
          <div class="replies">
            {replies ? (
              replies.length ? (
                replies.map((reply) => <Reply reply={reply} key={reply._id} />)
              ) : (
                <span>No replies yet.</span>
              )
            ) : (
              <Loadindicator />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Comment;
