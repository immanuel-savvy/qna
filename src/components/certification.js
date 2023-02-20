import React from "react";
import { Link } from "react-router-dom";
import { post_request } from "../assets/js/services";
import { domain } from "../assets/js/utils";
import { emitter } from "../Qna";
import { scroll_to_top } from "./ebook";
import { save_to_session } from "./practice_question";

class Certification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle_certification = () => {
    emitter.emit("toggle_add_certificate", this.props.certificate);
  };

  remove_certification = async () => {
    if (!window.confirm("Are you sure to remove certification?")) return;

    let { certificate } = this.props;

    await post_request("remove_certificate", {
      _id: certificate._id,
      vendor: certificate.vendor._id,
    });

    this.setState({ removed: true });
  };

  render() {
    if (this.state.removed) return;
    let { certificate, admin } = this.props;
    let { image, title, _id } = certificate;

    return (
      <>
        <Link
          to="/certificate"
          onClick={() => {
            save_to_session("certificate", certificate);
            scroll_to_top();
          }}
          style={{
            backgroundImage: `url('${`${domain}/images/${image}`}')`,
          }}
        >
          <div class="content">
            <p style={{ textTransform: "capitalize" }}>{title}</p>
          </div>
        </Link>
        {admin ? (
          <span>
            <span
              style={{ cursor: "pointer" }}
              onClick={this.toggle_certification}
            >
              <i className="material-icons-outlined">edit</i>
            </span>
            <br />
            <span
              style={{ cursor: "pointer" }}
              onClick={this.remove_certification}
            >
              <i className="material-icons-outlined">close</i>
            </span>
          </span>
        ) : null}
      </>
    );
  }
}

export default Certification;
