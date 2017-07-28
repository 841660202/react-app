import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index';

import './Ant.css'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class Side extends React.Component {
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
        onCollapse={this.onCollapse}
        >
        <div className="logo">Side组件</div>
        <Menu 
          theme="dark"
          defaultSelectedKeys={this.props.SelectedKeys} 
          mode="inline"
          defaultOpenKeys={this.props.subMenuOpen}>
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
const mapStateToProps = (state) => {
  console.log('routerPathName : mapStateToProps,state is ',state);
  console.info(typeof  state.stores.routerPathName)
    return { SelectedKeys: state.stores.routerPathName.arr,
            collapsed:state.stores.routerPathName.collapsed,
            subMenuOpen:state.stores.routerPathName.subMenuOpen,
           }
}
const mapDispatchToProps = (dispatch) => {
  //console.log('mapDispatchToProps');
    return {
        actions: bindActionCreators(actions, dispatch),//将行为与dispatch 绑定
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Side)