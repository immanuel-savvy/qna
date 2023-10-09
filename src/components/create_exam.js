import React from "react";
import { to_title } from "../assets/js/functions";
import { get_request, post_request } from "../assets/js/services";
import Alert_message from "./alert_msg";
import Loadindicator from "./loadindicator";
import Stretch_btn from "./stretch_btn";

class Create_exam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    let certificates = await get_request("certificates/all");
    certificates = Array.isArray(certificates) ? certificates : new Array();
    this.setState({ certificates });
  };

  is_set = () => {
    let { title, certificate, year, loading, duration } = this.state;

    return (
      title &&
      Number(duration) > 0 &&
      certificate &&
      Number(year) > 0 &&
      !loading
    );
  };

  submit = async () => {
    let { toggle } = this.props;
    let { title, duration, vendor, year, certificate } = this.state;

    this.setState({ loading: true });

    let exam = {
      title,
      duration: Number(duration),
      year,
      vendor,
      certificate,
    };

    let result = await post_request("create_exam", exam);
    ``;
    if (result && result._id) {
      exam._id = result._id;
      exam.created = result.created;

      toggle();
    } else
      this.setState({
        message: "Cannot create exam at the moment",
        loading: false,
      });
  };

  render() {
    let { toggle } = this.props;
    let { message, certificates, loading } = this.state;

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

              <label>Certificate</label>
              <div className="select">
                {certificates ? (
                  <select
                    id="selection"
                    onChange={({ target }) => {
                      let val = target.value.split(":");
                      this.setState({
                        certificate: val[0],
                        vendor: val[1],
                      });
                    }}
                    aria-valuenow="20"
                  >
                    <option>-- Select Certificate --</option>
                    {certificates.map(({ vendor, title, _id }) => (
                      <option key={_id} value={`${_id}:${vendor._id}`}>
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
            loading={loading}
          />
        </form>
      </div>
    );
  }
}

export default Create_exam;
