import React, { Component } from "react";

class GetTime extends Component {
  state = {
    date: new Date(),
  };

  callMe() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
        {this.callMe()}
      </div>
    );
  }
}

export default GetTime;
