import React from "react";
import { to_title } from "../assets/js/functions";

class Stretch_btn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { disabled, loading, action, title } = this.props;

    return (
      <button disabled={disabled} type="submit" onClick={action}>
        {to_title(title)}
      </button>
    );
  }
}

export default Stretch_btn;
