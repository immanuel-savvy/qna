import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer>
        <div class="footer_link">
          <a href="#">Share Results</a>
          <a href="#">All Vendors</a>
          <a href="#">eBooks</a>
          <a href="#">Certifications Guide</a>
          <a href="#">Archive</a>
          <a href="#">Blog</a>
          <a href="#">What We Offer</a>
          <a href="#">Exam Simulator</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div class="footer_description">
          <p>
            Exere materials do not contain actual questions and answers from
            Cisco's certifications exams
          </p>
        </div>

        <div class="footer_description">
          <p>
            QNA.com is owned by GIIT Africa. <br />
            Company address: 3 Obafemi Awolowo way, Ikeja, Lagos, Nigeria.
          </p>
        </div>

        <div class="footer_description">
          <p>
            Payments will appear on your bank statement as "QNA.com". ©{" "}
            {new Date().getFullYear()} QNA
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
