import React from "react";
import { to_title } from "../assets/js/functions";
import { get_request } from "../assets/js/services";
import { domain, month_index } from "../assets/js/utils";
import Certification_exam from "../components/certification_exam";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let ebook = window.sessionStorage.getItem("ebook");
    if (ebook) {
      ebook = JSON.parse(ebook);
      this.setState({ ebook });
    } else return;

    let certifcation_exams = await get_request(
      `certification_exams/${ebook.certificate._id || ebook.certificate}`
    );
    this.setState({ certifcation_exams, admin: get_session("logged_admin") });
  };

  render() {
    let { ebook, certifcation_exams, admin } = this.state;
    let { description, book, created, cover, title, price, certificate } =
      ebook || new Object();

    created = new Date(created);

    if (!certificate) window.history.go(-1);

    return (
      <>
        <Header />
        {ebook ? (
          <main>
            <section class="sectiona">
              <h3 style={{ fontWeight: 700, fontSize: 18 }}>
                Pass Your {certificate.title} Certification Easy!
              </h3>

              {description.split("\n").map((d) => (
                <p style={{ textAlign: "center" }}>{d}</p>
              ))}

              <div class="product">
                <div class="image_container">
                  <img
                    src={`${domain}/images/${cover}`}
                    style={{ width: 150, marginRight: 20, borderRadius: 10 }}
                    alt=""
                  />
                  <h3>{to_title(title)}</h3>
                </div>

                {certificate ? (
                  <>
                    {certifcation_exams && certifcation_exams[0] ? (
                      <div class="product_description">
                        <a href="">{certifcation_exams[0].year} Exam:</a>
                        <p>{to_title(certifcation_exams[0].title)}:</p>
                        <span>
                          Includes {certifcation_exams[0].questions} Questions &
                          Answers
                        </span>
                      </div>
                    ) : null}
                    <div class="product_description">
                      <span>
                        Uploaded: {to_title(month_index[created.getMonth()])}{" "}
                        {created.getDate()}, {created.getFullYear()}
                      </span>
                    </div>
                  </>
                ) : null}

                <div class="product_description price_container">
                  {price ? <h2>&#8358; {price}</h2> : null}
                  {price ? (
                    <a href="#">Buy</a>
                  ) : (
                    <a
                      target="_blank"
                      href={`${domain}/files/${book}`}
                      download
                    >
                      Download
                    </a>
                  )}
                </div>

                <span class="extra_description">
                  Elit minim id in eu occaecat Lorem minim ut minim duis aliqua
                  officia labore sunt.
                </span>
              </div>
            </section>

            <div class="sectionb">
              <h2>Access Free {certificate.title} Practice Test Questions</h2>

              {certifcation_exams ? (
                <div class="table_container">
                  {certifcation_exams.map((cert) => (
                    <Certification_exam
                      admin={admin}
                      exam={cert}
                      key={cert._id}
                    />
                  ))}
                </div>
              ) : (
                <Loadindicator />
              )}
            </div>

            <div class="sectionc">
              <h3>
                {certificate.title} Certification Exam Dumps & Practice Test
                Questions
              </h3>
              <p>{certificate.description}</p>
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
