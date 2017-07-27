import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './Ant.css'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class Side extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}>
        <div className="logo">Side组件</div>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="pie-chart"/>
              <span>Option 1</span>
            </Link>

          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/key2">
              <Icon type="desktop"/>
              <span>Option 2</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={< span > <Icon type="user"/> < span > User </span></span >}>
            <Menu.Item key="3">
              <Link to="/key3">Tom
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/key4">
                Bill
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/key5">Alex
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={< span > <Icon type="team"/> < span > Team </span></span >}>
            <Menu.Item key="6">
              <Link to="/key6">
                Team 1
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/key7">
                Team 2
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="8">
            <Link to="/key8">
              <Icon type="file"/>
              <span>File</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}