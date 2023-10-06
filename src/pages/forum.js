import React from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";
import { post_request } from "../assets/js/services";
import Question from "../components/question";
import Loadindicator from "../components/loadindicator";

class Forum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let discussions = await post_request("discussions");

    this.setState({ discussions });
  };

  render() {
    let { discussions } = this.state;

    return (
      <>
        <Header />

        <main>
          <section className="sectioni sectionaa1">
            <h1> Join Hot Discussions Here !</h1>
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
                placeholder="Find Question / Exam"
              />
              <button onClick={this.search} type="submit">
                Search
              </button>
            </form>
          </section>

          <section class="sectiontop">
            <div
              class="examtitle"
              style={{
                boxShadow: "0 0 60px 0 rgb(170, 170, 170, 0.4)",
                border: "none",
              }}
            >
              <div class="examquestions" style={{ width: "100%" }}>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {discussions ? (
                    discussions.length ? (
                      discussions.map((discussion) => (
                        <Question
                          style={{ marginLeft: 20 }}
                          key={discussion._id}
                          exam={discussion.exam}
                          question={discussion.question}
                        />
                      ))
                    ) : (
                      <></>
                    )
                  ) : (
                    <Loadindicator />
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Forum;
