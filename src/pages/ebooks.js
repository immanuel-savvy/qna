import React from "react";
import "../assets/css/ebook.css";
import { get_request, post_request } from "../assets/js/services";
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
    let free = window.location.href.split("?")[1];

    let ebooks = await get_request(`ebooks/${free ? "free" : "all"}`);

    this.setState({ ebooks, free });
  };

  search = async (e) => {
    e.preventDefault();

    let { query, searching, free } = this.state;
    if (!query || searching) return;

    this.setState({ ebooks: null, searching: true });

    let ebooks = await post_request("search_ebooks", { query, free });

    this.setState({ ebooks, searching: false, query: "" });
  };

  render() {
    let { ebooks, free } = this.state;

    return (
      <>
        <Header />
        <main>
          <section className="sectioni sectionaa1">
            <h1> {free ? "Download free" : "Find the best"} ebooks here !</h1>
            <h5>
              A library of the best ebook to help you get prepared your your
              exams faster
            </h5>

            <form action="" className="srch">
              <input
                onChange={({ target }) =>
                  this.setState({ query: target.value })
                }
                type="search"
                name=""
                id=""
                placeholder="Find eBook"
              />
              <button onClick={this.search} type="submit">
                Search
              </button>
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
