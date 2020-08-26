/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './List.css';
import Item from './Item';
class List extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch('http://localhost:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      // eslint-disable-next-line no-unused-vars
      .catch(function (e) {
        console.log('Oops, error');
      });
  }
  getChildrenMsg = (result, msg) => {
    // console.log(result, msg)
    // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
    this.props.getChildrenMsg(result, msg);
  };
  render() {
    var iPhone = this.state.data.filter((item) => item.category === 'iPhone');
    var HUAWEI = this.state.data.filter((item) => item.category === 'HUAWEI');
    return (
      <main className="app">
        <h2>iPhone</h2>
        {iPhone.map((item) => (
          <Item
            item={item}
            key={item.name}
            num={this.props.num}
            getChildrenMsg={this.getChildrenMsg}
          />
        ))}
        <h2>HUAWEI</h2>
        {HUAWEI.map((item) => (
          <Item
            item={item}
            key={item.name}
            num={this.props.num}
            getChildrenMsg={this.getChildrenMsg}
          />
        ))}
      </main>
    );
  }
}

export default List;
