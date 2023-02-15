import React from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Forum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <Footer />
      </>
    );
  }
}

export default Forum;
