import React from "react";

class Exam_countdown extends React.Component {
  constructor(props) {
    super(props);

    let { duration, now } = this.props;
    duration = new Date((now || Date.now()) + Number(duration) * 60 * 1000);

    this.state = { duration };
  }

  anhour = 60 * 60;
  amin = 60;

  componentDidMount = () => {
    let { duration } = this.state;

    this.set_interval = setInterval(() => {
      let now = new Date();

      let ntime = now.getTime();
      let dtime = duration.getTime();

      let diff = parseInt((dtime - ntime) / 1000);

      let hours = parseInt(diff / this.anhour);
      diff -= this.anhour * hours;

      let minutes = parseInt(diff / this.amin);
      diff -= this.amin * minutes;

      this.setState({ hours, minutes, seconds: diff });
    }, 1000);
  };

  componentWillUnmount = () => clearInterval(this.set_interval);

  render() {
    let { hours, minutes, seconds } = this.state;

    if (!hours && !minutes && !seconds) return;

    return (
      <span>
        {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </span>
    );
  }
}

export default Exam_countdown;
