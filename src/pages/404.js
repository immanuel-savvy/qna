import React from "react";
import { Link } from "react-router-dom";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Page_not_found extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section class="sectioni">
            <img
              src={require("../assets/images/404.png")}
              class="img-fluid"
              alt=""
            />
            <h5>
              Real IT Certification IT Certification Practice Tests. Instant
              Download Accurate & Verified Exam Questions & Answers by IT
              Experts, 99.6% Exam Pass Rate 15 years in the business, more than
              1.2M happy customers.
            </h5>

            <Link to="/">
              <button>Back to Home</button>
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Page_not_found;
