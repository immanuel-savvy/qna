import React from "react";
import { post_request } from "../assets/js/services";
import { scroll_to_top } from "../components/ebook";
import Loadindicator from "../components/loadindicator";
import { get_session } from "../components/practice_question";
import Vendor_exam from "../components/vendor_exam";
import Footer from "../sections/footer";
import Header from "../sections/header";

class Exams_search_result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    scroll_to_top();
    let query = get_session("query")?.toLowerCase();

    let exams = await post_request("search_exams", { query });
    this.setState({ exams, query });
  };

  render() {
    let { query, exams } = this.state;

    return (
      <>
        <Header />

        <main>
          <div class="sectionb">
            <h2>Search results for "{query}"</h2>

            <div class="table_container">
              {exams ? (
                exams.length ? (
                  exams.map((exam) => (
                    <Vendor_exam key={exam._id} exam={exam} />
                  ))
                ) : (
                  <h3>No result found!</h3>
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

export default Exams_search_result;
