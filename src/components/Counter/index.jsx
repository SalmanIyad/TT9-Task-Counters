import React, { Component } from 'react';
import './style.css';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  handleIncrease = () => {
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
    this.setState(
      (prevState) => ({
        counter: prevState.counter - 1,
      }),
      () => {
        this.props.onChange(-1);
      }
    );
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
