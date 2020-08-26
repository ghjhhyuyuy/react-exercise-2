import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import List from './components/list/List';
class App extends Component {
  state = {
    num: 0,
  };
  getChildrenMsg = (result, msg) => {
    // console.log(result, msg)
    // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
    this.setState({
      num: msg,
    });
  };
  render() {
    return (
      <main className="app">
        <Header num={this.state.num} />
        <List num={this.state.num} getChildrenMsg={this.getChildrenMsg} />
      </main>
    );
  }
}

export default App;
