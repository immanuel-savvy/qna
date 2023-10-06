import React from "react";
import { to_title } from "../assets/js/functions";
import Loadindicator from "./loadindicator";

class Stretch_btn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { disabled, loading, style, action, title, color } = this.props;

    return loading ? (
      <Loadindicator />
    ) : (
      <button
        style={{ backgroundColor: color || null, ...style }}
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
