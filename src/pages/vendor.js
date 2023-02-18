import React from "react";
import { get_request } from "../assets/js/services";
import Certification_exam from "../components/certification_exam";
import Loadindicator from "../components/loadindicator";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Vendor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetch_certifications = async () => {
    let { vendor } = this.state;
    let certificates = await get_request(`vendor_certificates/${vendor._id}`);
    this.setState({ certificates });
  };

  componentDidMount = () => {
    let vendor = window.sessionStorage.getItem("vendor");
    if (vendor) {
      vendor = JSON.parse(vendor);

      this.setState({ vendor }, this.fetch_certifications);
    }
  };

  render() {
    let { certificates, vendor } = this.state;
    if (!vendor) return <Loadindicator />;

    let { name, description } = vendor;

    return (
      <>
        <Header />

        <main>
          <div class="sectionb">
            <h2>{name} Certification Exams</h2>

            <div class="table_container">
              {certificates ? (
                certificates.length ? (
                  certificates.map((certification, index) => (
                    <Certification_exam
                      certification={certification}
                      index={index}
                      key={index}
                    />
                  ))
                ) : (
                  <></>
                )
              ) : (
                <Loadindicator />
              )}
            </div>
          </div>
          <p class="list_info">
            The questions are group by certifications, you can click into a
            certification to see the full list of exams there.
            {/*  You can also see the{" "}
            <a href="#">full list</a> of questions. */}
          </p>

          <div class="sectionc">
            <h3>{name} Certification Exam Dumps & Practice Test Questions</h3>
            <p>{description}</p>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Vendor;
