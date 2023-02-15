import React from "react";
import { Link } from "react-router-dom";

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Link to="/ebook" className="ebook">
        <div
          className="img"
          style={{
            backgroundImage: `url('${require("../assets/images/bundle.png")}')`,
          }}
        ></div>
        <span className="text">
          <p className="ebookname">Cisco cs40 </p>
          <p className="ebookdate">Upload date: Nov 11, 2022</p>
          <p className="ebookdetails">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            accusantium. Praesentium facilis unde, neque nam ad quia recusandae
            similique dolorum.
          </p>
          <p className="ebookprice">NGN 20,000</p>
        </span>
      </Link>
    );
  }
}

export default Ebook;
