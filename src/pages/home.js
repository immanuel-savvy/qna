import React from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Pass_your_next_certification from "../sections/pass_your_next_certification";
import Top_certifications from "../sections/top_certifications";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <main>
          <Pass_your_next_certification />
          <Top_certifications />
        </main>

        <Footer />
      </>
    );
  }
}

export default Home;
