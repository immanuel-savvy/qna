import React from "react";
import { get_request } from "../assets/js/services";
import Certification_exam from "../components/certification_exam";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Certificate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let certificate = get_session("certificate");
    if (certificate) {
      this.setState({ certificate });
      let exams = await get_request(`certification_exams/${certificate._id}`);
      this.setState({ exams });
    }
  };

  render() {
    let { exams, certificate } = this.state;
    if (!certificate) return <Loadindicator />;

    let { title } = certificate;

    return (
      <>
        <Header />

        <main>
          <div class="sectionb">
            <h2>{title} Exams</h2>

            <div class="table_container">
              {exams ? (
                exams.length ? (
                  exams.map((exam, index) => (
                    <Certification_exam exam={exam} key={index} />
                  ))
                ) : (
                  <></>
                )
              ) : (
                <Loadindicator />
              )}
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Certificate;
