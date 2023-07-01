import React, { Component } from 'react';
import Counter from '../../components/Counter';
import './style.css';

export default class CountersPage extends Component {
  state = {
    total: 0,
  };

  handleCounterChange = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value,
    }));
  };

  render() {
    return (
      <div className="counterDiv">
        <Counter onChange={this.handleCounterChange} />
        <Counter onChange={this.handleCounterChange} />
        <Counter onChange={this.handleCounterChange} />
        <h2 className="total">Total: {this.state.total}</h2>
      </div>
    );
  }
}
