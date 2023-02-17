import React from "react";
import { Link } from "react-router-dom";
import { domain } from "../assets/js/utils";

const scroll_to_top = () => window.scrollTo({ top: 0, behavior: "smooth" });

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { ebook } = this.props;
    let { cover, title, description, price, created } = ebook;

    return (
      <Link
        to="/ebook"
        onClick={() => {
          window.sessionStorage.setItem("ebook", JSON.stringify(ebook));
          scroll_to_top();
        }}
        className="ebook"
      >
        <div
          className="img"
          style={{
            backgroundImage: `url('${domain}/images/${cover}')`,
          }}
        ></div>
        <span className="text">
          <p style={{ marginBottom: 0 }} className="ebookname">
            {title}{" "}
          </p>
          <p style={{ marginBottom: 0 }} className="ebookdate">
            Upload date: Nov 11, 2022
          </p>
          <p style={{ marginBottom: 0 }} className="ebookdetails">
            {description.slice(0, 150)}
          </p>
          <p style={{ marginBottom: 0 }} className="ebookprice">
            NGN {price || "Free"}
          </p>
        </span>
      </Link>
    );
  }
}

export default Ebook;
export { scroll_to_top };
