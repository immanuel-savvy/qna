import React from "react";
import Certification_exam from "../components/certification_exam";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Vendor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      certifications: Array.from(new Array(50).keys()),
    };
  }

  render() {
    let { certifications } = this.state;

    return (
      <>
        <Header />

        <main>
          <div class="sectionb">
            <h2>CompTIA Certification Exams</h2>

            <div class="table_container">
              {certifications.map((certification, index) => (
                <Certification_exam
                  certification={certification}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>
          <p class="list_info">
            The questions are group by the exam number. You can also see the{" "}
            <a href="#">full list</a> of questions.
          </p>

          <div class="sectionc">
            <h3>
              CompTIA A+ Certification Exam Dumps & Practice Test Questions
            </h3>
            <p>
              Pass your CompTIA certification exams fast by using the vce files
              which include latest & updated CompTIA exam dumps & practice test
              questions and answers. The complete
            </p>
            <a href="#">Read More</a>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Vendor;
