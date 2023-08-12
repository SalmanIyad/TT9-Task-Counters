import React, { Component } from 'react';
import './style.css';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  handleIncrease = () => {
    console.log(this.state.counter + " - handleIncrease");
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => {
        this.props.onChange(1);
      }
    );
  };

  handleDecrease = () => {
    console.log(this.state.counter + " - handleDecrease");
    if (this.state.counter >= 1){  // to prevent the counter of decrease under 0.
      this.setState(
        (prevState) => ({
          counter: prevState.counter - 1,
        }),
        () => {
          this.props.onChange(-1);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <button className="counter-element btn increment" onClick={this.handleIncrease}>
          +
        </button>
        <span className="counter-element span">{this.state.counter}</span>
        <button className="counter-element btn decrement" onClick={this.handleDecrease}>
          -
        </button>
      </div>
    );
  }
}
