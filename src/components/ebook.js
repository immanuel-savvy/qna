import React from "react";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";
import { domain, month_index } from "../assets/js/utils";
import { save_to_session } from "./practice_question";

const scroll_to_top = () => window.scrollTo({ top: 0, behavior: "smooth" });

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { ebook } = this.props;
    let { cover, title, description, price, created } = ebook;
    created = new Date(created);

    return (
      <Link
        to="/ebook"
        onClick={() => {
          save_to_session("ebook", ebook);
          scroll_to_top();
        }}
        className="ebook"
        style={{
          boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
          border: "none",
        }}
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
            Upload date: {to_title(month_index[created.getMonth()])}{" "}
            {created.getDate()}, {created.getFullYear()}
          </p>
          <p style={{ marginBottom: 0 }} className="ebookdetails">
            {description.slice(0, 150)}
          </p>
          <p style={{ marginBottom: 0 }} className="ebookprice">
            {price ? `NGN ${price}` : "Free"}
          </p>
        </span>
      </Link>
    );
  }
}

export default Ebook;
export { scroll_to_top };
