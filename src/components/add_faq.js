import React from "react";
import { post_request } from "../assets/js/services";
import Alert_message from "./alert_msg";
import Stretch_btn from "./stretch_btn";

class Add_faq extends React.Component {
  constructor(props) {
    super(props);

    let { faq } = this.props;
    this.state = { ...faq, image_filename: faq && faq.image };
  }

  is_set = () => {
    let { question, answer } = this.state;

    return question && answer;
  };

  submit = async () => {
    let { toggle } = this.props;
    let { question, answer, _id, created } = this.state;
    let faq = { question, answer, _id, created };

    this.setState({ loading: true });

    let result = await post_request(_id ? "update_faq" : "add_faq", faq);

    if (result && result._id) {
      faq._id = result._id;
      faq.created = result.created;
      toggle();
      window.location.reload();
    } else this.setState({ message: "Cannot add FAQ atm.", loading: false });
  };

  render() {
    let { toggle } = this.props;
    let { question, message, loading, _id, answer } = this.state;

    return (
      <div class="addmodal" id="modal" style={{ display: "flex" }}>
        <form action="">
          <i onClick={toggle} class="material-icons clo" id="close">
            close
          </i>
          <div class="forms">
            <span class="sp">
              <h2>{_id ? "Update" : "Add"} FAQ</h2>

              <label for="">
                Question <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={({ target }) =>
                  this.setState({ message: "", question: target.value })
                }
              />

              <label for="">
                Answer <span className="text-danger">*</span>
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={answer}
                placeholder="Description..."
                onChange={({ target }) =>
                  this.setState({ message: "", answer: target.value })
                }
              ></textarea>
            </span>
          </div>

          {message ? <Alert_message msg={message} /> : null}

          <Stretch_btn
            title={_id ? "Update faq" : "Add faq"}
            action={this.submit}
            disabled={!this.is_set()}
            loading={loading}
          />
        </form>
      </div>
    );
  }
}

export default Add_faq;
