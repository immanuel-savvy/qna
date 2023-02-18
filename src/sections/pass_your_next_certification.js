import React from "react";
import { client_domain } from "../assets/js/utils";
import { save_to_session } from "../components/practice_question";

class Pass_your_next_certification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {};

  handle_search = async (e) => {
    e.preventDefault();

    let { query } = this.state;
    if (!query) return;

    save_to_session("query", query);
    window.location.assign(`${client_domain}/exams_search_result`);
  };

  render() {
    return (
      <section class="sectioni">
        <h1>Pass Your Next Certification Exam Fast</h1>
        <h5>
          Real IT Certification IT Certification Practice Tests. Instant
          Download Accurate & Verified Exam Questions & Answers by IT Experts,
          99.6% Exam Pass Rate 15 years in the business, more than 1.2M happy
          customers.
        </h5>

        <form action="" class="srch">
          <input
            onChange={({ target }) => this.setState({ query: target.value })}
            type="search"
            name=""
            id=""
            placeholder="Find Your Exam"
          />
          <button onClick={this.handle_search} type="submit">
            Search
          </button>
        </form>
      </section>
    );
  }
}

export default Pass_your_next_certification;
