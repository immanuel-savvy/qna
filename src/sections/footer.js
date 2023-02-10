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
          <a href="#">Share VCE File</a>
          <a href="#">All Vendors</a>
          <a href="#">Video Course</a>
          <a href="#">Certifications Guide</a>
          <a href="#">Archive</a>
          <a href="#">Blog</a>
          <a href="#">What We Offer</a>
          <a href="#">VCE Exam Simulator</a>
          <a href="#">VCE Player</a>
          <a href="#">Download VCE Online</a>
          <a href="#">Open VCE Files</a>
          <a href="#">Exam Formatter</a>
          <a href="#">VCE Mobile Tutorial</a>
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
            Examcollection.com is owned by Boltprep Ltd. Company address:
            Wisteria Grange Barn, Pikes End, Pinner, Middlesex, United Kingdom,
            HA5 2EX
          </p>
        </div>

        <div class="footer_description">
          <p>
            Payments will appear on your bank statement as "Examcollection.com".
            © 2023 ExamCollection
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
