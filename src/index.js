
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      value1: 2,
      value2: 3,
      value3: NaN
    }
  }

  mytxtChange = (e) => {
    this.setState({ value1: e.target.value });
  }
  mytxtChange1 = (e) => {
    this.setState({ value2: e.target.value });
  }

  sum = () => {
    var a = this.state.value1;
    var b = this.state.value2;
    var c = (+a) + (+b);

    this.setState({ value3: c });
  }
  render() {
    var myStyle = {
      fontSize: 30,
      color: '#f0f0f0f'
    }
    return (

      <div>

        <input type="number" value={this.state.value1} onChange={this.mytxtChange} /><br /><br />
        <input type="number" value={this.state.value2} onChange={this.mytxtChange1} /><br /> <br />
        <button onClick={this.sum}>ADD</button>
        <h1 style={myStyle} > {this.state.value3} </h1>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

