import React from "react";
import { PaystackConsumer } from "react-paystack";
import { email_regex, to_title } from "../assets/js/functions";
import { get_request, post_request } from "../assets/js/services";
import { domain, month_index } from "../assets/js/utils";
import Certification_exam from "../components/certification_exam";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";
import Footer from "../sections/footer";
import Header from "../sections/header";

const Paystack_public_key = "pk_test_88c19524a2abc3ad156a72952316e0f77ca87f4e";
const Paystack_private_key = "sk_test_8f53d8f0d9303a18a856d4aeba97603d0795fdcb";

class Ebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ebook: get_session("ebook"),
      loggeduser: get_session("loggeduser"),
    };
  }

  componentDidMount = async () => {
    let { ebook } = this.state;
    if (!ebook) return;

    let certifcation_exams = await get_request(
      `certification_exams/${ebook.certificate._id || ebook.certificate}`
    );
    this.setState({ certifcation_exams, admin: get_session("logged_admin") });
  };

  payment_successful = async () => {
    let { email, loggeduser, ebook } = this.state;
    let user = loggeduser && loggeduser._id;
    email = email || (loggeduser && loggeduser.email);

    let token = {
      user,
      email,
      ebook: ebook._id,
      certificate: ebook.certificate._id,
      price: ebook.price,
    };

    let res = await post_request("ebook_purchased", token);
    res._id && this.setState({ purchased: true });
  };

  has_purchased = async () => {
    let { email, loggeduser, ebook } = this.state;
    email = email || (loggeduser && loggeduser.email);

    return await post_request("has_purchased", {
      ebook: ebook._id,
      email,
      certificate: certificate._id,
    });
  };

  render() {
    let { ebook, certifcation_exams, purchased, email, loggeduser, admin } =
      this.state;
    let { description, book, created, cover, title, price, certificate } =
      ebook || new Object();

    created = new Date(created);

    if (!certificate) window.history.go(-1);

    email = email || (loggeduser && loggeduser.email);

    let payment_props = {
      email,
      publicKey: Paystack_public_key,
      amount: Number(price) * 100,
      onSuccess: this.payment_successful,
      onClose: this.cancel,
    };

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

                <div style={{ width: "100%" }}>
                  <form
                    action=""
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <label style={{ marginTop: 20 }}>Email</label>
                    <input
                      value={email}
                      onChange={({ target }) =>
                        this.setState({ email: target.value })
                      }
                      style={{
                        height: 50,
                        borderRadius: 10,
                        paddingLeft: 15,
                        textAlign: "center",
                        width: "75%",
                      }}
                      placeholder="Your email"
                    />
                  </form>
                </div>

                <div class="product_description price_container">
                  {price ? <h2>&#8358; {price}</h2> : null}
                  {price && !purchased ? (
                    <PaystackConsumer {...payment_props}>
                      {({ initializePayment }) => (
                        <a
                          href="#"
                          disabled={email_regex.test(email)}
                          onClick={() => {
                            this.has_purchased().then((res) => {
                              !res.purchased
                                ? initializePayment(
                                    this.payment_successful,
                                    this.cancel
                                  )
                                : this.setState({ purchased: true });
                            });
                          }}
                        >
                          Buy
                        </a>
                      )}
                    </PaystackConsumer>
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
