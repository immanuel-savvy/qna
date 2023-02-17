import React from "react";
import { get_request } from "../assets/js/services";
import Certification from "../components/certification";
import Loadindicator from "../components/loadindicator";

class Top_certifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let certificates = await get_request("top_certificates");
    this.setState({ certificates });
  };

  render() {
    let { certificates } = this.state;
    if (certificates && !certificates.length) return;

    return (
      <section class="sectionii">
        <p class="txt">Top Certifications</p>
        <div class="fl">
          <div className="span">
            {certificates ? (
              certificates.map((certificate) => (
                <Certification
                  certificate={certificate}
                  key={certificate._id}
                />
              ))
            ) : (
              <Loadindicator />
            )}
          </div>
        </div>
        {/* <a href="" class="seeall">
          See all <i class="material-icons">chevron_right</i>
        </a> */}
      </section>
    );
  }
}

export default Top_certifications;
