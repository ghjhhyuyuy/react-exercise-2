/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Store</h1>
        <div className="rightDiv">
          <ShoppingCartOutlined style={{ color: 'white' }} />
          <Badge count={this.props.num} className="italic" />
        </div>
      </header>
    );
  }
}

export default Header;
