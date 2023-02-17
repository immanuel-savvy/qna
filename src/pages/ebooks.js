import React from "react";
import "../assets/css/ebook.css";
import { get_request } from "../assets/js/services";
import Ebook from "../components/ebook";
import Loadindicator from "../components/loadindicator";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Ebooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let ebooks = await get_request("ebooks/all");
    this.setState({ ebooks });
  };

  render() {
    let { ebooks } = this.state;

    return (
      <>
        <Header />
        <main>
          <section className="sectioni sectionaa1">
            <h1>Find the best ebooks here !</h1>
            <h5>
              A library of the best ebook to help you get prepared your your
              exams faster
            </h5>

            <form action="" className="srch">
              <input type="search" name="" id="" placeholder="Find eBook" />
              <button type="submit">Search</button>
            </form>
          </section>
          <section className="sectiona1 sectionaii">
            <div className="existingebooks">
              {ebooks ? (
                ebooks.length ? (
                  ebooks.map((ebook) => <Ebook ebook={ebook} key={ebook._id} />)
                ) : (
                  <></>
                )
              ) : (
                <Loadindicator />
              )}
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default Ebooks;
