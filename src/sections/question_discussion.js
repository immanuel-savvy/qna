import React from "react";

class Question_discussion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="discussionmodal" id="discussionnmodal">
        <div class="disc">
          <i class="material-icons c" onclick="closeModal()">
            close
          </i>
          <form action="">
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Type your comment..."
            ></textarea>
            <button type="submit">Post</button>
          </form>
          <div class="comments">
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
              <div class="replies">
                <div class="comment">
                  <div class="top">
                    <i class="material-icons">person</i>
                    <p class="username">Mr. wamet</p>
                    <p class="time">(2 years, 8 months ago)</p>
                  </div>
                  <div class="com">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus corrupti, ipsum sapiente voluptate itaque
                    inventore?
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
                    Temporibus corrupti, ipsum sapiente voluptate itaque
                    inventore?
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
                    Temporibus corrupti, ipsum sapiente voluptate itaque
                    inventore?
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
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
            <div class="comment"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question_discussion;
