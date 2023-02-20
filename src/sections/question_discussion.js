import React from "react";
import { get_request, post_request } from "../assets/js/services";
import Alert_message from "../components/alert_msg";
import Comment from "../components/comment";
import Comment_form from "../components/comment_form";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";
import { Loggeduser } from "../contexts";

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

    let comments = await post_request(`comments/${question._id}`, {
      limit,
      skip: (page - 1) * limit,
    });

    this.setState({ comments });

    this.set_fullname();
  };

  set_fullname = () => {
    let loggeduser = get_session("loggeduser");
    if (loggeduser) {
      let { fullname, _id } = loggeduser;
      this.setState({ fullname, user: _id });
    }
  };

  send_comment = async ({ fullname, user, comment }) => {
    let { question, exam } = this.props;
    let { comments } = this.state;

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
    comment.created = result.created || Date.now();

    comments = new Array(comment, ...comments);
    this.setState({ comments, message: "", comment: "" });
  };

  render() {
    let { toggle } = this.props;
    let { comments, message, fullname, comment } = this.state;

    return (
      <Loggeduser.Consumer>
        {({ loggeduser }) => {
          this.loggeduser = loggeduser;

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
                <Comment_form action={this.send_comment} />

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
        }}
      </Loggeduser.Consumer>
    );
  }
}

export default Question_discussion;
