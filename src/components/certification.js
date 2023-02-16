import React from "react";

class Certification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <a
        href=""
        style={{
          backgroundImage: `url('${require("../assets/images/aws-certified-solutions-architect-associate.png")}')`,
        }}
      >
        <div class="content">
          <p>AWS TITLE Lorem, ipsum dolor.</p>
        </div>
      </a>
    );
  }
}

export default Certification;
