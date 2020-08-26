/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
  changeNum = () => {
    let num = this.props.num + 1;
    console.log(num);
    this.props.getChildrenMsg(this, num);
  };
  render() {
    return <button onClick={this.changeNum}>add to cart</button>;
  }
}
export default Button;
