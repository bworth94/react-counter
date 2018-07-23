import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {


  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  }

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  }

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  }
  plusFive = () => {
    this.props.dispatch({
      type: 'PlusFive'
    });
  }
  minusTen = () => {
    this.props.dispatch({
      type: 'MinusTen'
    });
  }
  

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.minusTen}>-10</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.plusFive}>+5</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);