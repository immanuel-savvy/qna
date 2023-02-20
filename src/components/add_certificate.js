import React from "react";
import { to_title } from "../assets/js/functions";
import { get_request, post_request } from "../assets/js/services";
import Alert_message from "./alert_msg";
import Handle_file_upload from "./handle_file";
import Loadindicator from "./loadindicator";
import Stretch_btn from "./stretch_btn";

class Add_certificate extends Handle_file_upload {
  constructor(props) {
    super(props);

    let { certificate } = this.props;

    this.state = {
      ...certificate,
      vendor: certificate && certificate?.vendor?._id,
      image_filename: certificate && certificate?.image,
    };
  }

  is_set = () => {
    let { title, description, vendor, loading, image } = this.state;

    return title && description && vendor && !loading && image;
  };

  componentDidMount = async () => {
    let vendors = !this.state._id && (await get_request("vendors/all"));
    vendors = Array.isArray(vendors) ? vendors : new Array();

    this.setState({ vendors });
  };

  submit = async () => {
    let { toggle } = this.props;
    let { title, description, vendor, _id, created, image } = this.state;

    this.setState({ loading: true });
    let certificate = { title, vendor, _id, created, image, description };
    let res = await post_request(
      _id ? "update_certificate" : "add_certificate",
      certificate
    );

    if (res._id) {
      certificate._id = res._id;
      certificate.image = res.image;
      certificate.created = res.created;

      toggle();
      _id && window.location.reload();
    } else {
      this.setState({
        message: `Cannot ${_id ? "update" : "add"} certificate at the moment`,
        loading: false,
      });
    }
  };

  render() {
    let { toggle } = this.props;

    let { message, vendors, _id, image_filename, title, description } =
      this.state;

    return (
      <div class="addmodal" id="modal" style={{ display: "flex" }}>
        <form action="">
          <i onClick={toggle} class="material-icons clo" id="close">
            close
          </i>
          <div class="forms">
            <span class="sp">
              <h2>{_id ? "Update" : "Add"} Certification</h2>

              <span class="file" style={{ width: "100%" }}>
                <div class="cover">
                  <i class="material-icons">perm_media</i>
                  <p>Certificate Logo</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => this.handle_file(e, "image")}
                />
              </span>

              {image_filename ? (
                <p>
                  <em>{image_filename}</em>
                </p>
              ) : null}

              <label for="">
                Certificate Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                value={title}
                onChange={({ target }) =>
                  this.setState({ message: "", title: target.value })
                }
              />

              <label for="">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={description}
                placeholder="Description..."
                onChange={({ target }) =>
                  this.setState({ message: "", description: target.value })
                }
              ></textarea>

              {_id ? null : (
                <>
                  <label>Vendor</label>
                  <div className="select">
                    {vendors ? (
                      <select
                        id="selection"
                        onChange={({ target }) => {
                          this.setState({ vendor: target.value });
                        }}
                        aria-valuenow="20"
                      >
                        <option>-- Select Vendor --</option>
                        {vendors.map(({ name, _id }) => (
                          <option key={_id} value={_id}>
                            {to_title(name)}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <Loadindicator smalls />
                    )}
                  </div>
                </>
              )}
            </span>
          </div>

          {message ? <Alert_message msg={message} /> : null}

          <Stretch_btn
            title={_id ? "Update certificate" : "Add certificate"}
            action={this.submit}
            disabled={!this.is_set()}
          />
        </form>
      </div>
    );
  }
}

export default Add_certificate;
