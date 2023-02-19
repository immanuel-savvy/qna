import React from "react";
import { to_title } from "../assets/js/functions";

class Stretch_btn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { disabled, loading, action, title, color } = this.props;

    return (
      <button
        style={{ backgroundColor: color || null }}
        disabled={disabled || loading}
        type="submit"
        onClick={action}
      >
        {to_title(title)}
      </button>
    );
  }
}

export default Stretch_btn;
