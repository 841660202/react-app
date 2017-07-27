import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import DangerButton from './DangerButton';
import {hashHistory} from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import RouteMap from './router/RouterMap';
import ScrollToTop from './Component/ScrollToTop';
import RecursivePatch from './containers/Home/RecursivePatch';
import SideBar from './containers/Home/SideBar';
import AnimationRouter from './containers/Home/AnimationRouter';


import AntButton from './containers/Ant/Ant';

class App extends Component {
  render() {
    return (

      <div style={{height:'100%',width:'100%'}}>
        <AntButton></AntButton>
        {/*<h2 className="red">嵌套路由</h2>

        <RouteMap/>
        ----------------------
        <h2 className="red">递归路由</h2>
        <RecursivePatch/>
        <h2 className="red">侧边栏路由</h2>
        <SideBar/>
        <h2 className="red">动画路由</h2>
        <AnimationRouter/>*/}
        {/*<ScrollToTop/>*/}
      </div>

    );
  }

}
export default App;
