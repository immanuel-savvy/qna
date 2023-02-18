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
    let { vendor } = this.props;
    let certificates = await get_request(
      vendor ? `vendor_certificates/${vendor._id}` : "certificates/50"
    );
    this.setState({ certificates });
  };

  render() {
    let { vendor } = this.props;
    let { certificates } = this.state;
    if (certificates && !certificates.length) return;

    return (
      <section
        class="sectionii"
        style={vendor ? { backgroundColor: "transparent" } : null}
      >
        {vendor ? null : <p class="txt">Top Certifications</p>}
        <div
          class="fl"
          style={
            vendor
              ? { overflow: "visible", display: "flex", flexWrap: "wrap" }
              : null
          }
        >
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
