import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { to_title } from "../assets/js/functions";
import { get_request, post_request } from "../assets/js/services";
import Alert_message from "./alert_msg";
import Handle_file_upload from "./handle_file";
import Loadindicator from "./loadindicator";
import Stretch_btn from "./stretch_btn";

class Upload_ebook extends Handle_file_upload {
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
    let { title, certificate, cover, book } = this.state;

    if (!title || !certificate || !cover || !book) return;

    return true;
  };

  upload = async () => {
    let { toggle } = this.props;
    let { title, vendor, certificate, description, price, cover, book } =
      this.state;

    this.setState({ loading: true });
    if (Number(price) < 0 || !price) price = 0;
    else price = Number(price);

    let ebook = {
      title,
      cover,
      book,
      vendor,
      description,
      certificate,
      price,
    };

    let res = await post_request("upload_ebook", ebook);

    if (!res || (res && !res._id))
      return this.setState({
        message: res.message || "Cannot upload eBook at this time",
        loading: false,
      });
    ebook.cover = res.cover;
    ebook.book = res.book;
    ebook._id = res._id;
    ebook.created = res.created;

    this.setState(
      { toast: "Ebook uploaded!", ebook, loading: false },
      this.clear_state
    );
  };

  clear_state = () => {
    this.setState({
      title: "",
      cover: "",
      vendor: "",
      description: "",
      certificate: "",
      price: "",
      book: "",
    });
  };

  render() {
    let { toggle } = this.props;
    let {
      message,
      certificates,
      price,
      title,
      cover_filename,
      loading,
      ebook,
      toast,
    } = this.state;

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
            <span class="file">
              <div class="cover">
                <i class="material-icons">perm_media</i>
                <p>Click to add eBook cover or Drop an image</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => this.handle_file(e, "cover")}
              />
            </span>
            {cover_filename ? <span>{cover_filename}</span> : null}

            <span class="sp">
              <label for="">
                Document (PDF) <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                accept=".doc,.pdf,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(e) => this.handle_file(e, "book")}
              />
            </span>
            <span class="sp">
              <label for="">
                eBook Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="eBook title"
                onChange={({ target }) =>
                  this.setState({ message: "", title: target.value })
                }
              />
            </span>
            <span class="sp">
              <label for="">
                eBook Description <span className="text-danger">*</span>
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Description..."
                onChange={({ target }) =>
                  this.setState({ message: "", description: target.value })
                }
              ></textarea>
            </span>
            <span class="sp">
              <label for="">eBook Price</label>
              <input
                type="number"
                placeholder="NGN 0.00"
                onChange={({ target }) =>
                  this.setState({ message: "", price: target.value })
                }
              />
            </span>

            <span className="sp">
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
            title="upload"
            action={this.upload}
            loading={loading}
            disabled={!this.is_set()}
          />
        </form>

        {toast ? (
          <ToastContainer className="p-3" position={"bottom-end"}>
            <Toast
              bg="success"
              show={toast}
              onClose={() => this.setState({ toast: false })}
            >
              <Toast.Header closeButton={true}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Ebook Uploaded!</strong>
                <small>
                  {ebook.price ? <span>NGN {ebook.price}</span> : "Free"}
                </small>
              </Toast.Header>
              <Toast.Body>
                {
                  <Link
                    to="/ebook"
                    style={{ color: "#fff" }}
                    onClick={() =>
                      window.sessionStorage.setItem(
                        "ebook",
                        JSON.stringify(ebook)
                      )
                    }
                  >
                    {ebook.title}
                  </Link>
                }
              </Toast.Body>
            </Toast>
          </ToastContainer>
        ) : null}
      </div>
    );
  }
}

export default Upload_ebook;
