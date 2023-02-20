import React from "react";
import { post_request } from "../assets/js/services";
import { domain } from "../assets/js/utils";
import { emitter } from "../Qna";

class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  edit = () => {
    emitter.emit("toggle_faq", this.props.faq);
  };

  remove = async () => {
    if (!window.confirm("Are you sure to remove FAQ?")) return;

    let { faq } = this.props;

    await post_request(`remove_faq/${faq._id}`);
    this.setState({ removed: true });
  };

  render() {
    let { removed } = this.state;
    if (removed) return;

    let { faq, admin } = this.props;
    let { question, answer, image } = faq;

    return (
      <div className="mb-5">
        <a href="#">{question}</a>

        {admin ? (
          <>
            <a style={{ cursor: "pointer" }} onClick={this.edit}>
              <i className="material-icons-outlined">edit</i>
            </a>
            <a style={{ cursor: "pointer" }} onClick={this.remove}>
              <i className="material-icons-outlined">close</i>
            </a>
          </>
        ) : null}
        <p>{answer}</p>
        {image ? (
          <img
            style={{ width: "100%", padding: 10 }}
            className="img img-fluid"
            src={`${domain}/images/${image}`}
            alt=""
          />
        ) : null}
      </div>
    );
  }
}

export default Faq;
