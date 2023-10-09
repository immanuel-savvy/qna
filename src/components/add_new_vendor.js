import React from "react";
import { post_request } from "../assets/js/services";
import Alert_message from "./alert_msg";
import Stretch_btn from "./stretch_btn";

class Add_new_vendor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  is_set = () => {
    let { name, description, loading } = this.state;

    return name && description && !loading;
  };

  submit = async () => {
    let { toggle } = this.props;
    let { name, description } = this.state;

    this.setState({ loading: true });
    let vendor = { name, description };
    let res = await post_request("new_vendor", vendor);
    if (res._id) {
      vendor._id = res._id;
      vendor.created = res.created;

      toggle();
    } else {
      this.setState({
        message: "Cannot add vendor at the moment",
        loading: false,
      });
    }
  };

  render() {
    let { toggle } = this.props;
    let { message, loading } = this.state;

    return (
      <div class="addmodal" id="modal" style={{ display: "flex" }}>
        <form action="">
          <i
            onClick={toggle}
            class="material-icons clo"
            id="close"
            onclick="closemode()"
          >
            close
          </i>
          <div class="forms">
            <span class="sp">
              <h2>New Vendor</h2>

              <label for="">
                Vendor Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                onChange={({ target }) =>
                  this.setState({ message: "", name: target.value })
                }
              />

              <label for="">
                About vendor <span className="text-danger">*</span>
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="About..."
                onChange={({ target }) =>
                  this.setState({ message: "", description: target.value })
                }
              ></textarea>
            </span>
          </div>

          {message ? <Alert_message msg={message} /> : null}

          <Stretch_btn
            title="Add vendor"
            action={this.submit}
            disabled={!this.is_set()}
            loading={loading}
          />
        </form>
      </div>
    );
  }
}

export default Add_new_vendor;
