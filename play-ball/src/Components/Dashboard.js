import React from "react";

class Dashboard extends React.Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  addStrike = () => {
    this.setState({ ...this.state, strike: this.state.strike + 1 });
  };

  addBall = () => {
    this.setState({ ...this.state, ball: this.state.strike + 1 });
  };

  addFoul = () => {
    this.setState({ ...this.state, foul: this.state.strike + 1 });
  };

  addHit = () => {
    this.setState({ ...this.state, hit: this.state.strike + 1 });
  };

  render() {
    return (
      <div>
        <button name="strike" onClick={this.addStrike}>
          strike
        </button>
        <button name="ball" onClick={this.addBall}>
          ball
        </button>
        <button name="foul" onClick={this.addFoul}>
          foul
        </button>
        <button name="hit" onClick={this.addHit}>
          hit
        </button>
      </div>
    );
  }
}

export default Dashboard;
