import React from "react";
import { client_domain } from "../assets/js/utils";

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
          <span>
            <span>
              <a
                href=""
                style={{
                  backgroundImage: `url('${require("../assets/images/aws-certified-solutions-architect-associate.png")}')`,
                }}
              ></a>
            </span>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/ccie-enterprise.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/comptia-security-plus.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/microsoft-certified-azure-administrator-associate.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/microsoft-certified-azure-fundamentals.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/ccnp-enterprise.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/aws-certified-solutions-architect-associate.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/ccie-enterprise.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/comptia-security-plus.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/microsoft-certified-azure-administrator-associate.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/microsoft-certified-azure-fundamentals.png")}')`,
              }}
            ></a>
            <a
              href=""
              style={{
                backgroundImage: `url('${require("../assets/images/ccnp-enterprise.png")}')`,
              }}
            ></a>
          </span>
        </div>
        <a href="" class="seeall">
          See all <i class="material-icons">chevron_right</i>
        </a>
      </section>
    );
  }
}

export default Top_certifications;
