import React from "react";
import Certification_exam from "../components/certification_exam";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section class="sectiona">
            <h3 style={{ fontWeight: 700, fontSize: 18 }}>
              Pass Your CompTIA A+ Certification Easy!
            </h3>
            <p>
              100% Real CompTIA A+ Certification Exams Questions & Answers,
              Accurate & Verified By IT Experts
            </p>
            <p>Instant Download, Free Fast Updates, 99.6% Pass Rate.</p>

            <div class="product">
              <div class="image_container">
                <img src={require("../assets/images/bundle.png")} alt="" />
                <h3>CompTIA A+ Bundle</h3>
              </div>

              <div class="product_description">
                <a href="">220-1101 Exam:</a>
                <p>CompTIA A+ Certification Exam: Core 1</p>
                <span>Includes 163 Questions & Answers</span>
              </div>

              <div class="product_description">
                <a style={{ fontSize: 14 }} href="">
                  Duration:
                </a>
                {/* <p>Duration</p> */}
                <span>2hrs 30mins</span>
              </div>

              <div class="product_description price_container">
                <a href="#">Download</a>
              </div>

              <span class="extra_description">
                CompTIA A+ Certification Bundle gives you unlimited access to
                "CompTIA A+" certification premium questions.
              </span>
            </div>
          </section>

          <div class="sectionb">
            <h2>Access Free CompTIA A+ Practice Test Questions</h2>

            <div class="table_container">
              <Certification_exam />
              <Certification_exam />
              <Certification_exam />
              <Certification_exam />
              <Certification_exam />
            </div>
          </div>

          <div class="sectionc">
            <h3>
              CompTIA A+ Certification Exam Dumps & Practice Test Questions
            </h3>
            <p>
              Prepare with top-notch CompTIA A+ certification practice test
              questions and answers, vce exam dumps, study guide, video training
              course from ExamCollection. All CompTIA A+
            </p>
            <a href="#">Read More</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Ebook;
