import React from "react";
import { to_title } from "../assets/js/functions";
import { domain } from "../assets/js/utils";
import Certification_exam from "../components/certification_exam";
import Loadindicator from "../components/loadindicator";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let ebook = window.sessionStorage.getItem("ebook");
    if (ebook) {
      ebook = JSON.parse(ebook);
      this.setState({ ebook });
    }
  };

  render() {
    let { ebook } = this.state;
    let { description, cover, title, exam, price } = ebook || new Object();

    return (
      <>
        <Header />
        {ebook ? (
          <main>
            <section class="sectiona">
              <h3 style={{ fontWeight: 700, fontSize: 18 }}>
                Pass Your CompTIA A+ Certification Easy!
              </h3>

              {description.split("\n").map((d) => (
                <p style={{ textAlign: "center" }}>{d}</p>
              ))}

              <div class="product">
                <div class="image_container">
                  <img
                    src={`${domain}/images/${cover}`}
                    style={{ width: 150, marginRight: 20, borderRadius: 20 }}
                    alt=""
                  />
                  <h3>{to_title(title)}</h3>
                </div>

                {exam ? (
                  <div class="product_description">
                    <a href="">220-1101 Exam:</a>
                    <p>CompTIA A+ Certification Exam: Core 1</p>
                    <span>Includes 163 Questions & Answers</span>
                  </div>
                ) : null}

                <div class="product_description price_container">
                  {price ? <h2>&#8358; {price}</h2> : null}
                  <a href="#">{price ? "Buy" : "Download"}</a>
                </div>

                <span class="extra_description">
                  Elit minim id in eu occaecat Lorem minim ut minim duis aliqua
                  officia labore sunt.
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
                questions and answers, vce exam dumps, study guide, video
                training course from ExamCollection. All CompTIA A+
              </p>
              <a href="#">Read More</a>
            </div>
          </main>
        ) : (
          <Loadindicator />
        )}
        <Footer />
      </>
    );
  }
}

export default Ebook;
