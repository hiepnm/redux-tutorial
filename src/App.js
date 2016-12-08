import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  constructor(props){
    super(props);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.counter = 0;
  }
  addCounter() {
    this.counter++;
    const el = document.createElement("div");
    el.id="ct"+this.counter;
    const app = document.getElementById("app");
    app.insertBefore(el, document.getElementById("counter"));
    ReactDOM.render(<Counter />, document.getElementById("ct"+this.counter));
    console.log("Add Counter");
  }
  removeCounter() {
    if (this.counter <= 0) {
      return;
    }
    ReactDOM.unmountComponentAtNode(document.getElementById("ct" + this.counter));
    this.counter--;
  }
  render() {
    return (
      <div id="app">
        <div id="counter"></div>
        <input type="button" value="Add Counter" onClick={this.addCounter} />
        <input type="button" value="Remove Counter" onClick={this.removeCounter} />
      </div>
    )
  }
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={value:0};
  }
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <input type="button" value="+" onClick={()=>{this.setState({value:this.state.value+1})}} />
        <input type="button" value="-" onClick={()=>{this.setState({value:this.state.value-1})}} />

      </div>
    );
  }
}

export default App;
