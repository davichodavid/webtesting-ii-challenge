import React from "react";

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  render() {
    const { balls, strikes } = this.state;
    return (
      <div className="display">
        <h2>{balls}</h2>
        <h2>{strikes}</h2>
      </div>
    );
  }
}

export default Display;
