import React from "react";

class Top_certifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section class="sectionii">
        <p class="txt">Top Certifications</p>
        <div class="fl">
          <span>
            <a
              href=""
              style={{ backgroundImage: `url(../assets/images/img.png)` }}
            ></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </span>
        </div>
        <a href="" class="seeall">
          See all <i class="material-icons">chevron_right</i>
        </a>
      </section>
    );
  }
}

export default Top_certifications;
