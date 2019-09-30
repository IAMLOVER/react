import React, { Component, Fragment } from "react";
import "./App.css";

import Test from './test';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [1, 2, 3]
    };
  }
  render() {
    return (
      <Fragment>
        {/* 注释 */}
        <div>
          <label htmlFor="id">列表</label>
          <input
            id="id"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input = input}}
          ></input>
          <button onClick={this.addLists.bind(this)}>添加类</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return ( 
                <div key={index + item}>
                  <Test content={item} index={index} deleteItem={this.deleteItem.bind(this)}/>
                </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  inputChange(e) {
    this.setState({
      inputValue: this.input.value - 0
    });
  }
  addLists() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  deleteItem(index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default App;
