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
    if (this.state.strike >= 2) {
      this.setState({ ...this.state, strike: 0, ball: 0 });
    }
  };

  addBall = () => {
    this.setState({ ...this.state, ball: this.state.ball + 1 });
    if (this.state.ball >= 3) {
      this.setState({ ...this.state, strike: 0, ball: 0 });
    }
  };

  addFoul = () => {
    if (this.state.strike <= 1) {
      this.setState({ ...this.state, strike: this.state.strike + 1 });
    }
  };

  addHit = () => {
    this.setState({ ...this.state, strike: 0, ball: 0 });
  };

  render() {
    const { ball, strike } = this.state;
    return (
      <>
        <div className="display">
          <h2>balls {ball}</h2>
          <h2>strikes {strike}</h2>
        </div>
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
      </>
    );
  }
}

export default Dashboard;
