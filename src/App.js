import React from 'react';
import PropTypes from "prop-types";
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log('add');
  }
  minus = () => {
    console.log('minus');
  }

  render() {
    return (
      <div>
        <hi>The number is : {this.state.count}</hi><br />
        <button onClick={this.add()}>Add</button>
        <button onClick={this.minus()}>Minus</button>
      </div>
    );
  }
}

export default App;
