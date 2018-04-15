import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counterActions';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row mt-5">
            <div className="col-xs-12">
              <h1>Count: {this.props.count}</h1>
              <button 
                className="btn btn-success"
                onClick={this.props.increment}
              > + </button>
              {' '}
              <button 
              className="btn btn-danger"
              onClick={this.props.decrement}
              > - </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count
});

export default connect(mapStateToProps, {
  increment, decrement
})(App);
