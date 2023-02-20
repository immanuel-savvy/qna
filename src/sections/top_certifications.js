import React from "react";
import { get_request } from "../assets/js/services";
import Certification from "../components/certification";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";

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
    this.setState({ certificates, admin: !!get_session("logged_admin") });
  };

  render() {
    let { vendor } = this.props;
    let { certificates, admin } = this.state;
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
                  admin={admin}
                />
              ))
            ) : (
              <Loadindicator />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Top_certifications;
