import React from 'react';
import PropTypes from "prop-types";
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  }
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  componentDidMount() {
    console.log('componentDidMount rendered');
  }

  componentDidUpdate() {
    console.log("componentDidUpdate update");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount unmount");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <hi>The number is : {this.state.count}</hi><br />
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
