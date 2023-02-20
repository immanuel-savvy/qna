import React from "react";
import { post_request } from "../assets/js/services";
import Faq from "../components/faq";
import Loadindicator from "../components/loadindicator";
import Footer from "../sections/footer";
import Header from "../sections/header";

class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      page: 1,
    };
  }

  componentDidMount = async () => {
    let faqs = await post_request("faqs");
    this.setState({ faqs });
  };

  render() {
    let { faqs } = this.state;

    return (
      <>
        <Header />
        <main>
          <section class="faq_sectiona">
            <h1>Frequently Asked Questions(FAQ)</h1>

            {/*   <!-- <div class="faq_links">
                <a href="#">General Questions</a>
                <a href="#">About VCE Files and Software</a>
                <a href="#">Premium Files</a>
                <a href="#">ExamCollection Account and Other Technical Details</a>
            </div> --> */}

            <div className="faq_container">
              {faqs ? (
                faqs.length ? (
                  faqs.map((faq) => <Faq faq={faq} key={faq._id} />)
                ) : (
                  <span>Nothing yet yet.</span>
                )
              ) : (
                <Loadindicator />
              )}
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default FAQ;
