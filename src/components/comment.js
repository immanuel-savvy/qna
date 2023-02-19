import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="comment">
        <div class="top">
          <i class="material-icons">person</i>
          <p class="username">Mr. wamet</p>
          <p class="time">(2 years, 8 months ago)</p>
        </div>
        <div class="com">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          corrupti, ipsum sapiente voluptate itaque inventore?
        </div>
        <div class="like">
          {" "}
          <i class="material-icons-outlined">thumb_up</i>{" "}
          <i class="material-icons-outlined">thumb_down</i>{" "}
          <i class="material-icons-outlined">bookmark_border</i>{" "}
        </div>
        <div class="replies">
          <div class="comment">
            <div class="top">
              <i class="material-icons">person</i>
              <p class="username">Mr. wamet</p>
              <p class="time">(2 years, 8 months ago)</p>
            </div>
            <div class="com">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus corrupti, ipsum sapiente voluptate itaque inventore?
            </div>
            <div class="like">
              {" "}
              <i class="material-icons-outlined">thumb_up</i>{" "}
              <i class="material-icons-outlined">thumb_down</i>{" "}
              <i class="material-icons-outlined">bookmark_border</i>{" "}
              <p>Reply</p>
            </div>
            <div class="replies"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
