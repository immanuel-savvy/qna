import React from "react";
import { post_request } from "../assets/js/services";
import { client_domain } from "../assets/js/utils";
import { emitter } from "../Qna";
import Alert_message from "./alert_msg";
import Handle_file_upload from "./handle_file";
import Stretch_btn from "./stretch_btn";

class Upload_ebook extends Handle_file_upload {
  constructor(props) {
    super(props);

    this.state = {};
  }

  is_set = () => {
    let { title, cover, book, loading } = this.state;

    if (!title || !cover || !book || loading) return;

    return true;
  };

  upload = async () => {
    let { toggle } = this.props;
    let { title, description, price, cover, book } = this.state;

    this.setState({ loading: true });
    if (Number(price) < 0 || !price) price = 0;

    let ebook = {
      title,
      cover,
      book,
      description,
      price,
    };

    let res = await post_request("upload_ebook", ebook);

    console.log(res);
    if (!res || (res && !res._id))
      return this.setState({
        message: res.message || "Cannot upload eBook at this time",
        loading: false,
      });
    ebook.cover = res.cover;
    ebook.book = res.book;
    ebook._id = res._id;
    ebook.created = res.created;

    window.sessionStorage.setItem("ebook", JSON.stringify(ebook));
    window.location.assign(`${client_domain}/ebook?${ebook._id}`);
    toggle();
  };

  render() {
    let { toggle } = this.props;
    let { message } = this.state;

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
          </div>

          {message ? <Alert_message msg={message} /> : null}

          <Stretch_btn
            title="upload"
            action={this.upload}
            disabled={!this.is_set()}
          />
        </form>
      </div>
    );
  }
}

export default Upload_ebook;
