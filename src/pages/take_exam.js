import React from "react";
import { minutes_to_hours, to_title } from "../assets/js/functions";
import { month_index } from "../assets/js/utils";
import Loadindicator from "../components/loadindicator";
import Question from "../components/question";
import Stretch_btn from "../components/stretch_btn";
import Footer from "../sections/footer";
import Header from "../sections/header";

const fetch_session = (key) => {
  let val = window.sessionStorage.getItem(key);
  try {
    if (val) return JSON.parse(val);
  } catch (e) {}
};

class Take_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let exam = fetch_session("exam");

    exam && this.setState({ exam });
  };

  render() {
    let { exam, start_exam } = this.state;
    if (!exam) return <Loadindicator />;

    let { title, year, duration, updated, certificate } = exam;
    updated = new Date(updated);

    return (
      <>
        <Header />
        <main>
          <section class="sectiontop">
            <div class="examtitle">
              <span class="top"></span>
              <small style={{ marginTop: 20 }}>{certificate.vendor.name}</small>
              <p style={{ marginTop: 10 }} class="examname">
                {to_title(title)}
              </p>

              <span class="instructions">
                <p class="t1">
                  Vendor: <b>{certificate.vendor.name}</b>
                </p>
                <p class="t1">
                  Certification: <b>{certificate.title}</b>
                </p>
                <p class="t1">
                  Duration: <b>{minutes_to_hours(duration).string}</b>
                </p>
                <p class="t1">
                  Questions last updated{" "}
                  <b>
                    <em>
                      {to_title(month_index[updated.getMonth()])}{" "}
                      {updated.getFullYear()}
                    </em>
                  </b>
                </p>
              </span>

              <form class="forms mb-5">
                {start_exam ? null : (
                  <Stretch_btn title="start exam" action={this.start_exam} />
                )}
              </form>
            </div>
            {start_exam ? (
              <div class="examquestions">
                {}

                <a href="" class="next">
                  Next page <i class="material-icons">chevron_right</i>
                </a>
              </div>
            ) : null}
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default Take_exam;
