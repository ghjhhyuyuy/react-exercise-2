/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Item.css';
import Button from './Button';
class Item extends Component {
  getChildrenMsg = (result, msg) => {
    // console.log(result, msg)
    // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
    this.props.getChildrenMsg(result, msg);
  };
  render() {
    return (
      <div className="item">
        <p className="itemName">{this.props.item.name}</p>
        <img
          className="img"
          // eslint-disable-next-line no-undef
          src={require('../../assets/product_image_placeholder.png')}
          alt=""
        ></img>
        <br />
        <span>{this.props.item.price}</span>
        <Button num={this.props.num} getChildrenMsg={this.getChildrenMsg} />
      </div>
    );
  }
}

export default Item;
