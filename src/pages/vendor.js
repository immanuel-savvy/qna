import React from "react";
import { get_request } from "../assets/js/services";
import Loadindicator from "../components/loadindicator";
import Vendor_exam from "../components/vendor_exam";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Top_certifications from "../sections/top_certifications";

class Vendor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetch_certifications = async () => {
    let { vendor } = this.state;
    let exams = await get_request(`vendor_exams/${vendor._id}`);

    this.setState({ exams });
  };

  componentDidMount = () => {
    let vendor = window.sessionStorage.getItem("vendor");
    if (vendor) {
      vendor = JSON.parse(vendor);

      this.setState({ vendor }, this.fetch_certifications);
    }
  };

  render() {
    let { exams, vendor } = this.state;
    if (!vendor) return <Loadindicator />;

    let { name, description } = vendor;

    return (
      <>
        <Header />

        <main>
          <div class="sectionb">
            <h2>{name} Certification Exams</h2>

            <Top_certifications vendor={vendor} />

            <h3>Exams by {name}</h3>
            <div class="table_container">
              {exams ? (
                exams.length ? (
                  exams.map((certification, index) => (
                    <Vendor_exam exam={certification} key={index} />
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
