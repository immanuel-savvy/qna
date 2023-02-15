import React from "react";

class Sidenar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="side_nav" id="sideNav" style={{ display: "flex" }}>
        <form>
          <input placeholder="Search" type="search" class="search" />
          <button type="submit">
            <i class="material-icons">search</i>
          </button>
        </form>

        <div class="sidenav_list">
          <a href="./register.html">
            <i class="material-icons-outlined">person</i> Login/Register
          </a>
          <a href="">
            <i class="material-icons-outlined">edit</i> Contact
          </a>
          <a href="./faq.html">
            <i class="material-icons-outlined">help_outline</i>FAQ
          </a>
          <a href="">
            <i class="material-icons-outlined cl">menu_book</i> Premium
          </a>
          <a href="">
            <i class="material-icons-outlined cl">insert_drive_file</i> New
            Files
          </a>
          <a href="">
            <i class="material-icons-outlined cl">format_list_bulleted</i> Video
            Courses
          </a>
          <a href="">
            <i class="material-icons-outlined cl">drive_file_rename_outline</i>
            Request Exam
          </a>
        </div>
      </div>
    );
  }
}

export default Sidenar;
