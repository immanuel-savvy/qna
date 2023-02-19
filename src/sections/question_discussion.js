import React from "react";
import { get_request, post_request } from "../assets/js/services";
import Alert_message from "../components/alert_msg";
import Comment from "../components/comment";
import Loadindicator from "../components/loadindicator";

class Question_discussion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      page: 0,
    };
  }

  componentDidMount = async () => {
    let { question, limit, page } = this.props;
    console.log(question);
    let comments = await post_request(`comments/${question._id}`, {
      limit,
      skip: (page - 1) * limit,
    });

    this.setState({ comments });
  };

  send_comment = async () => {
    let { question, exam } = this.props;
    let { comment, user, comments, fullname } = this.state;

    comment = {
      comment,
      answer: question.answer,
      question: question._id,
      certification: exam?.certification?._id,
      exam: question.exam,
      fullname,
      user,
    };

    let result = await post_request("new_comment", comment);
    if (!result || (result && !result._id))
      return this.setState({ message: "Cannot post comment at the moment" });

    comment._id = result._id;
    comment.created = result.created;

    comments = new Array(comment, ...comments);
    this.setState({ comments, message: "", comment: "" });
  };

  render() {
    let { toggle } = this.props;
    let { comments, message, comment } = this.state;

    return (
      <div
        class="discussionmodal"
        id="discussionnmodal"
        style={{ display: "flex" }}
      >
        <div class="disc">
          <i
            onClick={toggle}
            style={{ cursor: "pointer" }}
            class="material-icons c"
            onclick="closeModal()"
          >
            close
          </i>
          <form action="">
            <textarea
              name=""
              value={comment}
              id=""
              cols="30"
              rows="4"
              onChange={({ target }) =>
                this.setState({ comment: target.value })
              }
              style={{ height: 120 }}
              placeholder="Type your comment..."
            ></textarea>
            <button onClick={this.send_comment} type="submit">
              Post
            </button>
          </form>

          {message ? <Alert_message msg={message} /> : null}
          <div class="comments">
            {comments ? (
              comments.length ? (
                comments.map((comment) => (
                  <Comment comment={comment} key={comment._id} />
                ))
              ) : (
                <span style={{ textAlign: "center" }}>
                  No discussions yet. Start one.
                </span>
              )
            ) : (
              <Loadindicator />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Question_discussion;
