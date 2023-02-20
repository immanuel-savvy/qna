import React from "react";

class Comment_form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  set_fullname = () => {
    let loggeduser = get_sessions("loggeduser");
    if (loggeduser) {
      let { fullname, _id } = loggeduser;
      this.setState({ fullname, user: _id });
    }
  };

  render() {
    let { action } = this.props;
    let { fullname, comment, user } = this.state;

    return (
      <form action="">
        <label>Fullname</label>
        <input
          name=""
          value={fullname}
          id=""
          onChange={({ target }) => this.setState({ fullname: target.value })}
          style={{
            height: 50,
            paddingLeft: 15,
            width: "100%",
            marginBottom: 20,
          }}
          placeholder="Your name"
        />
        <label>Comment</label>
        <textarea
          name=""
          value={comment}
          id=""
          cols="30"
          rows="4"
          onChange={({ target }) => this.setState({ comment: target.value })}
          style={{ height: 120 }}
          placeholder="Type your comment..."
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();

            action && action({ fullname, user, comment });

            this.setState({ comment: "", fullname: "" });
          }}
          type="submit"
        >
          Post
        </button>
      </form>
    );
  }
}

export default Comment_form;
