import React from "react";
import { domain } from "../assets/js/utils";

class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { faq } = this.props;
    let { question, answer, image } = faq;

    return (
      <div className="mb-5">
        <a href="#">{question}</a>
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
