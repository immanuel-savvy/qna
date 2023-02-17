import React, { createFactory } from "react";
import { get_request } from "../assets/js/services";
import Alert_message from "./alert_msg";
import Loadindicator from "./loadindicator";
import Stretch_btn from "./stretch_btn";

class Create_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let certificates = await get_request("certifications/all");
    certificates = Array.isArray(certificates) ? certificates : new Array();
    this.setState({ certificates });
  };

  is_set = () => {
    let { title, certificate, year, duration, questions } = this.state;

    return title && duration && questions && certificate && year;
  };

  submit = () => {};

  render() {
    let { toggle } = this.props;
    let { message, certificates } = this.state;

    return (
      <div class="addmodal" id="modal" style={{ display: "flex" }}>
        <form action="">
          <i onClick={toggle} class="material-icons clo" id="close">
            close
          </i>
          <div class="forms">
            <span class="sp">
              <h2>Add Exam</h2>

              <label for="">
                Exam Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                onChange={({ target }) =>
                  this.setState({ message: "", title: target.value })
                }
              />

              <label for="">
                Duration (Minutes) <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                placeholder="Duration"
                onChange={({ target }) =>
                  this.setState({ message: "", duration: target.value })
                }
              />

              <label for="">
                Year <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                placeholder="Year"
                onChange={({ target }) =>
                  this.setState({ message: "", year: target.value })
                }
              />

              <label>Vendor</label>
              <div className="select">
                {certificates ? (
                  <select
                    id="selection"
                    onChange={({ target }) => {
                      this.setState({ certificate: target.value });
                    }}
                    aria-valuenow="20"
                  >
                    <option>-- Select Certificate --</option>
                    {certificates.map(({ title, _id }) => (
                      <option key={_id} value={_id}>
                        {to_title(title)}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Loadindicator smalls />
                )}
              </div>
            </span>
          </div>

          {message ? <Alert_message msg={message} /> : null}

          <Stretch_btn
            title="create exam"
            action={this.submit}
            disabled={!this.is_set()}
          />
        </form>
      </div>
    );
  }
}

export default Create_exam;
