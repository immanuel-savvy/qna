import React from "react";
import { client_domain } from "../assets/js/utils";
import Certification from "../components/certification";

class Top_certifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section class="sectionii">
        <p class="txt">Top Certifications</p>
        <div class="fl">
          <div className="span">
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
          </div>
        </div>
        <a href="" class="seeall">
          See all <i class="material-icons">chevron_right</i>
        </a>
      </section>
    );
  }
}

export default Top_certifications;
