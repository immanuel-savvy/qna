import React from "react";

class Site_metric extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { visits, users } = this.props;
    return (
      <div class="sp1 sp2">
        <div class="exams">
          <p class="title">Site Metrics</p>
          <div class="sec sec2">
            <div class="item">
              <span class="created">
                <p> Total site visits</p> <a>{visits}</a>
              </span>
              <span class="created">
                <p> Total site users</p> <a>{users}</a>
              </span>
            </div>
          </div>
          {/* <div class="sec">
            <div class="item">
              <span class="created">
                <p> Total sales revenue</p> <a>NGN 9,000</a>
              </span>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Site_metric;
