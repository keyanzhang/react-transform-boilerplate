import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  constructor(...args) {
    super(...args);
    this.interval = setInterval(() => this.tick(), 1000);
  }

  state = { counter: 0 };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
  }

  render() {
    return (
      <h1 className={this.props.className}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}
